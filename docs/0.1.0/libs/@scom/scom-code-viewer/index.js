var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-code-viewer/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
});
define("@scom/scom-code-viewer/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.treeViewStyles = exports.overflowStyle = exports.customMdStyles = void 0;
    exports.customMdStyles = components_1.Styles.style({
        position: 'fixed!important',
        $nest: {
            '> .modal-wrapper': {
                left: '0px !important',
                $nest: {
                    '> .modal > .i-modal_header': {
                        height: 30,
                        flexShrink: 0,
                    },
                    '> .modal > .i-modal_body': {
                        overflow: 'hidden',
                        padding: '0px',
                        width: '100%',
                        height: 'calc(100% - 30px)',
                        position: 'relative'
                    },
                }
            }
        }
    });
    exports.overflowStyle = components_1.Styles.style({
        overflow: 'hidden'
    });
    exports.treeViewStyles = components_1.Styles.style({
        $nest: {
            '> i-tree-node > .i-tree-node_content': {
                padding: '0.25rem 0.75rem',
            }
        }
    });
});
define("@scom/scom-code-viewer/editor.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-code-viewer/index.css.ts"], function (require, exports, components_2, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Editor = void 0;
    const Theme = components_2.Styles.Theme.ThemeVars;
    let Editor = class Editor extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this._files = {};
            this.renderedMap = {};
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        set file(value) {
            this._data.file = value;
        }
        get file() {
            return this._data.file;
        }
        onActiveChange(target) {
            const activeNode = target.activeItem;
            const tag = activeNode.tag;
            if (tag) {
                this.scomDesigner.setValue({ file: { ...tag, content: this._files[tag.path]?.content || '' } });
            }
        }
        addFileNode(value) {
            let { path, content, name } = value;
            if (path.endsWith('/'))
                path = path.slice(0, -1);
            if (this.renderedMap[path])
                return;
            this._files[path] = { content, path };
            this.renderedMap[path] = true;
            const fileName = name || path.split('/').pop();
            const newNode = this.treeView.add(undefined, fileName);
            newNode.tag = {
                name: fileName,
                path,
                content
            };
            return newNode;
        }
        async setData(value) {
            this._data = value;
            this.clear();
            await this.renderUI();
        }
        async renderUI() {
            const configurator = this.scomDesigner.getConfigurators().find(c => c.target === 'Builders');
            if (configurator?.setTag) {
                configurator.setTag(this.scomDesigner.tag);
            }
            await this.scomDesigner.setValue({
                file: this.file
            });
            if (this.file) {
                const node = this.addFileNode(this.file);
                this.treeView.activeItem = node;
            }
        }
        handleTogglePreview(isPreview) {
            this.pnlSidebar.visible = !isPreview;
            this.gridLayout.templateColumns = isPreview ? ['1fr'] : ['15rem', '1fr'];
            if (typeof this.onTogglePreview === 'function')
                this.onTogglePreview(isPreview);
        }
        async handleImportFile(fileName, isPackage) {
            if (isPackage)
                return;
            const notFound = '404 not found!';
            const filePath = this.scomDesigner.file?.path || this.file.path;
            const orgFileName = fileName;
            let parentFolder = filePath.substring(0, filePath.lastIndexOf('/'));
            const lastIndex = fileName.lastIndexOf('/');
            const checkedParent = lastIndex > -1 ? fileName.substring(0, lastIndex) : '';
            const index = checkedParent ? parentFolder.indexOf(checkedParent) : -1;
            if (index > -1) {
                fileName = fileName.replace(checkedParent, '');
                if (fileName.startsWith('/'))
                    fileName = fileName.slice(1);
            }
            if (parentFolder && fileName.startsWith(parentFolder))
                fileName = fileName.substring(parentFolder.length + 1);
            const fullPath = fileName.indexOf('/') < 0 ? `${parentFolder}/${fileName}` : fileName;
            const result = this.getFileContent(fullPath, orgFileName);
            if (result)
                return result;
            let ext = fileName.includes('model') || fileName.includes('.css') ? '.ts' : '.tsx';
            let newFilePath = parentFolder + '/' + fileName + ext;
            if (typeof this.onFetchData === 'function') {
                let text = await this.onFetchData(newFilePath);
                if (text === notFound) {
                    ext = ext === '.tsx' ? '.ts' : '.tsx';
                    newFilePath = parentFolder + '/' + fileName + ext;
                    text = await this.onFetchData(newFilePath);
                }
                if (!isPackage && text !== notFound)
                    this.addFileNode({ content: text, path: newFilePath, name: `${fileName}${ext}` });
                if (text) {
                    return {
                        fileName: `${orgFileName}${ext}`,
                        content: text === notFound ? '' : text,
                    };
                }
            }
        }
        getFileContent(path, name) {
            const keys = Object.keys(this._files);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (key.endsWith(`${path}.ts`) || key.endsWith(`${path}.tsx`)) {
                    const ext = key.split('.').pop();
                    return {
                        fileName: `${name}.${ext}`,
                        content: this._files[key].content
                    };
                }
            }
            return null;
        }
        handleChange(target) {
            const path = target.file?.path;
            if (path) {
                if (this._files[path]) {
                    this._files[path].content = target.value;
                }
                else {
                    this._files[path] = { content: target.value, path };
                }
            }
        }
        clear() {
            this.reset();
            this.scomDesigner.clear();
        }
        reset() {
            this.treeView.clear();
            this._files = {};
            this.renderedMap = {};
        }
        init() {
            super.init();
            this.onFetchData = this.getAttribute('onFetchData', true) || this.onFetchData;
            this.onTogglePreview = this.getAttribute('onTogglePreview', true) || this.onTogglePreview;
            this.onClose = this.getAttribute('onClose', true) || this.onClose;
            const file = this.getAttribute('file', true);
            if (file)
                this.setData({ file });
        }
        render() {
            return (this.$render("i-panel", { width: '100%', height: '100%', overflow: 'hidden' },
                this.$render("i-grid-layout", { id: "gridLayout", height: '100%', width: '100%', overflow: 'hidden', position: 'relative', templateColumns: ['15rem', '1fr'] },
                    this.$render("i-vstack", { id: "pnlSidebar", height: '100%', width: '15rem', overflow: { y: 'auto', x: 'hidden' }, border: { right: { width: '1px', style: 'solid', color: Theme.divider } } },
                        this.$render("i-tree-view", { id: "treeView", stack: { grow: '1' }, maxHeight: '100%', overflow: 'auto', class: index_css_1.treeViewStyles, onActiveChange: this.onActiveChange })),
                    this.$render("i-panel", { width: '100%', height: '100%', overflow: { y: 'auto' } },
                        this.$render("i-scom-designer", { id: "scomDesigner", onImportFile: this.handleImportFile, onTogglePreview: this.handleTogglePreview, width: "100%", height: "100%", onChange: this.handleChange })))));
        }
    };
    Editor = __decorate([
        (0, components_2.customElements)('i-scom-code-viewer--editor')
    ], Editor);
    exports.Editor = Editor;
});
define("@scom/scom-code-viewer/translations.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-code-viewer/translations.json.ts'/> 
    exports.default = {
        "en": {
            "do_you_want_to_close_the_modal": "Do you want to close the modal?",
            "warning": "Warning"
        },
        "zh-hant": {
            "do_you_want_to_close_the_modal": "您確定要關閉此對話框嗎？",
            "warning": "警告"
        },
        "vi": {
            "do_you_want_to_close_the_modal": "Bạn có muốn đóng cửa sổ này không?",
            "warning": "Cảnh báo"
        }
    };
});
define("@scom/scom-code-viewer", ["require", "exports", "@ijstech/components", "@scom/scom-code-viewer/editor.tsx", "@scom/scom-code-viewer/index.css.ts", "@scom/scom-code-viewer/translations.json.ts"], function (require, exports, components_3, editor_1, index_css_2, translations_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScomCodeViewer = void 0;
    const Theme = components_3.Styles.Theme.ThemeVars;
    const path = components_3.application.currentModuleDir;
    const DEFAULT_LANGUAGE = 'javascript';
    const DEFAULT_THEME = 'dark';
    let ScomCodeViewer = class ScomCodeViewer extends components_3.Module {
        constructor() {
            super(...arguments);
            this._data = {
                code: '',
                language: DEFAULT_LANGUAGE
            };
            this._theme = DEFAULT_THEME;
            this.fileData = { content: '', path: 'index.tsx' };
            this._fullPath = '';
            this.tag = {};
        }
        get code() {
            return this.revertHtmlTags(this._data.code || '');
        }
        set code(value) {
            this._data.code = value || '';
        }
        get language() {
            return this._data.language || DEFAULT_LANGUAGE;
        }
        set language(value) {
            this._data.language = value || DEFAULT_LANGUAGE;
        }
        get entryPoint() {
            return this._data.entryPoint || '';
        }
        set entryPoint(value) {
            this._data.entryPoint = value || '';
        }
        get fullCode() {
            return this.fileData?.content || this.code;
        }
        get isButtonsShown() {
            return this._data.isButtonsShown ?? true;
        }
        set isButtonsShown(value) {
            this._data.isButtonsShown = value ?? true;
        }
        get theme() {
            return this._theme || DEFAULT_THEME;
        }
        set theme(value) {
            this._theme = value || DEFAULT_THEME;
            if (this._theme === 'light') {
                this.removeCSS('hljs-dark');
                this.addCSS(`${path}/lib/default.min.css`, 'hljs-default');
            }
            else {
                this.removeCSS('hljs-default');
                this.addCSS(`${path}/lib/dark.min.css`, 'hljs-dark');
            }
        }
        get currentLocale() {
            return this._data.currentLocale;
        }
        set currentLocale(value) {
            this._data.currentLocale = value;
        }
        get defaultLocale() {
            return this._data.defaultLocale;
        }
        set defaultLocale(value) {
            this._data.defaultLocale = value;
        }
        async setData(value) {
            const code = value.code;
            if (code.startsWith('`') && code.endsWith('`')) {
                this.entryPoint = value?.entryPoint || '';
                this.isButtonsShown = value?.isButtonsShown ?? true;
                const regex = /```(\w+)?(\((.+?)\))?[\s\n]([\s\S]+)[\s\n]```/g;
                const matches = regex.exec(code);
                const path = matches?.[3] || '';
                const mainCode = matches?.[4] || '';
                this.code = mainCode;
                let language = matches?.[1] || DEFAULT_LANGUAGE;
                if (language) {
                    language = `${language}${path ? `(${path})` : ''}`;
                }
                this.language = language;
                this._fullPath = path;
                await this.fetchContent(path);
            }
            else {
                try {
                    if (value.code) {
                        value.code = atob(value.code);
                    }
                }
                catch { }
                this._data = value;
            }
            await this.renderUI();
        }
        async renderUI() {
            this.pnlButtons.visible = this.isButtonsShown;
            if (!this.hljs) {
                try {
                    const themeVar = this._theme || document.body.style.getPropertyValue('--theme') || DEFAULT_THEME;
                    this.theme = themeVar;
                    this.hljs = await this.initLibs();
                }
                catch { }
            }
            this.pnlViewer.innerHTML = '';
            const pre = document.createElement('pre');
            if (this.code.startsWith('<code')) {
                const codeRegex = new RegExp(/(<code(\s*class=(\"language-[^>|<]*\"))?>)(.*?)(<\/code>)/gis);
                const matches = codeRegex.exec(this.code);
                const innerText = matches?.[4] || this.code;
                await this.getFullCode(matches?.[3]);
                const codeEl = document.createElement('code');
                codeEl.textContent = innerText;
                pre.appendChild(codeEl);
                codeEl.setAttribute('data-language', this.language);
            }
            else {
                const codeEl = document.createElement('code');
                codeEl.textContent = this.code;
                pre.appendChild(codeEl);
                codeEl.setAttribute('data-language', this.language);
            }
            this.pnlViewer.appendChild(pre);
            await this.sleep(200);
            const codeEl = pre.querySelector('code');
            if (codeEl) {
                this.hljs.highlightBlock(codeEl);
                const lg = this.language.split('(')?.[0] || '';
                if (lg)
                    codeEl.classList.add(lg);
            }
            this.updateButtons(!!this._fullPath);
        }
        revertHtmlTags(str) {
            return (str || '').replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'");
        }
        ;
        sleep(time) {
            return new Promise((res, rej) => {
                setTimeout(res, time);
            });
        }
        async getFullCode(code) {
            if (!code)
                return;
            const lgRegex = new RegExp(/language-(.*?) .*$/gi);
            const lg = code.replace(lgRegex, (_, lg) => lg);
            this.language = lg;
            const filePath = lg.substr(lg.indexOf('(') + 1, lg.indexOf(')') - lg.indexOf('(') - 1);
            this._fullPath = filePath;
            await this.fetchContent(filePath);
        }
        async fetchContent(filePath) {
            if (!filePath)
                return;
            const script = await this.fetchFile(filePath);
            this.fileData.content = script;
            this.fileData.path = filePath || 'index.tsx';
        }
        async fetchFile(filePath) {
            if (!filePath)
                return;
            if (filePath.startsWith('/'))
                filePath = filePath.slice(1);
            let path = `${this.entryPoint}/${filePath}`;
            let response = await components_3.application.fetch(path);
            if (response.status === 404 && this.currentLocale) {
                if (path.includes(this.currentLocale)) {
                    path = path.replace(this.currentLocale, this.defaultLocale);
                    response = await components_3.application.fetch(path);
                }
            }
            const script = await response.text();
            return script;
        }
        updateButtons(hasPath) {
            this.btnEdit.visible = hasPath;
            this.btnCopy.border = hasPath ? { radius: '0 6px 6px 0', style: 'none', width: '0px' } : { radius: '6px', style: 'none', width: '0px' };
        }
        async initLibs() {
            return new Promise((resolve, reject) => {
                components_3.RequireJS.config({
                    paths: {
                        hljs: `${path}/lib/highlight.min.js`
                    }
                });
                components_3.RequireJS.require(['hljs'], function (hljs) {
                    return resolve(hljs);
                });
            });
        }
        addCSS(href, name) {
            const css = document.head.querySelector(`[name="${name}"]`);
            if (css)
                return;
            let link = document.createElement('link');
            link.setAttribute('type', 'text/css');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('name', name);
            link.href = href;
            document.head.append(link);
        }
        removeCSS(name) {
            const css = document.head.querySelector(`[name="${name}"]`);
            if (css)
                css.remove();
        }
        async onCopy(target, event) {
            event.stopPropagation();
            const code = this.querySelector('code')?.innerText || '';
            if (!code)
                return;
            navigator.clipboard.writeText(code);
            target.innerText = 'Copied';
            setTimeout(() => (target.innerText = 'Copy'), 1000);
        }
        async onEdit() {
            let currentModal = null;
            if (!this.editorElm) {
                this.editorElm = await editor_1.Editor.create({
                    onFetchData: this.fetchFile.bind(this),
                    onTogglePreview: (isPreview) => {
                        const closeIcon = currentModal.querySelector('.i-modal_header');
                        if (isPreview) {
                            closeIcon.style.display = 'none';
                        }
                        else {
                            closeIcon.style.display = 'block';
                        }
                    }
                });
            }
            currentModal = this.editorElm.openModal({
                width: '100dvw',
                height: '100dvh',
                showBackdrop: false,
                popupPlacement: 'center',
                zIndex: 600,
                closeOnBackdropClick: false,
                closeIcon: { name: 'times', width: '1rem', height: '1rem', fill: Theme.text.primary, position: 'absolute', right: 16, top: 10, cursor: 'pointer' },
                padding: { top: 0, bottom: 0, left: 0, right: 0 },
                border: { radius: '0px', width: '0px', style: 'none' },
                overflow: 'hidden',
                class: index_css_2.customMdStyles,
                onClose: this.onClose.bind(this),
                onBeforeClose: this.onBeforeClose.bind(this),
                onOpen: this.onOpen.bind(this)
            });
        }
        async onOpen() {
            document.body.classList.add(index_css_2.overflowStyle);
            await this.editorElm.setData({
                file: { ...this.fileData }
            });
        }
        onClose() {
            this.editorElm.clear();
            document.body.classList.remove(index_css_2.overflowStyle);
        }
        onBeforeClose() {
            this.alertEl.showModal();
        }
        handleClose() {
            this.editorElm.closeModal();
        }
        init() {
            this.i18n.init({ ...translations_json_1.default });
            super.init();
            const code = this.getAttribute('code', true);
            const language = this.getAttribute('language', true);
            const entryPoint = this.getAttribute('entryPoint', true);
            const isButtonsShown = this.getAttribute('isButtonsShown', true);
            const defaultLocale = this.getAttribute('defaultLocale', true);
            const currentLocale = this.getAttribute('currentLocale', true);
            this._theme = this.getAttribute('theme', true);
            code && this.setData({ code, language, entryPoint, isButtonsShown, defaultLocale, currentLocale });
        }
        render() {
            return (this.$render("i-vstack", { width: '100%', background: { color: Theme.background.main }, border: { color: Theme.divider, width: '1px', style: 'solid', radius: '0.5rem' }, overflow: 'hidden' },
                this.$render("i-hstack", { id: "pnlButtons", horizontalAlignment: 'end', verticalAlignment: 'center', width: '100%', padding: { left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }, border: { bottom: { color: Theme.divider, width: '1px', style: 'solid' } } },
                    this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: 'center', height: '1.75rem', stack: { grow: '0', shrink: '0' }, border: { radius: 6 } },
                        this.$render("i-button", { id: "btnEdit", height: '100%', cursor: "pointer", stack: { shrink: '0' }, icon: { name: 'edit', width: '0.75rem', height: '0.75rem', fill: Theme.action.active }, background: { color: Theme.action.activeBackground }, tooltip: { content: 'Edit', placement: 'bottom' }, padding: { top: 0, bottom: 0, left: '0.75rem', right: '0.75rem' }, boxShadow: 'none', visible: false, border: { radius: '6px 0 0 6px', style: 'none', width: '0px', right: { width: '1px', style: 'solid', color: Theme.divider } }, onClick: this.onEdit }),
                        this.$render("i-button", { id: "btnCopy", height: '100%', cursor: "pointer", stack: { shrink: '0' }, icon: { name: 'copy', width: '0.75rem', height: '0.75rem', fill: Theme.action.active }, tooltip: { content: 'Copy', placement: 'bottom' }, background: { color: Theme.action.activeBackground }, padding: { top: 0, bottom: 0, left: '0.75rem', right: '0.75rem' }, boxShadow: 'none', border: { radius: '0 6px 6px 0', style: 'none', width: '0px' }, onClick: this.onCopy }))),
                this.$render("i-panel", { id: "pnlViewer", display: 'block', stack: { grow: '1', shrink: '1' }, width: '100%' }),
                this.$render("i-alert", { id: "alertEl", title: '$warning', content: '$do_you_want_to_close_the_modal', status: "confirm", onConfirm: this.handleClose })));
        }
    };
    ScomCodeViewer = __decorate([
        (0, components_3.customElements)('i-scom-code-viewer')
    ], ScomCodeViewer);
    exports.ScomCodeViewer = ScomCodeViewer;
});
