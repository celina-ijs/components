/// <amd-module name="@scom/scom-code-viewer/interface.ts" />
declare module "@scom/scom-code-viewer/interface.ts" {
    export interface IFile {
        content: string;
        path: string;
        name?: string;
    }
}
/// <amd-module name="@scom/scom-code-viewer/index.css.ts" />
declare module "@scom/scom-code-viewer/index.css.ts" {
    export const customMdStyles: string;
    export const overflowStyle: string;
    export const treeViewStyles: string;
}
/// <amd-module name="@scom/scom-code-viewer/editor.tsx" />
declare module "@scom/scom-code-viewer/editor.tsx" {
    import { ControlElement, Module, Container } from '@ijstech/components';
    import { IFile } from "@scom/scom-code-viewer/interface.ts";
    type onFetchCallback = (path: string) => Promise<string>;
    type onToggleCallback = (isPreview: boolean) => void;
    interface EditorElement extends ControlElement {
        file?: IFile;
        onFetchData?: onFetchCallback;
        onTogglePreview?: onToggleCallback;
        onClose?: () => void;
    }
    interface IEditor {
        file?: IFile;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-code-viewer--editor']: EditorElement;
            }
        }
    }
    export class Editor extends Module {
        private scomDesigner;
        private pnlSidebar;
        private treeView;
        private gridLayout;
        private _data;
        private _files;
        private renderedMap;
        onFetchData: onFetchCallback;
        onTogglePreview: onToggleCallback;
        onClose: () => void;
        constructor(parent?: Container, options?: any);
        static create(options?: EditorElement, parent?: Container): Promise<Editor>;
        set file(value: IFile);
        get file(): IFile;
        private onActiveChange;
        private addFileNode;
        setData(value: IEditor): Promise<void>;
        private renderUI;
        private handleTogglePreview;
        private handleImportFile;
        private getFileContent;
        private handleChange;
        clear(): void;
        private reset;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-code-viewer/translations.json.ts" />
declare module "@scom/scom-code-viewer/translations.json.ts" {
    const _default: {
        en: {
            do_you_want_to_close_the_modal: string;
            warning: string;
        };
        "zh-hant": {
            do_you_want_to_close_the_modal: string;
            warning: string;
        };
        vi: {
            do_you_want_to_close_the_modal: string;
            warning: string;
        };
    };
    export default _default;
}
/// <amd-module name="@scom/scom-code-viewer" />
declare module "@scom/scom-code-viewer" {
    import { ControlElement, Module } from '@ijstech/components';
    type ThemeType = 'light' | 'dark';
    interface ScomCodeViewerElement extends ControlElement {
        code?: string;
        language?: string;
        entryPoint?: string;
        isButtonsShown?: boolean;
        theme?: ThemeType;
        defaultLocale?: string;
        currentLocale?: string;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-code-viewer']: ScomCodeViewerElement;
            }
        }
    }
    interface ICodeViewer {
        code?: string;
        language?: string;
        entryPoint?: string;
        isButtonsShown?: boolean;
        defaultLocale?: string;
        currentLocale?: string;
    }
    export class ScomCodeViewer extends Module {
        private pnlViewer;
        private editorElm;
        private hljs;
        private pnlButtons;
        private btnEdit;
        private btnCopy;
        private alertEl;
        private _data;
        private _theme;
        private fileData;
        private _fullPath;
        tag: any;
        get code(): string;
        set code(value: string);
        get language(): string;
        set language(value: string);
        get entryPoint(): string;
        set entryPoint(value: string);
        get fullCode(): string;
        get isButtonsShown(): boolean;
        set isButtonsShown(value: boolean);
        get theme(): ThemeType;
        set theme(value: ThemeType);
        get currentLocale(): string;
        set currentLocale(value: string);
        get defaultLocale(): string;
        set defaultLocale(value: string);
        setData(value: ICodeViewer): Promise<void>;
        private renderUI;
        private revertHtmlTags;
        private sleep;
        private getFullCode;
        private fetchContent;
        private fetchFile;
        private updateButtons;
        private initLibs;
        private addCSS;
        private removeCSS;
        private onCopy;
        private onEdit;
        private onOpen;
        private onClose;
        private onBeforeClose;
        private handleClose;
        init(): void;
        render(): any;
    }
}
