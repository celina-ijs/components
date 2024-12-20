var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("@scom/scom-designer/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleClass = exports.customScrollbar = exports.customTransition = exports.blockStyle = exports.customTabStyled = exports.customIconTabActiveStyled = exports.customIconTabStyled = exports.labelActiveStyled = exports.customLabelTabStyled = exports.blockItemHoverStyled = exports.iconButtonStyled = exports.rowDragOverActiveStyled = exports.rowItemActiveStyled = exports.rowItemHoverStyled = exports.hoverFullOpacity = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    exports.hoverFullOpacity = components_1.Styles.style({
        $nest: {
            '&:hover': {
                opacity: '1 !important',
                $nest: {
                    'i-icon': {
                        opacity: '1 !important'
                    }
                }
            }
        }
    });
    exports.rowItemHoverStyled = components_1.Styles.style({
        $nest: {
            '&:hover': {
                background: Theme.action.hoverBackground,
            }
        }
    });
    exports.rowItemActiveStyled = components_1.Styles.style({
        background: Theme.action.selectedBackground,
        opacity: 1,
        $nest: {
            '&:hover': {
                background: Theme.action.selectedBackground,
                cursor: 'default',
                $nest: {
                    'i-label': {
                        opacity: 1
                    }
                }
            }
        }
    });
    exports.rowDragOverActiveStyled = components_1.Styles.style({
        background: Theme.action.activeBackground,
        opacity: 1
    });
    exports.iconButtonStyled = components_1.Styles.style({
        fontSize: '0.75rem',
        justifyContent: 'start',
        padding: '4px 8px'
    });
    exports.blockItemHoverStyled = components_1.Styles.style({
        $nest: {
            '&:hover': {
                background: Theme.action.hoverBackground
            }
        }
    });
    exports.customLabelTabStyled = components_1.Styles.style({
        fontSize: '0.75rem',
        cursor: 'pointer',
        paddingBlock: '4px',
        textAlign: 'center',
        opacity: 0.8,
        $nest: {
            '&:hover': {
                background: Theme.background.main,
                opacity: 1
            }
        }
    });
    exports.labelActiveStyled = components_1.Styles.style({
        background: Theme.action.selectedBackground,
        opacity: 1,
        cursor: 'default !important',
        $nest: {
            '&:hover': {
                background: Theme.action.selectedBackground
            }
        }
    });
    exports.customIconTabStyled = components_1.Styles.style({
        cursor: 'pointer',
        background: Theme.action.hoverBackground,
        opacity: 0.8,
        $nest: {
            '&:hover': {
                background: Theme.action.selectedBackground,
                opacity: 1
            }
        }
    });
    exports.customIconTabActiveStyled = components_1.Styles.style({
        background: Theme.action.selectedBackground,
        $nest: {
            '&:hover': {
                background: Theme.action.selectedBackground,
                cursor: 'default'
            }
        }
    });
    exports.customTabStyled = components_1.Styles.style({
        flexDirection: 'column',
        $nest: {
            '.tabs-nav': {
                width: '100%'
            },
            '.tabs-nav .tab-item': {
                width: '100%'
            },
            '.tabs-nav .tab-item > i-icon': {
                margin: 'auto'
            },
            '.tabs-nav-wrap i-tab': {
                background: Theme.colors.secondary.main,
                border: `1px solid ${Theme.divider}`,
                width: '25%'
            },
            '.tabs-nav-wrap i-tab:not(.disabled).active': {
                background: Theme.colors.primary.main
            },
            '.tabs-nav-wrap i-tab.disabled': {
                opacity: 0.5,
                cursor: 'not-allowed'
            },
            '.tabs-content': {
                maxHeight: 'calc(100% - 40px)',
                overflow: 'auto'
            },
            "> .tabs-nav-wrap .tabs-nav": {
                borderBottom: `1px solid ${Theme.divider}`
            }
        }
    });
    exports.blockStyle = components_1.Styles.style({
        display: 'block',
        width: '100%',
        height: '100%'
    });
    exports.customTransition = components_1.Styles.style({
        transition: 'width 0.2s ease-in-out'
    });
    exports.customScrollbar = components_1.Styles.style({
        $nest: {
            '&::-webkit-scrollbar': {
                width: '0.5rem',
                height: '0.5rem'
            }
        }
    });
    exports.toggleClass = components_1.Styles.style({
        filter: 'contrast(0.5)',
    });
});
define("@scom/scom-designer/components/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    components_2.Styles.cssRule(".i-resizer", {
        position: "absolute",
        width: "6px",
        height: "6px",
        background: "#EEE",
        border: "0.9px solid #333",
        zIndex: 1000,
        $nest: {
            "&.tl": {
                cursor: "nw-resize",
                top: "0px",
                left: "0px",
            },
            "&.tm": {
                cursor: "n-resize",
                top: "0px",
                left: "50%",
                marginLeft: "-4px",
            },
            "&.tr": {
                cursor: "ne-resize",
                top: "0px",
                right: "0px",
            },
            "&.ml": {
                top: "50%",
                marginTop: "-4px",
                left: "0px",
                cursor: "w-resize",
            },
            "&.mr": {
                top: "50%",
                marginTop: "-4px",
                right: "0px",
                cursor: "e-resize",
            },
            "&.bl": {
                bottom: "0px",
                left: "0px",
                cursor: "sw-resize",
            },
            "&.bm": {
                bottom: "0px",
                left: "50%",
                marginLeft: "-4px",
                cursor: "s-resize",
            },
            "&.br": {
                bottom: "0px",
                right: "0px",
                cursor: "se-resize",
            },
        },
    });
    components_2.Styles.cssRule("body > .item-list", {
        fontFamily: components_2.Styles.Theme.ThemeVars.typography.fontFamily,
        fontSize: components_2.Styles.Theme.ThemeVars.typography.fontSize,
        color: Theme.text.primary,
        backgroundColor: Theme.background.modal,
        border: `1px solid ${Theme.divider}`,
        $nest: {
            ul: {
                $nest: {
                    "& > li.matched, & > li:hover": {
                        color: Theme.action.hover,
                        backgroundColor: Theme.action.hoverBackground,
                    },
                },
            },
        },
    });
});
define("@scom/scom-designer/helpers/store.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBreakpoint = exports.setBreakpoint = void 0;
    const state = {
        breakpoint: undefined
    };
    const setBreakpoint = (breakpoint) => {
        state.breakpoint = breakpoint;
    };
    exports.setBreakpoint = setBreakpoint;
    const getBreakpoint = () => {
        return state.breakpoint;
    };
    exports.getBreakpoint = getBreakpoint;
});
define("@scom/scom-designer/helpers/config.ts", ["require", "exports", "@ijstech/components", "@scom/scom-designer/helpers/store.ts"], function (require, exports, components_3, store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findMediaQueryCallback = exports.themesConfig = exports.ControlItemMapper = exports.ITEMS = exports.ITEM_PARENTS = exports.CONTAINERS = exports.getFont = exports.getMediaQuery = exports.getMediaQueryProps = exports.getBreakpointInfo = exports.GroupMetadata = exports.getDefaultMediaQuery = exports.getMediaQueries = exports.breakpointsMap = exports.previews = exports.breakpoints = void 0;
    const Theme = components_3.Styles.Theme.ThemeVars;
    const iconProps = { width: '1.5rem', height: '1.5rem', padding: { top: 6, left: 6, right: 6, bottom: 6 } };
    const breakpoints = [
        {
            tooltip: '$mobile',
            type: 'breakpoint',
            icon: { name: 'mobile-alt', ...iconProps },
            value: 0 /* BREAKPOINTS.MOBILE */
        },
        {
            tooltip: '$tablet',
            type: 'breakpoint',
            icon: { name: 'tablet-alt', ...iconProps },
            value: 1 /* BREAKPOINTS.TABLET */
        },
        // {
        //   tooltip: 'Laptop',
        //   type: 'breakpoint',
        //   icon: {name: 'laptop', ...iconProps},
        //   value: BREAKPOINTS.LAPTOP
        // },
        {
            tooltip: '$desktop',
            type: 'breakpoint',
            icon: { name: 'desktop', ...iconProps },
            value: 3 /* BREAKPOINTS.DESKTOP */
        },
        // {
        //   tooltip: 'Big Screen',
        //   type: 'breakpoint',
        //   icon: {name: 'tv', ...iconProps},
        //   value: BREAKPOINTS.BIG_SCREEN
        // }
    ];
    exports.breakpoints = breakpoints;
    const getBreakpointInfo = (index) => {
        const breakpoint = breakpoints[index];
        if (!breakpoint)
            return {};
        return {
            icon: breakpoint.icon.name,
            name: breakpoint.tooltip,
        };
    };
    exports.getBreakpointInfo = getBreakpointInfo;
    const breakpointsMap = {
        [0 /* BREAKPOINTS.MOBILE */]: {
            minWidth: '320px',
            maxWidth: '767px',
            properties: {}
        },
        [1 /* BREAKPOINTS.TABLET */]: {
            minWidth: '768px',
            maxWidth: '1024px',
            properties: {}
        },
        // [BREAKPOINTS.LAPTOP]: {
        //   minWidth: '1024px',
        //   maxWidth: '1439px',
        //   properties: {}
        // },
        [3 /* BREAKPOINTS.DESKTOP */]: {
            minWidth: '1025px',
            properties: {}
        }
    };
    exports.breakpointsMap = breakpointsMap;
    const previews = [
        {
            tooltip: '$draft_view',
            icon: { name: 'edit', ...iconProps },
            type: 'preview',
            value: 0 /* PREVIEWS.DRAFT */
        },
        {
            tooltip: '$web_preview',
            icon: { name: 'globe', ...iconProps },
            type: 'preview',
            value: 1 /* PREVIEWS.WEB */
        },
        // {
        //   tooltip: 'iOS Preview',
        //   icon: {
        //     image: {
        //       url: assets.fullPath('img/designer/IOS.svg'),
        //       ...iconProps
        //     }
        //   },
        //   type: 'preview',
        //   value: PREVIEWS.IOS
        // },
        // {
        //   tooltip: 'Android Preview',
        //   icon: {
        //     image: {
        //       url: assets.fullPath('img/designer/Android.svg'),
        //       ...iconProps
        //     }
        //   },
        //   type: 'preview',
        //   value: PREVIEWS.ANDROID,
        // }
    ];
    exports.previews = previews;
    const getMediaQueries = () => {
        return Object.values(breakpointsMap);
    };
    exports.getMediaQueries = getMediaQueries;
    const getDefaultMediaQuery = (breakpoint) => {
        const clonedBreakpointsMap = JSON.parse(JSON.stringify(breakpointsMap));
        return clonedBreakpointsMap[breakpoint] || {};
    };
    exports.getDefaultMediaQuery = getDefaultMediaQuery;
    const findMediaQueryCallback = (v, mediaQuery) => {
        return v && v.minWidth === mediaQuery.minWidth || (v.maxWidth && v.maxWidth === mediaQuery.maxWidth);
    };
    exports.findMediaQueryCallback = findMediaQueryCallback;
    const getMediaQuery = (mediaQueries) => {
        const breakpoint = (0, store_1.getBreakpoint)();
        const mediaQuery = getDefaultMediaQuery(breakpoint);
        if (Array.isArray(mediaQueries)) {
            const findedItem = (mediaQueries || []).find((v) => findMediaQueryCallback(v, mediaQuery));
            return findedItem || mediaQuery;
        }
        else {
            return mediaQuery;
        }
    };
    exports.getMediaQuery = getMediaQuery;
    const getMediaQueryProps = (mediaQueries) => {
        return getMediaQuery(mediaQueries)?.properties || {};
    };
    exports.getMediaQueryProps = getMediaQueryProps;
    const getFont = (value) => ({ size: '0.75rem', color: value ? Theme.text.primary : Theme.colors.success.main });
    exports.getFont = getFont;
    const GroupMetadata = {
        'Layout': {
            name: '$layout',
            tooltipText: '$the_layout_of_your_screen'
        },
        'Basic': {
            name: '$basic',
            tooltipText: '$the_most_simple__and_essential_components_to_build_a_screen'
        },
        'Fields': {
            name: '$fields',
            tooltipText: 'The content of your screen'
        }
    };
    exports.GroupMetadata = GroupMetadata;
    const ITEMS = ['i-accordion-item', 'i-tab', 'i-menu-item'];
    exports.ITEMS = ITEMS;
    const ITEM_PARENTS = [
        'i-accordion',
        'i-tabs',
        'i-menu',
        'i-menu-item'
    ];
    exports.ITEM_PARENTS = ITEM_PARENTS;
    const CONTAINERS = [
        ...ITEM_PARENTS,
        'i-tree-node',
        'i-tree-view',
        'i-stack',
        'i-panel',
        'i-grid-layout',
        'i-card-layout',
        'i-tab',
        'i-carousel-slider',
        'i-repeater',
        'i-accordion-item',
        'i-hstack',
        'i-vstack',
        'i-modal'
    ];
    exports.CONTAINERS = CONTAINERS;
    const ControlItemMapper = {
        'i-accordion': 'i-accordion-item',
        'i-tabs': 'i-tab',
        'i-menu': 'i-menu-item',
        'i-menu-item': 'i-menu-item',
        'i-tree-view': 'i-tree-node',
        'i-tree-node': 'i-tree-node'
    };
    exports.ControlItemMapper = ControlItemMapper;
    const themesConfig = {
        dark: {
            backgroundColor: '#26324b',
            fontColor: '#fff',
            wrapperBgColor: '#202020',
            actionBgColor: '#252525',
            actionFontColor: '#fff',
            secondaryColor: '#1d1d1d',
            inputBgColor: '#222222',
            inputFontColor: '#fff',
            paperBgColor: '#000',
            divider: '#374151',
            "selected": "rgb(101 161 180)",
            "selectedBackground": "rgb(63 137 161/.5)"
        },
        light: {
            backgroundColor: '#f5f5f5',
            fontColor: '#000000de',
            wrapperBgColor: '#fff',
            actionBgColor: 'rgba(255, 255, 255, 1.00)',
            actionFontColor: 'rgba(136, 153, 168, 1.00)',
            secondaryColor: 'rgba(245,247,249,1.00)',
            divider: "#d3dce4",
            "selected": "rgb(101 161 180)",
            "selectedBackground": "rgb(63 137 161/.12)"
        }
    };
    exports.themesConfig = themesConfig;
});
define("@scom/scom-designer/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const moduleDir = components_4.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    ;
    exports.default = {
        fullPath
    };
});
define("@scom/scom-designer/helpers/utils.ts", ["require", "exports", "@scom/scom-designer/assets.ts", "@scom/scom-designer/helpers/store.ts", "@ijstech/components"], function (require, exports, assets_1, store_2, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTranslationKey = exports.isNumber = exports.isSameValue = exports.parseNumberValue = exports.handleParse = exports.parsePropValue = exports.parseProps = exports.extractFileName = exports.getFileContent = exports.fontDecorations = exports.fontTransforms = exports.fontStyles = exports.borderStyles = exports.alignContentProps = exports.justifyProps = exports.getAlignProps = exports.backgroundOptions = void 0;
    const Theme = components_5.Styles.Theme.ThemeVars;
    exports.backgroundOptions = [
        {
            value: 'primary',
            label: 'Primary'
        },
        {
            value: 'secondary',
            label: 'Secondary'
        },
        {
            value: 'background',
            label: 'Background'
        }
    ];
    function getAlignProps(type) {
        const alignProps = [
            {
                tooltip: '$flex_start',
                value: 'start',
                type,
                icon: {
                    image: {
                        url: assets_1.default.fullPath('img/designer/layout/align-start.svg')
                    }
                }
            },
            {
                tooltip: '$center',
                value: 'center',
                type,
                icon: {
                    image: {
                        url: assets_1.default.fullPath('img/designer/layout/align-center.svg')
                    }
                }
            },
            {
                tooltip: '$flex_end',
                value: 'end',
                type,
                icon: {
                    image: {
                        url: assets_1.default.fullPath('img/designer/layout/align-start.svg')
                    }
                },
                rotate: 180
            },
            {
                tooltip: '$stretch',
                value: 'stretch',
                type,
                icon: {
                    image: {
                        url: assets_1.default.fullPath('img/designer/layout/align-stretch.svg')
                    }
                }
            },
            {
                tooltip: '$baseline',
                value: 'baseline',
                type,
                icon: {
                    image: {
                        url: assets_1.default.fullPath('img/designer/layout/align-base-line.svg')
                    }
                }
            }
        ];
        if (type === 'alignSelf') {
            alignProps.unshift({
                tooltip: '$auto',
                value: 'auto',
                type: 'alignSelf',
                icon: { name: 'times' }
            });
        }
        return alignProps;
    }
    exports.getAlignProps = getAlignProps;
    exports.justifyProps = [
        {
            tooltip: '$flex_start',
            value: 'start',
            type: 'justifyContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-start.svg')
                }
            }
        },
        {
            tooltip: '$center',
            value: 'center',
            type: 'justifyContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-center.svg')
                }
            },
        },
        {
            tooltip: '$flex_end',
            value: 'end',
            type: 'justifyContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-start.svg')
                }
            },
            rotate: 180
        },
        {
            tooltip: '$space_between',
            value: 'space-between',
            type: 'justifyContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-between.svg')
                }
            },
        },
        {
            tooltip: '$space_around',
            value: 'space-around',
            type: 'justifyContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-around.svg')
                }
            },
        },
        {
            tooltip: '$space_evenly',
            placement: 'left',
            value: 'space-evenly',
            type: 'justifyContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-evenly.svg')
                }
            }
        }
    ];
    exports.alignContentProps = [
        {
            tooltip: '$flex_start',
            value: 'start',
            type: 'alignContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/align-start.svg')
                }
            }
        },
        {
            tooltip: '$center',
            value: 'center',
            type: 'alignContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/align-center.svg')
                }
            },
        },
        {
            tooltip: '$flex_end',
            value: 'end',
            type: 'alignContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/align-start.svg')
                }
            },
            rotate: 180
        },
        {
            tooltip: '$space_between',
            value: 'space-between',
            type: 'alignContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-between.svg')
                }
            },
            rotate: 90
        },
        {
            tooltip: '$space_around',
            value: 'space-around',
            type: 'alignContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/justify-around.svg')
                }
            },
            rotate: 90
        },
        {
            tooltip: '$stretch',
            value: 'stretch',
            type: 'alignContent',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/layout/align-stretch.svg')
                }
            }
        }
    ];
    exports.borderStyles = [
        {
            tooltip: '$solid',
            value: 'solid',
            type: 'style',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/border/solid.svg')
                }
            }
        },
        {
            tooltip: '$dotted',
            value: 'dotted',
            type: 'style',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/border/dotted.svg')
                }
            }
        },
        {
            tooltip: '$dashed',
            value: 'dashed',
            type: 'style',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/border/dashed.svg')
                }
            }
        },
    ];
    exports.fontStyles = [
        {
            tooltip: '$normal',
            value: 'normal',
            type: 'style',
            icon: {
                name: 'remove-format'
            }
        },
        {
            tooltip: '$italic',
            value: 'italic',
            type: 'style',
            icon: {
                name: 'italic'
            }
        }
    ];
    exports.fontTransforms = [
        {
            tooltip: 'None',
            value: 'unset',
            type: 'transform',
            icon: {
                name: 'remove-format'
            }
        },
        {
            tooltip: '$capitalize',
            value: 'capitalize',
            type: 'transform',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/font/capitalize.svg')
                }
            }
        },
        {
            tooltip: '$lowercase',
            value: 'lowercase',
            type: 'transform',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/font/lowercase.svg')
                }
            }
        },
        {
            tooltip: '$uppercase',
            value: 'uppercase',
            type: 'transform',
            icon: {
                image: {
                    url: assets_1.default.fullPath('img/designer/font/uppercase.svg')
                }
            }
        }
    ];
    exports.fontDecorations = [
        {
            tooltip: 'None',
            value: 'none',
            type: 'textDecoration',
            icon: {
                name: 'remove-format'
            }
        },
        {
            tooltip: '$underline',
            value: 'underline',
            type: 'textDecoration',
            icon: {
                name: 'underline'
            }
        },
        {
            tooltip: '$line_through',
            value: 'line-through',
            type: 'textDecoration',
            icon: {
                name: 'strikethrough'
            }
        },
        {
            tooltip: '$overline',
            value: 'overline',
            type: 'textDecoration',
            icon: {
                name: 'underline'
            }
        }
    ];
    const getFileContent = async (url) => {
        let result = '';
        if (url) {
            const response = await fetch(url);
            try {
                if (response.ok) {
                    result = await response.text();
                }
            }
            catch (err) { }
        }
        return result;
    };
    exports.getFileContent = getFileContent;
    const extractFileName = (path) => {
        let items = path.split("/");
        return items[items.length - 1];
    };
    exports.extractFileName = extractFileName;
    const parseProps = (props, baseUrl = '') => {
        if (!props)
            return null;
        const breakpoint = (0, store_2.getBreakpoint)();
        let newProps = { ...(props || {}) };
        if (breakpoint !== undefined) {
            newProps.mediaQueries = newProps.mediaQueries || [];
            const mediaQueries = newProps.mediaQueries;
            if (typeof mediaQueries === 'string') {
                let value = mediaQueries;
                if (mediaQueries.startsWith('{') && mediaQueries.endsWith('}')) {
                    value = mediaQueries.substring(1, mediaQueries.length - 1);
                }
                try {
                    newProps.mediaQueries = JSON.parse(value);
                }
                catch { }
            }
            ;
        }
        const newObj = {};
        for (let key in newProps) {
            const value = newProps[key];
            newObj[key] = typeof value === "string" ? (0, exports.parsePropValue)(newProps[key], baseUrl) : value;
        }
        return newObj;
    };
    exports.parseProps = parseProps;
    const parsePropValue = (value, baseUrl) => {
        if (typeof value !== "string")
            return value;
        value = value.replace(/\s*([{|\[])\s*/g, '$1').replace(/\s*([}|\]])\s*/g, '$1');
        if (value.startsWith('{') && value.endsWith('}')) {
            value = value.substring(1, value.length - 1);
            if (value.startsWith('{') && value.endsWith('}')) {
                try {
                    return JSON.parse(value);
                }
                catch {
                    return (0, exports.handleParse)(value, baseUrl);
                }
            }
            else if (value.startsWith('[') && value.endsWith(']')) {
                try {
                    return JSON.parse(value);
                }
                catch {
                    return (0, exports.handleParse)(value, baseUrl);
                }
            }
            else {
                if (value === 'true' || value === 'false') {
                    value = value === 'true' ? true : false;
                }
                else if (!Number.isNaN(+value)) {
                    value = +value;
                }
                else if (value === 'null') {
                    value = null;
                }
                else if (value === 'undefined') {
                    value = undefined;
                }
                else if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                else if (value.startsWith("'") && value.endsWith("'")) {
                    value = value.substring(1, value.length - 1);
                }
            }
        }
        else if (value.startsWith('"') && value.endsWith('"')) {
            value = value.substring(1, value.length - 1);
        }
        else if (value.startsWith("'") && value.endsWith("'")) {
            value = value.substring(1, value.length - 1);
        }
        if (typeof value === 'string' && value?.startsWith('Theme.')) {
            value = getThemeValue(value);
        }
        return value;
    };
    exports.parsePropValue = parsePropValue;
    const handleParse = (value, baseUrl) => {
        try {
            const newValue = value
                .replace(/(['"`])?(?!HH:|mm:|https?:)\b([a-z0-9A-Z_]+)(['"`])?:/g, '"$2": ')
                .replace(/'/g, '"')
                .replace(/\<([^\>]*)\>/g, (match, p1) => {
                const innerText = p1.replace(/"/g, '\'');
                return `<${innerText}>`;
            })
                .replace(/:\s*(true|false|null|\d+)\s*(,|\})/g, ': $1$2')
                .replace(/(Theme\.[a-z0-9A-Z\.\[\]_]+)/, '"$1"')
                .replace(/([a-z0-9A-Z]*)\.fullPath\(("|'_)([^"|']*)("|'_)\)/g, '"$1.fullPath(\'$3\')"')
                .replace(/,\s+\}$/g, '}');
            const parsedData = JSON.parse(newValue, (key, value) => {
                if (typeof value === 'string' && value.startsWith('Theme')) {
                    return getThemeValue(value);
                }
                else if (typeof value === 'string' && value.includes('fullPath')) {
                    return getRealImageUrl(baseUrl, value);
                }
                return value;
            });
            return parsedData;
        }
        catch {
            return value;
        }
    };
    exports.handleParse = handleParse;
    const getThemeValue = (value) => {
        const parsedValue = value.split('.');
        let themeValue = Theme;
        for (let i = 1; i < parsedValue.length; i++) {
            themeValue = themeValue[parsedValue[i]];
        }
        return themeValue;
    };
    const getRealImageUrl = (baseUrl, value) => {
        if (typeof value === 'string') {
            const regex = /^([a-z0-9A-Z]*)\.fullPath\(('|")([^)]+)('|")\)/gi;
            const matches = regex.exec(value);
            if (matches) {
                value = matches[3];
                const imgURL = `${baseUrl}/assets/${value}`;
                return imgURL;
            }
        }
        return value;
    };
    const parseNumberValue = (value) => {
        let result = {
            value: undefined,
            unit: 'px'
        };
        if (typeof value === 'number') {
            result.value = Number.isInteger(value) ? value : value.toFixed(2);
        }
        else if (value === 'auto' || !value) {
            result.value = '';
        }
        else {
            const unit = value.replace(/^-?\d+(\.\d+)?/g, '');
            const numVal = +(value.replace(unit, ''));
            result.value = Number.isInteger(numVal) ? numVal : numVal.toFixed(2);
            result.unit = unit || 'px';
        }
        return result;
    };
    exports.parseNumberValue = parseNumberValue;
    const isSameValue = (defaultVal, value) => {
        const deepEqual = (a, b) => {
            if (Object.is(a, b))
                return true;
            if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null)
                return false;
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);
            if (keysA.length !== keysB.length) {
                return false;
            }
            for (const key of keysA) {
                if (!keysB.includes(key) || !deepEqual(a[key], b[key]))
                    return false;
            }
            return true;
        };
        if (Object.is(defaultVal, value))
            return true;
        if (typeof defaultVal === 'object' && typeof value === 'object') {
            return deepEqual(defaultVal, value);
        }
        return false;
    };
    exports.isSameValue = isSameValue;
    const isNumber = (value) => {
        return typeof value === 'number' || (value !== '' && !Number.isNaN(Number(value)));
    };
    exports.isNumber = isNumber;
    function getTranslationKey(text) {
        return text.replace(/\s/g, '_').toLowerCase();
    }
    exports.getTranslationKey = getTranslationKey;
});
define("@scom/scom-designer/languages/main.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-designer/languages/main.json.ts'/> 
    exports.default = {
        "en": {
            "add_components": "Add Components",
            "basic": "Basic",
            "bits": "Bits",
            "blocks": "Blocks",
            "code": "Code",
            "components_that_you_use_most_frequently": "Components that you use most frequently",
            "design": "Design",
            "fields": "Fields",
            "frequently_used": "Frequently Used",
            "layout": "Layout",
            "recent": "Recent",
            "search": "Search",
            "the_content_of_your_screen": "The content of your screen",
            "the_layout_of_your_screen": "The layout of your screen",
            "the_most_simple__and_essential_components_to_build_a_screen": "The most simple & essential components to build a screen",
            "with_flexbox_you_can_specify_the_layout_of_an_element_and_its_children_to_provide_a_consistent_layout_on_different_screen_sizes": "With flexbox, you can specify the layout of an element and its children to provide a consistent layout on different screen sizes.",
        },
        "zh-hant": {
            "add_components": "添加组件",
            "basic": "基本",
            "bits": "位元",
            "blocks": "區塊",
            "code": "程式碼",
            "components_that_you_use_most_frequently": "您最常使用的組件",
            "design": "設計",
            "fields": "字段",
            "frequently_used": "常用",
            "layout": "佈局",
            "recent": "最近",
            "search": "搜索",
            "the_content_of_your_screen": "您屏幕的內容",
            "the_layout_of_your_screen": "您屏幕的佈局",
            "the_most_simple_and_essential_components_to_build_a_screen": "構建屏幕的最簡單和基本組件",
            "with_flexbox_you_can_specify_the_layout_of_an_element_and_its_children_to_provide_a_consistent_layout_on_different_screen_sizes": "使用 Flexbox，您可以指定元素及其子元素的佈局，以便在不同屏幕尺寸上提供一致的佈局。",
        },
        "vi": {
            "add_components": "Thêm các thành phần",
            "basic": "Cơ bản",
            "bits": "Các điểm",
            "blocks": "Các khối",
            "code": "Mã",
            "components_that_you_use_most_frequently": "Các thành phần mà bạn sử dụng nhiều nhất",
            "design": "Thiết kế",
            "fields": "Nhập dữ liệu",
            "frequently_used": "Sử dụng thường xuyên",
            "layout": "Bố cục",
            "recent": "Gần đây",
            "search": "Tìm kiếm",
            "the_content_of_your_screen": "Nội dung của màn hình của bạn",
            "the_layout_of_your_screen": "Bố cục màn hình của bạn",
            "the_most_simple_and_essential_components_to_build_a_screen": "Các thành phần đơn giản và thiết yếu nhất để xây dựng một màn hình",
            "with_flexbox_you_can_specify_the_layout_of_an_element_and_its_children_to_provide_a_consistent_layout_on_different_screen_sizes": "Với Flexbox, bạn có thể chỉ định bố cục của một phần tử và các phần tử con của nó để cung cấp một bố cục nhất quán trên các kích thước màn hình khác nhau.",
        }
    };
});
define("@scom/scom-designer/languages/properties.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-designer/languages/properties.json.ts'/> 
    exports.default = {
        "en": {
            "absolute": "Absolute",
            "add": "Add",
            "advanced": "Advanced",
            "align_content": "Align Content",
            "align": "Align",
            "auto": "Auto",
            "baseline": "Baseline",
            "basic": "Basic",
            "basis": "Basis",
            "border_bottom_width": "Border Bottom Width",
            "border_bottomleft_radius": "Border Bottom Left Radius",
            "border_bottomright_radius": "Border Bottom Right Radius",
            "border_left_width": "Border Left Width",
            "border_right_width": "Border Right Width",
            "border_top_width": "Border Top Width",
            "border_topleft_radius": "Border Top Left Radius",
            "border_topright_radius": "Border Top Right Radius",
            "bottom": "Bottom",
            "breakpoint": "BREAKPOINT",
            "capitalize": "Capitalize",
            "center": "Center",
            "color": "Color",
            "column": "Column",
            "configure_a_value_for_screen_sizes_or_larger": "Configure a value for {{breakpoint}} screen sizes or larger",
            "confirm": "Confirm",
            "content": "Content",
            "dashed": "Dashed",
            "decoration": "Decoration",
            "desktop": "Desktop",
            "direction": "Direction",
            "display": "Display",
            "dotted": "Dotted",
            "draft_view": "Draft View",
            "dynamic_value": "Dynamic Value",
            "enter_font_size": "Enter font size...",
            "enter_font_weight": "Enter font weight...",
            "enter_text_shadow": "Enter text shadow...",
            "flex_end": "Flex End",
            "flex_items": "Flex Items",
            "flex_start": "Flex Start",
            "flex": "Flex",
            "grow": "Grow",
            "hidden": "Hidden",
            "if_configured_will_be_applied_to_mobile_or_larger_breakpoints_if_you_configure_a_static_style_value_it_will_be_used_as_a_fallback_if_the_data_evaluates_to_undefined": "Nếu được cấu hình, sẽ được áp dụng cho các điểm ngắt trên thiết bị di động hoặc lớn hơn. Nếu bạn cấu hình một giá trị kiểu tĩnh, giá trị đó sẽ được sử dụng làm dự phòng nếu dữ liệu không xác định.",
            "individual_edges": "INDIVIDUAL EDGES",
            "individual": "INDIVIDUAL",
            "italic": "Italic",
            "items": "Items",
            "justify": "Justify",
            "left": "Left",
            "line_through": "Line Through",
            "lowercase": "Lowercase",
            "margin_bottom": "Margin Bottom",
            "margin_left": "Margin Left",
            "margin_right": "Margin Right",
            "margin_top": "Margin Top",
            "margin": "Margin",
            "mobile": "Mobile",
            "normal": "Normal",
            "opacity": "Opacity",
            "overall": "Overall",
            "overflow": "Overflow",
            "overline": "Overline",
            "padding_bottom": "Padding Bottom",
            "padding_left": "Padding Left",
            "padding_right": "Padding Right",
            "padding_top": "Padding Top",
            "padding": "Padding",
            "position": "Position",
            "preview": "PREVIEW",
            "radius": "Radius",
            "relative": "Relative",
            "reverse": "Reverse",
            "right": "Right",
            "row": "Row",
            "select_display": "Select display",
            "select": "Select...",
            "selected_item": "SELECTED ITEM",
            "shadow": "Shadow",
            "shrink": "Shrink",
            "size": "Size",
            "solid": "Solid",
            "space_around": "Space Around",
            "space_between": "Space Between",
            "space_evenly": "Space Evenly",
            "static_value": "Static Value:",
            "stretch": "Stretch",
            "style": "Style",
            "tablet": "Tablet",
            "top": "Top",
            "transform": "Transform",
            "type_or_select_a_color": "Type or select a color...",
            "underline": "Underline",
            "uppercase": "Uppercase",
            "visible": "Visible",
            "web_preview": "Web Preview",
            "weight": "Weight",
            "width": "Width",
            "wrap": "Wrap",
            "z_index": "Z-Index",
        },
        "zh-hant": {
            "absolute": "絕對",
            "add": "添加",
            "advanced": "高級",
            "align_content": "對齊內容",
            "align": "對齊",
            "auto": "自動",
            "baseline": "基線",
            "basic": "基本",
            "basis": "基礎",
            "border_bottom_width": "底部邊框寬度",
            "border_bottomleft_radius": "左下邊框半徑",
            "border_bottomright_radius": "右下邊框半徑",
            "border_left_width": "左邊框寬度",
            "border_right_width": "右邊框寬度",
            "border_top_width": "頂部邊框寬度",
            "border_topleft_radius": "左上邊框半徑",
            "border_topright_radius": "右上邊框半徑",
            "bottom": "底部",
            "breakpoint": "斷點",
            "capitalize": "大寫",
            "center": "中心",
            "color": "顏色",
            "column": "列",
            "configure_a_value_for_screen_sizes_or_larger": "為{{breakpoint}}屏幕尺寸或更大配置一個值",
            "confirm": "確認",
            "content": "內容",
            "dashed": "虛線",
            "decoration": "裝飾",
            "desktop": "桌面",
            "direction": "方向",
            "display": "顯示",
            "dotted": "點狀",
            "draft_view": "草稿視圖",
            "dynamic_value": "動態值",
            "enter_font_size": "輸入字體大小...",
            "enter_font_weight": "輸入字體粗細...",
            "enter_text_shadow": "輸入文字陰影...",
            "flex_end": "彈性結束",
            "flex_items": "彈性項目",
            "flex_start": "彈性開始",
            "flex": "彈性",
            "grow": "增長",
            "hidden": "隱藏",
            "if_configured_will_be_applied_to_mobile_or_larger_breakpoints_if_you_configure_a_static_style_value_it_will_be_used_as_a_fallback_if_the_data_evaluates_to_undefined": "如果配置，將應用於移動設備或更大的斷點。如果您配置靜態樣式值，當數據未定義時將用作後備。",
            "individual_edges": "單獨邊緣",
            "individual": "單獨",
            "italic": "斜體",
            "items": "項目",
            "justify": "對齊",
            "left": "左",
            "line_through": "刪除線",
            "lowercase": "小寫",
            "margin_bottom": "底部邊距",
            "margin_left": "左邊距",
            "margin_right": "右邊距",
            "margin_top": "頂部邊距",
            "margin": "邊距",
            "mobile": "移動",
            "normal": "正常",
            "opacity": "不透明度",
            "overall": "整體",
            "overflow": "溢出",
            "overline": "上劃線",
            "padding_bottom": "底部填充",
            "padding_left": "左填充",
            "padding_right": "右填充",
            "padding_top": "頂部填充",
            "padding": "填充",
            "position": "位置",
            "preview": "預覽",
            "radius": "半徑",
            "relative": "相對",
            "reverse": "反向",
            "right": "右",
            "row": "行",
            "select_display": "選擇顯示",
            "select": "選擇...",
            "selected_item": "選定項目",
            "shadow": "陰影",
            "shrink": "收縮",
            "size": "大小",
            "solid": "實線",
            "space_around": "周圍空間",
            "space_between": "間距",
            "space_evenly": "均勻間距",
            "static_value": "靜態值：",
            "stretch": "拉伸",
            "style": "樣式",
            "tablet": "平板",
            "top": "頂部",
            "transform": "變換",
            "type_or_select_a_color": "輸入或選擇顏色...",
            "underline": "下劃線",
            "uppercase": "大寫",
            "visible": "可見",
            "web_preview": "網頁預覽",
            "weight": "重量",
            "width": "寬度",
            "wrap": "換行",
            "z_index": "Z-索引"
        },
        "vi": {
            "absolute": "Tuyệt đối",
            "add": "Thêm",
            "advanced": "Nâng cao",
            "align_content": "Căn chỉnh nội dung",
            "align": "Căn chỉnh",
            "auto": "Tự động",
            "baseline": "Đường cơ sở",
            "basic": "Cơ bản",
            "basis": "Cơ sở",
            "border_bottom_width": "Chiều rộng của viền dưới",
            "border_bottomleft_radius": "Bán kính trái dưới",
            "border_bottomright_radius": "Bán kính phải dưới",
            "border_left_width": "Chiều rộng của viền bên trái",
            "border_right_width": "Chiều rộng của viền bên phải",
            "border_top_width": "Chiều rộng của viền trên",
            "border_topleft_radius": "Bán kính trái trên",
            "border_topright_radius": "Bán kính phải trên",
            "bottom": "Dưới",
            "breakpoint": "Điểm ngắt",
            "capitalize": "In hoa chữ cái đầu",
            "center": "Căn giữa",
            "color": "Màu sắc",
            "column": "Cột",
            "configure_a_value_for_screen_sizes_or_larger": "Cấu hình giá trị cho các kích thước màn hình {{breakpoint}} hoặc lớn hơn",
            "confirm": "Xác nhận",
            "content": "Nội dung",
            "dashed": "Gạch ngang",
            "decoration": "Định dạng",
            "desktop": "Máy tính xách tay",
            "direction": "Hướng",
            "display": "Hiển thị",
            "dotted": "Chấm",
            "draft_view": "Xem bản nháp",
            "dynamic_value": "Giá trị động",
            "enter_font_size": "Nhập kích thước phông chữ...",
            "enter_font_weight": "Nhập độ đậm của phông chữ...",
            "enter_text_shadow": "Nhập bóng văn bản...",
            "flex_end": "Từ cuối",
            "flex_items": "Các mục co giãn",
            "flex_start": "Từ bắt đầu",
            "flex": "Flex",
            "grow": "Mở rộng",
            "hidden": "Ẩn",
            "if_configured_will_be_applied_to_mobile_or_larger_breakpoints_if_you_configure_a_static_style_value_it_will_be_used_as_a_fallback_if_the_data_evaluates_to_undefined": "Nếu được cấu hình, sẽ được áp dụng cho màn hình điện thoại hoặc màn hình lớn hơn, nếu bạn cấu hình giá trị tĩnh, giá trị sẽ được sử dụng nếu giá trị dữ liệu là không xác định.",
            "individual_edges": "CÁC CẠNH RIÊNG LẺ",
            "individual": "RIÊNG LẺ",
            "italic": "In nghiêng",
            "items": "Các mục",
            "justify": "Căn đều",
            "left": "Trái",
            "line_through": "Gạch ngang",
            "lowercase": "In thường",
            "margin_bottom": "Lề dưới",
            "margin_left": "Lề trái",
            "margin_right": "Lề phải",
            "margin_top": "Lề trên",
            "margin": "Lề",
            "mobile": "Điện thoại",
            "normal": "Bình thường",
            "opacity": "Độ mờ",
            "overall": "Tổng thể",
            "overflow": "Tràn",
            "overline": "Gạch trái",
            "padding_bottom": "Đệm dưới",
            "padding_left": "Đệm trái",
            "padding_right": "Đệm phải",
            "padding_top": "Đệm trên",
            "padding": "Đệm",
            "position": "Vị trí",
            "preview": "Xem trước",
            "radius": "Bán kính",
            "relative": "Tương đối",
            "reverse": "Đảo ngược",
            "right": "Phải",
            "row": "Hàng",
            "select_display": "Chọn kiểu hiển thị",
            "select": "Chọn...",
            "selected_item": "MỤC ĐƯỢC CHỌN",
            "shadow": "Độ mờ",
            "shrink": "Thu nhỏ",
            "size": "Kích thước",
            "solid": "Liền",
            "space_around": "Khoảng cách xung quanh",
            "space_between": "Khoảng cách giữa",
            "space_evenly": "Khoảng cách đều nhau",
            "static_value": "Giá trị tĩnh:",
            "stretch": "Kéo giãn",
            "style": "Kiểu",
            "tablet": "Máy tính bảng",
            "top": "Trên",
            "transform": "Biến đổi",
            "type_or_select_a_color": "Nhập hoặc chọn một màu...",
            "underline": "Gạch chân",
            "uppercase": "In hoa",
            "visible": "Hiển thị",
            "web_preview": "Xem trang Web",
            "weight": "Độ đậm",
            "width": "Chiều rộng",
            "wrap": "Đóng gói",
            "z_index": "Chỉ số Z",
        }
    };
});
define("@scom/scom-designer/languages/components.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-designer/languages/components.json.ts'/> 
    exports.default = {
        "en": {
            "add_component": "Add Component",
            "add_item": "Add Item",
            "are_you_sure_to_delete_this_component": "Are you sure to delete this component?",
            "confirm": "Confirm",
            "data": "Data",
            "delete_custom_block": "Delete Custom Block",
            "delete": "Delete",
            "duplicate": "Duplicate",
            "enter_id": "Enter ID",
            "view_deleted_components": "View Deleted Components",
            "widget_settings": "Widget Settings",
            "your_blocks": "Your Blocks",
            "your_own_custom_components": "Your own custom components",
            "structure": "Structure",
        },
        "zh-hant": {
            "add_component": "添加组件",
            "add_item": "添加项目",
            "are_you_sure_to_delete_this_component": "您确定要删除此组件吗？",
            "confirm": "确认",
            "data": "数据",
            "delete_custom_block": "删除自定义块",
            "delete": "删除",
            "duplicate": "复制",
            "enter_id": "输入ID",
            "view_deleted_components": "查看已删除的组件",
            "widget_settings": "小部件设置",
            "your_blocks": "您的块",
            "your_own_custom_components": "您自己的自定义组件",
            "structure": "结构",
        },
        "vi": {
            "add_component": "Thêm thành phần",
            "add_item": "Thêm mục",
            "are_you_sure_to_delete_this_component": "Bạn có chắc chắn muốn xóa thành phần này?",
            "confirm": "Xác nhận",
            "data": "Dữ liệu",
            "delete_custom_block": "Xóa khối tùy chỉnh",
            "delete": "Xóa",
            "duplicate": "Bản sao",
            "enter_id": "Nhập ID",
            "view_deleted_components": "Xem các thành phần đã xóa",
            "widget_settings": "Cài đặt tiện ích",
            "your_blocks": "Các khối của bạn",
            "your_own_custom_components": "Các thành phần tùy chỉnh của bạn",
            "structure": "Cấu trúc",
        }
    };
});
define("@scom/scom-designer/languages/toolsHeader.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-designer/languages/toolsHeader.json.ts'/> 
    exports.default = {
        "en": {
            "add_a_trigger_for_an_action": "Add a trigger for an action.",
            "background": "Background",
            "borders": "Borders",
            "custom_properties": "Custom Properties",
            "define_a_relative_or_absolute_position_from_the_parent_element": "Define a relative or absolute position from the parent element.",
            "define_the_border_size_and_styles": "Define the border size and styles.",
            "effects": "Effects",
            "layout": "Layout",
            "margins_and_padding": "Margins And Padding",
            "margins_create_extra_space_around_an_element_while_padding_creates_extra_space_within_an_element": "Margins create extra space around an element, while padding creates extra space within an element.",
            "media_query": "Media Query",
            "position_and_display": "Position and Display",
            "reset_values": "Reset values",
            "set_a_background_color_or_image_for_the_element": "Set a background color or image for the element.",
            "set_custom_properties_for_component": "Set custom properties for component",
            "set_elevation_and_opacity_for_the_element": "Set elevation and opacity for the element.",
            "set_font_for_the_element": "Set font for the element.",
            "set_the_position_size_and_alignment_of_the_element": "Set the position, size, and alignment of the element.",
            "set_the_width_and_height_of_the_element": "Specify minimum, maximum, or specifically set heights and widths for the element.",
            "size": "Size",
            "trigger": "Trigger",
            "typography": "Typography",
            "widget_settings": "Widget Settings"
        },
        "zh-hant": {
            "add_a_trigger_for_an_action": "為操作添加觸發器。",
            "background": "背景",
            "borders": "邊框",
            "custom_properties": "自定義屬性",
            "define_a_relative_or_absolute_position_from_the_parent_element": "從父元素定義相對或絕對位置。",
            "define_the_border_size_and_styles": "定義邊框大小和樣式。",
            "effects": "效果",
            "layout": "佈局",
            "margins_and_padding": "邊距和填充",
            "margins_create_extra_space_around_an_element_while_padding_creates_extra_space_within_an_element": "邊距在元素周圍創建額外空間，而填充在元素內部創建額外空間。",
            "media_query": "媒體查詢",
            "position_and_display": "位置和顯示",
            "reset_values": "重置值",
            "set_a_background_color_or_image_for_the_element": "為元素設置背景顏色或圖像。",
            "set_custom_properties_for_component": "為組件設置自定義屬性",
            "set_elevation_and_opacity_for_the_element": "為元素設置高程和不透明度。",
            "set_font_for_the_element": "為元素設置字體。",
            "set_the_position_size_and_alignment_of_the_element": "設置元素的位置、大小和對齊。",
            "set_the_width_and_height_of_the_element": "為元素指定高度和寬度的最小、最大或特定值。",
            "size": "大小",
            "trigger": "觸發器",
            "typography": "排版",
            "widget_settings": "小部件設置"
        },
        "vi": {
            "add_a_trigger_for_an_action": "Thêm xử lý sự kiện cho một hành động.",
            "background": "Nền",
            "borders": "Đường viền",
            "custom_properties": "Thuộc tính tùy chỉnh",
            "define_a_relative_or_absolute_position_from_the_parent_element": "Xác định vị trí tương đối hoặc tuyệt đối từ phần tử cha.",
            "define_the_border_size_and_styles": "Xác định kích thước và kiểu của đường viền.",
            "effects": "Hiệu ứng",
            "layout": "Bố cục",
            "margins_and_padding": "Lề và Đệm",
            "margins_create_extra_space_around_an_element_while_padding_creates_extra_space_within_an_element": "Lề tạo thêm khoảng trống xung quanh phần tử, trong khi đệm tạo thêm khoảng trống bên trong phần tử.",
            "media_query": "Truy vấn Media",
            "position_and_display": "Vị trí và Hiển thị",
            "reset_values": "Đặt lại giá trị",
            "set_a_background_color_or_image_for_the_element": "Đặt màu nền hoặc hình ảnh nền cho phần tử.",
            "set_custom_properties_for_component": "Đặt thuộc tính tùy chỉnh cho thành phần",
            "set_elevation_and_opacity_for_the_element": "Đặt độ nâng cao và độ mờ cho phần tử.",
            "set_font_for_the_element": "Đặt phông chữ cho phần tử.",
            "set_the_position_size_and_alignment_of_the_element": "Đặt vị trí, kích thước và căn chỉnh của phần tử.",
            "set_the_width_and_height_of_the_element": "Xác định chiều rộng và chiều cao tối thiểu, tối đa hoặc cụ thể cho phần tử.",
            "size": "Kích thước",
            "trigger": "Xử lý sự kiện",
            "typography": "Kiểu chữ",
            "widget_settings": "Cài đặt tiện ích"
        }
    };
});
define("@scom/scom-designer/languages/index.ts", ["require", "exports", "@scom/scom-designer/languages/main.json.ts", "@scom/scom-designer/languages/properties.json.ts", "@scom/scom-designer/languages/components.json.ts", "@scom/scom-designer/languages/toolsHeader.json.ts"], function (require, exports, main_json_1, properties_json_1, components_json_1, toolsHeader_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toolsHeaderJson = exports.componentsJson = exports.propertiesJson = exports.mainJson = void 0;
    exports.mainJson = main_json_1.default;
    exports.propertiesJson = properties_json_1.default;
    exports.componentsJson = components_json_1.default;
    exports.toolsHeaderJson = toolsHeader_json_1.default;
});
define("@scom/scom-designer/components/components.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/index.css.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/languages/index.ts", "@scom/scom-designer/components/index.css.ts"], function (require, exports, components_6, index_css_1, config_1, utils_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_6.Styles.Theme.ThemeVars;
    let DesignerComponents = class DesignerComponents extends components_6.Module {
        constructor(parent, options) {
            super(parent, options);
            this.currentComponent = null;
            this._activeComponent = null;
            this.dragId = '';
            this.targetConfig = {
                side: '',
                id: ''
            };
            this.elementsMap = new Map();
            this.handleDragStart = this.onDragStart.bind(this);
            this.handleDragOver = this.onDragOver.bind(this);
            this.handleDrop = this.onDrop.bind(this);
            this.handleDragEnd = this.onDragEnd.bind(this);
        }
        get screen() {
            return this._screen;
        }
        set screen(value) {
            this._screen = value;
            this.renderUI();
        }
        get activeComponent() {
            return this._activeComponent;
        }
        set activeComponent(value) {
            this._activeComponent = value;
            const elm = value?.path && this.vStackComponents?.querySelector(`#elm-${value.path}`);
            this.updateActiveStyle(elm);
        }
        get isContainer() {
            return this.currentComponent?.name && config_1.CONTAINERS.includes(this.currentComponent?.name);
        }
        get hasItem() {
            return config_1.ITEM_PARENTS.includes(this.currentComponent?.name);
        }
        updateActiveStyle(el) {
            const currentElm = this.vStackComponents?.querySelector(`.${index_css_1.rowItemActiveStyled}`);
            if (currentElm)
                currentElm.classList.remove(index_css_1.rowItemActiveStyled);
            if (el) {
                el.classList.add(index_css_1.rowItemActiveStyled);
                this.vStackComponents.scrollTo({ top: el.offsetTop });
            }
        }
        renderUI() {
            this.elementsMap = new Map();
            if (!this.screen || !this.vStackComponents)
                return;
            this.vStackComponents.clearInnerHTML();
            this.vStackComponents.appendChild(this.$render("i-hstack", { visible: false, gap: 4, verticalAlignment: "center", padding: { top: 4, bottom: 4 } },
                this.$render("i-icon", { name: "mobile-alt", width: 14, height: 14 }),
                this.$render("i-label", { caption: this.screen.name, font: { size: '0.75rem' } })));
            if (this.screen?.elements?.length) {
                this.renderTreeItems(this.screen.elements, this.vStackComponents, 0);
            }
            this.vStackComponents.appendChild(this.$render("i-panel", { id: "pnlSide", width: '100%', height: 2, background: { color: Theme.action.selectedBackground }, visible: false, position: 'fixed' }));
        }
        renderTreeItems(elements, parentElm, parentPl) {
            const vStack1 = new components_6.VStack(parentElm);
            for (const elm of elements) {
                const hStack = new components_6.HStack(vStack1, {
                    gap: 2,
                    width: '100%',
                    verticalAlignment: 'center',
                    padding: { left: parentPl + 2, right: 4, top: 6, bottom: 6 }
                });
                hStack.setAttribute('draggable', 'true');
                hStack.id = `elm-${elm.path}`;
                this.elementsMap.set(hStack.id, elm);
                hStack.classList.add('drag-item', index_css_1.rowItemHoverStyled, index_css_1.hoverFullOpacity);
                let icon;
                if (elm.items?.length) {
                    let isShown = elm.isShown ?? true;
                    icon = new components_6.Icon(hStack, { name: 'caret-down', width: 12, height: 12, margin: { right: 2 }, cursor: 'pointer' });
                    icon.onClick = () => {
                        isShown = !isShown;
                        elm.isShown = isShown;
                        icon.name = isShown ? 'caret-down' : 'caret-right';
                        vStack2.visible = isShown;
                    };
                    const vStack2 = new components_6.VStack(vStack1, { visible: isShown });
                    if (elm.items?.length) {
                        this.renderTreeItems(elm.items, vStack2, parentPl + 12);
                    }
                }
                const image = new components_6.Icon(hStack, { name: elm.icon || 'square', fill: Theme.text.primary, width: '0.75rem', height: '0.75rem', display: 'flex', margin: { right: '0.25rem' } });
                const label = new components_6.Label(hStack, { caption: elm.name, font: { size: '0.75rem' }, lineHeight: 1, opacity: 0.8 });
                const input = new components_6.Input(hStack, { value: elm.name, visible: false, font: { size: '0.75rem' }, border: 'none' });
                const hStackActions = new components_6.HStack(hStack, {
                    gap: 8,
                    position: 'relative',
                    verticalAlignment: 'center',
                    opacity: 0.8,
                    margin: { left: 'auto' },
                    padding: { left: 4 }
                });
                const onShowActions = (target, event, component) => {
                    this.currentComponent = component;
                    this.mdActions.linkTo = target;
                    this.mdActions.popupPlacement = 'bottomRight';
                    this.onShowActions();
                };
                hStackActions.appendChild(this.$render("i-icon", { name: "ellipsis-h", width: '0.875rem', height: '0.875rem', opacity: 0, cursor: "pointer", onClick: (target, event) => onShowActions(hStack, event, elm) }));
                const queriesStr = elm.props?.mediaQueries;
                const mediaQueries = typeof queriesStr === 'string' ? (0, utils_1.handleParse)(queriesStr.substring(1, queriesStr.length - 1)) : [];
                const breakpointProps = (0, config_1.getMediaQueryProps)(mediaQueries);
                let isHidden = false;
                if (Object.hasOwnProperty.call(breakpointProps, 'visible')) {
                    isHidden = breakpointProps['visible'] === "{false}" || breakpointProps['visible'] === false;
                }
                else {
                    isHidden = elm.props?.visible === "{false}" || elm.props?.visible === false;
                }
                hStackActions.appendChild(this.$render("i-icon", { name: isHidden ? 'eye-slash' : 'eye', width: '0.875rem', height: '0.875rem', opacity: isHidden ? 1 : 0, cursor: "pointer", onClick: (icon) => this.onHideComponent(icon, elm) }));
                hStack.onClick = () => {
                    this.updateActiveStyle(hStack);
                    if (this.onSelect)
                        this.onSelect(elm);
                };
                hStack.onDblClick = () => {
                    label.visible = image.visible = hStackActions.visible = false;
                    if (icon)
                        icon.visible = false;
                    input.visible = true;
                };
                input.onBlur = () => {
                    if (input.value) {
                        label.caption = input.value;
                        // TODO - update list
                    }
                    else {
                        input.value = label.caption;
                    }
                    label.visible = image.visible = hStackActions.visible = true;
                    image.display = 'flex';
                    if (icon)
                        icon.visible = true;
                    input.visible = false;
                };
            }
        }
        initEvents() {
            this.addEventListener('dragstart', this.handleDragStart);
            this.addEventListener('dragend', this.handleDragEnd);
            this.addEventListener('dragover', this.handleDragOver);
            this.addEventListener('drop', this.handleDrop);
        }
        onDragStart(event) {
            const target = event.target.closest('.drag-item');
            const isDragRoot = this.isRootPanel(target?.id);
            if (!target || isDragRoot) {
                event.preventDefault();
                return;
            }
            this.dragId = target.id;
        }
        onDragEnd(event) {
            const isTargetRoot = this.isRootPanel(this.targetConfig?.id);
            if (!this.dragId || (isTargetRoot && this.targetConfig?.side)) {
                event.preventDefault();
                this.resetData();
                return;
            }
            const dropControl = this.elementsMap.get(this.targetConfig?.id);
            const dragControl = this.elementsMap.get(this.dragId);
            let isInvalid = false;
            if (dragControl?.name === 'i-accordion-item') {
                const isOutsideAcc = this.targetConfig?.side && dropControl?.name === 'i-accordion-item';
                const isInsideAcc = !this.targetConfig?.side && dropControl?.name === 'i-accordion';
                isInvalid = !isInsideAcc && !isOutsideAcc;
            }
            else if (dragControl?.name === 'i-tab') {
                const isOutsideTab = this.targetConfig?.side && dropControl?.name === 'i-tab';
                const isInsideTab = !this.targetConfig?.side && dropControl?.name === 'i-tabs';
                isInvalid = !isOutsideTab && !isInsideTab;
            }
            else {
                const isNotContainer = !config_1.CONTAINERS.includes(dropControl?.name) && !this.targetConfig?.side;
                const isInsideAcc = !this.targetConfig?.side && dropControl?.name === 'i-accordion';
                const isOutsideAccItem = this.targetConfig?.side && dropControl?.name === 'i-accordion-item';
                const isInsideTab = !this.targetConfig?.side && dropControl?.name === 'i-tabs';
                const isOutsideTabItem = this.targetConfig?.side && dropControl?.name === 'i-tab';
                isInvalid = isNotContainer || isOutsideAccItem || isInsideAcc || isInsideTab || isOutsideTabItem;
            }
            if (isInvalid) {
                event.preventDefault();
                this.resetData();
                return;
            }
            this.dragEnd(this.dragId);
            this.resetData();
        }
        onDragOver(event) {
            event.preventDefault();
            if (!this.dragId) {
                event.preventDefault();
                return;
            }
            this.showHightlight(event.x, event.y);
        }
        onDrop(event) {
            if (!this.dragId) {
                event.preventDefault();
                return;
            }
        }
        removeEvents() {
            this.removeEventListener('dragstart', this.handleDragStart);
            this.removeEventListener('dragend', this.handleDragEnd);
            this.removeEventListener('dragover', this.handleDragOver);
            this.removeEventListener('drop', this.handleDrop);
        }
        onHide() {
            this.removeEvents();
            if (this.screen)
                this.screen.elements = [];
            this.clearHoverStyle();
            this.resetData();
        }
        isRootPanel(id) {
            return id ? this.screen?.elements[0]?.path === id.replace('elm-', '') : false;
        }
        showHightlight(x, y) {
            const elms = this.vStackComponents.querySelectorAll('.drag-item');
            this.clearHoverStyle();
            const edgeThreshold = 10;
            for (let elm of elms) {
                const rect = elm.getBoundingClientRect();
                if (x >= rect.left && x <= rect.right) {
                    const paddingLeft = window.getComputedStyle(elm).paddingLeft || '';
                    const parsedLeft = parseInt(paddingLeft.substring(0, paddingLeft.length - 2));
                    if (y >= rect.top && y < rect.top + edgeThreshold) {
                        if (this.isRootPanel(elm.id))
                            return;
                        this.pnlSide.visible = true;
                        this.pnlSide.style.top = `${rect.top}px`;
                        this.pnlSide.style.left = `${rect.left + parsedLeft}px`;
                        this.pnlSide.width = rect.width - parsedLeft;
                        this.targetConfig = {
                            id: elm.id,
                            side: 'top'
                        };
                    }
                    else if (y > rect.bottom - edgeThreshold && y <= rect.bottom) {
                        if (this.isRootPanel(elm.id))
                            return;
                        this.pnlSide.visible = true;
                        this.pnlSide.style.top = `${rect.bottom}px`;
                        this.pnlSide.style.left = `${rect.left + parsedLeft}px`;
                        this.pnlSide.width = rect.width - parsedLeft;
                        this.targetConfig = {
                            id: elm.id,
                            side: 'bottom'
                        };
                    }
                    else if (y >= rect.top + edgeThreshold && y <= rect.bottom - edgeThreshold) {
                        elm.classList.add(index_css_1.rowDragOverActiveStyled);
                        this.pnlSide.visible = false;
                        this.targetConfig = {
                            id: elm.id,
                            side: ''
                        };
                    }
                }
            }
        }
        clearHoverStyle() {
            const currentElm = this.vStackComponents.querySelector(`.${index_css_1.rowDragOverActiveStyled}`);
            if (currentElm)
                currentElm.classList.remove(index_css_1.rowDragOverActiveStyled);
            if (this.pnlSide)
                this.pnlSide.visible = false;
        }
        resetData() {
            this.clearHoverStyle();
            this.dragId = null;
            this.targetConfig = { id: '', side: '' };
        }
        dragEnd(dragId) {
            const { side, id } = this.targetConfig;
            if (dragId === id)
                return;
            if (side) {
                this.appendItem(dragId, id, side);
            }
            else {
                this.changeParent(dragId, id);
            }
        }
        appendItem(dragId, targetId, postion) {
            if (postion === 'top' || postion === 'bottom') {
                const targetData = this.elementsMap.get(targetId);
                const dragData = this.elementsMap.get(dragId);
                if (!dragData || !targetData)
                    return;
                const parentDragPath = this.getParentID(this.screen.elements[0], dragId);
                const parentTargetPath = this.getParentID(this.screen.elements[0], targetId);
                const posProps = ['left', 'top', 'right', 'bottom', 'position'];
                if (dragData) {
                    for (let prop in dragData.props) {
                        if (posProps.includes(prop))
                            delete dragData.props[prop];
                    }
                }
                const parentId = parentDragPath && `elm-${parentDragPath}`;
                const parentData = parentId && this.elementsMap.get(parentId);
                if (parentData) {
                    parentData.items = parentData.items || [];
                    const findedIndex = parentData.items.findIndex(x => x.path === dragId.replace('elm-', ''));
                    parentData.items.splice(findedIndex, 1);
                    this.elementsMap.set(parentId, parentData);
                }
                const parentTargetId = parentTargetPath && `elm-${parentTargetPath}`;
                const parentTargetData = parentTargetId && this.elementsMap.get(parentTargetId);
                if (parentTargetData) {
                    parentTargetData.items = parentTargetData.items || [];
                    const findedIndex = parentTargetData.items.findIndex(x => x.path === targetId.replace('elm-', ''));
                    if (postion === 'top') {
                        parentTargetData.items.splice(findedIndex, 0, dragData);
                    }
                    else {
                        parentTargetData.items.splice(findedIndex + 1, 0, dragData);
                    }
                    this.elementsMap.set(parentTargetId, parentTargetData);
                }
                this.renderUI();
                if (this.onUpdate)
                    this.onUpdate();
            }
        }
        changeParent(dragId, targetId) {
            const targetData = this.elementsMap.get(targetId);
            const dragData = this.elementsMap.get(dragId);
            const isTargetParent = dragData && this.getParentID(dragData, targetId);
            if (!dragData || !targetData || isTargetParent)
                return;
            const parentPath = this.getParentID(this.screen.elements[0], dragId);
            const parentId = parentPath && `elm-${parentPath}`;
            const targetItems = targetData?.items || [];
            const posProps = ['left', 'top', 'right', 'bottom', 'position'];
            if (dragData) {
                for (let prop in dragData.props) {
                    if (posProps.includes(prop))
                        delete dragData.props[prop];
                }
                targetItems.push(dragData);
                targetData.items = [...targetItems];
                this.elementsMap.set(targetId, targetData);
                this.elementsMap.delete(dragId);
            }
            const parentData = parentId && this.elementsMap.get(parentId);
            if (parentData) {
                parentData.items = parentData.items || [];
                const findedIndex = parentData.items.findIndex(x => x.path === dragId.replace('elm-', ''));
                parentData.items.splice(findedIndex, 1);
                this.elementsMap.set(parentId, parentData);
            }
            this.renderUI();
            if (this.onUpdate)
                this.onUpdate();
        }
        getParentID(el, id) {
            const path = id.replace('elm-', '');
            if (el.path === path)
                return null;
            if (el.items) {
                for (const item of el.items) {
                    if (item.path === path)
                        return el.path;
                    const parent = this.getParentID(item, id);
                    if (parent)
                        return parent;
                }
            }
            return null;
        }
        onHideComponent(icon, component) {
            icon.name = icon.name === 'eye' ? 'eye-slash' : 'eye';
            if (icon.name === 'eye-slash')
                icon.opacity = 1;
            if (this.onVisible)
                this.onVisible(component, icon.name === 'eye');
        }
        onShowActions() {
            const children = this.mdActions.item.children;
            const isTopPanel = this.currentComponent?.path && this.currentComponent.path === this.screen.elements[0]?.path;
            for (let i = 0; i < children.length; i++) {
                if (i === 0) {
                    children[i].visible = this.isContainer && !this.hasItem && this.currentComponent?.name !== 'i-tree-view';
                }
                else if (i === 1) {
                    children[i].visible = this.hasItem;
                }
                else {
                    children[i].visible = !isTopPanel;
                }
            }
            this.mdActions.visible = true;
        }
        async initModalActions() {
            this.mdActions = await components_6.Modal.create({
                visible: false,
                showBackdrop: false,
                minWidth: '11.25rem',
                height: 'auto',
                zIndex: 1001,
                popupPlacement: 'bottomRight',
            });
            const itemActions = new components_6.VStack(undefined, { gap: 8, border: { radius: 8 } });
            const buttonList = [
                {
                    caption: '$add_component',
                    icon: 'plus-circle',
                    visible: false,
                    onClick: (target, event) => {
                        event.stopPropagation();
                        this.mdActions.visible = false;
                        if (this.onShowComponentPicker)
                            this.onShowComponentPicker({ ...this.currentComponent });
                    }
                },
                {
                    caption: '$add_item',
                    icon: 'plus-circle',
                    visible: false,
                    onClick: (target, event) => {
                        event.stopPropagation();
                        this.mdActions.visible = false;
                        if (this.onAdd)
                            this.onAdd(this.currentComponent);
                    }
                },
                {
                    caption: '$duplicate',
                    icon: 'copy',
                    visible: true,
                    onClick: (target, event) => {
                        event.stopPropagation();
                        this.handleDuplicate();
                    }
                },
                {
                    caption: '$delete',
                    icon: 'trash',
                    visible: true,
                    onClick: (target, event) => {
                        event.stopPropagation();
                        this.handleDelete();
                    }
                }
            ];
            for (let button of buttonList) {
                itemActions.appendChild(this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", icon: { name: button.icon, width: 12, height: 12 }, caption: button.caption, class: index_css_1.iconButtonStyled, visible: button.visible, onClick: button.onClick }));
            }
            this.mdActions.item = itemActions;
            document.body.appendChild(this.mdActions);
        }
        onConfirm() {
            const screen = this.screen?.elements[0];
            if (screen && this.currentComponent) {
                if (screen.path === this.currentComponent.path) {
                    // screen.items = []
                    // this.screen = {
                    //   ...this.screen,
                    //   elements: []
                    // }
                    // this.currentComponent = null;
                    return;
                }
                if (this.onDelete)
                    this.onDelete({ ...this.currentComponent });
                this.removeElements(screen.items);
                this.currentComponent = null;
                this.renderUI();
            }
        }
        removeElements(elements) {
            for (let elm of elements) {
                if (elm.path === this.currentComponent.path) {
                    const index = elements.indexOf(elm);
                    if (index > -1) {
                        elements.splice(index, 1);
                    }
                    return;
                }
                if (elm.items) {
                    this.removeElements(elm.items);
                }
            }
        }
        onClose() {
            this.mdAlert.closeModal();
        }
        handleDelete() {
            this.mdAlert.showModal();
        }
        handleDuplicate() {
            if (this.currentComponent) {
                this.mdActions.visible = false;
                if (this.onDuplicate)
                    this.onDuplicate({ ...this.currentComponent });
            }
        }
        init() {
            this.i18n.init({ ...index_1.componentsJson });
            super.init();
            this.onSelect = this.getAttribute('onSelect', true) || this.onSelect;
            this.onVisible = this.getAttribute('onVisible', true) || this.onVisible;
            this.onDelete = this.getAttribute('onDelete', true) || this.onDelete;
            this.onDuplicate = this.getAttribute('onDuplicate', true) || this.onDuplicate;
            this.onAdd = this.getAttribute('onAdd', true) || this.onAdd;
            this.onUpdate = this.getAttribute('onUpdate', true) || this.onUpdate;
            this.onShowComponentPicker = this.getAttribute('onShowComponentPicker', true) || this.onShowComponentPicker;
            this.initModalActions();
            this.screen = this.getAttribute('screen', true);
            this.initEvents();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", maxWidth: Theme.layout.container.maxWidth, margin: { left: "auto", right: "auto" }, position: "relative", background: { color: Theme.background.main } },
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", horizontalAlignment: "space-between", padding: { top: 4, bottom: 4, left: 8 }, background: { color: Theme.background.main } },
                    this.$render("i-label", { caption: "$structure", font: { bold: true, size: '0.75rem' } }),
                    this.$render("i-hstack", { visible: false, verticalAlignment: "center", margin: { left: 'auto' } },
                        this.$render("i-icon", { name: "history", class: index_css_1.hoverFullOpacity, opacity: 0.8, cursor: "pointer", width: 28, height: 24, padding: { top: 4, bottom: 4, left: 6, right: 6 }, border: {
                                left: { style: 'solid', color: Theme.divider, width: 1 },
                                right: { style: 'solid', color: Theme.divider, width: 1 }
                            }, tooltip: {
                                content: '$view_deleted_components'
                            } }))),
                this.$render("i-vstack", { id: "vStackComponents", gap: 4, overflow: "auto", position: 'relative', height: "100%", maxHeight: "calc(100% - 32px)" }),
                this.$render("i-alert", { id: "mdAlert", title: '$confirm', status: 'confirm', content: '$are_you_sure_to_delete_this_component', onConfirm: this.onConfirm.bind(this), onClose: this.onClose.bind(this) })));
        }
    };
    DesignerComponents = __decorate([
        (0, components_6.customElements)('designer-components')
    ], DesignerComponents);
    exports.default = DesignerComponents;
});
define("@scom/scom-designer/tools/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customSwitchStyle = exports.customFormStyle = exports.buttonAutoStyled = exports.unitStyled = exports.customColorStyled = exports.bgInputTransparent = exports.textInputRight = exports.borderRadiusRight = exports.borderRadiusLeft = exports.customIconLayoutActiveStyled = exports.customIconLayoutStyled = exports.customIconBorderStyled = void 0;
    const Theme = components_7.Styles.Theme.ThemeVars;
    exports.customIconBorderStyled = components_7.Styles.style({
        cursor: 'pointer',
        background: Theme.action.hoverBackground,
        border: `1px solid ${Theme.divider}`,
        borderRadius: 4,
        padding: 6,
        opacity: 0.8,
        $nest: {
            '&:hover': {
                background: Theme.action.selectedBackground,
                opacity: 1
            }
        }
    });
    exports.customIconLayoutStyled = components_7.Styles.style({
        cursor: 'pointer',
        background: Theme.action.hoverBackground,
        opacity: 0.8,
        $nest: {
            '&:hover': {
                background: Theme.action.selectedBackground,
                opacity: 1
            }
        }
    });
    exports.customIconLayoutActiveStyled = components_7.Styles.style({
        cursor: 'default',
        background: Theme.action.selectedBackground
    });
    exports.borderRadiusLeft = components_7.Styles.style({
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    });
    exports.borderRadiusRight = components_7.Styles.style({
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    });
    exports.textInputRight = components_7.Styles.style({
        $nest: {
            'input': {
                textAlign: 'right'
            }
        }
    });
    exports.bgInputTransparent = components_7.Styles.style({
        background: 'transparent',
        $nest: {
            'input': {
                background: 'transparent'
            }
        }
    });
    exports.customColorStyled = components_7.Styles.style({
        $nest: {
            '.input-span': {
                minWidth: 24,
                height: 24,
                borderRadius: 4
            }
        }
    });
    exports.unitStyled = components_7.Styles.style({
        $nest: {
            '&:hover': {
                background: Theme.action.hoverBackground
            }
        }
    });
    exports.buttonAutoStyled = components_7.Styles.style({
        minWidth: 40,
        padding: '0 0.25rem',
        height: 28,
        opacity: 0.8,
        background: 'transparent',
        border: `1px solid ${Theme.action.selectedBackground}`
    });
    exports.customFormStyle = components_7.Styles.style({
        $nest: {
            '&#form': {
                $nest: {
                    'i-input': {
                        height: '24px !important',
                        borderRadius: '0.5rem !important'
                    },
                    'i-combo-box': {
                        height: '24px !important',
                        borderRadius: '0.5rem !important'
                    },
                    'i-combo-box .selection': {
                        padding: '0 1rem'
                    },
                    '.tabs-nav-wrap i-tab': {
                        padding: '0 1rem !important',
                        margin: '0px !important'
                    }
                }
            }
        }
    });
    exports.customSwitchStyle = components_7.Styles.style({
        $nest: {
            '> .wrapper': {
                width: '2.25rem',
                height: '1.25rem',
                $nest: {
                    '.thumb': {
                        width: '0.875rem',
                        height: '0.875rem'
                    },
                    '.switch-base.checked': {
                        transform: 'translateX(85%)'
                    }
                }
            }
        }
    });
});
define("@scom/scom-designer/tools/stylesheet.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts"], function (require, exports, components_8, index_css_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_8.Styles.Theme.ThemeVars;
    let DesignerToolStylesheet = class DesignerToolStylesheet extends components_8.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.handleEdit = this.handleEdit.bind(this);
            this.handleCopy = this.handleCopy.bind(this);
            this.handleMove = this.handleMove.bind(this);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        setData(value) {
            this._data = value;
            this.renderUI();
        }
        renderUI() {
            this.stylesSelect.items = this.getStylesOptions();
        }
        getStylesOptions() {
            return [
                {
                    value: 'My Style',
                    label: 'My Style'
                }
            ];
        }
        handleEdit() {
            console.log('handleEdit');
        }
        handleCopy() {
            console.log('handleCopy');
        }
        handleMove() {
            console.log('handleMove');
        }
        init() {
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { name: "Stylesheet", onCollapse: this.onCollapse }),
                this.$render("i-vstack", { id: "vStackContent", gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '0.75rem', right: '0.75rem' }, visible: false },
                    this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                        this.$render("i-combo-box", { id: "stylesSelect", items: [], placeholder: "Select or Create New..." }),
                        this.$render("i-icon", { name: "pen", width: '1.5rem', height: '1.5rem', class: index_css_2.customIconBorderStyled, onClick: this.handleEdit }),
                        this.$render("i-icon", { name: "copy", width: '1.5rem', height: '1.5rem', class: index_css_2.customIconBorderStyled, onClick: this.handleCopy }),
                        this.$render("i-icon", { name: "arrow-up", width: '1.5rem', height: '1.5rem', class: index_css_2.customIconBorderStyled, onClick: this.handleMove }),
                        this.$render("i-icon", { name: "arrow-left", width: '1.5rem', height: '1.5rem', class: index_css_2.customIconBorderStyled, onClick: this.handleMove })),
                    this.$render("i-label", { id: "lblStats", caption: "Styles: 0 direct, 0 disabled, 4 inherited", font: { size: '0.675rem' }, opacity: 0.6 }))));
        }
    };
    DesignerToolStylesheet = __decorate([
        (0, components_8.customElements)('designer-tool-stylesheet')
    ], DesignerToolStylesheet);
    exports.default = DesignerToolStylesheet;
});
define("@scom/scom-designer/tools/selector.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/index.css.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_9, index_css_3, index_css_4, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_9.Styles.Theme.ThemeVars;
    let DesignerSelector = class DesignerSelector extends components_9.Module {
        constructor() {
            super(...arguments);
            this.listMap = new Map();
            this._data = {
                items: [],
                direction: 'horizontal',
                isChanged: false
            };
            this.selectedItem = null;
        }
        get items() {
            return this._data.items || [];
        }
        set items(value) {
            this._data.items = value || [];
        }
        get title() {
            return this._data.title || '';
        }
        set title(value) {
            this._data.title = value || '';
        }
        get activeItem() {
            return this._data.activeItem ?? '';
        }
        set activeItem(value) {
            this._data.activeItem = value ?? '';
            const target = this.listMap.get(value);
            if (target) {
                this.updateActiveItem(target);
            }
            else if (this.currentTarget) {
                if (this.direction === 'horizontal')
                    this.currentTarget.classList.remove(index_css_3.customIconLayoutActiveStyled);
                else
                    this.currentTarget.classList.remove(index_css_4.customIconTabActiveStyled);
            }
        }
        get direction() {
            return this._data.direction ?? 'horizontal';
        }
        set direction(value) {
            this._data.direction = value ?? 'horizontal';
        }
        get isChanged() {
            return this._data.isChanged ?? false;
        }
        set isChanged(value) {
            this._data.isChanged = value ?? false;
            if (this.lblTitle) {
                this.lblTitle.font = {
                    ...(this.font || {}),
                    size: '0.75rem',
                    color: this._data.isChanged ? Theme.colors.success.main : Theme.text.primary
                };
            }
        }
        set font(value) {
            const defaultFont = { size: '0.75rem', color: this.isChanged ? Theme.colors.success.main : Theme.text.primary };
            if (this.lblTitle)
                this.lblTitle.font = { ...defaultFont, ...(value || {}) };
        }
        get font() {
            return this.lblTitle?.font;
        }
        setData(value) {
            this._data = value;
            this.selectedItem = null;
            this.renderUI();
        }
        renderUI() {
            this.lblTitle.caption = this.title;
            this.gridSelector.templateColumns = this.direction === 'horizontal' ? ['70px', 'auto'] : ['auto'];
            this.pnlList.clearInnerHTML();
            const length = this.items.length;
            for (let i = 0; i < length; i++) {
                const item = this.items[i];
                const elm = this.$render("i-hstack", { gap: 1, verticalAlignment: "center", horizontalAlignment: "center", height: '100%', cursor: "pointer", stack: { grow: '1', shrink: '1' }, class: `${index_css_3.customIconLayoutStyled} ${i === 0 ? index_css_3.borderRadiusLeft : i === length - 1 ? index_css_3.borderRadiusRight : ''} ${item.isActive ? index_css_3.customIconLayoutActiveStyled : ''}`, tooltip: { content: item.tooltip || '', placement: item.placement }, onClick: (target, event) => this.onActiveChanged(target, event, item.type, item.value) });
                if (item.tooltip) {
                    elm.tooltip.content = item.tooltip;
                    if (item.placement)
                        elm.tooltip.placement = item.placement;
                }
                if (item.caption) {
                    const lb = this.$render("i-label", { caption: item.caption, stack: { grow: '1', shrink: '1' }, class: `text-center`, padding: { top: '0.25rem', bottom: '0.25rem' } });
                    elm.append(lb);
                }
                if (item.icon) {
                    let img;
                    if (item.icon?.image) {
                        img = new components_9.Image(elm, {
                            width: '1rem',
                            height: '1rem',
                            display: 'flex',
                            ...item.icon.image
                        });
                        if (item.rotate)
                            img.rotate = item.rotate;
                    }
                    else {
                        img = new components_9.Icon(elm, {
                            width: '1rem',
                            height: '1rem',
                            display: 'flex',
                            ...item.icon
                        });
                    }
                    elm.append(img);
                }
                if (item.isActive)
                    this.currentTarget = elm;
                this.pnlList.appendChild(elm);
                this.listMap.set(item.value, elm);
            }
        }
        onActiveChanged(target, event, type, value) {
            event.preventDefault();
            if (this.selectedItem?.value && this.selectedItem.value === value)
                return;
            if (this.onChanged)
                this.onChanged(type, value);
            this.updateActiveItem(target);
            this.selectedItem = { type, value };
        }
        updateActiveItem(target) {
            const activeStyle = this.direction === 'horizontal' ? index_css_3.customIconLayoutActiveStyled : index_css_4.customIconTabActiveStyled;
            if (this.currentTarget)
                this.currentTarget.classList.remove(activeStyle);
            target.classList.add(activeStyle);
            this.currentTarget = target;
            this.selectedItem = null;
        }
        init() {
            this.i18n.init({ ...index_2.propertiesJson });
            super.init();
            const items = this.getAttribute('items', true, []);
            const title = this.getAttribute('title', true, '');
            const direction = this.getAttribute('direction', true, 'horizontal');
            const isChanged = this.getAttribute('isChanged', true, false);
            this.setData({ items, title, direction, isChanged });
        }
        render() {
            return (this.$render("i-grid-layout", { id: "gridSelector", templateColumns: ['70px', 'auto'], verticalAlignment: "center", gap: { column: 0, row: '0.5rem' } },
                this.$render("i-label", { id: "lblTitle", caption: "", font: { size: '0.75rem' } }),
                this.$render("i-hstack", { id: "pnlList", gap: `1px`, verticalAlignment: "center", height: '1.5rem' })));
        }
    };
    DesignerSelector = __decorate([
        (0, components_9.customElements)('designer-selector')
    ], DesignerSelector);
    exports.default = DesignerSelector;
});
define("@scom/scom-designer/tools/header.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_10, index_css_5, index_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_10.Styles.Theme.ThemeVars;
    let DesignerToolHeader = class DesignerToolHeader extends components_10.Module {
        constructor(parent, options) {
            super(parent, options);
            this._name = '';
            this._tooltipText = '';
            this._hasMediaQuery = false;
            this._hasClear = true;
            this.isShown = false;
        }
        get name() {
            return this._name ?? '';
        }
        set name(value) {
            this._name = value ?? '';
            this.lbName.caption = this.name;
        }
        get tooltipText() {
            return this._tooltipText ?? '';
        }
        set tooltipText(value) {
            this._tooltipText = value ?? '';
            this.iconTooltip.visible = !!this.tooltipText;
            this.iconTooltip.tooltip.content = this.tooltipText || '';
        }
        get hasMediaQuery() {
            return this._hasMediaQuery ?? false;
        }
        set hasMediaQuery(value) {
            this._hasMediaQuery = value ?? false;
        }
        get checked() {
            return this.hasMediaQuery ? this.querySwitch.checked : false;
        }
        set checked(value) {
            this.querySwitch.checked = value ?? false;
        }
        set isChanged(value) {
            if (this.lbName) {
                this.lbName.font = { size: '0.75rem', bold: true, color: value ? Theme.colors.success.main : Theme.text.primary };
            }
        }
        get hasClear() {
            return this._hasClear ?? true;
        }
        set hasClear(value) {
            this._hasClear = value ?? true;
        }
        set isQueryChanged(value) {
            if (this.lblSwitch) {
                this.lblSwitch.font = { size: '0.75rem', bold: true, color: value ? Theme.colors.success.main : Theme.text.primary };
            }
        }
        renderUI() {
            this.lbName.caption = this.name;
            this.iconArrow.name = 'angle-down';
            this.iconTooltip.visible = !!this.tooltipText;
            this.iconTooltip.tooltip.content = this.tooltipText || '';
            this.pnlSwitch.visible = this.hasMediaQuery;
            this.pnlClear.visible = this.hasClear;
        }
        _onCollapse() {
            this.isShown = !this.isShown;
            this.iconArrow.name = this.isShown ? 'angle-down' : 'angle-right';
            this.onCollapse(this.isShown);
        }
        _onClear(target, event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.onReset)
                this.onReset();
        }
        onQueryChanged() {
            if (this.onToggleMediaQuery)
                this.onToggleMediaQuery(this.checked);
        }
        init() {
            this.i18n.init({ ...index_3.toolsHeaderJson });
            super.init();
            this.name = this.getAttribute('name', true) || '';
            this.tooltipText = this.getAttribute('tooltipText', true);
            this.hasMediaQuery = this.getAttribute('hasMediaQuery', true, false);
            this.hasClear = this.getAttribute('hasClear', true, true);
            this.onCollapse = this.getAttribute('onCollapse', true) || this.onCollapse;
            this.onToggleMediaQuery = this.getAttribute('onToggleMediaQuery', true) || this.onToggleMediaQuery;
            this.onReset = this.getAttribute('onReset', true) || this.onReset;
            this.renderUI();
        }
        render() {
            return (this.$render("i-hstack", { gap: 8, verticalAlignment: "center", cursor: "pointer", padding: { left: 8, right: 8, bottom: 8, top: 8 }, background: { color: Theme.background.main }, onClick: this._onCollapse },
                this.$render("i-icon", { id: "iconArrow", name: "angle-down", width: 14, height: 14 }),
                this.$render("i-label", { id: "lbName", font: { size: '0.75rem', bold: true } }),
                this.$render("i-icon", { id: "iconTooltip", name: "exclamation-circle", width: 14, height: 14, opacity: 0.8 }),
                this.$render("i-panel", { margin: { left: 'auto' } },
                    this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'end', gap: "0.5rem" },
                        this.$render("i-hstack", { id: "pnlSwitch", verticalAlignment: 'center', horizontalAlignment: 'end', gap: "0.5rem", stack: { shrink: '0' }, visible: false },
                            this.$render("i-label", { id: "lblSwitch", caption: '$media_query', font: { size: '0.75rem' } }),
                            this.$render("i-switch", { id: "querySwitch", class: index_css_5.customSwitchStyle, onChanged: this.onQueryChanged.bind(this) })),
                        this.$render("i-panel", { id: "pnlClear", hover: { opacity: 1 }, visible: false },
                            this.$render("i-button", { icon: { name: 'times', width: '0.75rem', height: '0.75rem', fill: Theme.text.primary }, boxShadow: 'none', border: { radius: '50%', width: '1px', style: 'solid', color: Theme.divider }, padding: { top: '0.125rem', bottom: '0.125rem', left: '0.125rem', right: '0.125rem' }, background: { color: 'transparent' }, cursor: 'pointer', opacity: 0.8, tooltip: { content: '$reset_values', placement: 'topRight' }, onClick: this._onClear }))))));
        }
    };
    DesignerToolHeader = __decorate([
        (0, components_10.customElements)('designer-tool-header')
    ], DesignerToolHeader);
    exports.default = DesignerToolHeader;
});
define("@scom/scom-designer/tools/layout.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/assets.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_11, index_css_6, assets_2, utils_2, config_2, index_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_LAYOUT_PROPS = void 0;
    const Theme = components_11.Styles.Theme.ThemeVars;
    exports.DESIGNER_LAYOUT_PROPS = ['stack', 'direction', 'wrap', 'alignItems', 'justifyContent', 'alignSelf', 'alignContent', 'reverse'];
    ;
    const stackTypes = ['i-stack', 'i-hstack', 'i-vstack'];
    let DesignerToolLayout = class DesignerToolLayout extends components_11.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.isBasicFlex = true;
            this.onSelectChanged = this.onSelectChanged.bind(this);
            this.onReverseSwitch = this.onReverseSwitch.bind(this);
            this.onAdvFlexChanged = this.onAdvFlexChanged.bind(this);
            this.onResetData = this.onResetData.bind(this);
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
        }
        get name() {
            return this._data.name ?? '';
        }
        set name(value) {
            this._data.name = value ?? '';
        }
        get isStack() {
            return this.name && stackTypes.includes(this.name);
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        get currentData() {
            let data = JSON.parse(JSON.stringify(this._data));
            const clonedDefault = JSON.parse(JSON.stringify(data.default));
            data = { ...clonedDefault, ...data };
            if (this.isChecked) {
                const breakpointProps = this._data.mediaQuery?.properties || {};
                data = { ...data, ...breakpointProps };
            }
            return data;
        }
        hasMediaQuery() {
            const breakpointProps = this._data.mediaQuery?.properties || {};
            const hasChanged = exports.DESIGNER_LAYOUT_PROPS.find(prop => {
                const hasProp = Object.hasOwnProperty.call(breakpointProps, prop);
                if (hasProp) {
                    return !(0, utils_2.isSameValue)(this._data[prop] ?? this._data.default?.[prop], breakpointProps?.[prop]);
                }
                return false;
            });
            return !!hasChanged;
        }
        setData(data) {
            this._data = data;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        renderUI(needUpdate = false) {
            let data = this.currentData;
            this.designerHeader.isQueryChanged = !!this.hasMediaQuery();
            this.togglePanels();
            const { wrap, alignItems, justifyContent, alignSelf, alignContent, direction, stack, reverse } = data;
            if (this.isStack) {
                this.directionSelector.activeItem = direction;
                this.reverseSwitch.checked = reverse ?? (direction || '').includes('reverse') ?? false;
                if (wrap)
                    this.wrapSelector.activeItem = wrap;
                if (alignItems)
                    this.alignSelector.activeItem = alignItems;
                if (justifyContent)
                    this.justifySelector.activeItem = justifyContent;
                if (alignSelf)
                    this.alignSelfSelector.activeItem = alignSelf;
                if (alignContent)
                    this.alignContentSelector.activeItem = alignContent;
            }
            const { basis, grow, shrink } = stack || {};
            this.basisInput.value = basis ?? '';
            this.shrinkInput.value = shrink ?? '';
            this.growInput.value = grow ?? '';
            this.inputBasicFlex.value = grow ?? '';
            this.updateHighlight(data);
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, exports.DESIGNER_LAYOUT_PROPS);
        }
        updateHighlight(data) {
            if (Object.keys(this._data.default || {}).length === 0)
                return;
            const isStack = this.isStack;
            this.directionSelector.isChanged = !this.checkValues('direction', this.directionSelector.activeItem);
            this.justifySelector.isChanged = !this.checkValues('justifyContent', this.justifySelector.activeItem);
            this.alignContentSelector.isChanged = !this.checkValues('alignContent', this.alignContentSelector.activeItem);
            this.alignSelfSelector.isChanged = !this.checkValues('alignSelf', this.alignSelfSelector.activeItem);
            this.alignSelector.isChanged = !this.checkValues('alignItems', this.alignSelector.activeItem);
            this.wrapSelector.isChanged = !this.checkValues('wrap', this.wrapSelector.activeItem);
            const reverseResult = this.checkValues('reverse', this.reverseSwitch.checked);
            this.lblReverse.font = (0, config_2.getFont)(reverseResult);
            const stackResult = this.checkValues('stack', data.stack);
            this.lblFlex.font = (0, config_2.getFont)(stackResult);
            const stackChanged = isStack && (this.directionSelector.isChanged || this.justifySelector.isChanged || this.alignContentSelector.isChanged || this.alignSelfSelector.isChanged || this.alignSelector.isChanged || this.wrapSelector.isChanged || !reverseResult);
            const hasChanged = stackChanged || !stackResult;
            if (!this.isChecked)
                this.designerHeader.isChanged = hasChanged;
        }
        checkValues(prop, newVal) {
            let result = false;
            if (this.isChecked) {
                result = (0, utils_2.isSameValue)(this._data[prop] ?? this._data.default?.[prop], newVal);
            }
            else {
                result = (0, utils_2.isSameValue)(this._data.default?.[prop], newVal);
            }
            return result;
        }
        togglePanels() {
            const isStack = this.isStack;
            this.directionSelector.visible = this.name === 'i-stack';
            this.wrapSelector.visible = isStack;
            this.justifySelector.visible = isStack;
            this.alignSelector.visible = isStack;
            this.alignSelfSelector.visible = isStack;
            this.alignContentSelector.visible = isStack;
            this.pnlFlexItems.visible = isStack;
            this.pnlFlexContent.visible = isStack;
            this.pnlSelectedItem.visible = true;
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        onFlexChanged() {
            this.isBasicFlex = !this.isBasicFlex;
            this.lbTypeFlex.caption = this.isBasicFlex ? '$advanced' : '$basic';
            this.inputBasicFlex.enabled = this.inputBasicFlex.visible = this.isBasicFlex;
            this.wrapperAdvancedFlex.visible = !this.isBasicFlex;
        }
        onSelectChanged(type, value) {
            this.handleValueChanged(type, value);
        }
        onReverseSwitch(target) {
            this.handleValueChanged('reverse', this.reverseSwitch.checked);
        }
        onBasicFlexChanged(target) {
            const value = target.value;
            let stack = undefined;
            if (value) {
                stack = { basis: '0%', shrink: '1', grow: `${value}` };
                this.basisInput.value = '0%';
                this.shrinkInput.value = '1';
                this.growInput.value = value;
            }
            else {
                stack = { basis: '', shrink: '', grow: '' };
                this.basisInput.value = '';
                this.shrinkInput.value = '';
                this.growInput.value = '';
            }
            this.handleValueChanged('stack', stack);
        }
        onAdvFlexChanged(target, type) {
            const value = target.value;
            const stack = { ...(this._data.stack || {}), [type]: value };
            this.handleValueChanged('stack', stack);
        }
        handleValueChanged(type, value) {
            if (this.isChecked) {
                this.handleMediaQuery(type, value);
            }
            else {
                this._data[type] = value;
                if (this.onChanged)
                    this.onChanged(type, value);
            }
            this.renderUI();
        }
        handleMediaQuery(prop, value) {
            this._data.mediaQuery['properties'][prop] = value;
            if (this.onChanged)
                this.onChanged('mediaQueries', this._data.mediaQuery, prop);
        }
        onToggleMediaQuery(value) {
            this.renderUI(true);
        }
        onResetData() {
            if (this.isChecked) {
                const breakpoint = this._data.mediaQuery.properties;
                this._data.mediaQuery.properties = (({ stack, direction, wrap, alignItems, justifyContent, alignSelf, alignContent, reverse, ...o }) => o)(breakpoint);
                if (this.onChanged)
                    this.onChanged('mediaQueries', this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data));
                const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
                this._data = { ...clonedData, ...cloneDefault };
                for (let prop of exports.DESIGNER_LAYOUT_PROPS) {
                    if (this.onChanged)
                        this.onChanged(prop, this._data[prop]);
                }
            }
            this.renderUI(true);
        }
        init() {
            this.i18n.init({ ...index_4.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onUpdate = this.getAttribute('onUpdate', true) || this.onUpdate;
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$layout", tooltipText: "$with_flexbox_you_can_specify_the_layout_of_an_element_and_its_children_to_provide_a_consistent_layout_on_different_screen_sizes", onCollapse: this.onCollapse, hasMediaQuery: true, onReset: this.onResetData, onToggleMediaQuery: this.onToggleMediaQuery }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 }, visible: false },
                    this.$render("i-vstack", { id: "pnlFlexItems", gap: 8 },
                        this.$render("i-label", { caption: "$flex_items", font: { size: '0.875rem', transform: 'uppercase' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-vstack", { gap: 12 },
                            this.$render("i-hstack", { verticalAlignment: 'center', gap: "5px" },
                                this.$render("designer-selector", { id: "directionSelector", title: "$direction", stack: { grow: '1', shrink: '1' }, items: [
                                        { value: 'vertical', tooltip: '$column', type: 'direction', icon: { image: { url: assets_2.default.fullPath('img/designer/layout/column.svg') } } },
                                        { value: 'horizontal', tooltip: '$row', type: 'direction', rotate: 180, icon: { image: { url: assets_2.default.fullPath('img/designer/layout/column.svg') } } },
                                    ], onChanged: this.onSelectChanged }),
                                this.$render("i-hstack", { gap: 4, verticalAlignment: "center", stack: { grow: '1', shrink: '1' } },
                                    this.$render("i-switch", { id: "reverseSwitch", onChanged: this.onReverseSwitch }),
                                    this.$render("i-label", { id: "lblReverse", caption: "$reverse", font: { size: '0.75rem' } }))),
                            this.$render("designer-selector", { id: "alignSelector", title: "$align", items: (0, utils_2.getAlignProps)('alignItems'), onChanged: this.onSelectChanged }),
                            this.$render("designer-selector", { id: "justifySelector", title: "$justify", items: utils_2.justifyProps, onChanged: this.onSelectChanged }))),
                    this.$render("i-vstack", { id: "pnlSelectedItem", gap: 8, border: { top: { width: '1px', style: 'solid', color: Theme.divider } }, padding: { top: '1rem' } },
                        this.$render("i-label", { caption: "$selected_item", font: { size: '0.875rem' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-vstack", { gap: 12 },
                            this.$render("designer-selector", { id: "alignSelfSelector", title: "$align", items: (0, utils_2.getAlignProps)('alignSelf'), onChanged: this.onSelectChanged }),
                            this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'] },
                                this.$render("i-vstack", { gap: 8 },
                                    this.$render("i-label", { id: "lblFlex", caption: "$flex", font: { size: '0.75rem' }, lineHeight: "24px" }),
                                    this.$render("i-hstack", { gap: 2, width: "fit-content", verticalAlignment: "center", opacity: 0.7, cursor: "pointer", onClick: this.onFlexChanged },
                                        this.$render("i-label", { id: "lbTypeFlex", caption: "$advanced", font: { size: '0.825rem' } }),
                                        this.$render("i-icon", { name: "arrow-right", fill: "#fff", width: 12, height: 12 }))),
                                this.$render("i-vstack", null,
                                    this.$render("i-input", { id: "inputBasicFlex", inputType: "number", placeholder: "0", width: "100%", height: 24, border: {
                                            radius: 8,
                                            width: 0
                                        }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, class: index_css_6.textInputRight, onBlur: this.onBasicFlexChanged, onKeyUp: (target, event) => event.key === 'Enter' && this.onBasicFlexChanged(target) }),
                                    this.$render("i-grid-layout", { id: "wrapperAdvancedFlex", visible: false, gap: { column: 4 }, templateColumns: ['1fr', '1fr', '1fr'], maxWidth: 254, verticalAlignment: "center" },
                                        this.$render("i-vstack", { gap: 8, horizontalAlignment: "center" },
                                            this.$render("i-input", { id: "basisInput", inputType: "number", placeholder: "auto", width: "100%", height: 24, border: {
                                                    radius: 8,
                                                    width: 0
                                                }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, class: index_css_6.textInputRight, onBlur: (target) => this.onAdvFlexChanged(target, 'basis'), onKeyUp: (target, event) => event.key === 'Enter' && this.onAdvFlexChanged(target, 'basis') }),
                                            this.$render("i-label", { caption: "$basis", font: { size: '0.75rem' }, opacity: 0.7 })),
                                        this.$render("i-vstack", { gap: 8, horizontalAlignment: "center" },
                                            this.$render("i-input", { id: "growInput", inputType: "number", placeholder: "0", width: "100%", height: 24, border: {
                                                    radius: 8,
                                                    width: 0
                                                }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, class: index_css_6.textInputRight, onBlur: (target) => this.onAdvFlexChanged(target, 'grow'), onKeyUp: (target, event) => event.key === 'Enter' && this.onAdvFlexChanged(target, 'grow') }),
                                            this.$render("i-label", { caption: "$grow", font: { size: '0.75rem' }, opacity: 0.7 })),
                                        this.$render("i-vstack", { gap: 8, horizontalAlignment: "center" },
                                            this.$render("i-input", { id: "shrinkInput", inputType: "number", placeholder: "1", width: "100%", height: 24, border: {
                                                    radius: 8,
                                                    width: 0
                                                }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, class: index_css_6.textInputRight, onBlur: (target) => this.onAdvFlexChanged(target, 'shrink'), onKeyUp: (target, event) => event.key === 'Enter' && this.onAdvFlexChanged(target, 'shrink') }),
                                            this.$render("i-label", { caption: "$shrink", font: { size: '0.75rem' }, opacity: 0.7 }))))))),
                    this.$render("i-vstack", { id: "pnlFlexContent", gap: 8, border: { top: { width: '1px', style: 'solid', color: Theme.divider } }, padding: { top: '1rem' } },
                        this.$render("i-label", { caption: "$content", font: { size: '0.875rem', transform: 'uppercase' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-vstack", { gap: 12 },
                            this.$render("designer-selector", { id: "wrapSelector", title: "$wrap", items: [
                                    { value: 'nowrap', caption: 'None', type: 'wrap', isActive: true },
                                    { value: 'wrap', caption: 'Wrap', type: 'wrap' },
                                    { value: 'wrap-reverse', caption: 'Reverse', type: 'wrap' }
                                ], onChanged: this.onSelectChanged }),
                            this.$render("designer-selector", { id: "alignContentSelector", title: "$align", items: utils_2.alignContentProps, onChanged: this.onSelectChanged }))))));
        }
    };
    DesignerToolLayout = __decorate([
        (0, components_11.customElements)('designer-tool-layout')
    ], DesignerToolLayout);
    exports.default = DesignerToolLayout;
});
define("@scom/scom-designer/tools/background.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_12, index_css_7, utils_3, index_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_BACKGROUND_PROPS = void 0;
    const Theme = components_12.Styles.Theme.ThemeVars;
    exports.DESIGNER_BACKGROUND_PROPS = ['background'];
    let DesignerToolBackground = class DesignerToolBackground extends components_12.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.onTypeChanged = this.onTypeChanged.bind(this);
            this.onColorChanged = this.onColorChanged.bind(this);
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
            this.onResetData = this.onResetData.bind(this);
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        hasMediaQuery() {
            const breakpointProps = this._data?.mediaQuery?.properties || {};
            const hasProp = Object.hasOwnProperty.call(breakpointProps, 'background');
            return hasProp && !(0, utils_3.isSameValue)(this._data.background?.color || '', breakpointProps.background?.color || '');
        }
        setData(value) {
            this._data = value;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        renderUI(needUpdate) {
            let data = JSON.parse(JSON.stringify(this._data));
            const mediaBg = this._data.mediaQuery?.properties?.background;
            if (this.isChecked && mediaBg)
                data.background = mediaBg;
            this.designerHeader.isQueryChanged = !!this.hasMediaQuery();
            const { background = {} } = data;
            this.bgColor.value = background?.color || undefined;
            this.updateHighlight();
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, exports.DESIGNER_BACKGROUND_PROPS);
            // const typeItem = this.type ? backgroundOptions.find(item => item.value === this.type) : null;
            // this.bgSelect.selectedItem = typeItem || null;
        }
        updateHighlight() {
            let result = false;
            const value = this.bgColor.value || '';
            if (this.isChecked) {
                result = (0, utils_3.isSameValue)(this._data.background?.color || '', value);
            }
            else {
                result = (0, utils_3.isSameValue)(this._data.default?.background?.color || '', value);
                this.designerHeader.isChanged = !result;
            }
            this.lblColor.font = { size: '0.75rem', color: result ? Theme.text.primary : Theme.colors.success.main };
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        onTypeChanged(target) {
            // const selectedValue = (target.selectedItem as IComboItem).value;
            // this.type = selectedValue;
            // if (this.onChanged) this.onChanged('background', { color: this.color });
        }
        onColorChanged(target) {
            const value = target.value;
            this.handleValueChanged('background', { color: value });
        }
        handleValueChanged(type, value) {
            if (this.isChecked) {
                this.handleMediaQuery(type, value);
            }
            else {
                this._data[type] = value;
                if (this.onChanged)
                    this.onChanged(type, { color: value?.color || '' }, undefined);
            }
            this.renderUI();
        }
        handleMediaQuery(prop, value) {
            this._data.mediaQuery['properties'][prop] = value;
            if (this.onChanged)
                this.onChanged('mediaQueries', this._data.mediaQuery, prop);
        }
        onToggleMediaQuery(isChecked) {
            this.renderUI(true);
        }
        onResetData() {
            if (this.isChecked) {
                const breakpoint = this._data.mediaQuery.properties;
                this._data.mediaQuery.properties = (({ background, ...o }) => o)(breakpoint);
                if (this.onChanged)
                    this.onChanged('mediaQueries', this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data));
                const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
                this._data = { ...clonedData, ...cloneDefault };
                for (let prop of exports.DESIGNER_BACKGROUND_PROPS) {
                    if (this.onChanged)
                        this.onChanged(prop, this._data[prop]);
                }
            }
            this.renderUI(true);
        }
        init() {
            this.i18n.init({ ...index_5.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onUpdate = this.getAttribute('onUpdate', true) || this.onUpdate;
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$background", hasMediaQuery: true, tooltipText: "$set_a_background_color_or_image_for_the_element", onCollapse: this.onCollapse, onToggleMediaQuery: this.onToggleMediaQuery, onReset: this.onResetData }),
                this.$render("i-vstack", { id: "vStackContent", padding: { top: 16, bottom: 16, left: 12, right: 12 }, visible: false },
                    this.$render("i-grid-layout", { width: "100%", templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { id: "lblColor", caption: "$color", font: { size: '0.75rem' } }),
                        this.$render("i-hstack", { gap: 4, width: "100%", verticalAlignment: "center" },
                            this.$render("i-color", { id: "bgColor", onChanged: this.onColorChanged, class: index_css_7.customColorStyled }),
                            this.$render("i-combo-box", { id: "bgSelect", width: "calc(100% - 28px)", items: utils_3.backgroundOptions, placeholder: "$type_or_select_a_color", onChanged: this.onTypeChanged }))))));
        }
    };
    DesignerToolBackground = __decorate([
        (0, components_12.customElements)('designer-tool-background')
    ], DesignerToolBackground);
    exports.default = DesignerToolBackground;
});
define("@scom/scom-designer/tools/size.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_13, index_css_8, utils_4, index_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_SIZE_PROPS = void 0;
    const Theme = components_13.Styles.Theme.ThemeVars;
    const sizes = [
        {
            id: 'inputWidth',
            caption: 'Width',
            prop: 'width'
        },
        {
            id: 'inputHeight',
            caption: 'Height',
            prop: 'height'
        },
        {
            id: 'inputMinWidth',
            caption: 'Min W',
            prop: 'minWidth'
        },
        {
            id: 'inputMinHeight',
            caption: 'Min H',
            prop: 'minHeight'
        },
        {
            id: 'inputMaxWidth',
            caption: 'Max W',
            prop: 'maxWidth'
        },
        {
            id: 'inputMaxHeight',
            caption: 'Max H',
            prop: 'maxHeight'
        }
    ];
    exports.DESIGNER_SIZE_PROPS = ['width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight'];
    let DesignerToolSize = class DesignerToolSize extends components_13.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.currentProp = '';
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
            this.onResetData = this.onResetData.bind(this);
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        hasMediaQuery() {
            const breakpointProps = this._data.mediaQuery?.properties || {};
            const hasChanged = exports.DESIGNER_SIZE_PROPS.find(prop => {
                const hasProp = Object.hasOwnProperty.call(breakpointProps, prop);
                if (hasProp) {
                    return !(0, utils_4.isSameValue)(this._data?.[prop] ?? this._data.default?.[prop], breakpointProps?.[prop]);
                }
                return false;
            });
            return !!hasChanged;
        }
        setData(value) {
            this._data = value;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI(needUpdate = false) {
            let data = this._data;
            if (this.isChecked) {
                const breakpointProps = this._data.mediaQuery?.properties || {};
                data = { ...data, ...breakpointProps };
            }
            this.designerHeader.isQueryChanged = !!this.hasMediaQuery();
            this.pnlSizes.clearInnerHTML();
            let hasChanged = false;
            for (let size of sizes) {
                const parsedValue = (0, utils_4.parseNumberValue)(data[size.prop]);
                const isSame = this.checkValues(size.prop, data[size.prop]);
                if (!isSame && !hasChanged)
                    hasChanged = true;
                const elm = (this.$render("i-hstack", { verticalAlignment: "center" },
                    this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: size.caption, font: { size: '0.75rem', color: isSame ? Theme.text.primary : Theme.colors.success.main } }),
                        this.$render("i-hstack", { verticalAlignment: "center", width: 80, border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                            this.$render("i-input", { inputType: "number", placeholder: "auto", background: { color: 'transparent' }, width: "calc(100% - 1.5rem)", height: 24, border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, class: `${index_css_8.textInputRight} ${index_css_8.bgInputTransparent}`, value: parsedValue.value, onBlur: (target) => this.onValueChanged(target, size.prop), onKeyUp: (target, event) => event.key === 'Enter' && this.onValueChanged(target, size.prop) }),
                            this.$render("i-label", { caption: parsedValue.unit, font: { size: '0.675rem' }, cursor: "pointer", width: 24, height: 24, lineHeight: "1.5rem", opacity: 1, border: {
                                    left: {
                                        width: 1,
                                        style: 'solid',
                                        color: Theme.action.focus
                                    }
                                }, class: `text-center ${index_css_8.unitStyled}`, onClick: (target, event) => this.onShowUnits(target, event, size.prop) })))));
                this.pnlSizes.append(elm);
            }
            if (!this.isChecked)
                this.designerHeader.isChanged = hasChanged;
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, exports.DESIGNER_SIZE_PROPS);
        }
        checkValues(prop, newVal) {
            let result = false;
            const defaultValue = this._data.default?.[prop];
            if (this.isChecked) {
                result = (0, utils_4.isSameValue)(this._data[prop] || defaultValue, newVal || defaultValue);
            }
            else {
                result = (0, utils_4.isSameValue)(this._data.default?.[prop], newVal || defaultValue);
            }
            return result;
        }
        onValueChanged(target, prop) {
            const nextLabel = target.nextSibling;
            const unit = nextLabel?.caption || 'px';
            const newValue = target.value;
            const valueStr = newValue !== '' ? `${newValue}${unit}` : 'auto';
            this.handleValueChanged(prop, valueStr);
        }
        handleValueChanged(type, value) {
            if (this.isChecked) {
                this.handleMediaQuery(type, value);
            }
            else {
                this._data[type] = value;
                if (this.onChanged)
                    this.onChanged(type, value);
            }
            this.renderUI();
        }
        handleMediaQuery(prop, value) {
            this._data.mediaQuery['properties'][prop] = value;
            if (this.onChanged)
                this.onChanged('mediaQueries', this._data.mediaQuery, prop);
        }
        onToggleMediaQuery(value) {
            this.renderUI(true);
        }
        onResetData() {
            if (this.isChecked) {
                const breakpoint = this._data.mediaQuery.properties;
                this._data.mediaQuery.properties = (({ width, height, minWidth, minHeight, maxWidth, maxHeight, ...o }) => o)(breakpoint);
                if (this.onChanged)
                    this.onChanged('mediaQueries', this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data));
                const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
                this._data = { ...clonedData, ...cloneDefault };
                for (let prop of exports.DESIGNER_SIZE_PROPS) {
                    if (this.onChanged)
                        this.onChanged(prop, this._data[prop]);
                }
            }
            this.renderUI(true);
        }
        onShowUnits(target, event, prop) {
            this.currentLabel = target;
            this.currentProp = prop;
            // const rect = target.getBoundingClientRect();
            // const { x, y } = rect;
            // const mdWrapper = this.mdUnits.querySelector('.modal-wrapper') as HTMLElement;
            // mdWrapper.style.top = `${y + 24}px`;
            // mdWrapper.style.left = `${x}px`;
            // mdWrapper.style.position = 'fixed';
            this.mdUnits.linkTo = target;
            this.mdUnits.visible = true;
        }
        async initModalUnits() {
            this.mdUnits = await components_13.Modal.create({
                visible: false,
                showBackdrop: false,
                minWidth: '1.5rem',
                height: 'auto',
                popupPlacement: 'bottom'
            });
            const mdWrapper = this.mdUnits.querySelector('.modal-wrapper');
            mdWrapper.style.width = '1.5rem';
            mdWrapper.style.paddingInline = '0px';
            const onUnitChanged = (value) => {
                const input = this.currentLabel.previousSibling;
                const num = input?.value ?? (0, utils_4.parseNumberValue)(this._data[this.currentProp])?.value;
                const valueStr = num === '' ? 'auto' : `${num}${value}`;
                this._data[this.currentProp] = valueStr;
                if (this.onChanged)
                    this.onChanged(this.currentProp, this._data[this.currentProp]);
                this.currentLabel.caption = value;
                this.mdUnits.visible = false;
            };
            const itemUnits = new components_13.VStack(undefined, { gap: 8, border: { radius: 8 } });
            itemUnits.appendChild(this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", caption: "px", font: { size: '0.625rem' }, onClick: () => onUnitChanged('px') }));
            itemUnits.appendChild(this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", caption: "%", font: { size: '0.625rem' }, onClick: () => onUnitChanged('%') }));
            this.mdUnits.item = itemUnits;
            document.body.appendChild(this.mdUnits);
        }
        init() {
            this.i18n.init({ ...index_6.propertiesJson });
            super.init();
            this.initModalUnits();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$size", tooltipText: "$set_the_width_and_height_of_the_element", hasMediaQuery: true, onCollapse: this.onCollapse, onToggleMediaQuery: this.onToggleMediaQuery, onReset: this.onResetData }),
                this.$render("i-vstack", { id: "vStackContent", padding: { top: 16, bottom: 16, left: 12, right: 12 }, visible: false },
                    this.$render("i-grid-layout", { id: "pnlSizes", gap: { column: '1rem', row: '0.5rem' }, columnsPerRow: 2 }))));
        }
    };
    DesignerToolSize = __decorate([
        (0, components_13.customElements)('designer-tool-size')
    ], DesignerToolSize);
    exports.default = DesignerToolSize;
});
define("@scom/scom-designer/tools/modal-spacing.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_14, index_css_9, utils_5, index_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_14.Styles.Theme.ThemeVars;
    let DesignerToolModalSpacing = class DesignerToolModalSpacing extends components_14.Module {
        constructor(parent, options) {
            super(parent, options);
            this.unit = 'px';
            this.spacing = {};
            this.config = {};
        }
        async initModal() {
            this.modal = await components_14.Modal.create({
                visible: false,
                showBackdrop: false,
                minWidth: '16rem',
                height: 'auto',
                popupPlacement: 'bottom'
            });
            const onShowUnits = () => {
                this.vStackIndUnits.visible = true;
                this.vStackIndUnits.display = 'flex';
            };
            const onUnitChanged = (value) => {
                this.lbIndUnit.caption = value;
                this.unit = value;
                const { type, position } = this.spacing;
                const valStr = this.inputValue.value !== '' ? `${this.inputValue.value}${this.unit}` : '';
                if (this.onChanged)
                    this.onChanged(type, position, valStr);
                this.vStackIndUnits.visible = false;
            };
            const onValueChanged = (target) => {
                const value = target.value;
                const { type, position } = this.spacing;
                const valueStr = value !== '' ? `${value}${this.unit}` : '';
                if (this.onChanged)
                    this.onChanged(type, position, valueStr);
            };
            const item = new components_14.VStack(undefined, { gap: 8, border: { radius: 8 } });
            const { breakpointText, iconName } = this.config;
            item.appendChild(this.$render("i-vstack", { gap: 12 },
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center" },
                    this.$render("i-icon", { id: "iconTitle", name: iconName, width: 12, height: 12 }),
                    this.$render("i-label", { id: "lbTitle", caption: this.title, font: { size: '0.875rem', bold: true, transform: 'capitalize' } })),
                this.$render("i-label", { id: "lbBreakpoint", caption: breakpointText, font: { size: '0.75rem' }, opacity: 0.8 }),
                this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider } }),
                this.$render("i-grid-layout", { position: "relative", templateColumns: ['100px', 'auto'], verticalAlignment: "center" },
                    this.$render("i-label", { caption: "$static_value", font: { size: '0.75rem' } }),
                    this.$render("i-hstack", { verticalAlignment: "center", width: 80, border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                        this.$render("i-input", { id: "inputValue", inputType: "number", placeholder: "auto", background: { color: 'transparent' }, width: "calc(100% - 24px)", height: 24, border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, class: `${index_css_9.textInputRight} ${index_css_9.bgInputTransparent}`, onBlur: onValueChanged, onKeyUp: (target, event) => event.key === 'Enter' && onValueChanged(target), onClick: () => { this.vStackIndUnits.visible = false; } }),
                        this.$render("i-label", { id: "lbIndUnit", caption: "px", font: { size: '0.675rem', color: Theme.input.fontColor }, cursor: "pointer", width: 24, height: 24, lineHeight: "24px", opacity: 1, border: {
                                left: {
                                    width: 1,
                                    style: 'solid',
                                    color: Theme.action.focus
                                }
                            }, class: `text-center ${index_css_9.unitStyled}`, onClick: () => onShowUnits() })),
                    this.$render("i-vstack", { id: "vStackIndUnits", gap: 8, position: "absolute", width: 24, top: 24, left: 156, zIndex: 100, background: { color: Theme.background.modal } },
                        this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", caption: "px", font: { size: '0.625rem' }, padding: { top: 4, bottom: 4 }, onClick: () => onUnitChanged('px') }),
                        this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", caption: "%", font: { size: '0.625rem' }, padding: { top: 4, bottom: 4 }, onClick: () => onUnitChanged('%') }))),
                this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider } }),
                this.$render("i-grid-layout", { templateColumns: ['100px', 'auto'], verticalAlignment: "center" },
                    this.$render("i-label", { caption: "$dynamic_value", font: { size: '0.75rem' } }),
                    this.$render("i-combo-box", { items: [], placeholder: "$select", onClick: () => { this.vStackIndUnits.visible = false; } })),
                this.$render("i-label", { id: "lbNote", caption: "$if_configured_will_be_applied_to_mobile_or_larger_breakpoints_if_you_configure_a_static_style_value_it_will_be_used_as_a_fallback_if_the_data_evaluates_to_undefined", font: { size: '0.675rem' }, opacity: 0.8 })));
            this.modal.item = item;
            document.body.appendChild(this.modal);
        }
        updateHeader() {
            const { value } = this.spacing;
            const { breakpointText, iconName, title } = this.config;
            this.lbTitle.caption = title;
            this.lbBreakpoint.caption = breakpointText;
            this.iconTitle.name = iconName;
            const parsedValue = (0, utils_5.parseNumberValue)(value);
            this.lbIndUnit.caption = parsedValue.unit;
            this.inputValue.value = parsedValue.value;
        }
        onShowModal(target, value, config) {
            if (this.vStackIndUnits)
                this.vStackIndUnits.visible = false;
            const parseValue = (0, utils_5.parseNumberValue)(value.value);
            const unit = parseValue?.unit || 'px';
            this.unit = unit;
            this.inputValue.value = parseValue?.value ?? '';
            this.lbIndUnit.caption = unit;
            this.config = config || {};
            this.spacing = value || {};
            this.updateHeader();
            // const rect = target.getBoundingClientRect();
            // const { x, y } = rect;
            // let pageX = x;
            // let pageY = y;
            // if (x + 321 >= innerWidth) {
            //   pageX = innerWidth - 321;
            // }
            // if (y + 240 >= innerHeight) {
            //   pageY = innerHeight - 240;
            // }
            // const mdWrapper = this.modal.querySelector('.modal-wrapper') as HTMLElement;
            // mdWrapper.style.top = `${pageY + 24}px`;
            // mdWrapper.style.left = `${pageX}px`;
            // mdWrapper.style.position = 'fixed';
            this.modal.linkTo = target;
            this.modal.visible = true;
        }
        init() {
            this.i18n.init({ ...index_7.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.spacing = this.getAttribute('data', true, {});
            this.config = this.getAttribute('config', true, {});
            this.initModal();
        }
        render() {
            return (this.$render("i-panel", null));
        }
    };
    DesignerToolModalSpacing = __decorate([
        (0, components_14.customElements)('designer-tool-modal-spacing')
    ], DesignerToolModalSpacing);
    exports.default = DesignerToolModalSpacing;
});
define("@scom/scom-designer/tools/margins-padding.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/helpers/store.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_15, index_css_10, utils_6, config_3, store_3, index_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_SPACING_PROPS = void 0;
    const Theme = components_15.Styles.Theme.ThemeVars;
    exports.DESIGNER_SPACING_PROPS = ['margin', 'padding'];
    let DesignerToolMarginsAndPadding = class DesignerToolMarginsAndPadding extends components_15.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.currentProp = '';
            this._idvChanged = false;
            this.onSpacingChanged = this.onSpacingChanged.bind(this);
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
            this.onResetData = this.onResetData.bind(this);
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        get currentData() {
            let data = JSON.parse(JSON.stringify(this._data));
            if (this.isChecked) {
                const { margin, padding } = this._data.mediaQuery?.properties || {};
                if (margin)
                    data.margin = { ...(data?.margin || {}), ...margin };
                if (padding)
                    data.padding = { ...(data?.padding || {}), ...padding };
            }
            return data;
        }
        hasMediaQuery() {
            const breakpointProps = this._data.mediaQuery?.properties || {};
            const hasChanged = exports.DESIGNER_SPACING_PROPS.find(prop => {
                const hasProp = Object.hasOwnProperty.call(breakpointProps, prop);
                if (hasProp) {
                    return !(0, utils_6.isSameValue)(this._data?.[prop] ?? this._data.default?.[prop], breakpointProps[prop]);
                }
                return false;
            });
            return !!hasChanged;
        }
        setData(data) {
            this._data = data;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI(needUpdate = false) {
            const data = this.currentData;
            this._idvChanged = false;
            this.designerHeader.isQueryChanged = !!this.hasMediaQuery();
            this.updateButtons(data);
            this.resetInputs(data);
            this.updateHighlight(data);
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, exports.DESIGNER_SPACING_PROPS);
        }
        resetInputs(data) {
            const { padding, margin } = data;
            const paddingValues = Object.values(padding || {});
            const marginValues = Object.values(margin || {});
            if (paddingValues.length === 0) {
                this.paddingInput.value = '';
            }
            else if (paddingValues.length === 4 && paddingValues.every(v => v === paddingValues[0])) {
                this.paddingInput.value = `${(0, utils_6.parseNumberValue)(paddingValues[0])?.value ?? ''}`;
            }
            if (marginValues.length === 0) {
                this.marginInput.value = '';
            }
            else if (marginValues.length === 4 && marginValues.every(v => v === marginValues[0])) {
                this.marginInput.value = `${(0, utils_6.parseNumberValue)(marginValues[0])?.value ?? ''}`;
            }
        }
        updateHighlight(data) {
            if (Object.keys(this._data.default || {}).length === 0)
                return;
            const isSameMargin = this.checkValues('margin', data.margin);
            const isSamePadding = this.checkValues('padding', data.padding);
            this.lblMargin.font = (0, config_3.getFont)(isSameMargin);
            this.lblPadding.font = (0, config_3.getFont)(isSamePadding);
            const hasChanged = this._idvChanged || !isSameMargin || !isSamePadding;
            if (!this.isChecked)
                this.designerHeader.isChanged = hasChanged;
        }
        checkValues(prop, newVal) {
            let result = false;
            if (this.isChecked) {
                result = (0, utils_6.isSameValue)(this._data[prop] ?? this._data.default?.[prop], newVal);
            }
            else {
                result = (0, utils_6.isSameValue)(this._data.default?.[prop], newVal);
            }
            return result;
        }
        updateButtons(data) {
            const buttons = this.vStackIndividual.querySelectorAll('i-button');
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                const id = button.id || '';
                const match = /^(margin|padding)(.*)/.exec(id);
                if (match?.length) {
                    const position = (match[2] || '').toLowerCase();
                    const valueStr = data[match[1]]?.[position];
                    const parseData = (0, utils_6.parseNumberValue)(valueStr);
                    let isSame = true;
                    if (this.isChecked) {
                        isSame = (0, utils_6.isSameValue)(this._data[match[1]]?.[position] || '', valueStr || '');
                    }
                    else {
                        isSame = !valueStr;
                        if (!isSame && !this._idvChanged)
                            this._idvChanged = true;
                    }
                    button.border.color = isSame ? Theme.action.selectedBackground : Theme.colors.success.main;
                    button.caption = parseData?.value === '' ? 'auto' : `${parseData?.value}${parseData?.unit}`;
                }
            }
        }
        onOverallChanged(target, prop) {
            const nextLabel = target.nextSibling;
            const targetVal = target.value;
            const unit = nextLabel?.caption || 'px';
            const value = targetVal === '' ? '0px' : `${targetVal}${unit}`;
            this.handleValueChanged(prop, { top: value, right: value, bottom: value, left: value });
        }
        onShowUnitsModal(target, prop) {
            this.currentLabel = target;
            this.currentProp = prop;
            // const rect = target.getBoundingClientRect();
            // const { x, y } = rect;
            // const mdWrapper = this.mdUnits.querySelector('.modal-wrapper') as HTMLElement;
            // mdWrapper.style.top = `${y + 24}px`;
            // mdWrapper.style.left = `${x}px`;
            // mdWrapper.style.position = 'fixed';
            this.mdUnits.linkTo = target;
            this.mdUnits.visible = true;
        }
        async initModalUnits() {
            this.mdUnits = await components_15.Modal.create({
                visible: false,
                showBackdrop: false,
                minWidth: '1.5rem',
                height: 'auto',
                popupPlacement: 'bottom'
            });
            const mdWrapper = this.mdUnits.querySelector('.modal-wrapper');
            mdWrapper.style.width = '1.5rem';
            mdWrapper.style.paddingInline = '0px';
            const onUnitChanged = (value) => {
                this.currentLabel.caption = value;
                const valueObj = this._data[this.currentProp];
                if (valueObj) {
                    for (let prop in valueObj) {
                        const numValue = (0, utils_6.parseNumberValue)(valueObj[prop])?.value;
                        const valueStr = numValue === '' ? '' : `${numValue}${value}`;
                        this.handleValueChanged(this.currentProp, valueStr, prop);
                    }
                }
                this.mdUnits.visible = false;
            };
            const itemUnits = new components_15.VStack(undefined, { gap: 8, border: { radius: 8 } });
            itemUnits.appendChild(this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", caption: "px", font: { size: '0.625rem' }, onClick: () => onUnitChanged('px') }));
            itemUnits.appendChild(this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", caption: "%", font: { size: '0.625rem' }, onClick: () => onUnitChanged('%') }));
            this.mdUnits.item = itemUnits;
            document.body.appendChild(this.mdUnits);
        }
        onShowSpacingModal(target, type, position) {
            const data = this.currentData;
            const spacing = {
                type,
                position,
                value: data[type]?.[position] ?? ''
            };
            const breakpoint = (0, config_3.getBreakpointInfo)((0, store_3.getBreakpoint)());
            const key = (0, utils_6.getTranslationKey)(`${type} ${position}`);
            const config = {
                title: this.i18n.get(key),
                iconName: breakpoint?.icon,
                breakpointText: this.i18n.get('configure_a_value_for_screen_sizes_or_larger', { breakpoint: breakpoint.name ? this.i18n.get(breakpoint.name) : '' })
            };
            this.mdSpacing.onShowModal(target, spacing, config);
        }
        onSpacingChanged(type, position, value) {
            if (type === 'margin' && value === '')
                value = 'auto';
            this.handleValueChanged(type, value, position);
        }
        handleValueChanged(type, value, position) {
            if (this.isChecked) {
                this.handleMediaQuery(type, value, position);
            }
            else {
                if (position) {
                    if (!this._data[type])
                        this._data[type] = {};
                    this._data[type][position] = value;
                }
                else {
                    this._data[type] = value;
                }
                if (this.onChanged)
                    this.onChanged(type, this._data[type]);
            }
            this.renderUI();
        }
        handleMediaQuery(prop, value, position) {
            if (position) {
                const propObj = this._data.mediaQuery['properties'][prop] || {};
                propObj[position] = value;
                this._data.mediaQuery['properties'][prop] = propObj;
            }
            else {
                this._data.mediaQuery['properties'][prop] = value;
            }
            if (this.onChanged)
                this.onChanged('mediaQueries', this._data.mediaQuery, prop);
        }
        onToggleMediaQuery(value) {
            this.renderUI(true);
        }
        onResetData() {
            if (this.isChecked) {
                const breakpoint = this._data.mediaQuery.properties;
                this._data.mediaQuery.properties = (({ margin, padding, ...o }) => o)(breakpoint);
                if (this.onChanged)
                    this.onChanged('mediaQueries', this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data));
                const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
                this._data = { ...clonedData, ...cloneDefault };
                for (let prop of exports.DESIGNER_SPACING_PROPS) {
                    if (this.onChanged)
                        this.onChanged(prop, this._data[prop]);
                }
            }
            this.renderUI(true);
        }
        init() {
            this.i18n.init({ ...index_8.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.initModalUnits();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$margins_and_padding", hasMediaQuery: true, tooltipText: "$margins_create_extra_space_around_an_element_while_padding_creates_extra_space_within_an_element", onCollapse: this.onCollapse, onToggleMediaQuery: this.onToggleMediaQuery, onReset: this.onResetData }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 }, visible: false },
                    this.$render("i-vstack", { gap: 8 },
                        this.$render("i-label", { caption: "$overall", font: { size: '0.875rem', transform: 'uppercase' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-hstack", { gap: 16, verticalAlignment: "center" },
                            this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                                this.$render("i-label", { id: "lblMargin", caption: "$margin", font: { size: '0.75rem' } }),
                                this.$render("i-hstack", { verticalAlignment: "center", width: 80, border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                    this.$render("i-input", { id: "marginInput", inputType: "number", placeholder: "auto", background: { color: 'transparent' }, width: "calc(100% - 1.5rem)", height: 24, border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, onBlur: (target) => this.onOverallChanged(target, 'margin'), onKeyUp: (target, event) => event.key === 'Enter' && this.onOverallChanged(target, 'margin'), class: `${index_css_10.textInputRight} ${index_css_10.bgInputTransparent}` }),
                                    this.$render("i-label", { caption: "px", font: { size: '0.675rem' }, cursor: "pointer", width: 24, height: 24, lineHeight: "1.5rem", opacity: 1, border: {
                                            left: {
                                                width: 1,
                                                style: 'solid',
                                                color: Theme.action.focus
                                            }
                                        }, class: `text-center ${index_css_10.unitStyled}`, onClick: (target) => this.onShowUnitsModal(target, 'margin') }))),
                            this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                                this.$render("i-label", { id: "lblPadding", caption: "$padding", font: { size: '0.75rem' } }),
                                this.$render("i-hstack", { verticalAlignment: "center", width: 80, border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                    this.$render("i-input", { id: "paddingInput", inputType: "number", placeholder: "auto", background: { color: 'transparent' }, width: "calc(100% - 1.5rem)", height: 24, border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, onBlur: (target) => this.onOverallChanged(target, 'padding'), onKeyUp: (target, event) => event.key === 'Enter' && this.onOverallChanged(target, 'padding'), class: `${index_css_10.textInputRight} ${index_css_10.bgInputTransparent}` }),
                                    this.$render("i-label", { caption: "px", font: { size: '0.675rem' }, cursor: "pointer", width: 24, height: 24, lineHeight: "1.5rem", opacity: 1, border: {
                                            left: {
                                                width: 1,
                                                style: 'solid',
                                                color: Theme.action.focus
                                            }
                                        }, class: `text-center ${index_css_10.unitStyled}`, onClick: (target) => this.onShowUnitsModal(target, 'padding') }))))),
                    this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider } }),
                    this.$render("i-vstack", { id: "vStackIndividual", gap: 8 },
                        this.$render("i-label", { caption: "$individual", font: { size: '0.875rem', transform: 'uppercase' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-vstack", { gap: 8, width: "100%", horizontalAlignment: "center" },
                            this.$render("i-hstack", { position: "relative", width: "100%", horizontalAlignment: "center" },
                                this.$render("i-label", { caption: "$margin", font: { size: '0.75rem' }, position: "absolute", top: 0, left: 0 }),
                                this.$render("i-button", { id: "marginTop", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'margin', 'top') })),
                            this.$render("i-hstack", { width: "100%", verticalAlignment: "center", horizontalAlignment: "space-between" },
                                this.$render("i-button", { id: "marginLeft", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'margin', 'left') }),
                                this.$render("i-panel", { position: "relative", width: 200, padding: { top: 10, bottom: 10, left: 10, right: 10 }, border: { width: 4, style: 'solid', color: Theme.action.selectedBackground } },
                                    this.$render("i-label", { caption: "$padding", font: { size: '0.75rem' }, position: "absolute", top: 10, left: 10 }),
                                    this.$render("i-vstack", { horizontalAlignment: "center" },
                                        this.$render("i-button", { id: "paddingTop", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'padding', 'top') }),
                                        this.$render("i-hstack", { width: "100%", horizontalAlignment: "space-between" },
                                            this.$render("i-button", { id: "paddingLeft", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'padding', 'left') }),
                                            this.$render("i-button", { id: "paddingRight", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'padding', 'right') })),
                                        this.$render("i-button", { id: "paddingBottom", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'padding', 'bottom') }))),
                                this.$render("i-button", { id: "marginRight", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'margin', 'right') })),
                            this.$render("i-button", { id: "marginBottom", caption: "auto", class: index_css_10.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'margin', 'bottom') })))),
                this.$render("designer-tool-modal-spacing", { id: "mdSpacing", onChanged: this.onSpacingChanged })));
        }
    };
    DesignerToolMarginsAndPadding = __decorate([
        (0, components_15.customElements)('designer-tool-margins-padding')
    ], DesignerToolMarginsAndPadding);
    exports.default = DesignerToolMarginsAndPadding;
});
define("@scom/scom-designer/tools/position.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/store.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_16, index_css_11, utils_7, store_4, config_4, index_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_POSITION_PROPS = void 0;
    const Theme = components_16.Styles.Theme.ThemeVars;
    exports.DESIGNER_POSITION_PROPS = ['position', 'top', 'right', 'bottom', 'left', 'overflow', 'zIndex', 'display'];
    const displayOptions = [
        { value: 'block', label: 'Block' },
        { value: 'inline', label: 'Inline' },
        { value: 'inline-block', label: 'Inline Block' },
        { value: 'inline-flex', label: 'Inline Flex' },
        { value: 'flex', label: 'Flex' },
        { value: 'none', label: 'None' },
        { value: 'initial', label: 'Initial' },
        { value: 'inherit', label: 'Inherit' }
    ];
    let DesignerToolPosition = class DesignerToolPosition extends components_16.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this._idvChanged = false;
            this.onSpacingChanged = this.onSpacingChanged.bind(this);
            this.onSelectChanged = this.onSelectChanged.bind(this);
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
            this.onResetData = this.onResetData.bind(this);
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        get currentData() {
            let data = this._data;
            if (this.isChecked) {
                const breakpointProps = this._data.mediaQuery?.properties || {};
                data = { ...data, ...breakpointProps };
            }
            return data;
        }
        hasMediaQuery() {
            const breakpointProps = this._data.mediaQuery?.properties || {};
            const hasChanged = exports.DESIGNER_POSITION_PROPS.find(prop => {
                const hasProp = Object.hasOwnProperty.call(breakpointProps, prop);
                if (hasProp) {
                    const oldVal = prop === 'overflow' ? this._data[prop]?.y ?? this._data.default?.[prop]?.y : this._data[prop] ?? this._data.default?.[prop];
                    const newVal = prop === 'overflow' ? breakpointProps?.[prop]?.y : breakpointProps?.[prop];
                    return !(0, utils_7.isSameValue)(oldVal, newVal);
                }
                return false;
            });
            return !!hasChanged;
        }
        setData(data) {
            this._data = data;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI(needUpdate = false) {
            let data = this.currentData;
            this.designerHeader.isQueryChanged = !!this.hasMediaQuery();
            this._idvChanged = false;
            const { zIndex, position, overflow, display } = data;
            this.zIndexInput.value = zIndex !== undefined ? `${zIndex}` : '';
            this.posSelector.activeItem = position || '';
            this.overflowSelector.activeItem = overflow?.y || '';
            const displayItem = display ? displayOptions.find(d => d.value === display) : undefined;
            this.displaySelect.selectedItem = displayItem;
            this.updateButtons(data);
            this.updateHighlight();
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, exports.DESIGNER_POSITION_PROPS);
        }
        updateHighlight() {
            if (Object.keys(this._data.default || {}).length === 0)
                return;
            this.posSelector.isChanged = !this.checkValues('position', this.posSelector.activeItem);
            this.overflowSelector.isChanged = !this.checkValues('overflow', this.overflowSelector.activeItem);
            const zResult = this.checkValues('zIndex', this.zIndexInput.value);
            this.lblZIndex.font = (0, config_4.getFont)(zResult);
            const display = (this.displaySelect.selectedItem)?.value;
            const dResult = this.checkValues('display', display);
            this.lblDisplay.font = (0, config_4.getFont)(dResult);
            const hasChanged = this._idvChanged || !zResult || this.posSelector.isChanged || this.overflowSelector.isChanged || !dResult;
            if (!this.isChecked)
                this.designerHeader.isChanged = hasChanged;
        }
        checkValues(prop, newVal) {
            let pResult = false;
            let oldValue = '';
            if (this.isChecked) {
                oldValue = prop === 'overflow' ? (this._data[prop]?.y ?? this._data.default?.[prop]?.y) : (this._data[prop] ?? this._data.default?.[prop]);
                pResult = (0, utils_7.isSameValue)(oldValue, newVal ?? '');
            }
            else {
                oldValue = prop === 'overflow' ? this._data.default?.[prop]?.y : this._data.default?.[prop];
                pResult = (0, utils_7.isSameValue)(oldValue, newVal ?? '');
            }
            return pResult;
        }
        updateButtons(data) {
            const buttons = this.pnlPosition.querySelectorAll('i-button');
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                const id = button.id || '';
                const parseData = (0, utils_7.parseNumberValue)(data[id]);
                let isSame = true;
                if (this.isChecked) {
                    isSame = (0, utils_7.isSameValue)(this._data[id] || 'auto', data[id] || 'auto');
                }
                else {
                    isSame = (data[id] || 'auto') === this._data.default[id];
                    if (!isSame && !this._idvChanged)
                        this._idvChanged = true;
                }
                button.border.color = isSame ? Theme.action.selectedBackground : Theme.colors.success.main;
                button.caption = parseData?.value === '' ? 'auto' : `${parseData?.value}${parseData?.unit}`;
            }
        }
        onShowModal(target, position) {
            let data = this.currentData;
            const spacing = {
                type: '',
                position,
                value: data[position] || ''
            };
            const breakpoint = (0, config_4.getBreakpointInfo)((0, store_4.getBreakpoint)());
            const key = (0, utils_7.getTranslationKey)(`${position}`);
            const config = {
                title: this.i18n.get(key),
                iconName: breakpoint?.icon,
                breakpointText: this.i18n.get('configure_a_value_for_screen_sizes_or_larger', { breakpoint: breakpoint.name ? this.i18n.get(breakpoint.name) : '' })
            };
            this.mdSpacing.onShowModal(target, spacing, config);
        }
        onSelectChanged(type, value) {
            let updated = value;
            if (type === 'overflow') {
                updated = { x: 'hidden', y: value };
            }
            this.handleValueChanged(type, updated);
        }
        onSpacingChanged(type, position, value) {
            this.handleValueChanged(position, value === '' ? 'auto' : value);
        }
        onDisplayChanged(target) {
            const selectedItem = target.selectedItem;
            this.handleValueChanged('display', selectedItem?.value || '');
        }
        handleValueChanged(type, value) {
            if (this.isChecked) {
                this.handleMediaQuery(type, value);
            }
            else {
                this._data[type] = value;
                if (this.onChanged)
                    this.onChanged(type, value);
            }
            this.renderUI();
        }
        handleMediaQuery(prop, value) {
            this._data.mediaQuery['properties'][prop] = value;
            if (this.onChanged)
                this.onChanged('mediaQueries', this._data.mediaQuery, prop);
        }
        onToggleMediaQuery(value) {
            this.renderUI(true);
        }
        onResetData() {
            if (this.isChecked) {
                const breakpoint = this._data.mediaQuery.properties;
                this._data.mediaQuery.properties = (({ position, top, right, bottom, left, overflow, zIndex, ...o }) => o)(breakpoint);
                if (this.onChanged)
                    this.onChanged('mediaQueries', this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data));
                const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
                this._data = { ...clonedData, ...cloneDefault };
                for (let prop of exports.DESIGNER_POSITION_PROPS) {
                    if (this.onChanged)
                        this.onChanged(prop, this._data[prop]);
                }
            }
            this.renderUI(true);
        }
        init() {
            this.i18n.init({ ...index_9.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onUpdate = this.getAttribute('onUpdate', true) || this.onUpdate;
            this.position = 'relative';
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$position_and_display", tooltipText: "$define_a_relative_or_absolute_position_from_the_parent_element", hasMediaQuery: true, onCollapse: this.onCollapse, onToggleMediaQuery: this.onToggleMediaQuery, onReset: this.onResetData }),
                this.$render("i-vstack", { id: "vStackContent", padding: { top: 16, bottom: 16, left: 12, right: 12 }, visible: false },
                    this.$render("i-vstack", { gap: 8 },
                        this.$render("designer-selector", { id: "posSelector", title: "$position", items: [
                                { value: 'relative', caption: '$relative', type: 'position' },
                                { value: 'absolute', caption: '$absolute', type: 'position' },
                            ], onChanged: this.onSelectChanged }),
                        this.$render("i-panel", { width: 320, padding: { top: 10, bottom: 10, left: 20, right: 20 }, border: { radius: 8, width: 1, style: 'solid', color: Theme.action.selectedBackground } },
                            this.$render("i-vstack", { id: "pnlPosition", gap: 4, horizontalAlignment: "center" },
                                this.$render("i-button", { id: "top", caption: "auto", class: index_css_11.buttonAutoStyled, onClick: (target) => this.onShowModal(target, 'top') }),
                                this.$render("i-hstack", { width: "100%", horizontalAlignment: "space-between" },
                                    this.$render("i-button", { id: "left", caption: "auto", class: index_css_11.buttonAutoStyled, onClick: (target) => this.onShowModal(target, 'left') }),
                                    this.$render("i-button", { id: "right", caption: "auto", class: index_css_11.buttonAutoStyled, onClick: (target) => this.onShowModal(target, 'right') })),
                                this.$render("i-button", { id: "bottom", caption: "auto", class: index_css_11.buttonAutoStyled, onClick: (target) => this.onShowModal(target, 'bottom') }))),
                        this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                            this.$render("i-label", { id: "lblZIndex", caption: "$z_index", font: { size: '0.75rem' } }),
                            this.$render("i-input", { id: "zIndexInput", inputType: "number", placeholder: "auto", width: "100%", height: 24, border: {
                                    radius: 8,
                                    width: 0
                                }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, onBlur: (target) => this.onSelectChanged('zIndex', target.value), onKeyUp: (target, event) => event.key === 'Enter' && this.onSelectChanged('zIndex', target.value), class: index_css_11.textInputRight })),
                        this.$render("designer-selector", { id: "overflowSelector", title: "$overflow", items: [
                                { value: 'auto', caption: '$visible', type: 'overflow' },
                                { value: 'hidden', caption: '$hidden', type: 'overflow' },
                            ], onChanged: this.onSelectChanged }),
                        this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                            this.$render("i-label", { id: "lblDisplay", caption: "$display", font: { size: '0.75rem' } }),
                            this.$render("i-combo-box", { id: "displaySelect", items: displayOptions, font: { size: '0.75rem' }, placeholder: "$select_display", width: "100%", height: 24, border: {
                                    radius: 8,
                                    width: 0
                                }, onChanged: this.onDisplayChanged })))),
                this.$render("designer-tool-modal-spacing", { id: "mdSpacing", onChanged: this.onSpacingChanged })));
        }
    };
    DesignerToolPosition = __decorate([
        (0, components_16.customElements)('designer-tool-position')
    ], DesignerToolPosition);
    exports.default = DesignerToolPosition;
});
define("@scom/scom-designer/tools/borders.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/store.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_17, index_css_12, utils_8, store_5, config_5, index_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_BORDER_PROPS = void 0;
    const Theme = components_17.Styles.Theme.ThemeVars;
    exports.DESIGNER_BORDER_PROPS = ['border'];
    let DesignerToolBorders = class DesignerToolBorders extends components_17.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.radiusObj = {
                topLeft: '',
                topRight: '',
                bottomLeft: '',
                bottomRight: ''
            };
            this.widthObj = {
                top: '',
                right: '',
                bottom: '',
                left: ''
            };
            this._idvChanged = false;
            this.onSpacingChanged = this.onSpacingChanged.bind(this);
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
            this.onResetData = this.onResetData.bind(this);
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        get currentData() {
            let data = JSON.parse(JSON.stringify(this._data));
            if (this.isChecked) {
                const border = this._data.mediaQuery?.properties?.border || {};
                data.border = { ...data.border, ...border };
            }
            return data;
        }
        hasMediaQuery() {
            const breakpointProps = this._data.mediaQuery?.properties || {};
            const hasProp = Object.hasOwnProperty.call(breakpointProps, 'border');
            return hasProp && !(0, utils_8.isSameValue)(this._data.border ?? this._data.default?.border, breakpointProps.border || {});
        }
        setData(value) {
            this._data = value;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI(needUpdate = false) {
            let data = this.currentData;
            this._idvChanged = false;
            this.designerHeader.isQueryChanged = !!this.hasMediaQuery();
            const { border = {} } = data;
            this.updateOverall(border);
            this.styleSelector.activeItem = border?.style || 'solid';
            this.bgColor.value = border?.color ?? '';
            this.updateButtons(data);
            this.updateHighlight();
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, exports.DESIGNER_BORDER_PROPS);
        }
        updateOverall(border) {
            const { radius, width } = border;
            const radiusStr = (0, utils_8.isNumber)(radius) ? `${radius}px` : radius;
            this.radiusObj = this.radiusByPosition(radiusStr);
            const values = Object.values(this.radiusObj);
            const sameValue = values.every(v => v === values[0]);
            if (sameValue) {
                const parsedRadius = (0, utils_8.parseNumberValue)(values[0])?.value ?? '';
                this.inputRadius.value = parsedRadius;
            }
            this.widthObj = this.widthByPosition(border);
            const widthStr = (0, utils_8.parseNumberValue)(width)?.value ?? '';
            this.inputWidth.value = widthStr;
        }
        updateHighlight() {
            if (Object.keys(this._data.default || {}).length === 0)
                return;
            const wValue = this.inputWidth.value === '' ? '' : `${this.inputWidth.value}px`;
            const rValue = this.inputRadius.value === '' ? '' : `${this.inputRadius.value}px`;
            const wResult = this.checkValues('width', wValue);
            const rResult = this.checkValues('radius', rValue);
            const cResult = this.checkValues('color', this.bgColor.value);
            this.lblWidth.font = (0, config_5.getFont)(wResult);
            this.lblRadius.font = (0, config_5.getFont)(rResult);
            this.lblColor.font = (0, config_5.getFont)(cResult);
            this.styleSelector.isChanged = !this.checkValues('style', this.styleSelector.activeItem);
            const hasChanged = this._idvChanged || !wResult || !rResult || !cResult || this.styleSelector.isChanged;
            if (!this.isChecked)
                this.designerHeader.isChanged = hasChanged;
        }
        checkValues(prop, newVal) {
            let result = false;
            if (this.isChecked) {
                result = (0, utils_8.isSameValue)(this._data.border?.[prop] ?? '', newVal);
            }
            else {
                result = (0, utils_8.isSameValue)(this._data.default.border?.[prop] ?? '', newVal);
            }
            return result;
        }
        updateButtons(data) {
            const buttons = this.pnlIndividual.querySelectorAll('i-button');
            const oldRadiusVal = this._data.border?.radius;
            const radiusStr = (0, utils_8.isNumber)(oldRadiusVal) ? `${oldRadiusVal}px` : oldRadiusVal;
            const oldRadius = this.radiusByPosition(radiusStr);
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                const id = button.id || '';
                const result = /(.*)(Radius|Width)$/.exec(id);
                if (!result)
                    continue;
                const type = result[2].toLowerCase();
                const position = result[1];
                const value = type === 'width' ? this.widthObj[position] : this.radiusObj[position];
                const oldVal = type === 'width' ? (this._data.border?.[position]?.width ?? this._data.border?.width) : oldRadius[position];
                let isSame = true;
                if (this.isChecked) {
                    isSame = (0, utils_8.isSameValue)(value ?? '', oldVal ?? '');
                }
                else {
                    isSame = !value;
                    if (!isSame && !this._idvChanged)
                        this._idvChanged = true;
                }
                button.caption = (0, utils_8.isNumber)(value) ? `${value}px` : (value || 'auto');
                button.border.color = isSame ? Theme.action.selectedBackground : Theme.colors.success.main;
            }
        }
        onShowSpacingModal(target, type, position) {
            let value = '';
            if (type === 'width') {
                value = this.widthObj[position];
            }
            else {
                value = this.radiusObj[position];
            }
            const spacing = {
                value,
                type,
                position
            };
            const breakpoint = (0, config_5.getBreakpointInfo)((0, store_5.getBreakpoint)());
            const key = (0, utils_8.getTranslationKey)(`border ${position} ${type}`);
            const config = {
                title: this.i18n.get(key),
                iconName: breakpoint?.icon,
                breakpointText: this.i18n.get('configure_a_value_for_screen_sizes_or_larger', { breakpoint: breakpoint.name ? this.i18n.get(breakpoint.name) : '' })
            };
            this.mdSpacing.onShowModal(target, spacing, config);
        }
        radiusByPosition(radius) {
            if (!radius)
                return { topLeft: '', topRight: '', bottomRight: '', bottomLeft: '' };
            const arr = radius.split(' ');
            if (arr?.length) {
                let [topLeft, topRight, bottomRight, bottomLeft] = arr;
                if (topRight === undefined)
                    topRight = topLeft;
                if (bottomLeft === undefined)
                    bottomLeft = topRight;
                if (bottomRight === undefined)
                    bottomRight = bottomLeft;
                return { topLeft, topRight, bottomRight, bottomLeft };
            }
            return { topLeft: '', topRight: '', bottomRight: '', bottomLeft: '' };
        }
        widthByPosition(border) {
            const { width } = border;
            const widthStr = ((0, utils_8.isNumber)(width) ? `${width}px` : width);
            const result = {
                top: widthStr,
                right: widthStr,
                bottom: widthStr,
                left: widthStr
            };
            for (let prop of ['top', 'right', 'bottom', 'left']) {
                if (this._data.border && Object.hasOwnProperty.call(this._data.border, prop)) {
                    const width = this._data.border[prop].width;
                    if (width !== undefined && width !== '') {
                        result[prop] = ((0, utils_8.isNumber)(width) ? `${width}px` : width);
                    }
                }
            }
            return result;
        }
        onPropChanged(target, prop) {
            const value = target.value;
            const newVal = (0, utils_8.isNumber)(value) ? `${value}px` : value;
            if (prop === 'width' && this._data.border) {
                for (let prop of ['top', 'right', 'bottom', 'left']) {
                    if (Object.hasOwnProperty.call(this._data.border, prop)) {
                        this.onSpacingChanged('width', prop, newVal, false);
                    }
                }
            }
            this.handleValueChanged(prop, newVal);
        }
        onSpacingChanged(type, position, value, needUpdate = true) {
            if (type === 'width') {
                this.widthObj[position] = value;
                this.handleValueChanged('width', value, needUpdate, position);
            }
            else {
                this.radiusObj[position] = value;
                const radiusText = `${this.radiusObj.topLeft} ${this.radiusObj.topRight} ${this.radiusObj.bottomRight} ${this.radiusObj.bottomLeft}`;
                this.handleValueChanged('radius', radiusText, needUpdate);
            }
        }
        handleValueChanged(type, value, needUpdate = true, position) {
            if (this.isChecked) {
                this.handleMediaQuery(type, value, position);
            }
            else {
                if (position) {
                    if (!this._data.border[position])
                        this._data.border[position] = {};
                    this._data.border[position][type] = value;
                }
                else {
                    this._data.border[type] = value;
                }
                if (this.onChanged && needUpdate)
                    this.onChanged('border', this._data.border);
            }
            if (needUpdate)
                this.renderUI();
        }
        handleMediaQuery(prop, value, position) {
            let border = this._data.mediaQuery['properties']['border'];
            if (!border)
                border = JSON.parse(JSON.stringify(this._data.border || {}));
            if (position) {
                if (!border[position])
                    border[position] = {};
                border[position][prop] = value;
            }
            else {
                border[prop] = value;
            }
            this._data.mediaQuery['properties']['border'] = border;
            if (this.onChanged)
                this.onChanged('mediaQueries', this._data.mediaQuery, 'border');
        }
        onToggleMediaQuery(value) {
            this.renderUI(true);
        }
        onResetData() {
            if (this.isChecked) {
                const breakpoint = this._data.mediaQuery.properties;
                this._data.mediaQuery.properties = (({ border, ...o }) => o)(breakpoint);
                if (this.onChanged)
                    this.onChanged('mediaQueries', this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data));
                const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
                this._data = { ...clonedData, ...cloneDefault };
                for (let prop of exports.DESIGNER_BORDER_PROPS) {
                    if (this.onChanged)
                        this.onChanged(prop, this._data[prop]);
                }
            }
            this.renderUI(true);
        }
        init() {
            this.i18n.init({ ...index_10.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onUpdate = this.getAttribute('onUpdate', true) || this.onUpdate;
            this.position = 'relative';
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$borders", hasMediaQuery: true, tooltipText: "$define_the_border_size_and_styles", onCollapse: this.onCollapse, onToggleMediaQuery: this.onToggleMediaQuery, onReset: this.onResetData }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 }, visible: false },
                    this.$render("i-vstack", { gap: 8 },
                        this.$render("i-label", { caption: "$overall", font: { size: '0.875rem', transform: 'uppercase' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-hstack", { gap: 16, verticalAlignment: "center" },
                            this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                                this.$render("i-label", { id: "lblWidth", caption: "$width", font: { size: '0.75rem' } }),
                                this.$render("i-hstack", { verticalAlignment: "center", width: 80, border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                    this.$render("i-input", { id: "inputWidth", inputType: "number", placeholder: "auto", background: { color: 'transparent' }, width: "100%", height: 24, border: { width: 0 }, padding: { left: 4, right: 4 }, font: { size: '0.675rem' }, class: `${index_css_12.textInputRight} ${index_css_12.bgInputTransparent}`, onBlur: (target) => this.onPropChanged(target, 'width'), onKeyUp: (target, event) => event.key === 'Enter' && this.onPropChanged(target, 'width') }))),
                            this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                                this.$render("i-label", { id: "lblRadius", caption: "$radius", font: { size: '0.75rem' } }),
                                this.$render("i-hstack", { verticalAlignment: "center", width: 80, border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                    this.$render("i-input", { id: "inputRadius", inputType: "number", placeholder: "auto", background: { color: 'transparent' }, width: "100%", height: 24, border: { width: 0 }, padding: { left: 4, right: 4 }, font: { size: '0.675rem' }, class: `${index_css_12.textInputRight} ${index_css_12.bgInputTransparent}`, onBlur: (target) => this.onPropChanged(target, 'radius'), onKeyUp: (target, event) => event.key === 'Enter' && this.onPropChanged(target, 'radius') }))))),
                    this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider } }),
                    this.$render("i-vstack", { id: "pnlIndividual", gap: 8 },
                        this.$render("i-label", { caption: "$individual_edges", font: { size: '0.875rem', transform: 'uppercase' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-vstack", { gap: 8, width: "100%", horizontalAlignment: "center" },
                            this.$render("i-hstack", { position: "relative", width: "100%", horizontalAlignment: "center" },
                                this.$render("i-label", { caption: "$width", font: { size: '0.75rem' }, position: "absolute", top: 0, left: 0 }),
                                this.$render("i-button", { id: "topWidth", caption: "auto", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'width', 'top') })),
                            this.$render("i-hstack", { width: "100%", verticalAlignment: "center", horizontalAlignment: "space-between" },
                                this.$render("i-button", { id: "leftWidth", caption: "auto", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'width', 'left') }),
                                this.$render("i-vstack", { verticalAlignment: "space-between", width: 200, height: 100, padding: { top: 4, bottom: 4, left: 4, right: 4 }, border: { width: 4, style: 'solid', color: Theme.action.selectedBackground } },
                                    this.$render("i-hstack", { width: "100%", verticalAlignment: "center", horizontalAlignment: "space-between" },
                                        this.$render("i-button", { id: "topLeftRadius", caption: "0", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'radius', 'topLeft') }),
                                        this.$render("i-label", { caption: "$radius", font: { size: '0.75rem' } }),
                                        this.$render("i-button", { id: "topRightRadius", caption: "0", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'radius', 'topRight') })),
                                    this.$render("i-hstack", { width: "100%", horizontalAlignment: "space-between" },
                                        this.$render("i-button", { id: "bottomLeftRadius", caption: "0", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'radius', 'bottomLeft') }),
                                        this.$render("i-button", { id: "bottomRightRadius", caption: "0", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'radius', 'bottomRight') }))),
                                this.$render("i-button", { id: "rightWidth", caption: "auto", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'width', 'right') })),
                            this.$render("i-button", { id: "bottomWidth", caption: "auto", class: index_css_12.buttonAutoStyled, onClick: (target) => this.onShowSpacingModal(target, 'width', 'bottom') }))),
                    this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider } }),
                    this.$render("i-vstack", { gap: 8 },
                        this.$render("i-label", { caption: "$decoration", font: { size: '0.875rem', transform: 'uppercase' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-grid-layout", { width: "100%", templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                            this.$render("i-label", { id: "lblColor", caption: "$color", font: { size: '0.75rem' } }),
                            this.$render("i-hstack", { gap: 4, width: "100%", verticalAlignment: "center" },
                                this.$render("i-color", { id: "bgColor", onChanged: (target) => this.handleValueChanged('color', target.value), class: index_css_12.customColorStyled }),
                                this.$render("i-combo-box", { width: "calc(100% - 28px)", items: utils_8.backgroundOptions, placeholder: "$type_or_select_a_color" }))),
                        this.$render("designer-selector", { id: "styleSelector", title: "$style", items: utils_8.borderStyles, onChanged: this.handleValueChanged }))),
                this.$render("designer-tool-modal-spacing", { id: "mdSpacing", onChanged: this.onSpacingChanged })));
        }
    };
    DesignerToolBorders = __decorate([
        (0, components_17.customElements)('designer-tool-borders')
    ], DesignerToolBorders);
    exports.default = DesignerToolBorders;
});
define("@scom/scom-designer/tools/effects.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_18, index_css_13, index_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_EFFECT_PROPS = void 0;
    const Theme = components_18.Styles.Theme.ThemeVars;
    exports.DESIGNER_EFFECT_PROPS = ['opacity'];
    let DesignerToolEffects = class DesignerToolEffects extends components_18.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.onResetData = this.onResetData.bind(this);
        }
        setData(value) {
            this._data = value;
            this.renderUI();
        }
        get defaultOpacity() {
            return Number(this._data?.default?.['opacity'] || '1');
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI() {
            const { opacity = 1 } = this._data;
            this.inputEffect.value = this.rangeEffect.value = Number(opacity) * 100;
            this.updateHighlight();
        }
        updateHighlight() {
            this.designerHeader.isChanged = Number(this._data?.opacity || 1) !== this.defaultOpacity;
        }
        onInputEffectChanged() {
            this.rangeEffect.value = this.inputEffect.value;
            this._data.opacity = this.rangeEffect.value / 100;
            this.updateHighlight();
            if (this.onChanged)
                this.onChanged('opacity', `${this._data.opacity}`);
        }
        onRangeChanged() {
            this.inputEffect.value = this.rangeEffect.value;
            this._data.opacity = this.rangeEffect.value / 100;
            this.updateHighlight();
            if (this.onChanged)
                this.onChanged('opacity', `${this._data.opacity}`);
        }
        onResetData() {
            const clonedData = JSON.parse(JSON.stringify(this._data));
            const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
            this._data = { ...clonedData, ...cloneDefault };
            if (this.onChanged)
                this.onChanged('opacity', this._data['opacity']);
            this.renderUI();
        }
        init() {
            this.i18n.init({ ...index_11.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.inputEffect.value = this.rangeEffect.value = 100;
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$effects", tooltipText: "$set_elevation_and_opacity_for_the_element", onCollapse: this.onCollapse, onReset: this.onResetData }),
                this.$render("i-vstack", { id: "vStackContent", gap: 8, padding: { top: 16, bottom: 16, left: 12, right: 12 }, visible: false },
                    this.$render("i-grid-layout", { templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "$opacity", font: { size: '0.75rem' } }),
                        this.$render("i-hstack", { gap: 16, verticalAlignment: "center" },
                            this.$render("i-hstack", { verticalAlignment: "center", width: 80, border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                this.$render("i-input", { id: "inputEffect", inputType: "number", placeholder: "auto", background: { color: 'transparent' }, width: "calc(100% - 24px)", height: 24, border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.725rem' }, class: `${index_css_13.textInputRight} ${index_css_13.bgInputTransparent}`, onBlur: this.onInputEffectChanged, onKeyUp: (target, event) => event.key === 'Enter' && this.onInputEffectChanged() }),
                                this.$render("i-label", { caption: "%", font: { size: '0.725rem' }, width: 24, height: 24, lineHeight: "24px", border: {
                                        left: {
                                            width: 1,
                                            style: 'solid',
                                            color: Theme.action.focus
                                        }
                                    }, class: "text-center" })),
                            this.$render("i-hstack", { width: "calc(100% - 96px)", verticalAlignment: "center" },
                                this.$render("i-range", { id: "rangeEffect", width: "100%", height: 16, min: 0, max: 100, onChanged: this.onRangeChanged })))))));
        }
    };
    DesignerToolEffects = __decorate([
        (0, components_18.customElements)('designer-tool-effects')
    ], DesignerToolEffects);
    exports.default = DesignerToolEffects;
});
define("@scom/scom-designer/tools/content.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_19, index_css_14, utils_9, config_6, index_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_CONTENT_PROPS = void 0;
    const Theme = components_19.Styles.Theme.ThemeVars;
    exports.DESIGNER_CONTENT_PROPS = ['font'];
    let DesignerToolContent = class DesignerToolContent extends components_19.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.onFontChanged = this.onFontChanged.bind(this);
            this.onResetData = this.onResetData.bind(this);
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
            this.onStyleChanged = this.onStyleChanged.bind(this);
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        hasMediaQuery() {
            const breakpointProps = this._data.mediaQuery?.properties || {};
            const hasProp = Object.hasOwnProperty.call(breakpointProps, 'font');
            return hasProp && !(0, utils_9.isSameValue)(this._data.font ?? this._data.default?.font, breakpointProps.font);
        }
        get currentData() {
            let data = JSON.parse(JSON.stringify(this._data));
            if (this.isChecked) {
                const font = this._data.mediaQuery?.properties?.font || {};
                data.font = { ...data.font, ...font };
            }
            return data;
        }
        setData(value) {
            this._data = value;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI(needUpdate = false) {
            let data = this.currentData;
            this.designerHeader.isQueryChanged = !!this.hasMediaQuery();
            const { font = {}, default: defaultValue } = data;
            this.inputFontSize.value = (0, utils_9.parseNumberValue)(font.size)?.value ?? '';
            this.inputFontWeight.value = font.weight ?? defaultValue?.font?.weight;
            this.inputShadow.value = font.shadow ?? defaultValue?.font?.shadow;
            this.styleSelector.activeItem = font.style || defaultValue?.font?.style;
            this.transformSelector.activeItem = font.transform || defaultValue?.font?.transform;
            this.updateHighlight();
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, exports.DESIGNER_CONTENT_PROPS);
        }
        updateHighlight() {
            if (Object.keys(this._data.default || {}).length === 0)
                return;
            const wResust = this.checkFontProp('font', this.inputFontWeight.value, 'weight');
            const sizeVal = this.inputFontSize.value === '' ? '' : `${this.inputFontSize.value}px`;
            const sResult = this.checkFontProp('font', sizeVal, 'size');
            const shadowResult = this.checkFontProp('font', this.inputShadow.value, 'shadow');
            this.lblWeight.font = (0, config_6.getFont)(wResust);
            this.lblSize.font = (0, config_6.getFont)(sResult);
            this.lblShadow.font = (0, config_6.getFont)(shadowResult);
            this.styleSelector.isChanged = !this.checkFontProp('font', this.styleSelector.activeItem, 'style');
            this.transformSelector.isChanged = !this.checkFontProp('font', this.transformSelector.activeItem, 'transform');
            if (!this.isChecked)
                this.designerHeader.isChanged = !wResust || !sResult || !shadowResult || this.styleSelector.isChanged || this.transformSelector.isChanged;
        }
        checkFontProp(type, newVal, prop) {
            let result = false;
            let oldVal = '';
            if (this.isChecked) {
                oldVal = (prop ? this._data[type]?.[prop] ?? this._data.default?.[type]?.[prop] : this._data[type] ?? this._data.default?.[type]) ?? '';
            }
            else {
                oldVal = (prop ? this._data.default?.[type]?.[prop] : this._data.default?.[type]) ?? '';
            }
            result = (0, utils_9.isSameValue)(oldVal, newVal);
            return result;
        }
        onFontChanged(target, prop) {
            let value = target.value;
            if (prop === 'size')
                value = (0, utils_9.isNumber)(value) ? `${value}px` : value;
            this.handleValueChanged(prop, value);
        }
        onStyleChanged(type, value) {
            this.handleValueChanged(type, value);
        }
        handleValueChanged(type, value) {
            if (this.isChecked) {
                this.handleMediaQuery(type, value);
            }
            else {
                if (!this._data.font)
                    this._data.font = {};
                this._data['font'][type] = value;
                if (this.onChanged)
                    this.onChanged('font', this._data.font);
            }
            this.renderUI();
        }
        handleMediaQuery(prop, value) {
            if (!this._data.mediaQuery['properties']['font'])
                this._data.mediaQuery['properties']['font'] = {};
            this._data.mediaQuery['properties']['font'][prop] = value;
            if (this.onChanged)
                this.onChanged('mediaQueries', this._data.mediaQuery, 'font');
        }
        onToggleMediaQuery(isChecked) {
            this.renderUI(true);
        }
        onResetData() {
            if (this.isChecked) {
                const breakpoint = this._data.mediaQuery.properties;
                this._data.mediaQuery.properties = (({ font, ...o }) => o)(breakpoint);
                if (this.onChanged)
                    this.onChanged('mediaQueries', this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data));
                const cloneDefault = JSON.parse(JSON.stringify(clonedData.default));
                this._data = { ...clonedData, ...cloneDefault };
                for (let prop of exports.DESIGNER_CONTENT_PROPS) {
                    if (this.onChanged)
                        this.onChanged(prop, this._data[prop]);
                }
            }
            this.renderUI(true);
        }
        init() {
            this.i18n.init({ ...index_12.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onUpdate = this.getAttribute('onUpdate', true) || this.onUpdate;
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" } },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$typography", tooltipText: "$set_font_for_the_element", hasMediaQuery: true, onCollapse: this.onCollapse, onReset: this.onResetData, onToggleMediaQuery: this.onToggleMediaQuery }),
                this.$render("i-vstack", { id: "vStackContent", padding: { top: '1rem', bottom: '1rem', left: '0.75rem', right: '0.75rem' }, visible: false },
                    this.$render("i-vstack", { gap: '0.5rem' },
                        this.$render("i-grid-layout", { width: "100%", templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                            this.$render("i-label", { id: "lblSize", caption: "$size", font: { size: '0.75rem' } }),
                            this.$render("i-hstack", { verticalAlignment: "center", border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                this.$render("i-input", { id: "inputFontSize", inputType: 'number', placeholder: "$enter_font_size", background: { color: 'transparent' }, width: "calc(100% - 1.5rem)", height: '1.5rem', border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, class: `${index_css_14.bgInputTransparent}`, onBlur: (target) => this.onFontChanged(target, 'size'), onKeyUp: (target, event) => event.key === 'Enter' && this.onFontChanged(target, 'size') }),
                                this.$render("i-label", { caption: "px", font: { size: '0.675rem' }, cursor: "pointer", width: 24, height: 24, lineHeight: "24px", opacity: 1, border: {
                                        left: {
                                            width: 1,
                                            style: 'solid',
                                            color: Theme.action.focus
                                        }
                                    }, class: `text-center ${index_css_14.unitStyled}` }))),
                        this.$render("i-grid-layout", { width: "100%", templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                            this.$render("i-label", { id: "lblWeight", caption: "$weight", font: { size: '0.75rem' } }),
                            this.$render("i-hstack", { verticalAlignment: "center", border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                this.$render("i-input", { id: "inputFontWeight", inputType: 'number', placeholder: "$enter_font_weight", background: { color: 'transparent' }, width: "calc(100% - 1.5rem)", height: '1.5rem', border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, class: `${index_css_14.bgInputTransparent}`, onBlur: (target) => this.onFontChanged(target, 'weight'), onKeyUp: (target, event) => event.key === 'Enter' && this.onFontChanged(target, 'weight') }))),
                        this.$render("i-grid-layout", { width: "100%", templateColumns: ['70px', 'auto'], verticalAlignment: "center" },
                            this.$render("i-label", { id: "lblShadow", caption: "$shadow", font: { size: '0.75rem' } }),
                            this.$render("i-hstack", { verticalAlignment: "center", border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                this.$render("i-input", { id: "inputShadow", placeholder: "$enter_text_shadow", background: { color: 'transparent' }, width: "calc(100% - 1.5rem)", height: '1.5rem', border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, class: `${index_css_14.bgInputTransparent}`, onBlur: (target) => this.onFontChanged(target, 'shadow'), onKeyUp: (target, event) => event.key === 'Enter' && this.onFontChanged(target, 'shadow') }))),
                        this.$render("designer-selector", { id: "styleSelector", title: '$style', display: 'block', items: utils_9.fontStyles, onChanged: this.onStyleChanged }),
                        this.$render("designer-selector", { id: "transformSelector", title: '$transform', display: 'block', items: utils_9.fontTransforms, onChanged: this.onStyleChanged })))));
        }
    };
    DesignerToolContent = __decorate([
        (0, components_19.customElements)('designer-tool-content')
    ], DesignerToolContent);
    exports.default = DesignerToolContent;
});
define("@scom/scom-designer/tools/widgetSetting.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_20, index_css_15, index_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_20.Styles.Theme.ThemeVars;
    let DesignerToolWidget = class DesignerToolWidget extends components_20.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.onConfigClicked = this.onConfigClicked.bind(this);
        }
        setData(value) {
            this._data = value;
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        onConfigClicked() {
            if (this.onConfig)
                this.onConfig();
        }
        init() {
            this.i18n.init({ ...index_13.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onConfig = this.getAttribute('onConfig', true) || this.onConfig;
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "$widget_settings", tooltipText: "", onCollapse: this.onCollapse }),
                this.$render("i-hstack", { id: "vStackContent", gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '0.75rem', right: '0.75rem' }, visible: false },
                    this.$render("i-button", { caption: '', icon: { name: 'cog', fill: Theme.text.primary, width: '1rem', height: '1rem' }, class: index_css_15.buttonAutoStyled, onClick: this.onConfigClicked }))));
        }
    };
    DesignerToolWidget = __decorate([
        (0, components_20.customElements)('designer-tool-widget-settings')
    ], DesignerToolWidget);
    exports.default = DesignerToolWidget;
});
define("@scom/scom-designer/tools/templateAreas.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_21, index_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_21.Styles.Theme.ThemeVars;
    let DesignerTemplateAreas = class DesignerTemplateAreas extends components_21.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = [];
            this.groupsMap = [];
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        getData() {
            return this._data.filter(group => {
                return group.filter(item => item.length > 0).length > 0;
            });
        }
        setData(value) {
            this._data = JSON.parse(JSON.stringify(value || []));
            this.pnlGroup.clearInnerHTML();
            this.groupsMap = [];
            this.renderGroups();
        }
        onAddGroup() {
            this._data.push([]);
            this.renderGroup(this._data.length - 1);
        }
        onAddItem(groupIndex) {
            this._data[groupIndex].push('');
            const groupEl = this.groupsMap[groupIndex];
            const parent = groupEl?.querySelector('.item-list');
            this.renderItem(parent, groupIndex, this._data[groupIndex].length - 1);
        }
        onDeleteGroup(target, groupIndex) {
            target.remove();
            this._data.splice(groupIndex, 1);
        }
        onDeleteItem(target, groupIndex, itemIndex) {
            target.remove();
            this._data[groupIndex].splice(itemIndex, 1);
        }
        renderGroups() {
            for (let i = 0; i < this._data.length; i++) {
                this.renderGroup(i);
            }
        }
        renderGroup(groupIndex) {
            const childItems = this._data[groupIndex] || [];
            const itemWrap = this.$render("i-vstack", { width: '100%', gap: "10px", padding: { top: 10, bottom: 10 }, class: "item-list" });
            const groupEl = (this.$render("i-vstack", { width: '100%' },
                this.$render("i-hstack", { horizontalAlignment: 'space-between', verticalAlignment: 'center', gap: "0.5rem", width: '100%', padding: { top: 10, bottom: 10 }, border: { bottom: { width: 1, style: 'solid', color: Theme.divider } } },
                    this.$render("i-label", { caption: "$items" }),
                    this.$render("i-hstack", { gap: "0.5rem", verticalAlignment: 'center', horizontalAlignment: 'end' },
                        this.$render("i-button", { caption: '$add', icon: { name: 'plus' }, padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }, border: { radius: 0 }, boxShadow: 'none', onClick: () => this.onAddItem(groupIndex) }),
                        this.$render("i-icon", { name: "trash", cursor: 'pointer', stack: { shrink: '0' }, width: '1rem', height: '1rem', onClick: () => this.onDeleteGroup(groupEl, groupIndex) }))),
                itemWrap));
            this.groupsMap.push(groupEl);
            this.pnlGroup.appendChild(groupEl);
            if (childItems?.length) {
                for (let i = 0; i < childItems.length; i++) {
                    this.renderItem(itemWrap, groupIndex, i);
                }
            }
        }
        renderItem(parent, groupIndex, itemIndex) {
            const item = this._data[groupIndex][itemIndex];
            const itemEl = (this.$render("i-hstack", { width: '100%', verticalAlignment: 'center', gap: "0.5rem" },
                this.$render("i-input", { width: '100%', height: '32px', value: item, border: { radius: '0.5rem', width: 0 }, padding: { left: '1rem', right: '1rem' }, onChanged: (v) => this.onUpdate(v, groupIndex, itemIndex) }),
                this.$render("i-icon", { name: "trash", cursor: 'pointer', stack: { shrink: '0' }, width: '1rem', height: '1rem', onClick: () => this.onDeleteItem(itemEl, groupIndex, itemIndex) })));
            parent.appendChild(itemEl);
        }
        onUpdate(v, groupIndex, itemIndex) {
            this._data[groupIndex][itemIndex] = v.value;
        }
        init() {
            this.i18n.init({ ...index_14.propertiesJson });
            super.init();
        }
        render() {
            return this.$render("i-vstack", { gap: "0.5rem" },
                this.$render("i-hstack", { horizontalAlignment: 'space-between', verticalAlignment: 'center', gap: "0.5rem", padding: { top: 10, bottom: 10 }, border: { bottom: { width: 1, style: 'solid', color: Theme.divider } } },
                    this.$render("i-label", { caption: "" }),
                    this.$render("i-button", { caption: '$add', icon: { name: 'plus' }, padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }, border: { radius: 0 }, boxShadow: 'none', onClick: this.onAddGroup })),
                this.$render("i-vstack", { id: "pnlGroup", gap: "0.5rem" }),
                this.$render("i-vstack", null));
        }
    };
    DesignerTemplateAreas = __decorate([
        (0, components_21.customElements)('designer-template-areas')
    ], DesignerTemplateAreas);
    exports.default = DesignerTemplateAreas;
});
define("@scom/scom-designer/tools/group.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.css.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/tools/templateAreas.tsx", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_22, index_css_16, utils_10, templateAreas_1, index_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_22.Styles.Theme.ThemeVars;
    let DesignerToolGroup = class DesignerToolGroup extends components_22.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {};
            this.onResetData = this.onResetData.bind(this);
            this.onToggleMediaQuery = this.onToggleMediaQuery.bind(this);
        }
        get isChecked() {
            return this.designerHeader.checked;
        }
        get customProps() {
            const properties = this._data.dataSchema?.properties;
            return properties ? Object.keys(properties) : [];
        }
        hasMediaQuery() {
            const breakpointProps = this._data.mediaQuery?.properties || {};
            const props = this.customProps;
            const hasChanged = props.find(prop => {
                const hasProp = Object.hasOwnProperty.call(breakpointProps, prop);
                if (hasProp) {
                    return !(0, utils_10.isSameValue)(this._data?.[prop] ?? this._data.default?.[prop], breakpointProps[prop]);
                }
                return false;
            });
            return !!hasChanged;
        }
        get currentData() {
            const props = this._data.props || {};
            if (this.isChecked) {
                return { ...props, ...(this._data.mediaQuery?.properties || {}) };
            }
            return props;
        }
        setData(value) {
            this._data = value;
            const olChecked = this.designerHeader.checked;
            this.designerHeader.checked = !!this.hasMediaQuery();
            this.renderUI(olChecked !== this.designerHeader.checked);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI(needUpdate = false) {
            this.designerHeader.name = this._data.title || '';
            this.designerHeader.tooltipText = this._data.tooltip || '';
            this.form.clearFormData();
            if (this._data.uiSchema || this._data.dataSchema) {
                this.form.uiSchema = this._data.uiSchema;
                this.form.jsonSchema = this._data.dataSchema;
                this.form.formOptions = {
                    columnWidth: '100%',
                    columnsPerRow: 1,
                    confirmButtonOptions: {
                        caption: '$confirm',
                        backgroundColor: Theme.colors.primary.main,
                        fontColor: Theme.colors.primary.contrastText,
                        hide: false,
                        onClick: async () => {
                            const data = await this.form.getFormData();
                            Object.keys(data).forEach(key => {
                                if (data[key] === undefined)
                                    delete data[key];
                            });
                            if (this.isChecked) {
                                for (let prop in data) {
                                    const isSame = (0, utils_10.isSameValue)(data[prop], this._data.props?.[prop] || this._data.default?.[prop]);
                                    if (!isSame)
                                        this._data.mediaQuery.properties[prop] = data[prop];
                                }
                                if (this.onChanged)
                                    this.onChanged(this._data.props, this._data.mediaQuery);
                                if (this.onUpdate)
                                    this.onUpdate(this.isChecked, this.customProps);
                            }
                            else {
                                if (this.onChanged)
                                    this.onChanged(data);
                            }
                        }
                    },
                    customControls: {
                        "#/properties/templateAreas": {
                            render: () => {
                                return new templateAreas_1.default();
                            },
                            getData: (control) => {
                                return control.getData();
                            },
                            setData: (control, value) => {
                                control.setData(value);
                            }
                        }
                    },
                    dateTimeFormat: {
                        date: 'YYYY-MM-DD',
                        time: 'HH:mm:ss',
                        dateTime: 'MM/DD/YYYY HH:mm'
                    },
                };
                this.form.renderForm();
                this.form.setFormData({ ...this.currentData || {} });
                this.form.visible = true;
            }
            if (this.onUpdate && needUpdate)
                this.onUpdate(this.isChecked, this.customProps);
        }
        onToggleMediaQuery(isChecked) {
            this.renderUI(true);
        }
        onResetData() {
            const props = this.customProps;
            if (this.isChecked) {
                const properties = this._data.mediaQuery?.properties || {};
                props.forEach(prop => {
                    if (Object.hasOwnProperty.call(properties, prop))
                        delete properties[prop];
                });
                this.form.setFormData(this._data.props);
                if (this.onChanged)
                    this.onChanged(this._data.props, this._data.mediaQuery);
            }
            else {
                const clonedData = JSON.parse(JSON.stringify(this._data.default));
                this._data.props = clonedData;
                this.form.setFormData(this._data.props);
                if (this.onChanged)
                    this.onChanged(this._data.props);
            }
            this.renderUI(true);
        }
        init() {
            this.i18n.init({ ...index_15.propertiesJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onUpdate = this.getAttribute('onUpdate', true) || this.onUpdate;
            const title = this.getAttribute('title', true);
            const uiSchema = this.getAttribute('uiSchema', true);
            const dataSchema = this.getAttribute('dataSchema', true);
            const customControls = this.getAttribute('customControls', true);
            const props = this.getAttribute('props', true);
            if (uiSchema || dataSchema)
                this.setData({ title, uiSchema, dataSchema, customControls, props });
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { id: "designerHeader", name: "", tooltipText: "", hasMediaQuery: true, onCollapse: this.onCollapse, onToggleMediaQuery: this.onToggleMediaQuery, onReset: this.onResetData }),
                this.$render("i-vstack", { id: "vStackContent", gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '0.75rem', right: '0.75rem' }, visible: false },
                    this.$render("i-form", { id: "form", class: index_css_16.customFormStyle, visible: false }))));
        }
    };
    DesignerToolGroup = __decorate([
        (0, components_22.customElements)('designer-tool-group')
    ], DesignerToolGroup);
    exports.default = DesignerToolGroup;
});
define("@scom/scom-designer/tools/index.ts", ["require", "exports", "@scom/scom-designer/tools/stylesheet.tsx", "@scom/scom-designer/tools/layout.tsx", "@scom/scom-designer/tools/background.tsx", "@scom/scom-designer/tools/size.tsx", "@scom/scom-designer/tools/margins-padding.tsx", "@scom/scom-designer/tools/position.tsx", "@scom/scom-designer/tools/borders.tsx", "@scom/scom-designer/tools/effects.tsx", "@scom/scom-designer/tools/content.tsx", "@scom/scom-designer/tools/widgetSetting.tsx", "@scom/scom-designer/tools/group.tsx", "@scom/scom-designer/tools/header.tsx", "@scom/scom-designer/tools/selector.tsx", "@scom/scom-designer/tools/index.css.ts"], function (require, exports, stylesheet_1, layout_1, background_1, size_1, margins_padding_1, position_1, borders_1, effects_1, content_1, widgetSetting_1, group_1, header_1, selector_1, index_css_17) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DESIGNER_CONTENT_PROPS = exports.DESIGNER_EFFECT_PROPS = exports.DESIGNER_LAYOUT_PROPS = exports.DESIGNER_SPACING_PROPS = exports.DESIGNER_SIZE_PROPS = exports.DESIGNER_POSITION_PROPS = exports.DESIGNER_BORDER_PROPS = exports.DESIGNER_BACKGROUND_PROPS = exports.DesignerToolWidget = exports.DesignerToolGroup = exports.DesignerToolContent = exports.DesignerSelector = exports.DesignerToolHeader = exports.DesignerToolEffects = exports.DesignerToolBorders = exports.DesignerToolPosition = exports.DesignerToolMarginsAndPadding = exports.DesignerToolSize = exports.DesignerToolBackground = exports.DesignerToolLayout = exports.DesignerToolStylesheet = void 0;
    exports.DesignerToolStylesheet = stylesheet_1.default;
    exports.DesignerToolLayout = layout_1.default;
    Object.defineProperty(exports, "DESIGNER_LAYOUT_PROPS", { enumerable: true, get: function () { return layout_1.DESIGNER_LAYOUT_PROPS; } });
    exports.DesignerToolBackground = background_1.default;
    Object.defineProperty(exports, "DESIGNER_BACKGROUND_PROPS", { enumerable: true, get: function () { return background_1.DESIGNER_BACKGROUND_PROPS; } });
    exports.DesignerToolSize = size_1.default;
    Object.defineProperty(exports, "DESIGNER_SIZE_PROPS", { enumerable: true, get: function () { return size_1.DESIGNER_SIZE_PROPS; } });
    exports.DesignerToolMarginsAndPadding = margins_padding_1.default;
    Object.defineProperty(exports, "DESIGNER_SPACING_PROPS", { enumerable: true, get: function () { return margins_padding_1.DESIGNER_SPACING_PROPS; } });
    exports.DesignerToolPosition = position_1.default;
    Object.defineProperty(exports, "DESIGNER_POSITION_PROPS", { enumerable: true, get: function () { return position_1.DESIGNER_POSITION_PROPS; } });
    exports.DesignerToolBorders = borders_1.default;
    Object.defineProperty(exports, "DESIGNER_BORDER_PROPS", { enumerable: true, get: function () { return borders_1.DESIGNER_BORDER_PROPS; } });
    exports.DesignerToolEffects = effects_1.default;
    Object.defineProperty(exports, "DESIGNER_EFFECT_PROPS", { enumerable: true, get: function () { return effects_1.DESIGNER_EFFECT_PROPS; } });
    exports.DesignerToolContent = content_1.default;
    Object.defineProperty(exports, "DESIGNER_CONTENT_PROPS", { enumerable: true, get: function () { return content_1.DESIGNER_CONTENT_PROPS; } });
    exports.DesignerToolWidget = widgetSetting_1.default;
    exports.DesignerToolGroup = group_1.default;
    exports.DesignerToolHeader = header_1.default;
    exports.DesignerSelector = selector_1.default;
    __exportStar(index_css_17, exports);
});
define("@scom/scom-designer/settings/basic.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.ts"], function (require, exports, components_23, index_16) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_23.Styles.Theme.ThemeVars;
    let DesignerSettingsBasic = class DesignerSettingsBasic extends components_23.Module {
        constructor(parent, options) {
            super(parent, options);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI() {
            this.inputName.value = 'First Screen';
        }
        init() {
            super.init();
            this.renderUI();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { name: "Basic", onCollapse: this.onCollapse }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 } },
                    this.$render("i-grid-layout", { templateColumns: ['128px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Name", font: { size: '0.75rem' } }),
                        this.$render("i-input", { id: "inputName", width: "100%", height: 24, border: { radius: 8, width: 0 }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, class: index_16.textInputRight })),
                    this.$render("i-grid-layout", { templateColumns: ['128px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Description", font: { size: '0.75rem' } }),
                        this.$render("i-input", { width: "100%", height: 24, border: { radius: 8, width: 0 }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, class: index_16.textInputRight })),
                    this.$render("i-grid-layout", { templateColumns: ['128px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Status Bar Color", font: { size: '0.75rem' } }),
                        this.$render("i-grid-layout", { gap: { column: 1 }, templateColumns: ['1fr', '1fr', '1fr'], verticalAlignment: "center" },
                            this.$render("i-label", { caption: "Default", class: `text-center ${index_16.customIconLayoutStyled} ${index_16.borderRadiusLeft} ${index_16.customIconLayoutActiveStyled}`, padding: { top: 4, bottom: 4 } }),
                            this.$render("i-label", { caption: "Dark", class: `text-center ${index_16.customIconLayoutStyled}`, padding: { top: 4, bottom: 4 } }),
                            this.$render("i-label", { caption: "Light", class: `text-center ${index_16.customIconLayoutStyled} ${index_16.borderRadiusRight}`, padding: { top: 4, bottom: 4 } }))),
                    this.$render("i-grid-layout", { templateColumns: ['128px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Scrollable?", font: { size: '0.75rem' } }),
                        this.$render("i-switch", { margin: { left: 'auto' } })))));
        }
    };
    DesignerSettingsBasic = __decorate([
        (0, components_23.customElements)('designer-settings-basic')
    ], DesignerSettingsBasic);
    exports.default = DesignerSettingsBasic;
});
define("@scom/scom-designer/settings/advanced.tsx", ["require", "exports", "@ijstech/components"], function (require, exports, components_24) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_24.Styles.Theme.ThemeVars;
    let DesignerSettingsAdvanced = class DesignerSettingsAdvanced extends components_24.Module {
        constructor(parent, options) {
            super(parent, options);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI() {
        }
        init() {
            super.init();
            this.renderUI();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { name: "Advanced", onCollapse: this.onCollapse }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 } },
                    this.$render("i-label", { caption: "Safe Area View should only be enabled if you've explicitly removed or hidden the header from Stack Navigator within the Navigation config", font: { size: '0.75rem' }, opacity: 0.8 }),
                    this.$render("i-grid-layout", { templateColumns: ['130px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Safe Area View?", font: { size: '0.75rem' } }),
                        this.$render("i-switch", { margin: { left: 'auto' } })),
                    this.$render("i-grid-layout", { templateColumns: ['130px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Top Safe Area View?", font: { size: '0.75rem' } }),
                        this.$render("i-switch", { margin: { left: 'auto' } })),
                    this.$render("i-grid-layout", { templateColumns: ['130px', 'auto'], verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Bottom Safe Area View?", font: { size: '0.75rem' } }),
                        this.$render("i-switch", { margin: { left: 'auto' } })))));
        }
    };
    DesignerSettingsAdvanced = __decorate([
        (0, components_24.customElements)('designer-settings-advanced')
    ], DesignerSettingsAdvanced);
    exports.default = DesignerSettingsAdvanced;
});
define("@scom/scom-designer/settings/index.ts", ["require", "exports", "@scom/scom-designer/settings/basic.tsx", "@scom/scom-designer/settings/advanced.tsx"], function (require, exports, basic_1, advanced_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DesignerSettingsAdvanced = exports.DesignerSettingsBasic = void 0;
    exports.DesignerSettingsBasic = basic_1.default;
    exports.DesignerSettingsAdvanced = advanced_1.default;
});
define("@scom/scom-designer/triggers/trigger.tsx", ["require", "exports", "@ijstech/components"], function (require, exports, components_25) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let DesignerTrigger = class DesignerTrigger extends components_25.Module {
        constructor(parent, options) {
            super(parent, options);
            this._events = {};
            this._props = {};
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        get events() {
            return this._events;
        }
        set events(value) {
            this._events = value;
        }
        get props() {
            return this._props;
        }
        set props(value) {
            this._props = value;
        }
        setData({ events, props }) {
            this._events = events;
            this._props = props;
            this.renderUI();
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI() {
            // this.vStackContent.clearInnerHTML();
            // const events = Object.keys(this.events);
            // for (let key of events) {
            //   let func = this.props?.[key] || '';
            //   if (func.startsWith("this.")) func = func.substring(5);
            //   const elm = <i-vstack gap={8}>
            //     <i-label caption={key} font={{ size: '0.725rem', bold: true }} />
            //     <i-input
            //       inputType="text"
            //       height={24} width={`100%`}
            //       padding={{top: '0.25rem', bottom: '0.25rem', left: '0.5rem', right: '0.5rem'}}
            //       border={{radius: '0.5rem', style: 'none'}}
            //       font={{size: '0.875rem'}}
            //       value={func}
            //       onKeyUp={(target: Input, event: KeyboardEvent) => this.onInputChanged(target, event, key)}
            //       onDblClick={() => this.onEventDblClick && this.onEventDblClick(func)}
            //     ></i-input>
            //   </i-vstack>
            //   this.vStackContent.appendChild(elm)
            // }
            this.gdEvents.rowCount = 0;
            this.gdEvents.fixedCol = 1;
            let row = 1;
            for (let name in this.events) {
                this.gdEvents.rowCount = row + 1;
                this.gdEvents.cells(0, row).value = name;
                let value = this.props?.[name] || '';
                if (typeof value === "string" && value.startsWith("this.")) {
                    value = value.substring(5);
                }
                this.gdEvents.cells(1, row).value = value;
                ++row;
            }
            ;
            this.gdEvents.fixedRow = 0;
        }
        onInputChanged(source, cell, oldValue, newValue) {
            const prop = source.cells(0, cell.row).value;
            this.onChanged && this.onChanged(prop, newValue, oldValue);
        }
        onHandleDbClick(source) {
            const funcName = source.cells(1, source.row).value;
            this.onEventDblClick && this.onEventDblClick(funcName);
        }
        init() {
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onEventDblClick = this.getAttribute('onEventDblClick', true) || this.onEventDblClick;
            const events = this.getAttribute('events', true);
            const props = this.getAttribute('props', true);
            if (events)
                this.setData({ events, props });
            this.gdEvents.fixedRow = 0;
            this.gdEvents.fixedCol = 1;
            this.gdEvents.colCount = 2;
            this.gdEvents.onCellChange = this.onInputChanged.bind(this);
            this.gdEvents.onDblClick = this.onHandleDbClick.bind(this);
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { name: "$trigger", tooltipText: "$add_a_trigger_for_an_action", onCollapse: this.onCollapse, hasClear: false }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 }, position: 'relative', stack: { grow: '1', shrink: '1' } },
                    this.$render("i-data-grid", { id: "gdEvents", dock: 'fill' }))));
        }
    };
    DesignerTrigger = __decorate([
        (0, components_25.customElements)('designer-trigger')
    ], DesignerTrigger);
    exports.default = DesignerTrigger;
});
define("@scom/scom-designer/triggers/index.ts", ["require", "exports", "@scom/scom-designer/triggers/trigger.tsx"], function (require, exports, trigger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DesignerTrigger = void 0;
    exports.DesignerTrigger = trigger_1.default;
});
define("@scom/scom-designer/setting-data/params.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/tools/index.ts"], function (require, exports, components_26, tools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_26.Styles.Theme.ThemeVars;
    let DesignerDataParams = class DesignerDataParams extends components_26.Module {
        constructor(parent, options) {
            super(parent, options);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI() {
        }
        init() {
            super.init();
            this.renderUI();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { name: "Navigation Params", tooltipText: "Pass data between screens by creating Navigation parameters that your screen accepts when navigated to. Test values will be used when no value is passed in, or when viewing the screen in the Web view.", onCollapse: this.onCollapse }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 } },
                    this.$render("i-label", { caption: "This screen does not have any Navigation Parameters. If you'd like to pass data to this screen, create a new parameter below.", font: { size: '0.75rem' }, opacity: 0.8 }),
                    this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider } }),
                    this.$render("i-vstack", { gap: 8 },
                        this.$render("i-label", { caption: "CREATE NAVIGATION PARAM", font: { size: '0.875rem' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-grid-layout", { gap: { column: 8 }, templateColumns: ['auto', '16px'], verticalAlignment: "center" },
                            this.$render("i-input", { placeholder: "Parameter Name", width: "100%", height: 24, border: {
                                    radius: 8,
                                    width: 0
                                }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, class: tools_1.textInputRight }),
                            this.$render("i-checkbox", { width: 16, height: 16, border: { radius: 8 } }))))));
        }
    };
    DesignerDataParams = __decorate([
        (0, components_26.customElements)('designer-data-params')
    ], DesignerDataParams);
    exports.default = DesignerDataParams;
});
define("@scom/scom-designer/setting-data/linking.tsx", ["require", "exports", "@ijstech/components"], function (require, exports, components_27) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_27.Styles.Theme.ThemeVars;
    let DesignerDataLinking = class DesignerDataLinking extends components_27.Module {
        constructor(parent, options) {
            super(parent, options);
        }
        onCollapse(isShown) {
            this.vStackContent.visible = isShown;
        }
        renderUI() {
        }
        init() {
            super.init();
            this.renderUI();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative" },
                this.$render("designer-tool-header", { name: "Navigation Params", tooltipText: "Pass data between screens by creating Navigation parameters that your screen accepts when navigated to. Test values will be used when no value is passed in, or when viewing the screen in the Web view.", onCollapse: this.onCollapse }),
                this.$render("i-vstack", { id: "vStackContent", gap: 16, padding: { top: 16, bottom: 16, left: 12, right: 12 } },
                    this.$render("i-vstack", { gap: 8 },
                        this.$render("i-label", { caption: "Deep Linking allows you to open a specific screen from a website or other app.", font: { size: '0.75rem' }, opacity: 0.8 }),
                        this.$render("i-hstack", { gap: 8, verticalAlignment: "center", horizontalAlignment: "space-between" },
                            this.$render("i-label", { caption: "Create Deep Link For This Screen", font: { size: '0.75rem' } }),
                            this.$render("i-switch", null))),
                    this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider } }),
                    this.$render("i-vstack", { gap: 8 },
                        this.$render("i-label", { caption: "DEEP LINKING PREVIEW", font: { size: '0.875rem' }, letterSpacing: "0.2em", opacity: 0.8 }),
                        this.$render("i-label", { caption: "In order to access this screen from a different app, type the following URL into a web browser. This will only work if you're using the Draftbit app or if you export your project", font: { size: '0.75rem' }, opacity: 0.8 }),
                        this.$render("i-label", { caption: "Enable Deep Linking above to see your URL preview", font: { size: '0.75rem', color: Theme.colors.primary.main } })))));
        }
    };
    DesignerDataLinking = __decorate([
        (0, components_27.customElements)('designer-data-linking')
    ], DesignerDataLinking);
    exports.default = DesignerDataLinking;
});
define("@scom/scom-designer/setting-data/index.tsx", ["require", "exports", "@scom/scom-designer/setting-data/params.tsx", "@scom/scom-designer/setting-data/linking.tsx"], function (require, exports, params_1, linking_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DesignerDataLinking = exports.DesignerDataParams = void 0;
    exports.DesignerDataParams = params_1.default;
    exports.DesignerDataLinking = linking_1.default;
});
define("@scom/scom-designer/components/properties.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/index.css.ts", "@scom/scom-designer/tools/index.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/store.ts", "@scom/scom-designer/languages/index.ts", "@scom/scom-designer/settings/index.ts", "@scom/scom-designer/triggers/index.ts", "@scom/scom-designer/setting-data/index.tsx"], function (require, exports, components_28, index_css_18, index_17, config_7, utils_11, store_6, index_18) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_28.Styles.Theme.ThemeVars;
    let DesignerProperties = class DesignerProperties extends components_28.Module {
        constructor(parent, options) {
            super(parent, options);
            this.onPropChanged = this.onPropChanged.bind(this);
            this.onUpdateUI = this.onUpdateUI.bind(this);
            this.onControlEventChanged = this.onControlEventChanged.bind(this);
            this.onBreakpointClick = this.onBreakpointClick.bind(this);
            this.onShowConfig = this.onShowConfig.bind(this);
            this.renderTrigger = this.renderTrigger.bind(this);
            this.onPreviewClick = this.onPreviewClick.bind(this);
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        get component() {
            return this._component;
        }
        set component(value) {
            this._component = value;
            this.renderUI();
        }
        get designerProps() {
            return this.component?.control._getDesignProps() || {};
        }
        get isCustomWidget() {
            return !!this.component?.control?.showConfigurator;
        }
        show(isPreview) {
            this.hStackInfo.visible = !isPreview;
            this.propTabs.visible = !isPreview;
        }
        clear() {
            this.component = null;
            this.renderUI();
        }
        renderUI() {
            this.updateInfo();
            this.updateProps();
            this.renderCustomGroup();
            if (this.propTabs.activeTabIndex === 1)
                this.renderTrigger();
            this.designerWidget.visible = this.isCustomWidget;
        }
        renderTrigger() {
            const events = this._component?.control?._getCustomProperties()?.events;
            const designProps = this.component?.control._getDesignProps();
            this.designerTrigger.setData({ events, props: designProps });
        }
        renderCustomGroup() {
            const designProps = (0, utils_11.parseProps)(this.designerProps);
            const dataSchema = this.component?.control._getCustomProperties()?.dataSchema;
            this.customGroup.visible = !!dataSchema && Object.keys(dataSchema).length > 0;
            const properties = dataSchema?.properties;
            let defaultValue = {};
            if (properties) {
                const keys = Object.keys(properties);
                defaultValue = this.getDefaultValues(keys);
            }
            const mediaQuery = (0, config_7.getMediaQuery)(this.designerProps.mediaQueries || []);
            this.customGroup.setData({
                title: '$custom_properties',
                tooltip: '$set_custom_properties_for_component',
                uiSchema: null,
                dataSchema: dataSchema,
                props: { ...designProps },
                mediaQuery,
                default: defaultValue
            });
        }
        updateInfo() {
            if (!this.hStackInfo)
                return;
            this.hStackInfo.clearInnerHTML();
            this.hStackInfo.visible = !!this.component;
            if (!this.component)
                return;
            const { name, image, icon, category } = this.component;
            this.hStackInfo.appendChild(this.$render("i-hstack", { gap: 8, verticalAlignment: "center", width: "100%" },
                icon ? this.$render("i-icon", { name: icon, width: '1.5rem', height: '1.5rem' }) : image ? this.$render("i-image", { url: image, width: '1.5rem', height: '1.5rem' }) : [],
                this.$render("i-label", { caption: name, font: { size: '1rem', bold: true } }),
                this.$render("i-label", { caption: category || '', opacity: 0.6, font: { size: '0.625rem' }, margin: { left: 'auto' }, display: "flex" })));
        }
        onUpdate() {
            const { top, right, bottom, left, zIndex, position, width, height, overflow, minHeight, minWidth, maxHeight, maxWidth, display, mediaQueries = [] } = this.designerProps;
            const mediaQuery = (0, config_7.getMediaQuery)(mediaQueries);
            const overflowObj = typeof overflow === 'string' ? { x: overflow, y: overflow } : overflow;
            this.designerSize.setData({ width, height, minHeight, minWidth, maxHeight, maxWidth, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_SIZE_PROPS) });
            this.designerPosition.setData({ position, zIndex, top, left, right, bottom, overflow: overflowObj, display, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_POSITION_PROPS) });
        }
        updateProps() {
            let { id, margin = {}, padding = {}, border = {}, top, right, bottom, left, zIndex, position, background, width, height, opacity, overflow = { x: '', y: '' }, display, direction, font, minHeight, minWidth, maxHeight, maxWidth, justifyContent, alignItems, alignContent, alignSelf, reverse, wrap, stack, mediaQueries = [] } = this.designerProps;
            const { id: controlId } = this.component?.control || {};
            const mediaQuery = (0, config_7.getMediaQuery)(mediaQueries);
            this.inputId.value = id || controlId || '';
            const overflowObj = typeof overflow === 'string' ? { x: overflow, y: overflow } : overflow;
            this.designerBackground.setData({ background, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_BACKGROUND_PROPS) });
            this.designerSize.setData({ width, height, minHeight, minWidth, maxHeight, maxWidth, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_SIZE_PROPS) });
            this.designerEffects.setData({ opacity: opacity || 1, default: this.getDefaultValues(index_17.DESIGNER_EFFECT_PROPS) });
            this.designerSpacing.setData({ margin, padding, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_SPACING_PROPS) });
            this.designerPosition.setData({ position, zIndex, top, left, right, bottom, overflow: overflowObj, display, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_POSITION_PROPS) });
            this.designerBorders.setData({ border, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_BORDER_PROPS) });
            this.designerLayout.setData({
                name: this.component?.name,
                stack,
                direction,
                justifyContent,
                alignItems,
                alignContent,
                alignSelf,
                wrap,
                reverse,
                mediaQuery,
                default: this.getDefaultValues(index_17.DESIGNER_LAYOUT_PROPS)
            });
            this.designerContent.setData({ name: this.component?.name, font, mediaQuery, default: this.getDefaultValues(index_17.DESIGNER_CONTENT_PROPS) });
        }
        getDefaultValues(props) {
            let result = {};
            const customProps = this.component?.control?._getCustomProperties()?.props;
            if (!customProps)
                return result;
            for (let prop of props) {
                if (customProps.hasOwnProperty(prop)) {
                    result[prop] = customProps[prop].default ?? undefined;
                }
            }
            return result;
        }
        onPropChanged(prop, value, mediaQueryProp) {
            if (this.onChanged)
                this.onChanged(prop, value, mediaQueryProp);
        }
        onGroupChanged(data, mediaQuery) {
            if (mediaQuery) {
                this.onPropChanged('mediaQueries', mediaQuery);
            }
            else {
                for (let prop in data) {
                    this.onPropChanged(prop, data[prop]);
                }
            }
        }
        onUpdateUI(isChecked, props) {
            if (!this.component?.control)
                return;
            const designerProps = this.component?.control?._getDesignProps() || {};
            const breakpoint = (0, store_6.getBreakpoint)();
            const defaultBreakpoint = (0, config_7.getDefaultMediaQuery)(breakpoint);
            const findedBreakpoint = (designerProps?.mediaQueries || []).find((v) => (0, config_7.findMediaQueryCallback)(v, defaultBreakpoint));
            if (!findedBreakpoint)
                return;
            const breakpointProps = findedBreakpoint?.properties || {};
            const customProps = this.component?.control?._getCustomProperties()?.props || {};
            for (let prop of props) {
                const breakpointVal = breakpointProps?.[prop];
                const designerVal = designerProps?.[prop];
                const defaultVal = customProps?.[prop]?.default;
                if (isChecked) {
                    if (typeof breakpointVal === 'object' && !Array.isArray(breakpointVal)) {
                        const value = { ...(designerVal ?? defaultVal), ...breakpointVal };
                        this.component.control[prop] = value;
                    }
                    else
                        this.component.control[prop] = breakpointVal ?? designerVal ?? defaultVal;
                }
                else {
                    this.component.control[prop] = designerVal ?? defaultVal;
                }
            }
            if (!this.component.control.position)
                this.component.control.position = 'relative';
        }
        onIDChanged(target) {
            const value = target.value;
            this.onPropChanged('id', value);
        }
        onControlEventChanged(prop, newVal, oldVal) {
            if (this.onEventChanged)
                this.onEventChanged(prop, newVal, oldVal);
        }
        onBreakpointClick(type, value) {
            (0, store_6.setBreakpoint)(value);
            if (this.onBreakpointChanged)
                this.onBreakpointChanged(value);
        }
        onPreviewClick(type, value) {
            if (this.onPreviewChanged)
                this.onPreviewChanged(type, `${value}`);
        }
        onShowConfig() {
            if (this.component?.control) {
                this.component.control.showConfigurator(this.mdActions, 'Data', this.onPropChanged);
            }
        }
        closePreview() {
            this.previewSelector.activeItem = config_7.previews[0].value;
        }
        init() {
            this.i18n.init({ ...index_18.componentsJson });
            super.init();
            this.onChanged = this.getAttribute('onChanged', true) || this.onChanged;
            this.onBreakpointChanged = this.getAttribute('onBreakpointChanged', true) || this.onBreakpointChanged;
            this.onPreviewChanged = this.getAttribute('onPreviewChanged', true) || this.onPreviewChanged;
            this.onEventChanged = this.getAttribute('onEventChanged', true) || this.onEventChanged;
            this.onEventDblClick = this.getAttribute('onEventDblClick', true) || this.onEventDblClick;
            const component = this.getAttribute('component', true);
            if (component)
                this.component = component;
            this.breakpointSelector.activeItem = config_7.breakpoints[0].value;
            this.previewSelector.activeItem = config_7.previews[0].value;
            this.onBreakpointClick('breakpoint', 0);
        }
        render() {
            return (this.$render("i-vstack", { width: 360, height: "auto", maxHeight: '100%', minWidth: 350, maxWidth: "100%", margin: { left: "auto", right: "auto" }, position: "relative", background: { color: Theme.background.paper }, border: { top: { width: 1, style: 'solid', color: Theme.divider } }, gap: 1 },
                this.$render("i-hstack", { gap: '1rem', width: "100%", verticalAlignment: "center", horizontalAlignment: "center", padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }, background: { color: Theme.background.main }, stack: { shrink: '0' } },
                    this.$render("designer-selector", { id: "breakpointSelector", title: '$breakpoint', items: config_7.breakpoints, direction: 'vertical', stack: { grow: '1', shrink: '1' }, font: { transform: 'uppercase' }, onChanged: this.onBreakpointClick }),
                    this.$render("designer-selector", { id: "previewSelector", title: '$preview' // letterSpacing="0.1rem" font={{ size: '0.675rem' }}
                        , items: config_7.previews, direction: 'vertical', font: { transform: 'uppercase' }, stack: { grow: '1', shrink: '1' }, onChanged: this.onPreviewClick })),
                this.$render("i-hstack", { id: "hStackInfo", width: "100%", verticalAlignment: "center", padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }, background: { color: Theme.background.main }, stack: { shrink: '0' }, visible: false }),
                this.$render("i-tabs", { id: "propTabs", mode: "horizontal", activeTabIndex: 0, display: 'flex', class: index_css_18.customTabStyled, stack: { grow: '1' }, overflow: 'hidden' },
                    this.$render("i-tab", { icon: { name: 'sliders-h', width: '1.5rem', height: '1.5rem' } },
                        this.$render("i-vstack", { gap: 1, width: "100%" },
                            this.$render("i-grid-layout", { id: "gridSelector", templateColumns: ['70px', 'auto'], verticalAlignment: "center", gap: { column: '0.5rem', row: '0.5rem' }, padding: { top: '1rem', bottom: '1rem', left: '0.75rem', right: '0.75rem' } },
                                this.$render("i-label", { caption: "ID", font: { size: '0.75rem' } }),
                                this.$render("i-hstack", { verticalAlignment: "center", border: { radius: 8 }, background: { color: Theme.input.background }, overflow: "hidden" },
                                    this.$render("i-input", { id: "inputId", inputType: "text", placeholder: "$enter_id", background: { color: 'transparent' }, width: "calc(100% - 1.5rem)", height: 24, border: { width: 0 }, padding: { left: 4, right: 2 }, font: { size: '0.675rem' }, class: `${index_17.textInputRight} ${index_17.bgInputTransparent}`, onBlur: (target) => this.onIDChanged(target), onKeyUp: (target, event) => event.key === 'Enter' && this.onIDChanged(target) }))),
                            this.$render("designer-tool-widget-settings", { id: "designerWidget", display: "block", onChanged: this.onGroupChanged, onConfig: this.onShowConfig, visible: false }),
                            this.$render("designer-tool-group", { id: "customGroup", display: 'block', onChanged: this.onGroupChanged, visible: false, onUpdate: this.onUpdateUI }),
                            this.$render("designer-tool-background", { id: "designerBackground", display: "block", onChanged: this.onPropChanged, onUpdate: this.onUpdateUI }),
                            this.$render("designer-tool-borders", { id: "designerBorders", display: "block", onChanged: this.onPropChanged, onUpdate: this.onUpdateUI }),
                            this.$render("designer-tool-effects", { id: "designerEffects", display: "block", onChanged: this.onPropChanged }),
                            this.$render("designer-tool-layout", { id: 'designerLayout', display: "block", onChanged: this.onPropChanged, onUpdate: this.onUpdateUI }),
                            this.$render("designer-tool-margins-padding", { id: "designerSpacing", display: "block", onChanged: this.onPropChanged, onUpdate: this.onUpdateUI }),
                            this.$render("designer-tool-position", { id: "designerPosition", display: "block", onChanged: this.onPropChanged, onUpdate: this.onUpdateUI }),
                            this.$render("designer-tool-size", { id: "designerSize", display: "block", onChanged: this.onPropChanged, onUpdate: this.onUpdateUI }),
                            this.$render("designer-tool-stylesheet", { id: "designerStylesheet", display: "block", onChanged: this.onPropChanged }),
                            this.$render("designer-tool-content", { id: "designerContent", display: "block", onChanged: this.onPropChanged, onUpdate: this.onUpdateUI }))),
                    this.$render("i-tab", { icon: { name: 'magic', width: '1.5rem', height: '1.5rem' }, onClick: this.renderTrigger },
                        this.$render("i-vstack", { gap: 1, width: "100%", height: '100%' },
                            this.$render("designer-trigger", { id: "designerTrigger", display: "block", width: "100%", minHeight: 250, onChanged: this.onControlEventChanged, onEventDblClick: (name) => this.onEventDblClick && this.onEventDblClick(name) })))),
                this.$render("i-modal", { id: "mdActions", title: '$widget_settings', closeIcon: { name: 'times' }, width: 600, maxWidth: '100%', height: '100dvh', overflow: { y: 'auto' }, closeOnBackdropClick: false })));
        }
    };
    DesignerProperties = __decorate([
        (0, components_28.customElements)('designer-properties')
    ], DesignerProperties);
    exports.default = DesignerProperties;
});
define("@scom/scom-designer/components/screens.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/index.css.ts"], function (require, exports, components_29, index_css_19) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_29.Styles.Theme.ThemeVars;
    let DesignerScreens = class DesignerScreens extends components_29.Module {
        constructor() {
            super(...arguments);
            this.listScreen = [];
            this.selectedId = '';
        }
        onShow(options) {
        }
        get screens() {
            return this.listScreen;
        }
        onHideScreen(icon, id) {
            const idx = this.listScreen.findIndex(screen => screen.id === id);
            this.listScreen[idx].isHidden = !this.listScreen[idx].isHidden;
            if (this.listScreen[idx].isHidden) {
                icon.name = 'eye-slash';
            }
            else {
                icon.name = 'eye';
            }
        }
        onShowModalDelete(id) {
            this.mdAlert.title = 'Delete Screen';
            this.mdAlert.status = 'confirm';
            this.mdAlert.content = 'Are you sure you want to delete this Screen?';
            this.mdAlert.onConfirm = () => this.onDeleteScreen(id);
            this.mdAlert.showModal();
        }
        onDeleteScreen(id) {
            const idx = this.listScreen.findIndex(screen => screen.id === id);
            const deletedScreen = this.listScreen[idx];
            this.listScreen[idx].isDeleted = true;
            const screenElm = this.vStackScreens.querySelector(`#screen-${id}`);
            this.vStackScreens.removeChild(screenElm);
            this.mdActions.visible = false;
            this.lbScreens.caption = `Screens (${this.listScreen.filter(v => !v.isDeleted).length})`;
            this.lbDeletedScreens.caption = `Deleted Screens (${this.listScreen.filter(v => v.isDeleted).length})`;
            const onRestore = () => {
                this.listScreen[idx].isDeleted = false;
                this.onAddScreen(deletedScreen.name, deletedScreen.elements, deletedScreen.id);
                this.vStackDeletedScreens.removeChild(pnl);
                this.lbDeletedScreens.caption = `Deleted Screens (${this.listScreen.filter(v => v.isDeleted).length})`;
            };
            const pnl = new components_29.Panel();
            pnl.appendChild(this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between", padding: { top: 4, bottom: 4, left: 8, right: 8 }, class: `${index_css_19.hoverFullOpacity} ${index_css_19.rowItemHoverStyled}` },
                this.$render("i-label", { caption: `${deletedScreen.name} (Deleted)`, font: { size: '0.75rem' } }),
                this.$render("i-icon", { name: "trash-restore", width: 14, height: 14, opacity: 0, cursor: "pointer", tooltip: { content: 'Restore Deleted Screen' }, onClick: onRestore })));
            this.vStackDeletedScreens.appendChild(pnl);
        }
        onDuplicateScreen(id) {
            const screen = this.listScreen.find(screen => screen.id === id);
            this.onAddScreen(screen.name, screen.elements);
            this.mdActions.visible = false;
        }
        getNewName(name) {
            let newName = name;
            while (this.listScreen.some(screen => screen.name === newName && !screen.isDeleted)) {
                const regex = /(\d+)$/;
                const matches = newName.match(regex);
                if (matches) {
                    const lastNumber = parseInt(matches[1]);
                    const updatedString = newName.replace(/\s\d+$/, '');
                    newName = `${updatedString} ${lastNumber + 1}`;
                }
                else {
                    newName = `${newName} 1`;
                }
            }
            return newName;
        }
        onUpdateName(id, name) {
            const idx = this.listScreen.findIndex(screen => screen.id === id);
            this.listScreen[idx].name = name;
        }
        onAddScreen(name, elements, _id) {
            const _name = this.getNewName(name);
            const id = _id || components_29.IdUtils.generateUUID();
            if (!_id) {
                const obj = {
                    id,
                    name: _name,
                    elements: elements || []
                };
                this.listScreen.push(obj);
            }
            else {
                const index = this.listScreen.findIndex(v => v.id === _id);
                this.listScreen[index].name = _name;
            }
            const lb = new components_29.Label(undefined, { caption: _name, font: { size: '0.75rem' } });
            const input = new components_29.Input(undefined, { width: '100%', value: _name, visible: false, font: { size: '0.75rem' }, border: 'none' });
            input.onBlur = () => {
                if (input.value) {
                    lb.caption = this.getNewName(input.value);
                    this.onUpdateName(id, lb.caption);
                }
                else {
                    input.value = lb.caption;
                }
                lb.visible = true;
                hStackActions.visible = true;
                input.visible = false;
            };
            const onEditName = () => {
                lb.visible = false;
                hStackActions.visible = false;
                input.visible = true;
            };
            const onShowActions = (target, event) => {
                this.selectedId = id;
                onScreenChanged();
                const { pageX, pageY, screenX } = event;
                let x = pageX;
                if (pageX + 112 >= screenX) {
                    x = screenX - 112;
                }
                this.onShowActions(pageY + 5, x);
            };
            const onScreenChanged = () => {
                for (const elm of this.vStackScreens.children) {
                    elm.classList.remove(index_css_19.rowItemActiveStyled);
                }
                pnl.classList.add(index_css_19.rowItemActiveStyled);
                this.onScreenChanged(this.listScreen.find(screen => screen.id === id));
            };
            const hStackActions = new components_29.HStack(undefined, {
                gap: 8,
                position: 'relative',
                verticalAlignment: 'center',
                opacity: 0.8,
                margin: { left: 4 }
            });
            hStackActions.appendChild(this.$render("i-icon", { name: "ellipsis-h", width: 14, height: 14, opacity: 0, cursor: "pointer", onClick: onShowActions }));
            hStackActions.appendChild(this.$render("i-icon", { name: "eye", width: 14, height: 14, opacity: 0, cursor: "pointer", onClick: (icon) => this.onHideScreen(icon, id) }));
            const pnl = new components_29.Panel();
            pnl.id = `screen-${id}`;
            pnl.onClick = () => onScreenChanged();
            pnl.appendChild(this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between", padding: { top: 4, bottom: 4, left: 8, right: 8 }, class: `${index_css_19.hoverFullOpacity} ${index_css_19.rowItemHoverStyled}`, onDblClick: onEditName },
                lb,
                input,
                hStackActions));
            this.vStackScreens.appendChild(pnl);
            this.lbScreens.caption = `Screens (${this.listScreen.filter(v => !v.isDeleted).length})`;
        }
        onShowActions(top, left) {
            const mdWrapper = this.mdActions.querySelector('.modal-wrapper');
            mdWrapper.style.top = `${top}px`;
            mdWrapper.style.left = `${left}px`;
            this.mdActions.visible = true;
        }
        async initModalActions() {
            this.mdActions = await components_29.Modal.create({
                visible: false,
                showBackdrop: false,
                minWidth: '7rem',
                height: 'auto',
                popupPlacement: 'bottomRight'
            });
            const itemActions = new components_29.VStack(undefined, { gap: 8, border: { radius: 8 } });
            itemActions.appendChild(this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", icon: { name: 'copy', width: 12, height: 12 }, caption: "Duplicate", class: index_css_19.iconButtonStyled, onClick: () => this.onDuplicateScreen(this.selectedId) }));
            itemActions.appendChild(this.$render("i-button", { background: { color: 'transparent' }, boxShadow: "none", icon: { name: 'trash', width: 12, height: 12 }, caption: "Delete", class: index_css_19.iconButtonStyled, onClick: () => this.onShowModalDelete(this.selectedId) }));
            this.mdActions.item = itemActions;
            document.body.appendChild(this.mdActions);
        }
        onShowDeletedScreens(value) {
            this.wrapperScreens.visible = !value;
            this.wrapperDeletedScreens.visible = value;
            this.onScreenHistoryShown(value);
        }
        init() {
            super.init();
            this.initModalActions();
            this.onScreenChanged = this.getAttribute('onScreenChanged', true) || this.onScreenChanged;
            this.onScreenHistoryShown = this.getAttribute('onScreenHistoryShown', true) || this.onScreenHistoryShown;
            this.onAddScreen('Blank');
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", maxWidth: Theme.layout.container.maxWidth, margin: { left: "auto", right: "auto" }, position: "relative", background: { color: Theme.background.main } },
                this.$render("i-vstack", { id: "wrapperScreens", height: "100%" },
                    this.$render("i-hstack", { gap: 8, verticalAlignment: "center", horizontalAlignment: "space-between", padding: { top: 4, bottom: 4, left: 8 }, background: { color: Theme.background.main } },
                        this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                            this.$render("i-label", { id: "lbScreens", caption: "Components", font: { bold: true, size: '0.75rem' } }),
                            this.$render("i-label", { caption: "Last Updated", font: { bold: true, size: '0.75rem' }, opacity: 0.8 })),
                        this.$render("i-hstack", { verticalAlignment: "center", margin: { left: 'auto' } },
                            this.$render("i-icon", { name: "history", class: index_css_19.hoverFullOpacity, opacity: 0.8, cursor: "pointer", width: 28, height: 24, padding: { top: 4, bottom: 4, left: 6, right: 6 }, border: {
                                    left: { style: 'solid', color: Theme.divider, width: 1 },
                                    right: { style: 'solid', color: Theme.divider, width: 1 }
                                }, tooltip: {
                                    content: 'View Deleted Screens'
                                }, onClick: () => this.onShowDeletedScreens(true) }),
                            this.$render("i-icon", { name: "plus-circle", class: index_css_19.hoverFullOpacity, opacity: 0.8, cursor: "pointer", width: 28, height: 24, padding: { top: 4, bottom: 4, left: 6, right: 6 }, tooltip: {
                                    content: 'Add Screen'
                                }, onClick: () => this.onAddScreen('Blank') }))),
                    this.$render("i-vstack", { id: "vStackScreens", gap: 2, overflow: "auto", maxHeight: "calc(100% - 32px)" })),
                this.$render("i-vstack", { id: "wrapperDeletedScreens", visible: false },
                    this.$render("i-hstack", { gap: 8, verticalAlignment: "center", horizontalAlignment: "space-between", padding: { top: 4, bottom: 4, left: 8 }, background: { color: Theme.background.main } },
                        this.$render("i-label", { id: "lbDeletedScreens", caption: "Deleted Screens (0)", font: { bold: true, size: '0.75rem' } }),
                        this.$render("i-icon", { name: "history", margin: { left: 'auto' }, class: index_css_19.hoverFullOpacity, opacity: 0.8, cursor: "pointer", width: 28, height: 24, padding: { top: 4, bottom: 4, left: 6, right: 6 }, border: {
                                left: { style: 'solid', color: Theme.divider, width: 1 },
                            }, tooltip: {
                                content: 'View Live Screens'
                            }, onClick: () => this.onShowDeletedScreens(false) })),
                    this.$render("i-vstack", { id: "vStackDeletedScreens", gap: 2, overflow: "auto" })),
                this.$render("i-alert", { id: "mdAlert" })));
        }
    };
    DesignerScreens = __decorate([
        (0, components_29.customElements)('designer-screens')
    ], DesignerScreens);
    exports.default = DesignerScreens;
});
define("@scom/scom-designer/components/pickerBlocks.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/index.css.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_30, index_css_20, index_19) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_30.Styles.Theme.ThemeVars;
    let DesignerPickerBlocks = class DesignerPickerBlocks extends components_30.Module {
        constructor(parent, options) {
            super(parent, options);
            this.isShown = true;
        }
        onDeleteCustomBlock(id) {
            // TODO
        }
        renderUI() {
            this.iconArrow.name = 'angle-down';
            const nodeItems = [];
            for (const item of this.items) {
                const { id, caption, image, path } = item;
                const block = new components_30.Panel(undefined, { width: '100%', height: 'auto', background: { color: Theme.background.main }, padding: { top: 6, bottom: 6, left: 8, right: 8 } });
                block.appendChild(this.$render("i-hstack", { gap: 8, width: "100%", height: "100%", verticalAlignment: "center", horizontalAlignment: "space-between" },
                    this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                        image ? this.$render("i-image", { url: image, width: 24, height: 24 }) : [],
                        this.$render("i-label", { caption: caption, font: { size: '0.75rem' } })),
                    this.$render("i-icon", { name: "trash", width: 16, height: 16, cursor: "pointer", tooltip: { content: '$delete_custom_block' }, onClick: () => this.onDeleteCustomBlock(id) })));
                block.classList.add(index_css_20.blockItemHoverStyled);
                nodeItems.push(block);
            }
            this.vStackItems.clearInnerHTML();
            this.vStackItems.append(...nodeItems);
        }
        onCollapse() {
            this.isShown = !this.isShown;
            this.vStackItems.visible = this.isShown;
            this.iconArrow.name = this.isShown ? 'angle-down' : 'angle-right';
        }
        init() {
            this.i18n.init({ ...index_19.componentsJson });
            super.init();
            this.items = this.getAttribute('items', true) || [];
            this.renderUI();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative", background: { color: Theme.background.main } },
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", cursor: "pointer", padding: { left: 8, right: 8, bottom: 8, top: 8 }, onClick: this.onCollapse },
                    this.$render("i-icon", { id: "iconArrow", name: "angle-down", width: 14, height: 14 }),
                    this.$render("i-label", { caption: "$your_blocks", font: { size: '0.75rem', bold: true } }),
                    this.$render("i-icon", { name: "question-circle", width: 14, height: 14, opacity: 0.8, tooltip: { content: '$your_own_custom_components' } })),
                this.$render("i-vstack", { id: "vStackItems", gap: 4, width: "100%" })));
        }
    };
    DesignerPickerBlocks = __decorate([
        (0, components_30.customElements)('designer-picker-blocks')
    ], DesignerPickerBlocks);
    exports.default = DesignerPickerBlocks;
});
define("@scom/scom-designer/components/pickerComponents.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/index.css.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_31, index_css_21, index_20) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_31.Styles.Theme.ThemeVars;
    let DesignerPickerComponents = class DesignerPickerComponents extends components_31.Module {
        constructor(parent, options) {
            super(parent, options);
            this.isShown = false;
        }
        renderUI() {
            this.lbName.caption = this.name;
            this.iconArrow.name = 'angle-down';
            this.iconTooltip.visible = !!this.tooltipText;
            this.iconTooltip.tooltip.content = this.tooltipText || '';
            this.hStackItems.visible = this.isShown;
            const nodeItems = [];
            for (const item of this.items) {
                const { name, image, icon } = item;
                const block = new components_31.Panel(undefined, { width: 'calc(50% - 0.5px)', height: '5rem', background: { color: Theme.background.main } });
                block.appendChild(this.$render("i-vstack", { gap: '0.5rem', width: "100%", height: "100%", verticalAlignment: "center", horizontalAlignment: "center", cursor: 'pointer', onClick: (target, event) => this.onItemSelected(target, event, item) },
                    icon ? this.$render("i-icon", { name: icon, width: '1.5rem', height: '1.5rem' }) : (image ? this.$render("i-image", { url: image, width: '1.5rem', height: '1.5rem' }) : []),
                    this.$render("i-label", { caption: name, font: { size: '0.75rem' } })));
                block.classList.add(index_css_21.blockItemHoverStyled);
                nodeItems.push(block);
            }
            if (this.items.length % 2 === 1) {
                nodeItems.push(this.$render("i-panel", { width: "calc(50% - 0.5px)", height: 80, background: { color: Theme.background.main } }));
            }
            this.hStackItems.clearInnerHTML();
            this.hStackItems.append(...nodeItems);
        }
        onItemSelected(target, event, item) {
            event.preventDefault();
            if (this.onSelect)
                this.onSelect(target, item);
        }
        onCollapse() {
            this.isShown = !this.isShown;
            this.hStackItems.visible = this.isShown;
            this.iconArrow.name = this.isShown ? 'angle-down' : 'angle-right';
        }
        init() {
            this.i18n.init({ ...index_20.mainJson });
            super.init();
            this.onSelect = this.getAttribute('onSelect', true) || this.onSelect;
            this.name = this.getAttribute('name', true) || '';
            this.tooltipText = this.getAttribute('tooltipText', true);
            this.isShown = this.getAttribute('isShown', true) || false;
            this.items = this.getAttribute('items', true) || [];
            this.renderUI();
        }
        render() {
            return (this.$render("i-vstack", { width: "100%", height: "100%", margin: { left: "auto", right: "auto" }, position: "relative", background: { color: Theme.background.main } },
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", cursor: "pointer", padding: { left: 8, right: 8, bottom: 8, top: 8 }, onClick: this.onCollapse },
                    this.$render("i-icon", { id: "iconArrow", name: "angle-down", width: 14, height: 14 }),
                    this.$render("i-label", { id: "lbName", font: { size: '0.75rem', bold: true } }),
                    this.$render("i-icon", { id: "iconTooltip", name: "question-circle", width: 14, height: 14, opacity: 0.8 })),
                this.$render("i-hstack", { id: "hStackItems", gap: 1, width: "100%", verticalAlignment: "center", wrap: "wrap", background: { color: Theme.divider } })));
        }
    };
    DesignerPickerComponents = __decorate([
        (0, components_31.customElements)('designer-picker-components')
    ], DesignerPickerComponents);
    exports.default = DesignerPickerComponents;
});
define("@scom/scom-designer/components/index.ts", ["require", "exports", "@scom/scom-designer/components/components.tsx", "@scom/scom-designer/components/properties.tsx", "@scom/scom-designer/components/screens.tsx", "@scom/scom-designer/components/pickerBlocks.tsx", "@scom/scom-designer/components/pickerComponents.tsx"], function (require, exports, components_32, properties_1, screens_1, pickerBlocks_1, pickerComponents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DesignerPickerComponents = exports.DesignerPickerBlocks = exports.DesignerScreens = exports.DesignerProperties = exports.DesignerComponents = void 0;
    exports.DesignerComponents = components_32.default;
    exports.DesignerProperties = properties_1.default;
    exports.DesignerScreens = screens_1.default;
    exports.DesignerPickerBlocks = pickerBlocks_1.default;
    exports.DesignerPickerComponents = pickerComponents_1.default;
});
define("@scom/scom-designer/data.ts", ["require", "exports", "@scom/scom-designer/assets.ts"], function (require, exports, assets_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.screen = exports.blockComponents = exports.pickerComponents = exports.recentComponents = void 0;
    // TODO - This array should be dynamic data
    exports.recentComponents = [
        {
            name: 'Frequently Used',
            tooltipText: 'Components that you use most frequently',
            items: [
                {
                    path: '',
                    name: 'Text',
                    image: assets_3.default.fullPath('img/designer/Text.svg')
                },
                {
                    path: '',
                    name: 'View',
                    image: assets_3.default.fullPath('img/designer/View.svg')
                }
            ]
        },
        {
            name: 'Recently Used',
            tooltipText: 'Components that you used recently',
            items: [
                {
                    path: '',
                    name: 'Button',
                    image: assets_3.default.fullPath('img/designer/Button.svg')
                }
            ]
        }
    ];
    exports.pickerComponents = [
        {
            name: 'Basic',
            tooltipText: 'The most simple & essential components to build a screen',
            items: [
                {
                    path: '',
                    name: 'Icon',
                    image: assets_3.default.fullPath('img/designer/Icon.svg')
                },
                {
                    path: '',
                    name: 'Text',
                    image: assets_3.default.fullPath('img/designer/Text.svg')
                },
                {
                    path: '',
                    name: 'View',
                    image: assets_3.default.fullPath('img/designer/View.svg')
                }
            ]
        },
        {
            name: 'Buttons',
            tooltipText: 'Components that allow users to complete actions on click',
            items: [
                {
                    path: '',
                    name: 'Button',
                    image: assets_3.default.fullPath('img/designer/Button.svg')
                },
                {
                    path: '',
                    name: 'Link',
                    image: assets_3.default.fullPath('img/designer/Link.svg')
                }
            ]
        }
    ];
    // TODO - This array should be dynamic data
    exports.blockComponents = [
        {
            id: '1',
            path: '',
            caption: 'My Block 1',
            image: assets_3.default.fullPath('img/designer/Block.svg')
        },
        {
            id: '2',
            path: '',
            caption: 'My Block 2',
            image: assets_3.default.fullPath('img/designer/Block.svg')
        }
    ];
    exports.screen = {
        id: '1',
        name: 'First Screen',
        elements: [
            {
                path: 'root',
                name: 'View',
                image: assets_3.default.fullPath('img/designer/View.svg'),
                items: [
                    {
                        path: 'root/text',
                        name: 'Text',
                        image: assets_3.default.fullPath('img/designer/Text.svg')
                    },
                    {
                        path: 'root/button',
                        name: 'Button',
                        image: assets_3.default.fullPath('img/designer/Button.svg')
                    },
                    {
                        path: 'root/view',
                        name: 'View',
                        image: assets_3.default.fullPath('img/designer/View.svg'),
                        items: [
                            {
                                path: 'root/view/text',
                                name: 'Text',
                                image: assets_3.default.fullPath('img/designer/Text.svg')
                            },
                            {
                                path: 'root/view/text-2',
                                name: 'Text 2',
                                image: assets_3.default.fullPath('img/designer/Text.svg')
                            }
                        ]
                    }
                ]
            }
        ]
    };
});
define("@scom/scom-designer/designer.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-designer/components/index.ts", "@scom/scom-designer/index.css.ts", "@scom/scom-designer/data.ts", "@scom/scom-designer/tools/index.ts", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/helpers/store.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_33, index_21, index_css_22, data_1, index_22, utils_12, config_8, store_7, index_23) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScomDesignerForm = void 0;
    const Theme = components_33.Styles.Theme.ThemeVars;
    var TABS;
    (function (TABS) {
        TABS[TABS["RECENT"] = 0] = "RECENT";
        TABS[TABS["BITS"] = 1] = "BITS";
        TABS[TABS["BLOCKS"] = 2] = "BLOCKS";
    })(TABS || (TABS = {}));
    class ControlResizer {
        constructor(control) {
            this.resizers = [];
            this._control = control;
        }
        addResizer(className) {
            let resizer = document.createElement("div");
            this._control.appendChild(resizer);
            this.resizers.push(resizer);
            resizer.className = "i-resizer " + className;
        }
        hideResizers() {
            this.resizers.forEach(resizer => this._control?.contains(resizer) && this._control.removeChild(resizer));
            this.resizers = [];
        }
        showResizers() {
            if (this.resizers.length == 0) {
                this.addResizer("tl");
                this.addResizer("tm");
                this.addResizer("tr");
                this.addResizer("ml");
                this.addResizer("mr");
                this.addResizer("bl");
                this.addResizer("bm");
                this.addResizer("br");
            }
        }
    }
    let ScomDesignerForm = class ScomDesignerForm extends components_33.Module {
        constructor(parent, options) {
            super(parent, options);
            this.currentTab = TABS.BITS;
            this.pathMapping = new Map();
            this.mouseDown = false;
            this.resizing = false;
            this.resizerPos = "";
            this.recentComponents = [];
            this.designPos = {};
            this.libsMap = {};
            this._customElements = (0, components_33.getCustomElements)();
            this.isPreviewing = false;
            this.baseUrl = '';
            this._previewUrl = '';
            this.onPropertiesChanged = this.onPropertiesChanged.bind(this);
            this.onControlEventChanged = this.onControlEventChanged.bind(this);
            this.onControlEventDblClick = this.onControlEventDblClick.bind(this);
            this.onDeleteComponent = this.onDeleteComponent.bind(this);
            this.onDuplicateComponent = this.onDuplicateComponent.bind(this);
            this.onVisibleComponent = this.onVisibleComponent.bind(this);
            this.handleBreakpoint = this.handleBreakpoint.bind(this);
            this.onUpdateDesigner = this.onUpdateDesigner.bind(this);
            this.onAddItem = this.onAddItem.bind(this);
            this.handlePreviewChanged = this.handlePreviewChanged.bind(this);
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        setData() { }
        set previewUrl(url) {
            this._previewUrl = url || 'https://decom.dev/debug.html';
            this.ifrPreview.url = url;
        }
        get previewUrl() {
            return this._previewUrl || 'https://decom.dev/debug.html';
        }
        get pickerComponentsFiltered() {
            let components;
            if (this.currentTab === TABS.RECENT) {
                components = [{
                        name: '$frequently_used',
                        tooltipText: '$components_that_you_use_most_frequently',
                        items: [...this.recentComponents]
                    }];
            }
            else {
                const group = this.getComponents();
                components = Object.values(group);
            }
            if (this.inputSearch.value) {
                const val = this.inputSearch.value.toLowerCase();
                components = components
                    .map((component) => {
                    const filteredItems = component.items.filter((item) => item.name.toLowerCase().includes(val));
                    return {
                        ...component,
                        items: filteredItems,
                    };
                })
                    .filter((component) => component.items.length > 0);
            }
            return components;
        }
        getComponents() {
            let result = {};
            for (let group in config_8.GroupMetadata) {
                result[group] = { ...config_8.GroupMetadata[group], items: [] };
            }
            let components = (0, components_33.getCustomElements)();
            const hasItem = (tagName) => tagName && config_8.ITEMS.includes(tagName);
            components = Object.entries(components)
                .filter(([name, component]) => component.icon && component.className && !hasItem(component.tagName))
                .reduce((obj, [name, component]) => {
                obj[name] = component;
                return obj;
            }, {});
            for (let name in components) {
                const component = components[name];
                const icon = component?.icon;
                const group = component?.group ?? 'Basic';
                result[group]['items'].push({
                    ...component,
                    icon,
                    path: '',
                    name: component.tagName
                });
            }
            return result;
        }
        get pickerBlocksFiltered() {
            if (this.inputSearch.value) {
                return data_1.blockComponents.filter((v) => v.caption.toLowerCase().includes(this.inputSearch.value.toLowerCase()));
            }
            return data_1.blockComponents;
        }
        isCustomWidget() {
            return !!this.selectedControl?.control?.showConfigurator;
        }
        async createControl(parent, name, config) {
            const { mediaQueries, options } = config;
            const controlConstructor = window.customElements.get(name);
            if (!controlConstructor)
                return;
            let controlProps = JSON.parse(JSON.stringify(options));
            for (let key in controlProps) {
                const value = controlProps?.[key];
                if (typeof value === 'string' && value.startsWith('this.')) {
                    delete controlProps[key];
                }
            }
            const control = await controlConstructor.create({ ...controlProps, designMode: true, cursor: 'pointer' });
            if (name.includes('scom')) {
                parent?.appendChild(control);
            }
            else {
                control.parent = parent;
            }
            const breakpointProps = (0, config_8.getMediaQueryProps)(mediaQueries);
            control._setDesignProps({ ...options, mediaQueries }, breakpointProps);
            const hasBackground = 'background' in options;
            const hasFont = 'font' in options;
            const isCustomWidget = !!control?.showConfigurator;
            if (isCustomWidget && (hasBackground || hasFont)) {
                let customTag = { ...(control.tag || {}) };
                const value = options[hasBackground ? 'background' : 'font'];
                customTag.customBackgroundColor = true;
                customTag.backgroundColor = value?.color || '';
                customTag.customFontColor = true;
                customTag.fontColor = value?.color || '';
                if (control?.setTag)
                    control.setTag(customTag);
            }
            return control;
        }
        revertImageUrl(value) {
            let result = '';
            if (value && typeof value === 'string') {
                const baseUrl = `${this.baseUrl || ''}/assets/`;
                if (value.includes(baseUrl)) {
                    const newValue = value.replace(baseUrl, '');
                    if (newValue)
                        result = `assets.fullPath('${newValue}')`;
                }
                else if (value.includes('assets.fullPath')) {
                    result = value;
                }
            }
            return result;
        }
        getOptions(props) {
            let options = (0, utils_12.parseProps)(props, this.baseUrl) || {};
            let newOptions = {};
            try {
                newOptions = (({ mediaQueries, ...o }) => o)(JSON.parse(JSON.stringify(options)));
            }
            catch { }
            return {
                mediaQueries: options.mediaQueries,
                options: { ...newOptions }
            };
        }
        updateDesignProps(component) {
            if (!component)
                return;
            const control = this.pathMapping.get(component.path);
            let props = control?.control?._getDesignProps();
            if (!props)
                return;
            const customProps = control?.control?._getCustomProperties()?.props || {};
            const newProps = {};
            for (let prop in props) {
                const defaultValue = customProps[prop]?.default;
                if (prop === 'mediaQueries' && Array.isArray(props[prop])) {
                    props[prop] = (props[prop] || []).filter(v => (v && Object.keys(v.properties).length > 0));
                    if (props[prop].length === 0) {
                        continue;
                    }
                }
                this.removeEmptyValue(props[prop]);
                if ((0, utils_12.isSameValue)(defaultValue, props[prop]) || props[prop] === undefined) {
                    continue;
                }
                if (typeof props[prop] === 'object' && Object.keys(props[prop]).length === 0) {
                    continue;
                }
                newProps[prop] = this.formatDesignProp(prop, props[prop], control);
            }
            component.props = { ...newProps };
            component.items?.forEach(item => {
                this.updateDesignProps(item);
            });
        }
        removeEmptyValue(value) {
            if (typeof value === 'object') {
                for (let subProp in value) {
                    if (value[subProp] === '' || value[subProp] === undefined) {
                        delete value[subProp];
                    }
                    else if (typeof value[subProp] === 'object') {
                        this.removeEmptyValue(value[subProp]);
                        if (Object.keys(value[subProp]).length === 0) {
                            delete value[subProp];
                        }
                    }
                }
            }
        }
        formatDesignProp(prop, value, control) {
            if (value === undefined)
                return `{undefined}`;
            let props = control.control._getCustomProperties();
            // let property = props.props[prop];
            let valueStr = value;
            // if (property) {
            //   switch (property.type) {
            //     case "number": {
            //       valueStr = typeof value === 'number' ? "{" + value + "}" : "'" + value + "'";
            //       break;
            //     }
            //     case "string": {
            //       valueStr = '"' + value + '"';
            //       break;
            //     }
            //     case "boolean": {
            //       valueStr = "{" + value + "}";
            //       break;
            //     }
            //     case "object": {
            //       valueStr = typeof value === 'string' ? "'" + value + "'" : `{${JSON.stringify(value)}}`;
            //       break;
            //     }
            //     case "array": {
            //       valueStr = typeof value === 'string' ? "'" + value + "'" : `{${JSON.stringify(value)}}`;
            //       break;
            //     }
            //   }
            //   control.props[prop] = valueStr;
            // }
            if (props.events[prop]) {
                valueStr = `{${value}}`;
            }
            else {
                if (typeof value === 'number') {
                    valueStr = "{" + value + "}";
                }
                else if (typeof value === 'boolean') {
                    valueStr = "{" + value + "}";
                }
                else if (typeof value === 'object') {
                    let revertedValue = '';
                    if (value?.image?.url) {
                        revertedValue = this.revertImageUrl(value.image.url);
                        if (revertedValue)
                            value.image.url = '{assets}';
                    }
                    else if (value?.url) {
                        revertedValue = this.revertImageUrl(value.url);
                        if (revertedValue)
                            value.url = '{assets}';
                    }
                    valueStr = `{${JSON.stringify(value)}}`;
                    if (revertedValue) {
                        valueStr = valueStr.replace(/\:\s*\"\{assets\}\"/, `:${revertedValue}`);
                    }
                }
                else if (typeof value === 'string') {
                    if ((this.baseUrl && value.startsWith(this.baseUrl))) {
                        const reverted = this.revertImageUrl(value);
                        valueStr = reverted ? `{${reverted}}` : value;
                    }
                    else if (value.startsWith('assets.fullPath')) {
                        valueStr = `{${value}}`;
                    }
                    else if (value.startsWith('()') || value.startsWith('this.')) {
                        valueStr = "{" + value + "}";
                    }
                    else if (value.includes("'")) {
                        valueStr = '"' + value + '"';
                    }
                    else {
                        valueStr = "'" + value + "'";
                    }
                }
            }
            return valueStr;
        }
        get rootComponent() {
            this.updateDesignProps(this._rootComponent);
            return this._rootComponent;
        }
        clear() {
            this.pathMapping = new Map();
            this.libsMap = {};
        }
        onScreenChanged(screen) { }
        onScreenHistoryShown(shown) {
            this.designerComponents.visible = !shown;
            this.designerScreens.height = shown ? '100%' : '40%';
        }
        onTabChanged(value) {
            if (this.currentTab === value)
                return;
            for (let i = 0; i < this.wrapperTab.children.length; i++) {
                if (value === i) {
                    this.wrapperTab.children[i].classList.add(index_css_22.labelActiveStyled);
                }
                else {
                    this.wrapperTab.children[i].classList.remove(index_css_22.labelActiveStyled);
                }
            }
            this.currentTab = value;
            const isBlock = value === TABS.BLOCKS;
            if (isBlock) {
                this.initBlockPicker();
            }
            else {
                this.initComponentPicker();
            }
            this.pnlComponentPicker.visible = !isBlock;
            this.pnlBlockPicker.visible = isBlock;
        }
        onFilterComponent() {
            if (this.currentTab === TABS.BLOCKS) {
                this.initBlockPicker();
            }
            else {
                this.initComponentPicker();
            }
        }
        onShowComponentPicker(component) {
            this.mdPicker.linkTo = this.pnlScreens;
            this.mdPicker.height = this.designerComponents.height;
            this.currentParent = component;
            this.mdPicker.visible = true;
        }
        onModalOpen() {
            // this.initComponentPicker();
        }
        onSelectComponent(component) {
            const path = component.path;
            if (path) {
                const control = this.pathMapping.get(path);
                if (control) {
                    this.handleSelectControl(control);
                }
            }
        }
        onVisibleComponent(component, visible) {
            const path = component.path;
            if (path) {
                const control = this.pathMapping.get(path);
                if (control?.control) {
                    let mediaQueries = control?.control._getDesignPropValue('mediaQueries');
                    if (!mediaQueries)
                        mediaQueries = [];
                    const defaultBreakpoint = (0, config_8.getDefaultMediaQuery)((0, store_7.getBreakpoint)());
                    const findedBreakpoint = mediaQueries.find((v) => (0, config_8.findMediaQueryCallback)(v, defaultBreakpoint));
                    if (findedBreakpoint) {
                        findedBreakpoint['properties']['visible'] = visible;
                    }
                    else {
                        defaultBreakpoint['properties']['visible'] = visible;
                        mediaQueries.push(defaultBreakpoint);
                    }
                    control.control._setDesignPropValue("mediaQueries", mediaQueries);
                    control.control._setDesignPropValue("visible", true, visible);
                }
            }
        }
        onDeleteComponent(component) {
            const path = component.path;
            if (path) {
                const control = this.pathMapping.get(path);
                if (control?.control) {
                    this.modified = true;
                    control.control.remove();
                    this.pathMapping.delete(path);
                    this.studio.removeComponent(this);
                }
            }
        }
        async onDuplicateComponent(component) {
            this.modified = true;
            const control = this.pathMapping.get(component.path);
            this.updateDesignProps(control);
            const newComponent = this.duplicateItem(control);
            const parentPath = component.parent;
            const parent = this.pathMapping.get(parentPath);
            await this.renderComponent(parent, newComponent, true);
            if (control.control && newComponent.control && parent.name !== "i-carousel-slider") {
                control.control.insertAdjacentElement('afterend', newComponent.control);
            }
            if (parent) {
                parent.items = parent.items || [];
                const index = parent.items.findIndex(x => x.path === component.path);
                parent.items.splice(index + 1, 0, newComponent);
                this.pathMapping.set(parentPath, parent);
            }
            this.updateStructure();
        }
        duplicateItem(component) {
            const control = this.pathMapping.get(component.path);
            const designerProps = control?.control?._getDesignProps() || {};
            const newProps = JSON.parse(JSON.stringify(designerProps));
            delete newProps['id'];
            let newComponent = {
                name: component.name,
                path: components_33.IdUtils.generateUUID(),
                parent: component.parent,
                props: { ...newProps },
                icon: component.icon,
                control: null
            };
            if (component.items) {
                newComponent.items = component.items.map(item => {
                    item.parent = newComponent.path;
                    return this.duplicateItem(item);
                });
            }
            return newComponent;
        }
        async renderComponent(parent, component, select) {
            if (!component?.name)
                return;
            const parentControl = parent?.control || this.pnlFormDesigner;
            const control = await this.renderControl(parentControl, component);
            if (!control)
                return;
            control.onclick = null;
            if (!control.style.position)
                control.style.position = "relative";
            component.control = control;
            component.parent = parent?.path;
            component.repeater = parent?.name === 'i-repeater' ? parent.path : (parent?.repeater || '');
            control.tag = new ControlResizer(control);
            this.bindControlEvents(component);
            this.pathMapping.set(component.path, component);
            if (component?.items?.length) {
                for (let item of component.items) {
                    await this.renderComponent(component, { ...item, control: null });
                }
            }
            const beforeSelected = this.selectedControl?.path;
            if (select || (beforeSelected && beforeSelected === component.path)) {
                this.handleSelectControl(component);
            }
            if (component.repeater) {
                this.updateRepeater(component.repeater);
            }
            return component;
        }
        async renderControl(parent, component) {
            const config = this.getOptions(component.props);
            let control = null;
            if (parent.id === 'pnlFormDesigner') {
                control = await this.createControl(parent, component.name, config);
                return control;
            }
            const parenNodeName = parent.nodeName;
            const isAddOption = (component.name === 'i-tab' && parenNodeName === 'I-TABS') ||
                (component.name === 'i-menu-item' && parenNodeName === 'I-MENU') ||
                (component.name === 'i-menu-item' && parenNodeName === 'I-MENU-ITEM') ||
                (component.name === 'i-accordion-item' && parenNodeName === 'I-ACCORDION');
            const isAddControl = (parenNodeName === 'I-CAROUSEL-SLIDER') || (parenNodeName === 'I-REPEATER') || (parenNodeName === 'I-ACCORDION-ITEM');
            if (isAddOption) {
                control = parent.add({ ...config.options, designMode: true, cursor: 'pointer' });
                const breakpointProps = (0, config_8.getMediaQueryProps)(config.mediaQueries);
                control._setDesignProps({ ...config.options, mediaQueries: config.mediaQueries }, breakpointProps);
            }
            else if (isAddControl) {
                const childControl = await this.createControl(undefined, component.name, config);
                control = parent.add(childControl);
            }
            else if (component.name === 'i-tree-node' && parenNodeName === 'I-TREE-VIEW') {
                control = parent.add(null, config.options?.caption || '');
                control.designMode = true;
                control.cursor = 'pointer';
                const breakpointProps = (0, config_8.getMediaQueryProps)(config.mediaQueries);
                control._setDesignProps({ ...config.options, mediaQueries: config.mediaQueries }, breakpointProps);
            }
            else if (component.name === 'i-tree-node' && parenNodeName === 'I-TREE-NODE') {
                const childControl = await this.createControl(undefined, component.name, config);
                control = parent.appendNode(childControl);
            }
            else {
                control = await this.createControl(parent, component.name, config);
            }
            return control;
        }
        updateRepeater(path) {
            const repeater = this.pathMapping.get(path)?.control;
            if (repeater)
                repeater.update();
        }
        isParentGroup(name) {
            if (!name)
                return false;
            return config_8.CONTAINERS.includes(name);
        }
        bindControlEvents(control) {
            control.control.onMouseDown = () => {
                this.handleSelectControl(control);
                this.designerComponents.activeComponent = control;
            };
            control.control.onDblClick = (target, event) => {
                event?.stopPropagation();
                const id = control.control.id;
                if (id) {
                    const name = control.control._getDesignPropValue("onClick");
                    if (!name) {
                        const fnName = id
                            .split("-")
                            .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
                            .join("");
                        this.modified = true;
                        control.control._setDesignPropValue("onClick", `this.${fnName}Click`);
                        this.studio.addEventHandler(this, "onClick", `${fnName}Click`);
                    }
                    else if (name.startsWith("this."))
                        this.studio.addEventHandler(this, "onClick", name.substring(5));
                }
            };
        }
        handleSelectControl(target) {
            if (this.selectedControl)
                this.selectedControl.control.tag.hideResizers();
            this.selectedControl = target;
            this.selectedControl.control.tag.showResizers();
            const name = this.selectedControl.name;
            const control = this.selectedControl?.control;
            if (control?.register && !this.libsMap[name]) {
                this.libsMap[name] = true;
                const packageName = '@scom/' + name.replace(/^i-/, '');
                const { types, defaultData } = control.register();
                const hasData = control._getDesignPropValue('data');
                if (!hasData) {
                    control._setDesignPropValue('data', defaultData);
                    control.setData(defaultData, defaultData);
                }
                this.studio.registerWidget(this, packageName, types);
            }
            this.showDesignProperties();
        }
        showDesignProperties() {
            this.designerProperties.component = this.selectedControl;
        }
        onCloseComponentPicker() {
            this.mdPicker.visible = false;
        }
        async handleAddControl(parent, event) {
            if (!parent)
                return;
            if (event)
                event.stopPropagation();
            this.modified = true;
            if (this.selectedComponent) {
                const props = this.getDefaultProps(this.selectedComponent.name);
                let com = {
                    name: this.selectedComponent.name,
                    icon: this.selectedComponent.icon,
                    path: components_33.IdUtils.generateUUID(),
                    items: [],
                    props,
                    control: null
                };
                if (parent) {
                    await this.renderComponent(parent, com, true);
                }
                else {
                    let pos = { x: event?.offsetX || 0, y: event?.offsetY || 0 };
                    com.props = {
                        ...com.props,
                        left: `{${pos.x}}`,
                        top: `{${pos.y}}`,
                    };
                    await this.renderComponent(undefined, com, true);
                    if (!this._rootComponent.items)
                        this._rootComponent.items = [];
                    this._rootComponent.items.push(com);
                    this.updateStructure();
                }
                this.selectedComponent = null;
                return com;
            }
        }
        getDefaultProps(name) {
            let props = {
                position: 'relative',
                width: '100%'
            };
            switch (name) {
                case 'i-panel':
                case 'i-vstack':
                case 'i-hstack':
                case 'i-accordion':
                case 'i-menu':
                case 'i-tree-view':
                    props = { ...props };
                    break;
                case 'i-markdown':
                    props = {
                        ...props,
                        display: 'block',
                        minHeight: `{10}`
                    };
                    break;
                case 'i-stack':
                    props = {
                        ...props,
                        direction: 'vertical'
                    };
                    break;
                case 'i-grid-layout':
                    props = {
                        ...props,
                        minHeight: '100px',
                        gap: '{{"column":"8px","row":"8px"}}',
                        templateColumns: '{["auto"]}',
                        templateRows: '{["auto"]}',
                        padding: '{{"top":"8px","right":"8px","bottom":"8px","left":"8px"}}',
                        autoFillInHoles: '{false}'
                    };
                    break;
                case 'i-card-layout':
                    props = {
                        ...props,
                        templateColumns: '{["auto"]}',
                        templateRows: '{["auto"]}',
                        gap: '{{"column":"8px","row":"8px"}}',
                        padding: '{{"top":"8px","right":"8px","bottom":"8px","left":"8px"}}',
                        cardMinWidth: '{100}',
                        cardHeight: '{100}'
                    };
                    break;
                case 'i-markdown-editor':
                case 'i-iframe':
                case 'i-code-editor':
                case 'i-tabs':
                    props = {
                        ...props,
                        height: '{200}',
                        display: 'block'
                    };
                    break;
                case 'i-tab':
                    props = {
                        ...props,
                        caption: 'Tab Title',
                    };
                    break;
                case 'i-scom-line-chart':
                case 'i-scom-bar-chart':
                case 'i-scom-scatter-chart':
                case 'i-scom-pie-chart':
                case 'i-scom-area-chart':
                case 'i-scom-mixed-chart':
                case 'i-scom-counter':
                    props = {
                        ...props,
                        minHeight: '{200}',
                        display: 'block'
                    };
                    break;
                case 'i-carousel-slider':
                    props = {
                        ...props,
                        type: 'dot',
                        minHeight: '100px',
                        indicators: '{true}'
                    };
                    break;
                case 'i-video':
                case 'i-scom-table':
                    props = {
                        ...props,
                        display: 'block'
                    };
                    break;
                case 'i-repeater':
                    props = {
                        ...props,
                        display: 'block',
                        count: '{3}'
                    };
                    break;
                case 'i-accordion-item':
                    props = {
                        ...props,
                        name: 'Accordion Item',
                        defaultExpanded: '{true}'
                    };
                    break;
                case 'i-image':
                    props = {
                        url: 'https://placehold.co/600x400?text=No+Image',
                        display: 'block',
                        width: '100%'
                    };
                    break;
                case 'i-label':
                    props = {
                        position: 'relative',
                        caption: 'Label'
                    };
                    break;
                case 'i-icon':
                    props = {
                        ...props,
                        width: '24px',
                        height: '24px'
                    };
                    break;
                case 'i-progress':
                    props = {
                        ...props,
                        percent: '{100}',
                        strokeWidth: '{5}',
                        minHeight: '{5}',
                        border: '{{"radius":"4px"}}'
                    };
                    break;
                case 'i-pagination':
                    props = {
                        ...props,
                        pageSize: '{10}',
                        currentPage: '{1}',
                        totalPages: '{2}',
                    };
                    break;
                case 'i-tree-node':
                    props = {
                        position: 'relative',
                        caption: 'Tree Node'
                    };
                    break;
                case 'i-menu-item':
                    props = {
                        position: 'relative',
                        title: 'Menu Item',
                        textAlign: 'left'
                    };
                    break;
                case 'i-radio-group':
                    props = {
                        ...props,
                        radioItems: '{[{"caption":"Option 1","value":"1"},{"caption":"Option 2","value":"2"},{"caption":"Option 3","value":"3"}]}'
                    };
                    break;
                case 'i-datepicker':
                case 'i-input':
                case 'i-combo-box':
                case 'i-range':
                    props = {
                        ...props,
                        height: '32px',
                        background: '{{"color":"transparent"}}',
                    };
                    break;
                case 'i-button':
                    props = {
                        padding: '{{"top":"8px","right":"10px","bottom":"8px","left":"10px"}}',
                        caption: 'Button',
                        border: '{{"radius":"4px"}}',
                    };
                    break;
                case 'i-modal':
                    props = {
                        minWidth: '300px'
                    };
                    break;
                default:
                    props = {
                        ...props,
                        width: `{100}`,
                        height: `{20}`
                    };
                    break;
            }
            return props;
        }
        updateStructure() {
            this.designerComponents.screen = {
                ...this.designerComponents.screen,
                elements: [this._rootComponent]
            };
            this.designerComponents.activeComponent = this.selectedControl;
        }
        initComponentPicker() {
            const nodeItems = [];
            const components = this.pickerComponentsFiltered;
            for (let i = 0; i < components.length; i++) {
                const pickerElm = new index_21.DesignerPickerComponents(undefined, {
                    ...components[i],
                    display: 'block',
                    isShown: i === 0,
                    margin: { bottom: 1 },
                    onSelect: (target, component) => {
                        this.onCloseComponentPicker();
                        this.onAddComponent(target, component);
                    }
                });
                nodeItems.push(pickerElm);
            }
            this.pnlComponentPicker.clearInnerHTML();
            this.pnlComponentPicker.append(...nodeItems);
        }
        async onAddComponent(target, component) {
            this.selectedComponent = { ...component, control: target };
            if (this.selectedComponent) {
                const finded = this.recentComponents.find(x => component?.name && x?.name && x.name === component.name);
                if (!finded)
                    this.recentComponents.push(this.selectedComponent);
            }
            if (this.isParentGroup(this.currentParent?.name)) {
                const parentControl = this.pathMapping.get(this.currentParent.path);
                const com = await this.handleAddControl(parentControl);
                if (com && parentControl) {
                    parentControl.items = parentControl.items || [];
                    parentControl.items.push(com);
                    this.pathMapping.set(this.currentParent.path, parentControl);
                    this.updateStructure();
                }
            }
        }
        onAddItem(parent) {
            if (!parent?.name)
                return;
            this.currentParent = parent;
            const itemName = config_8.ControlItemMapper[parent.name];
            if (!itemName)
                return;
            const props = this.getDefaultProps(itemName);
            const component = {
                props: { ...props },
                items: [],
                path: '',
                icon: this._customElements[itemName]?.icon,
                name: itemName
            };
            this.onAddComponent(null, component);
        }
        initBlockPicker() {
            const pickerElm = new index_21.DesignerPickerBlocks(undefined, {
                items: this.pickerBlocksFiltered,
            });
            this.pnlBlockPicker.clearInnerHTML();
            this.pnlBlockPicker.append(pickerElm);
        }
        onPropertiesChanged(prop, value, mediaQueryProp) {
            const control = this.selectedControl?.control;
            if (!control)
                return;
            this.modified = true;
            const oldVal = control._getDesignPropValue(prop);
            if (prop === 'mediaQueries') {
                const mediaQueries = control._getDesignPropValue('mediaQueries') || [];
                const findedIndex = mediaQueries.findIndex((v) => (0, config_8.findMediaQueryCallback)(v, value));
                if (findedIndex !== -1) {
                    mediaQueries[findedIndex] = value;
                }
                else {
                    mediaQueries.push(value);
                }
                control._setDesignPropValue('mediaQueries', mediaQueries);
            }
            else {
                control._setDesignPropValue(prop, value);
                if (this.isCustomWidget && (prop === 'background' || prop === 'font')) {
                    let customTag = { ...(control.tag || {}) };
                    if (prop === 'background') {
                        customTag.customBackgroundColor = true;
                        customTag.backgroundColor = value?.color || '';
                    }
                    else if (prop === 'font') {
                        customTag.customFontColor = true;
                        customTag.fontColor = value?.color || '';
                    }
                    if (control?.setTag)
                        control.setTag(customTag);
                }
            }
            if (mediaQueryProp) {
                const breakpointProps = (0, config_8.getMediaQueryProps)(control._getDesignPropValue('mediaQueries'));
                const designProp = control._getDesignPropValue(mediaQueryProp);
                control._setDesignPropValue(mediaQueryProp, designProp, breakpointProps?.[mediaQueryProp]);
            }
            if (prop.includes('icon') && this.selectedControl?.name === 'i-combo-box' && (!value.name && !value.image?.url)) {
                value.name = 'angle-down';
            }
            if (prop === 'link') {
                this.updateLinkProp(prop, value, control);
            }
            else if ((prop.toLowerCase()).includes('icon')) {
                this.updateIconProp(prop, value, control);
            }
            else if (prop === 'image') {
                this.updateImageProp(prop, value, control);
            }
            if (prop === "id" && value && oldVal !== value)
                this.studio.renameComponent(this, oldVal, value);
            if (this.selectedControl.repeater) {
                this.updateDesignProps(this.selectedControl);
                this.updateRepeater(this.selectedControl.repeater);
            }
            this.pathMapping.set(this.selectedControl.path, this.selectedControl);
        }
        updateIconProp(prop, value, control) {
            if (this.selectedControl?.name === 'i-tree-node') {
                const treeNode = control;
                treeNode[prop].name = value.name || '';
                treeNode[prop].image = value.image;
                if (value.fill)
                    treeNode[prop].fill = value.fill;
                if (value.width)
                    treeNode[prop].width = value.width;
                if (value.height)
                    treeNode[prop].height = value.height;
            }
            else {
                if (value.name || value.image?.url) {
                    const options = {
                        width: value.width || 16,
                        height: value.height || 16,
                        fill: value.fill || Theme.text.primary
                    };
                    if (value.image?.url) {
                        options.image = value.image;
                    }
                    else if (value.name) {
                        options.name = value.name;
                    }
                    control._setDesignPropValue(prop, options);
                    control[prop] = new components_33.Icon(control, { ...options, display: 'flex', designMode: true, cursor: 'pointer' });
                }
                else {
                    control[prop] = undefined;
                }
            }
        }
        updateLinkProp(prop, value, control) {
            if (value?.href) {
                const linkEl = new components_33.Link(control, { ...value, designMode: true, cursor: 'pointer' });
                control[prop] = linkEl;
            }
            else {
                control[prop] = undefined;
            }
        }
        updateImageProp(prop, value, control) {
            if (value.url) {
                const width = value.width || '1rem';
                const height = value.height || '1rem';
                const imageEl = new components_33.Image(control, { display: 'flex', ...value, width, height, designMode: true, cursor: 'pointer' });
                control._setDesignPropValue('name', '');
                control[prop] = imageEl;
            }
            else {
                control[prop] = undefined;
            }
        }
        onControlEventChanged(prop, newValue, oldValue) {
            if (this.selectedControl?.control && oldValue !== newValue) {
                this.modified = true;
                this.selectedControl.control._setDesignPropValue(prop, `this.${newValue}`);
                if (oldValue)
                    this.studio.renameEventHandler(this, oldValue, newValue);
                else
                    this.studio.addEventHandler(this, prop, `${newValue}`);
            }
        }
        onControlEventDblClick(funcName) {
            if (funcName) {
                this.studio.locateMethod(this, funcName);
            }
        }
        renderUI(root) {
            this.selectedControl = null;
            this._rootComponent = root;
            this.designerComponents.screen = {
                name: 'Screen',
                id: '',
                elements: [this._rootComponent]
            };
            this.onUpdateDesigner(false);
            this.designerProperties.clear();
        }
        onUpdateDesigner(refresh = true) {
            if (refresh) {
                this.updateDesignProps(this._rootComponent);
            }
            this.pnlFormDesigner.clearInnerHTML();
            this.pathMapping = new Map();
            this.renderComponent(undefined, {
                ...this._rootComponent,
                control: null
            });
        }
        handleControlMouseMove(event) {
            const currentControl = this.selectedControl?.control;
            if (!currentControl || !this.mouseDown) {
                event.preventDefault();
                return;
            }
            let mouseMovePos = { x: event.clientX, y: event.clientY };
            let mouseMoveDelta = { x: mouseMovePos.x - this.mouseDownPos.x, y: mouseMovePos.y - this.mouseDownPos.y };
            this.mouseDownPos = mouseMovePos;
            if (this.resizing) {
                this.modified = true;
                const currentWidth = currentControl.offsetWidth;
                const currentHeight = currentControl.offsetHeight;
                switch (this.resizerPos) {
                    case "tl": {
                        let left = currentControl.left + mouseMoveDelta.x;
                        let top = currentControl.top + mouseMoveDelta.y;
                        let width = currentWidth - mouseMoveDelta.x;
                        let height = currentHeight - mouseMoveDelta.y;
                        this.updatePosition({ left, top, width, height });
                        break;
                    }
                    case "tm": {
                        let top = currentControl.top + mouseMoveDelta.y;
                        let height = currentHeight - mouseMoveDelta.y;
                        this.updatePosition({ top, height });
                        break;
                    }
                    case "tr": {
                        let top = currentControl.top + mouseMoveDelta.y;
                        let width = currentWidth + mouseMoveDelta.x;
                        let height = currentHeight - mouseMoveDelta.y;
                        this.updatePosition({ top, width, height });
                        break;
                    }
                    case "ml": {
                        let left = currentControl.left + mouseMoveDelta.x;
                        let width = currentWidth - mouseMoveDelta.x;
                        this.updatePosition({ left, width });
                        break;
                    }
                    case "mr": {
                        let width = currentWidth + mouseMoveDelta.x;
                        this.updatePosition({ width });
                        break;
                    }
                    case "bl": {
                        let left = currentControl.left + mouseMoveDelta.x;
                        let width = currentWidth - mouseMoveDelta.x;
                        let height = currentHeight + mouseMoveDelta.y;
                        this.updatePosition({ left, width, height });
                        break;
                    }
                    case "bm": {
                        let height = currentHeight + mouseMoveDelta.y;
                        this.updatePosition({ height });
                        break;
                    }
                    case "br": {
                        let width = currentWidth + mouseMoveDelta.x;
                        let height = currentHeight + mouseMoveDelta.y;
                        this.updatePosition({ width, height });
                        break;
                    }
                }
            }
            else {
                if (Math.abs(mouseMoveDelta.x) > 5 || Math.abs(mouseMoveDelta.y) > 5) {
                    this.modified = true;
                    let left = currentControl.left + mouseMoveDelta.x;
                    let top = currentControl.top + mouseMoveDelta.y;
                    this.updatePosition({ left, top });
                }
            }
        }
        updatePosition(value) {
            const control = this.selectedControl?.control;
            if (!control)
                return;
            for (let prop in value) {
                if ((prop === 'width' || prop === 'height') && value[prop] < 0)
                    value[prop] = 0;
                this.designPos[prop] = value[prop];
                control[prop] = value[prop];
            }
        }
        handleControlMouseDown(event) {
            event.preventDefault();
            event.stopPropagation();
            this.mouseDown = true;
            this.mouseDownPos = { x: event.clientX, y: event.clientY };
            let elm = event.target;
            const resizers = elm.querySelectorAll('.i-resizer');
            let currentResizer = null;
            for (let i = 0; i < resizers.length; i++) {
                const resizer = resizers[i];
                const { left, right, top, bottom } = resizer.getBoundingClientRect();
                if (left <= event.clientX && event.clientX <= right && top <= event.clientY && event.clientY <= bottom) {
                    currentResizer = resizer;
                    break;
                }
            }
            if (currentResizer) {
                this.resizing = currentResizer.classList?.contains("i-resizer");
                this.resizerPos = currentResizer.className?.split(" ")[1];
            }
            else {
                this.resizing = false;
                this.resizerPos = '';
            }
            this.handleMouseMoveBound = this.handleControlMouseMove.bind(this);
            this.handleMouseUpBound = (event) => {
                this.handleControlMouseUp(event);
                this.pnlFormDesigner.removeEventListener('mousemove', this.handleMouseMoveBound);
                this.pnlFormDesigner.removeEventListener('mouseup', this.handleMouseUpBound);
            };
            this.pnlFormDesigner.addEventListener('mousemove', this.handleMouseMoveBound);
            this.pnlFormDesigner.addEventListener('mouseup', this.handleMouseUpBound);
        }
        handleControlMouseUp(event) {
            event.preventDefault();
            this.mouseDown = false;
            this.resizing = false;
            this.resizerPos = '';
            this.updateDesignPosition();
        }
        updateDesignPosition() {
            for (let prop in this.designPos) {
                this.onPropertiesChanged(prop, this.designPos[prop]);
            }
            const control = this.selectedControl?.control;
            if (typeof control?.resize === 'function' && (this.designPos.width || this.designPos.height)) {
                control.resize();
            }
            this.designPos = {};
            this.designerProperties.onUpdate();
        }
        async handlePreviewChanged(type, value) {
            const isPreviewMode = value === '1';
            if (isPreviewMode) {
                if (this.isPreviewing)
                    return;
                this.pnlLoading.visible = true;
                this.isPreviewing = true;
                if (typeof this.onPreview === 'function') {
                    let result = await this.onPreview();
                    if (result?.module) {
                        if (typeof this.onTogglePreview === 'function')
                            this.onTogglePreview(true);
                        this.togglePanels(true);
                        this.pnlFormDesigner.visible = false;
                        this.pnlPreview.visible = true;
                        this.btnClosePreview.visible = true;
                        if (!this.ifrPreview.url || this._previewUrl !== this.ifrPreview.url)
                            this.ifrPreview.url = this.previewUrl;
                        if (result) {
                            await this.ifrPreview.reload();
                            this.ifrPreview.postMessage(JSON.stringify(result));
                        }
                    }
                    else {
                        this.designerProperties.closePreview();
                    }
                }
                this.isPreviewing = false;
                this.pnlLoading.visible = false;
            }
            else {
                if (typeof this.onTogglePreview === 'function')
                    this.onTogglePreview(false);
                this.togglePanels(false);
                this.pnlFormDesigner.visible = true;
                this.pnlPreview.visible = false;
                this.pnlLoading.visible = false;
                this.btnClosePreview.visible = false;
                if (this.ifrPreview)
                    this.ifrPreview.unload();
            }
        }
        togglePanels(value) {
            if (this.pnlScreens)
                this.pnlScreens.width = value ? 0 : '100%';
            if (this.designerProperties) {
                this.designerProperties.show(value);
                this.designerProperties.height = value ? 'auto' : '100%';
            }
            if (this.pnlLeftIcon)
                this.pnlLeftIcon.visible = !value;
        }
        onClosePreview() {
            this.designerProperties.closePreview();
            this.handlePreviewChanged('preview', '0');
            if (typeof this.onClose === 'function')
                this.onClose();
        }
        handleBreakpoint(value) {
            const { minWidth, maxWidth } = config_8.breakpointsMap[value];
            if (minWidth !== undefined) {
                this.pnlFormDesigner.minWidth = minWidth;
                this.pnlFormDesigner.maxWidth = maxWidth || '1400px';
                this.pnlPreview.minWidth = minWidth;
                this.pnlPreview.maxWidth = maxWidth || '1400px';
                this.pnlPreview.width = "100%";
            }
            this.designerWrapper.alignItems = value >= 3 ? 'start' : 'center';
            this.onUpdateDesigner();
            this.designerComponents.renderUI();
        }
        onToggleClick(target, event) {
            event.preventDefault();
            event.stopPropagation();
            const parentEl = target.parent || target.parentElement;
            const icon = target.children[0];
            if (parentEl) {
                const parentWidth = Number(parentEl.width || 0);
                const childPanel = parentEl?.id === 'pnlProperties' && parentEl.querySelector('i-panel');
                if (parentWidth === 0) {
                    parentEl.width = '100%';
                    childPanel && (childPanel.left = '-1rem');
                }
                else {
                    parentEl.width = 0;
                    childPanel && (childPanel.left = '-1.15rem');
                }
                if (icon) {
                    icon.name = icon.name === 'angle-left' ? 'angle-right' : 'angle-left';
                }
            }
        }
        initEvents() {
            this.pnlFormDesigner.addEventListener('mousedown', this.handleControlMouseDown.bind(this));
        }
        onHide() {
            super.onHide();
            this.designerComponents?.onHide();
            this.pnlFormDesigner.removeEventListener('mousedown', this.handleControlMouseDown.bind(this));
            this.pnlFormDesigner.removeEventListener('mousemove', this.handleMouseMoveBound);
            this.pnlFormDesigner.removeEventListener('mouseup', this.handleMouseUpBound);
            if (this.ifrPreview?.clear)
                this.ifrPreview.clear();
        }
        init() {
            this.i18n.init({ ...index_23.mainJson });
            super.init();
            this.onClose = this.getAttribute('onClose', true) || this.onClose;
            this.onPreview = this.getAttribute('onPreview', true) || this.onPreview;
            this.wrapperComponentPicker.style.borderBottom = 'none';
            this.initComponentPicker();
            this.initBlockPicker();
            this.initEvents();
        }
        render() {
            return (this.$render("i-vstack", { width: '100%', height: '100%', 
                // maxWidth={Theme.layout.container.maxWidth}
                // margin={{ left: 'auto', right: 'auto' }}
                position: 'relative' },
                this.$render("i-hstack", { width: '100%', height: '100%' },
                    this.$render("i-vstack", { id: "pnlScreens", width: '100%', height: '100%', border: {
                            top: { width: 1, style: 'solid', color: Theme.divider },
                        }, maxWidth: 300, position: 'relative', overflow: 'visible', zIndex: 10, class: index_css_22.customTransition },
                        this.$render("i-panel", { id: "pnlLeftIcon", position: 'absolute', top: '2rem', right: '-1rem', width: '2rem', height: '2rem', border: { radius: '50%' }, background: { color: Theme.background.main }, cursor: 'pointer', class: index_css_22.toggleClass, onClick: this.onToggleClick.bind(this) },
                            this.$render("i-icon", { name: "angle-right", width: '1rem', height: '1rem', fill: Theme.text.primary, position: 'absolute', top: '0.5rem', right: '0.15rem' })),
                        this.$render("designer-screens", { id: 'designerScreens', minHeight: 160, onScreenChanged: this.onScreenChanged, onScreenHistoryShown: this.onScreenHistoryShown, visible: false }),
                        this.$render("designer-components", { id: 'designerComponents', height: '100%', minHeight: 200, overflow: 'hidden', onShowComponentPicker: this.onShowComponentPicker, onSelect: this.onSelectComponent, onVisible: this.onVisibleComponent, onDelete: this.onDeleteComponent, onDuplicate: this.onDuplicateComponent, onUpdate: this.onUpdateDesigner, onAdd: this.onAddItem }),
                        this.$render("i-modal", { id: "mdPicker", width: '16rem', maxWidth: '100%', height: '100dvh', overflow: 'hidden', showBackdrop: false, popupPlacement: 'rightTop', zIndex: 2000, padding: { top: 0, bottom: 0, left: 0, right: 0 }, onOpen: this.onModalOpen },
                            this.$render("i-panel", { width: '100%', height: '100%', overflow: 'hidden' },
                                this.$render("i-vstack", { id: 'wrapperComponentPicker', width: '100%', height: '100%', border: {
                                        width: 1,
                                        style: 'solid',
                                        color: Theme.divider,
                                        bottom: { width: 0 },
                                    }, background: { color: Theme.background.main }, overflow: 'auto' },
                                    this.$render("i-vstack", { gap: 12, padding: { top: 12, bottom: 12, left: 8, right: 8 }, border: {
                                            bottom: { width: 1, style: 'solid', color: Theme.divider },
                                        } },
                                        this.$render("i-hstack", { gap: 8, verticalAlignment: 'center', horizontalAlignment: 'space-between' },
                                            this.$render("i-label", { caption: '$add_components', font: { size: '0.75rem', bold: true } }),
                                            this.$render("i-icon", { name: 'times', width: 14, height: 14, cursor: 'pointer', onClick: this.onCloseComponentPicker })),
                                        this.$render("i-grid-layout", { id: 'wrapperTab', width: '100%', background: { color: Theme.action.hoverBackground }, templateColumns: ['1fr', '1fr', '1fr'], class: `${index_22.borderRadiusLeft} ${index_22.borderRadiusRight}` },
                                            this.$render("i-label", { caption: '$recent', class: `${index_css_22.customLabelTabStyled} ${index_22.borderRadiusLeft}`, onClick: () => this.onTabChanged(TABS.RECENT) }),
                                            this.$render("i-label", { caption: '$bits', class: `${index_css_22.customLabelTabStyled} ${index_css_22.labelActiveStyled}`, border: {
                                                    radius: 0,
                                                    left: { width: 1, style: 'solid', color: Theme.divider },
                                                    right: { width: 1, style: 'solid', color: Theme.divider },
                                                }, onClick: () => this.onTabChanged(TABS.BITS) }),
                                            this.$render("i-label", { caption: '$blocks', class: `${index_css_22.customLabelTabStyled} ${index_22.borderRadiusRight}`, onClick: () => this.onTabChanged(TABS.BLOCKS) })),
                                        this.$render("i-input", { id: 'inputSearch', placeholder: '$search', width: '100%', height: 24, border: {
                                                radius: 8,
                                                width: 0,
                                            }, padding: { left: 4, right: 4 }, font: { size: '0.75rem' }, onChanged: this.onFilterComponent })),
                                    this.$render("i-panel", { id: 'pnlComponentPicker', width: '100%' }),
                                    this.$render("i-panel", { id: 'pnlBlockPicker', width: '100%', visible: false }))))),
                    this.$render("i-vstack", { id: "designerWrapper", stack: { grow: '1' }, padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, overflow: 'hidden', zIndex: 0, alignItems: 'center', position: 'relative' },
                        this.$render("i-vstack", { id: "pnlLoading", width: "100%", minHeight: 200, position: "absolute", bottom: 0, zIndex: 1000, visible: false, background: { color: Theme.background.main }, class: "i-loading-overlay", opacity: 0.7, mediaQueries: [
                                {
                                    maxWidth: '767px',
                                    properties: {
                                        height: 'calc(100% - 3.125rem)',
                                        top: 0
                                    }
                                }
                            ] },
                            this.$render("i-vstack", { horizontalAlignment: "center", verticalAlignment: "center", position: "absolute", top: "calc(50% - 0.75rem)", left: "calc(50% - 0.75rem)" },
                                this.$render("i-icon", { class: "i-loading-spinner_icon", name: "spinner", width: 24, height: 24, fill: Theme.colors.primary.main }))),
                        this.$render("i-panel", { id: "pnlFormDesigner", width: 'auto', minHeight: '100%', background: { color: Theme.background.main }, overflow: { x: 'visible', y: 'auto' }, class: index_css_22.customScrollbar, mediaQueries: [
                                {
                                    maxWidth: '1024px',
                                    properties: {
                                        maxHeight: '100%'
                                    }
                                }
                            ] }),
                        this.$render("i-panel", { id: "pnlPreview", width: 'auto', minHeight: '100%', background: { color: Theme.background.main }, overflow: 'hidden', visible: false, mediaQueries: [
                                {
                                    maxWidth: '1024px',
                                    properties: {
                                        maxHeight: '100%'
                                    }
                                }
                            ] },
                            this.$render("i-iframe", { id: "ifrPreview", width: '100%', height: '100%', allowFullscreen: true }))),
                    this.$render("i-panel", { id: "pnlProperties", overflow: 'visible', maxWidth: 360, width: '100%', height: '100%', class: index_css_22.customTransition },
                        this.$render("i-panel", { id: "pnlRightIcon", position: 'absolute', top: '2rem', left: '-1rem', width: '2rem', height: '2rem', border: { radius: '50%' }, background: { color: Theme.background.main }, cursor: 'pointer', class: index_css_22.toggleClass, onClick: this.onToggleClick.bind(this) },
                            this.$render("i-icon", { name: "angle-right", width: '1rem', height: '1rem', fill: Theme.text.primary, position: 'absolute', top: '0.5rem', left: '0.15rem' })),
                        this.$render("i-icon", { id: "btnClosePreview", name: "times", width: 16, height: 16, visible: false, top: 5, right: 10, zIndex: 999, cursor: 'pointer', onClick: this.onClosePreview }),
                        this.$render("designer-properties", { id: 'designerProperties', display: 'flex', width: '100%', height: '100%', onChanged: this.onPropertiesChanged, onEventChanged: this.onControlEventChanged, onEventDblClick: this.onControlEventDblClick, onBreakpointChanged: this.handleBreakpoint, onPreviewChanged: this.handlePreviewChanged })))));
        }
    };
    ScomDesignerForm = __decorate([
        (0, components_33.customElements)('i-scom-designer--form')
    ], ScomDesignerForm);
    exports.ScomDesignerForm = ScomDesignerForm;
});
define("@scom/scom-designer/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-designer", ["require", "exports", "@ijstech/components", "@scom/scom-designer/index.css.ts", "@ijstech/compiler", "@scom/scom-code-editor", "@scom/scom-designer/helpers/utils.ts", "@scom/scom-designer/helpers/config.ts", "@scom/scom-designer/languages/index.ts"], function (require, exports, components_34, index_css_23, compiler_1, scom_code_editor_1, utils_13, config_9, index_24) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScomDesigner = void 0;
    const Theme = components_34.Styles.Theme.ThemeVars;
    let ScomDesigner = class ScomDesigner extends components_34.Module {
        set previewUrl(url) {
            this._previewUrl = url;
            if (this.formDesigner)
                this.formDesigner.previewUrl = url;
        }
        addEventHandler(designer, eventName, funcName) {
            let control = designer.selectedControl?.control;
            let fileName = this.fileName;
            let editor = this.codeEditor;
            let code = this.updateDesignerCode(fileName, true);
            this.compiler.updateFile(fileName, code);
            let propInfo = control._getCustomProperties();
            let params = '';
            let classNames = [propInfo.className];
            let event = propInfo.events[eventName];
            if (event) {
                event.forEach((param) => {
                    if (param.isControl && param.type !== propInfo.className)
                        classNames.push(param.type);
                    if (params)
                        params = params + ', ';
                    params = params + param.name + ': ' + param.type;
                });
            }
            let result = this.compiler.addEventHandler(fileName, classNames, funcName, params);
            this.codeEditor.focus();
            if (result && result.code) {
                this.compiler.updateFile(fileName, result.code);
                editor.value = result.code;
                if (result.lineNumber)
                    editor.setCursor(result.lineNumber, result.columnNumber);
            }
            this.resetTab();
        }
        locateMethod(designer, funcName) {
            let fileName = this.fileName;
            let result = this.compiler.locateMethod(fileName, funcName);
            this.resetTab();
            this.codeEditor.focus();
            this.codeEditor.setCursor(result.lineNumber, result.columnNumber);
        }
        removeComponent(designer) { }
        renameComponent(designer, oldId, newId) {
            let control = designer.selectedControl?.control;
            let fileName = this.fileName;
            let code = this.updateDesignerCode(fileName, true);
            this.compiler.updateFile(fileName, code);
            let propInfo = control._getCustomProperties();
            let result = this.compiler.renameComponent(fileName, propInfo.className, oldId, newId);
            this.compiler.updateFile(fileName, result);
            this.codeEditor.value = result;
            return true;
        }
        renameEventHandler(designer, funcName, newFuncName) {
            let fileName = this.fileName;
            let code = this.updateDesignerCode(fileName, true);
            this.compiler.updateFile(fileName, code);
            let result = this.compiler.renameMethod(fileName, funcName, newFuncName);
            this.compiler.updateFile(fileName, result);
            this.codeEditor.value = result;
            return true;
        }
        async registerWidget(designer, name, type) {
            scom_code_editor_1.ScomCodeEditor.addLib(name, type);
            await this.compiler.addPackage(name, { dts: { 'index.d.ts': type } });
        }
        constructor(parent, options) {
            super(parent, options);
            this._data = {
                url: '',
                file: {
                    path: '',
                    content: ''
                },
                baseUrl: ''
            };
            this.updateDesigner = true;
            this._components = (0, components_34.getCustomElements)();
            this.imported = {};
            this.activeTab = 'codeTab';
            this.tag = {};
            this.importCallback = this.importCallback.bind(this);
            this.handleDesignerPreview = this.handleDesignerPreview.bind(this);
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        get url() {
            return this._data.url;
        }
        set url(value) {
            this._data.url = value;
        }
        get file() {
            return this._data.file;
        }
        set file(value) {
            this._data.file = value;
        }
        get fileName() {
            const name = this._data.file?.path || (this.url ? (0, utils_13.extractFileName)(this.url) : '');
            return name || 'file_name';
        }
        get value() {
            return this.codeEditor?.value || '';
        }
        get baseUrl() {
            return this._data.baseUrl ?? '';
        }
        set baseUrl(value) {
            this._data.baseUrl = value ?? '';
        }
        async setData(value) {
            this._data = value;
            await this.renderUI();
        }
        getData() {
            return this._data;
        }
        async setValue(value) {
            await this.setData(value);
        }
        getErrors() {
            return this.codeEditor?.getErrors();
        }
        updateFileName(oldValue, newValue) {
            if (typeof this.codeEditor?.updateFileName === 'function')
                this.codeEditor.updateFileName(oldValue, newValue);
        }
        dispose() {
            if (this.codeEditor) {
                if (typeof this.codeEditor?.dispose === 'function') {
                    this.codeEditor.dispose();
                }
            }
            if (this.formDesigner) {
                this.formDesigner.onHide();
            }
        }
        disposeEditor() {
            if (this.codeEditor) {
                this.codeEditor.onChange = null;
                this.codeEditor.onKeyDown = null;
                if (typeof this.codeEditor?.dispose === 'function') {
                    this.codeEditor.dispose();
                    this.codeEditor.remove();
                }
            }
            if (this.formDesigner) {
                this.formDesigner.studio = null;
                this.formDesigner.onPreview = null;
                this.formDesigner.onHide();
                this.formDesigner.remove();
            }
        }
        saveViewState() {
            return this.codeEditor ? this.codeEditor.saveViewState() : null;
        }
        restoreViewState(state) {
            if (this.codeEditor) {
                this.codeEditor.restoreViewState(state);
            }
        }
        async renderUI() {
            this.activeTab = 'codeTab';
            this.updateDesigner = !!(this.url || this.file?.path);
            await this.renderContent(true);
        }
        async renderContent(init = false) {
            const isTsx = this.file?.path?.endsWith('.tsx');
            if (this.activeTab === 'codeTab' && !this.codeEditor) {
                const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
                this.codeEditor = this.createElement('i-scom-code-editor', this.pnlMain);
                this.codeEditor.width = '100%';
                this.codeEditor.height = '100%';
                this.codeEditor.stack = { grow: '1' };
                this.codeEditor.theme = themeVar;
                this.codeEditor.id = 'codeEditor';
                this.codeEditor.onChange = this.handleCodeEditorChange.bind(this);
                this.codeEditor.onKeyDown = this.handleCodeEditorSave.bind(this);
            }
            else if (this.activeTab === 'designTab' && !this.formDesigner) {
                this.formDesigner = this.createElement('i-scom-designer--form', this.pnlMain);
                this.formDesigner.width = '100%';
                this.formDesigner.height = '100%';
                this.formDesigner.stack = { grow: '1' };
                this.formDesigner.previewUrl = this._previewUrl;
                this.formDesigner.onPreview = this.handleDesignerPreview;
                this.formDesigner.onTogglePreview = this.handleTogglePanels.bind(this);
                this.formDesigner.onClose = () => {
                    typeof this.onClosePreview === 'function' && this.onClosePreview();
                };
                this.formDesigner.studio = this;
                this.formDesigner.visible = isTsx;
            }
            if (this.formDesigner) {
                this.formDesigner.visible = this.activeTab === 'designTab';
                this.formDesigner.baseUrl = this.baseUrl;
            }
            if (this.codeEditor)
                this.codeEditor.visible = this.activeTab === 'codeTab';
            if (init && !!(this.url || this.file?.path)) {
                this.loadContent();
            }
            this.updateButtons();
            this.designTab.enabled = isTsx;
        }
        handleTogglePanels(value) {
            this.pnlHeader.visible = !value;
            if (typeof this.onTogglePreview === 'function')
                this.onTogglePreview(value);
        }
        async loadContent() {
            const { url = '', file } = this._data;
            const content = url ? await (0, utils_13.getFileContent)(url) : file?.content || '';
            const fileName = this.fileName;
            await this.codeEditor.loadContent(content, 'typescript', fileName);
            this.compiler.addFile(fileName, content, this.importCallback);
        }
        resetTab() {
            this.activeTab = 'codeTab';
            this.formDesigner.visible = false;
            this.codeEditor.visible = true;
            this.updateButtons();
        }
        updateButtons() {
            this.codeTab.background = { color: this.activeTab === 'codeTab' ? Theme.colors.secondary.main : Theme.action.activeBackground };
            this.designTab.background = { color: this.activeTab === 'designTab' ? Theme.colors.secondary.main : Theme.action.activeBackground };
        }
        async addLib() {
            if (!this.compiler)
                this.compiler = new compiler_1.Compiler();
            const content = await components_34.application.getContent(`${components_34.application.rootDir}libs/@ijstech/components/index.d.ts`);
            await this.compiler.addPackage('@ijstech/components', { dts: { 'index.d.ts': content } });
            scom_code_editor_1.ScomCodeEditor.addLib('@ijstech/components', content);
        }
        async importCallback(fileName, isPackage) {
            if (this.imported[fileName]) {
                return this.imported[fileName];
            }
            let result = null;
            if (typeof this.onImportFile === 'function') {
                result = await this.onImportFile(fileName, isPackage);
                if (result) {
                    // if (fileName === '@ijstech/compiler') {
                    //   result.content = `
                    //     declare module '${fileName}' {
                    //       ${result.content}
                    //     } \n
                    //   `;
                    // }
                    const importedName = isPackage ? fileName : result.fileName;
                    const isDependency = isPackage && result?.fileName === 'index.d.ts';
                    if (isDependency)
                        this.imported[importedName] = result.content || '';
                    if (isPackage) {
                        if (result.fileName.endsWith('index.d.ts')) {
                            scom_code_editor_1.ScomCodeEditor.addLib(fileName, result.content);
                        }
                        else {
                            scom_code_editor_1.ScomCodeEditor.addLib(result.fileName, result.content);
                        }
                        await this.compiler.addPackage(fileName, { dts: { 'index.d.ts': result.content } });
                    }
                    else {
                        scom_code_editor_1.ScomCodeEditor.addFile(importedName, result.content);
                        await this.compiler.addFile(importedName, result.content);
                    }
                }
            }
            return result;
        }
        async handleTabChanged(target, event) {
            this.activeTab = target.id;
            const fileName = this.fileName;
            await this.renderContent();
            if (target.id === 'designTab') {
                if (this.updateDesigner) {
                    this.updateDesigner = false;
                    try {
                        await this.compiler.addFile(fileName, this.codeEditor.value, this.importCallback);
                        const ui = this.compiler.parseUI(fileName);
                        this.formDesigner.renderUI(this.updateRoot(ui));
                    }
                    catch (error) {
                        this.updateDesigner = true;
                    }
                }
            }
            else if (target.id === 'codeTab') {
                this.updateDesignerCode(fileName);
            }
        }
        updateRoot(root) {
            if (!root) {
                root = {
                    name: 'i-panel',
                    props: {
                        width: '{100%}',
                        minHeight: '{100%}'
                    },
                    items: []
                };
            }
            root.path = components_34.IdUtils.generateUUID();
            root.icon = (this._components['i-panel']?.icon || '');
            if (!root.items)
                root.items = [];
            if (root.items.length) {
                root.items = this.updatePath(root.items, root);
            }
            return { ...root };
        }
        updatePath(items, parent) {
            return [...items].map((item) => {
                const component = item;
                component.path = components_34.IdUtils.generateUUID();
                component.parent = parent.path;
                component.repeater = parent?.name === 'i-repeater' ? parent.path : (parent?.repeater || '');
                component.icon = (this._components[component.name]?.icon || '');
                if (!component.items)
                    component.items = [];
                if (component.items.length) {
                    component.items = this.updatePath(component.items, component);
                }
                return component;
            });
        }
        handleCodeEditorChange(target, event) {
            this.updateDesigner = true;
            this.imported = {};
            if (typeof this.onChange === 'function')
                this.onChange(this, event);
        }
        handleCodeEditorSave(target, event) {
            if (event.code === 'KeyS' && event.ctrlKey) {
                event.stopPropagation();
                event.preventDefault();
                if (typeof this.onSave === 'function')
                    this.onSave(target, event);
            }
        }
        async getImportFile(fileName, isPackage) {
            if (isPackage) {
                const content = await components_34.application.getContent(`${components_34.application.rootDir}libs/${fileName}/index.d.ts`) || this.imported[fileName];
                return {
                    fileName: 'index.d.ts',
                    content
                };
            }
            else {
                return await this.getFile(fileName);
            }
        }
        ;
        async getFile(fileName) {
            if (typeof this.onImportFile === 'function') {
                return await this.onImportFile(fileName, false);
            }
            return null;
        }
        async handleDesignerPreview() {
            if (this.updateDesigner)
                this.updateDesignerCode(this.fileName, true);
            if (typeof this.onPreview === 'function')
                return await this.onPreview();
            else {
                let value = `///<amd-module name='@scom/debug-module'/> \n` + this.value;
                const fileName = this.fileName || 'index.tsx';
                if (value) {
                    let compiler = new compiler_1.Compiler();
                    await compiler.addFile(fileName, value, this.getImportFile.bind(this));
                    let result = await compiler.compile(true);
                    if (result.errors?.length > 0) {
                        console.error(result.errors);
                        if (typeof this.onRenderError === 'function')
                            this.onRenderError(result.errors);
                        return null;
                    }
                    return {
                        module: '@scom/debug-module',
                        script: result?.script['index.js']
                    };
                }
            }
        }
        updateDesignerCode(fileName, modified) {
            if (modified || this.formDesigner?.modified) {
                const root = this.formDesigner.rootComponent;
                let code = this.compiler.renderUI(fileName, 'render', root);
                this.compiler.updateFile(fileName, code);
                this.codeEditor.value = code;
                this.formDesigner.modified = false;
                return code;
            }
        }
        async openFile(file, parentCid, parent, config) {
            parent.append(this);
            this.updateDesigner = true;
            const path = file.path.startsWith('/') ? file.path.slice(1) : file.path;
            const endpoint = config?.transportEndpoint || '';
            const mediaUrl = `${endpoint}/ipfs/${parentCid}/${path}`;
            this.setData({ url: mediaUrl });
        }
        clear() {
            this.imported = {};
            this.compiler = new compiler_1.Compiler();
            this.activeTab = 'codeTab';
        }
        init() {
            this.i18n.init({ ...index_24.mainJson });
            super.init();
            this.onSave = this.getAttribute('onSave', true) || this.onSave;
            this.onChange = this.getAttribute('onChange', true) || this.onChange;
            this.onImportFile = this.getAttribute('onImportFile', true) || this.onImportFile;
            this.onTogglePreview = this.getAttribute('onTogglePreview', true) || this.onTogglePreview;
            this.onClosePreview = this.getAttribute('onClosePreview', true) || this.onClosePreview;
            this.onRenderError = this.getAttribute('onRenderError', true) || this.onRenderError;
            const url = this.getAttribute('url', true);
            const file = this.getAttribute('file', true);
            this.addLib();
            this.setData({ url, file });
            this.classList.add(index_css_23.blockStyle);
            this.setTag(config_9.themesConfig);
        }
        // Configuration
        updateTag(type, value) {
            this.tag[type] = this.tag[type] ?? {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this.tag[type][prop] = value[prop];
            }
        }
        async setTag(value) {
            const newValue = value || {};
            for (let prop in newValue) {
                if (newValue.hasOwnProperty(prop)) {
                    if (prop === 'light' || prop === 'dark')
                        this.updateTag(prop, newValue[prop]);
                    else
                        this.tag[prop] = newValue[prop];
                }
            }
            this.updateTheme();
        }
        updateStyle(name, value) {
            value ? this.style.setProperty(name, value) : this.style.removeProperty(name);
        }
        updateTheme() {
            const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
            this.updateStyle('--text-primary', this.tag[themeVar]?.fontColor);
            this.updateStyle('--background-main', this.tag[themeVar]?.backgroundColor);
            this.updateStyle('--colors-secondary-main', this.tag[themeVar]?.secondaryColor);
            this.updateStyle('--background-default', this.tag[themeVar]?.wrapperBgColor);
            this.updateStyle('--action-active_background', this.tag[themeVar]?.actionBgColor);
            this.updateStyle('--action-active', this.tag[themeVar]?.actionFontColor);
            this.updateStyle('--input-background', this.tag[themeVar]?.inputBgColor);
            this.updateStyle('--input-font_color', this.tag[themeVar]?.inputFontColor);
            this.updateStyle('--background-paper', this.tag[themeVar]?.paperBgColor);
            this.updateStyle('--divider', this.tag[themeVar]?.divider);
            this.updateStyle('--action-selected_background', this.tag[themeVar]?.selectedBackground);
            this.updateStyle('--action-selected', this.tag[themeVar]?.selected);
            if (this.codeEditor) {
                this.codeEditor.theme = themeVar;
            }
        }
        getTag() {
            return this.tag;
        }
        getConfigurators() {
            return [
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: () => {
                        return this._getActions();
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this),
                },
                {
                    name: 'Emdedder Configurator',
                    target: 'Embedders',
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this),
                },
            ];
        }
        _getActions() {
            const actions = [
                {
                    name: 'Widget Settings',
                    icon: 'edit',
                    ...this.getWidgetSchemas(),
                },
            ];
            return actions;
        }
        getWidgetSchemas() {
            const propertiesSchema = {
                type: 'object',
                properties: {
                    pt: {
                        title: 'Top',
                        type: 'number',
                    },
                    pb: {
                        title: 'Bottom',
                        type: 'number',
                    },
                    pl: {
                        title: 'Left',
                        type: 'number',
                    },
                    pr: {
                        title: 'Right',
                        type: 'number',
                    },
                    align: {
                        type: 'string',
                        title: 'Alignment',
                        enum: ['left', 'center', 'right'],
                    },
                    maxWidth: {
                        type: 'number',
                    },
                    link: {
                        title: 'URL',
                        type: 'string',
                    },
                },
            };
            const themesSchema = {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Group',
                                label: 'Padding (px)',
                                elements: [
                                    {
                                        type: 'VerticalLayout',
                                        elements: [
                                            {
                                                type: 'HorizontalLayout',
                                                elements: [
                                                    {
                                                        type: 'Control',
                                                        scope: '#/properties/pt',
                                                    },
                                                    {
                                                        type: 'Control',
                                                        scope: '#/properties/pb',
                                                    },
                                                    {
                                                        type: 'Control',
                                                        scope: '#/properties/pl',
                                                    },
                                                    {
                                                        type: 'Control',
                                                        scope: '#/properties/pr',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
            return {
                userInputDataSchema: propertiesSchema,
                userInputUISchema: themesSchema,
            };
        }
        render() {
            return (this.$render("i-vstack", { width: '100%', height: '100%', overflow: 'hidden', position: 'relative', background: { color: Theme.background.default } },
                this.$render("i-hstack", { verticalAlignment: 'center', stack: { shrink: '0' }, id: "pnlHeader" },
                    this.$render("i-button", { id: "codeTab", caption: '$code', padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }, background: { color: Theme.action.activeBackground }, stack: { shrink: '0' }, border: { width: '1px', style: 'solid', color: Theme.action.activeBackground, radius: 0 }, boxShadow: 'none', font: { color: Theme.action.active }, minHeight: '2.25rem', onClick: this.handleTabChanged }),
                    this.$render("i-button", { id: "designTab", caption: '$design', stack: { shrink: '0' }, padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }, background: { color: Theme.action.activeBackground }, border: { width: '1px', style: 'solid', color: Theme.action.activeBackground, radius: 0 }, boxShadow: 'none', minHeight: '2.25rem', font: { color: Theme.action.active }, onClick: this.handleTabChanged })),
                this.$render("i-vstack", { id: "pnlMain", maxHeight: '100%', overflow: 'hidden', stack: { 'grow': '1' } })));
        }
    };
    ScomDesigner = __decorate([
        (0, components_34.customElements)('i-scom-designer')
    ], ScomDesigner);
    exports.ScomDesigner = ScomDesigner;
});
