/// <amd-module name="@scom/scom-scbook/main.css.ts" />
declare module "@scom/scom-scbook/main.css.ts" { }
/// <amd-module name="@scom/scom-scbook/header.css.ts" />
declare module "@scom/scom-scbook/header.css.ts" { }
/// <amd-module name="@scom/scom-scbook/search.css.ts" />
declare module "@scom/scom-scbook/search.css.ts" { }
/// <amd-module name="@scom/scom-scbook/store/interfaces.ts" />
declare module "@scom/scom-scbook/store/interfaces.ts" {
    import { Markdown, Styles } from "@ijstech/components";
    interface ILocale {
        code: string;
        name: string;
    }
    interface IMultilingual {
        default: string;
        locales: ILocale[];
    }
    interface ITheme {
        default: Markdown['theme'];
        dark?: Styles.Theme.ITheme;
        light?: Styles.Theme.ITheme;
    }
    export { IMultilingual, ITheme, ILocale };
}
/// <amd-module name="@scom/scom-scbook/store/index.ts" />
declare module "@scom/scom-scbook/store/index.ts" {
    import { ILocale, IMultilingual } from "@scom/scom-scbook/store/interfaces.ts";
    const getMutilingual: () => IMultilingual;
    const setMutilingual: (value: IMultilingual) => void;
    const getDefaultLg: () => string;
    const setCurrentLanguage: (value: ILocale) => void;
    const getCurrentLg: () => ILocale;
    const getLanguagePath: () => string;
    export { getMutilingual, setMutilingual, setCurrentLanguage, getCurrentLg, getDefaultLg, getLanguagePath };
    export * from "@scom/scom-scbook/store/interfaces.ts";
}
/// <amd-module name="@scom/scom-scbook/search.tsx" />
declare module "@scom/scom-scbook/search.tsx" {
    import { Control, ControlElement } from '@ijstech/components';
    import "@scom/scom-scbook/search.css.ts";
    export interface SearchElement extends ControlElement {
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-scbook-search']: SearchElement;
            }
        }
    }
    export class Search extends Control {
        private wrapperElm;
        private inputElm;
        private dropdownElm;
        private suggestionsElm;
        private MiniSearch;
        private miniSearch;
        private isDropdownShown;
        private _keyword;
        private _baseUrl;
        get keyword(): string;
        set keyword(value: string);
        get baseUrl(): string;
        set baseUrl(url: string);
        buildIndex(documents: any[], fields: string[], storeFields?: string[]): void;
        search(keyword: string): any;
        autoSuggest(keyword: string): any;
        updatePath(slug: string): void;
        private renderSuggestion;
        private initMiniSearch;
        init(): Promise<void>;
        static create(options?: SearchElement, parent?: Control): Promise<Search>;
    }
}
/// <amd-module name="@scom/scom-scbook/event.ts" />
declare module "@scom/scom-scbook/event.ts" {
    export const enum EventId {
        scbookThemeChanged = "scbookThemeChanged",
        ScbookLangChanged = "scbookLangChanged"
    }
}
/// <amd-module name="@scom/scom-scbook/utils.ts" />
declare module "@scom/scom-scbook/utils.ts" {
    function stringToSlug(str: string): string;
    function convertPath(path: string): any;
    export { stringToSlug, convertPath };
}
/// <amd-module name="@scom/scom-scbook/header.tsx" />
declare module "@scom/scom-scbook/header.tsx" {
    import { ControlElement, Module, Container } from '@ijstech/components';
    import "@scom/scom-scbook/header.css.ts";
    import { IMultilingual } from "@scom/scom-scbook/store/index.ts";
    export { Search } from "@scom/scom-scbook/search.tsx";
    export interface DocsHeaderElement extends ControlElement {
        onClickEdit?: any;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-scbook-header']: DocsHeaderElement;
            }
        }
    }
    export class DocsHeader extends Module {
        private searchBar;
        private btnLight;
        private btnDark;
        private scbookMenu;
        private logoText;
        private pnlContainer;
        private pnlRight;
        private btnLang;
        private mdLang;
        private _menu;
        private imgLogo;
        private menuItem;
        private searchIndex;
        private _baseUrl;
        private _maxWidth;
        private _showSearch;
        private _theme;
        private _multilingual;
        private _currentLg;
        private $eventBus;
        private events;
        constructor(parent: Container, options: any);
        get menu(): any[];
        set menu(value: any[]);
        get baseUrl(): string;
        set baseUrl(url: string);
        get maxWidth(): number | string;
        set maxWidth(value: number | string);
        get showSearch(): boolean;
        set showSearch(value: boolean);
        get multilingual(): IMultilingual;
        set multilingual(value: IMultilingual);
        private loadSearchIndex;
        private onChangeTheme;
        private onLocaleChanged;
        onHide(): void;
        private updateLanguage;
        private renderLgComboBox;
        init(): Promise<void>;
        private registerEvents;
        checkLogoExists(entrypoint: string, logoPath: string): Promise<void>;
        loadFile(path: string): Promise<Response>;
        loadHeader(entrypoint: string, forceUpdate?: boolean): Promise<void>;
        private getFilePath;
        private toggleMenu;
        private toggleEditMode;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-scbook/navigator.css.ts" />
declare module "@scom/scom-scbook/navigator.css.ts" { }
/// <amd-module name="@scom/scom-scbook/navigator.tsx" />
declare module "@scom/scom-scbook/navigator.tsx" {
    import { Control, ControlElement, Module, TreeView, TreeNode } from '@ijstech/components';
    import "@scom/scom-scbook/navigator.css.ts";
    export interface DocsNavigatorElement extends ControlElement {
        onClose?: any;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-scbook-navigator']: DocsNavigatorElement;
            }
        }
    }
    export class DocsNavigator extends Module {
        private treeElm;
        private treeView;
        private _treeData;
        private isNavOpened;
        private _currentNode;
        private _baseUrl;
        constructor(parent?: Control, options?: any);
        get treeData(): any;
        set treeData(value: any);
        get baseUrl(): string;
        set baseUrl(url: string);
        handleActive(parent: TreeView, prevNode?: TreeNode): void;
        updatePath(slug: string): void;
        toggleNav(isNavOpened: boolean): void;
        renderTree(): Promise<void>;
        init(): Promise<void>;
        render(): any;
        get currentNode(): TreeNode | undefined;
    }
}
/// <amd-module name="@scom/scom-scbook/paging.css.ts" />
declare module "@scom/scom-scbook/paging.css.ts" { }
/// <amd-module name="@scom/scom-scbook/paging.tsx" />
declare module "@scom/scom-scbook/paging.tsx" {
    import { ControlElement, Module } from '@ijstech/components';
    import "@scom/scom-scbook/paging.css.ts";
    export interface DocsPagingElement extends ControlElement {
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-scbook-paging']: DocsPagingElement;
            }
        }
    }
    export class DocsPaging extends Module {
        private _flatTree;
        private _currentNode;
        private prevPage;
        private nextPage;
        private paging;
        private labelPrev;
        private labelNext;
        private prevTitle;
        private nextTitle;
        private _baseUrl;
        private events;
        private $eventBus;
        set flatTree(value: any);
        get flatTree(): any;
        set currentNode(value: any);
        get currentNode(): any;
        get baseUrl(): string;
        set baseUrl(url: string);
        updatePager(): void;
        nextPageOnClick(): void;
        prevPageOnClick(): void;
        scrollToTop(): void;
        updatePath(slug: string): void;
        onHide(): void;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-scbook/main.tsx" />
declare module "@scom/scom-scbook/main.tsx" {
    import { ControlElement, Markdown, Module, TreeNode } from "@ijstech/components";
    import "@scom/scom-scbook/main.css.ts";
    export { Search } from "@scom/scom-scbook/search.tsx";
    export { DocsHeader } from "@scom/scom-scbook/header.tsx";
    export { DocsNavigator } from "@scom/scom-scbook/navigator.tsx";
    export { DocsPaging } from "@scom/scom-scbook/paging.tsx";
    import { IMultilingual, ITheme } from "@scom/scom-scbook/store/index.ts";
    export interface SCBookElement extends ControlElement {
        entrypoint?: string;
        baseUrl?: string;
        showHeader?: boolean;
        showSearch?: boolean;
        themes?: ITheme;
        multilingual?: IMultilingual;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-scbook']: SCBookElement;
            }
        }
    }
    export class SCBook extends Module {
        private docsHeader;
        private docsNavigator;
        private docsPaging;
        private treeData;
        private flatTree;
        private rightNavAnchors;
        private pnlLoader;
        private mdViewer;
        private isPageLoading;
        private _baseUrl;
        private _entrypoint;
        private pnlWrapper;
        private pnlDocsWrapper;
        private _maxWidth;
        private _showHeader;
        private _showSearch;
        private _themes;
        private _theme;
        private _multilingual;
        private $eventBus;
        get entrypoint(): string;
        set entrypoint(value: string);
        get baseUrl(): string;
        set baseUrl(url: string);
        get maxWidth(): number | string;
        set maxWidth(value: number | string);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        get showSearch(): boolean;
        set showSearch(value: boolean);
        get themes(): ITheme;
        set themes(value: ITheme);
        get multilingual(): IMultilingual;
        set multilingual(value: IMultilingual);
        private updateThemes;
        private mergeTheme;
        get theme(): Markdown["theme"];
        set theme(value: Markdown["theme"]);
        init(): Promise<void>;
        private reloadPage;
        private checkLanguage;
        retryLoadFile(path: string): Promise<Response>;
        flattenTree(tree: Array<any>): any;
        processGitbook(content: string, filePath: string): Promise<string>;
        private resolvePath;
        activeNode(target: any, event?: Event): void;
        activeRightNodeOnScroll(): void;
        handlePopStateEvent(): Promise<void>;
        bindEvents(): void;
        unbindEvents(): void;
        onShow(): void;
        onHide(): void;
        loadPage(): Promise<void>;
        processMenu(menuText: string, trimSpace?: number, space?: number): Promise<TreeNode[]>;
        loadMenu(): Promise<unknown>;
        loadContent(file: string, slug: string): Promise<unknown>;
        loadRightNav(): void;
        sleep(time: number): Promise<unknown>;
        get currentNode(): any;
        get hash(): string;
        renderPnlDocsWrapper(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-scbook" />
declare module "@scom/scom-scbook" {
    export { SCBook } from "@scom/scom-scbook/main.tsx";
}
