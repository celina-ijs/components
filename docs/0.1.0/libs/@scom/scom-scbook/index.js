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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-scbook/main.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_1.Styles.Theme.ThemeVars;
    const spin = components_1.Styles.keyframes({
        "to": {
            "-webkit-transform": "rotate(360deg)"
        }
    });
    const tableCellStyle = {
        border: `1px solid ${Theme.divider}`,
        padding: '5px 10px',
        lineHeight: '160%',
        boxSizing: 'content-box'
    };
    components_1.Styles.cssRule('i-panel.docs-module', {
        display: 'block',
        backgroundColor: Theme.docs.background,
        $nest: {
            'i-menu-item': {
                color: Theme.text.primary
            },
            'a.internal-link': {
                cursor: 'pointer',
            },
            hidden: {
                display: 'none',
            },
            'i-markdown': {
                color: Theme.docs.text0,
                $nest: {
                    'p:has(img)': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    p: {
                        display: 'block',
                        fontSize: '16px',
                        lineHeight: '24px',
                        overflow: 'hidden',
                        $nest: {
                            '@media (max-width: 700px)': {
                                display: 'block',
                            },
                            'img': {
                                height: 'auto',
                                width: '50%',
                            },
                            'img:only-child': {
                                borderRadius: '5px',
                                padding: 0,
                                width: 'auto',
                                height: '100%'
                            },
                        },
                    },
                    li: {
                        $nest: {
                            strong: {
                                display: 'inline-block',
                                paddingBottom: '8px',
                            },
                        },
                    },
                    table: {
                        display: 'block',
                        width: 'max-content',
                        maxWidth: '100%',
                        margin: '12px 0px 14px',
                        borderCollapse: 'collapse',
                        boxSizing: 'border-box',
                        overflow: 'auto',
                        $nest: {
                            'th': tableCellStyle,
                            'td': tableCellStyle,
                            'thead': {
                                backgroundColor: Theme.background.default
                            }
                        },
                    },
                    a: {
                        display: 'inline-block',
                        color: Theme.colors.info.main,
                        $nest: {
                            '&:hover': {
                                color: Theme.colors.info.dark,
                            }
                        }
                    }
                },
            },
            '.docs-module': {
                display: 'block',
            },
            '.docs-wrapper': {
                //   display: 'flex'
                // },
                // '.docs-wrapper.show-header': {
                //   paddingTop: '70px',
                //   $nest: {
                //     '#docsNavigator': {
                //       minHeight: 'calc(100vh - 70px)'
                //     }
                //   }
                // },
                // '.docs-wrapper.no-header': {
                //   $nest: {
                //     '#docsNavigator': {
                //       height: '100vh !important',
                //       top: '0px'
                //     }
                //   }
                display: 'flex',
                // minHeight: 'calc(100vh - 70px)',
            },
            '#docsNavigator': {
                display: 'none',
                backgroundColor: Theme.background.main,
                $nest: {
                    '@media (min-width: 701px)': {
                        display: 'block',
                    },
                    '&.show': {
                        display: 'block',
                    },
                },
            },
            '.docs-container': {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                flexFlow: 'row nowrap',
                backgroundColor: Theme.docs.background,
                width: '100%',
                minWidth: 0,
                padding: '0 20px',
                $nest: {
                    '@media (max-width: 700px)': {
                        padding: '0',
                    },
                    '@media (max-width: 1376px)': {
                        $nest: {
                            'i-panel.content': {
                                width: '100%'
                            },
                            // '#pnlRunner': {
                            //   display: 'none'
                            // }
                        }
                    },
                    '.spinner': {
                        display: "inline-block",
                        width: "2.5rem",
                        height: "2.5rem",
                        border: "3px solid transparent",
                        borderRadius: "50%",
                        borderTopColor: Theme.colors.primary.main,
                        borderRightColor: Theme.colors.primary.main,
                        "animation": `${spin} 0.46s linear infinite`,
                        "-webkit-animation": `${spin} 0.46s linear infinite`
                    },
                    '#mdViewer': {
                        display: 'block',
                        $nest: {
                            '&.hide': {
                                display: 'none',
                            },
                            '.sc-link': {
                                backgroundColor: Theme.action.selectedBackground,
                                boxShadow: Theme.shadows[1],
                                color: Theme.action.selected,
                                border: `1px solid ${Theme.divider}`,
                                borderRadius: '4px',
                                padding: '16px',
                                cursor: 'pointer',
                                $nest: {
                                    a: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                    },
                                    '.sc-link-icon': {
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        flexBasis: 'auto',
                                        flexShrink: 0,
                                        border: '0 solid black',
                                        margin: 0,
                                        marginRight: '16px',
                                        minHeight: 0,
                                        minWidth: 0,
                                        padding: 0,
                                        $nest: {
                                            '.icon-wrapper': {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: Theme.colors.secondary.main,
                                                color: Theme.colors.secondary.contrastText,
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '4px',
                                            },
                                        },
                                    },
                                    '.sc-link-content': {
                                        padding: 0,
                                        flexShrink: 1,
                                        flexGrow: 1,
                                        flexBasis: '0%',
                                        $nest: {
                                            '.info': {
                                                display: 'flex',
                                                alignItems: 'center',
                                                $nest: {
                                                    'div.title': {
                                                        fontSize: '16px',
                                                        lineHeight: '24px',
                                                        fontWeight: 500,
                                                        color: Theme.colors.secondary.light,
                                                    },
                                                    'div.subtitle': {
                                                        fontSize: '14px',
                                                        lineHeight: '22px',
                                                        fontWeight: 400,
                                                        color: Theme.colors.secondary.contrastText,
                                                        marginLeft: '16px',
                                                    },
                                                },
                                            },
                                            '.type': {
                                                fontSize: '16px',
                                                lineHeight: '24px',
                                                fontWeight: 400,
                                                color: Theme.colors.secondary.contrastText,
                                            },
                                        },
                                    },
                                },
                            },
                            '.sc-hint': {
                                display: 'flex',
                                alignItems: 'stretch',
                                borderLeftWidth: '4px',
                                borderLeftStyle: 'solid',
                                backgroundColor: Theme.text.hint,
                                borderRadius: '4px',
                                paddingLeft: '0.5rem',
                                $nest: {
                                    '&.warning': {
                                        borderColor: Theme.colors.warning.main,
                                    },
                                    '&.danger': {
                                        borderColor: Theme.colors.error.main,
                                    },
                                    '&.info': {
                                        borderColor: Theme.colors.info.main,
                                    },
                                    '&.success': {
                                        borderColor: Theme.colors.success.main,
                                    },
                                    '.sc-hint-icon': {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '48px',
                                        paddingTop: '18px',
                                    },
                                    '.sc-hint-content': {
                                        flex: 1,
                                        padding: '16px 24px 16px 0',
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                    },
                                },
                            },
                            '.sc-content-ref': {
                                paddingBottom: '4px',
                                $nest: {
                                    a: {
                                        color: Theme.colors.info.main,
                                        lineHeight: '20px',
                                        $nest: {
                                            '&:hover': {
                                                color: Theme.colors.info.dark,
                                                textDecoration: 'underline',
                                            },
                                        },
                                    },
                                },
                            },
                            '.sc-tabs': {
                                $nest: {
                                    '.tabs': {
                                        marginBottom: 0,
                                        borderBottom: 0,
                                    },
                                    'i-tab': {
                                        textOverflow: 'ellipsis',
                                        border: `1px solid ${Theme.divider}`,
                                        borderLeft: 0,
                                        backgroundColor: Theme.colors.secondary.main,
                                        padding: '4px 16px',
                                        fontSize: '14px',
                                        color: Theme.colors.secondary.contrastText,
                                        $nest: {
                                            '&.active': {
                                                backgroundColor: Theme.action.activeBackground,
                                                borderBottom: 0,
                                                color: Theme.action.active,
                                            },
                                            '&:first-of-type': {
                                                borderLeft: `1px solid ${Theme.divider}`,
                                                borderTopLeftRadius: '4px',
                                            },
                                            '&:last-of-type': {
                                                borderTopRightRadius: '4px',
                                            },
                                            '.tab-link': {
                                                display: 'none',
                                            },
                                            '&:after': {
                                                content: 'none',
                                            },
                                        },
                                    },
                                    'i-tab-sheet': {
                                        border: `1px solid ${Theme.divider}`,
                                        minHeight: 'unset',
                                        backgroundColor: Theme.action.selectedBackground,
                                        borderRadius: '4px',
                                        borderTopLeftRadius: 0,
                                        padding: '24px',
                                    },
                                },
                            },
                            pre: {
                                position: 'relative',
                                padding: 0,
                                margin: 0,
                                overflow: 'auto',
                                $nest: {
                                    'code, code.hljs': {
                                        whiteSpace: 'pre-wrap',
                                        padding: '1rem',
                                        fontSize: '12px',
                                    }
                                },
                            },
                            'code:not(.hljs)': {
                                background: Theme.colors.secondary.light,
                                color: `${Theme.input.fontColor} !important`,
                                borderRadius: '0.25rem',
                                padding: '1px 0.375rem',
                                minWidth: '1.625rem',
                                boxShadow: Theme.shadows[0],
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                            }
                            // 'pre:hover': {
                            //   $nest: {
                            //     'i-button': {
                            //       opacity: 1,
                            //     },
                            //   },
                            // },
                            // '.run-btn': {
                            //   borderRadius: '6px 0 0 6px',
                            // },
                            // '.copy-btn': {
                            //   borderRadius: '0 6px 6px 0'
                            // },
                            // '.dropdown-btn': {
                            //   position: 'absolute',
                            //   background: Theme.action.activeBackground,
                            //   borderRadius: '6px',
                            //   height: 28,
                            //   top: '0.5rem',
                            //   right: '0.5rem',
                            //   $nest: {
                            //     'i-button': {
                            //       border: 0,
                            //       minWidth: 0,
                            //       fontSize: '12px',
                            //       height: '100%',
                            //       lineHeight: 'unset',
                            //       padding: '0 0.75rem',
                            //       backgroundColor: 'transparent',
                            //       color: Theme.action.active,
                            //       borderRadius: 0,
                            //       boxShadow: 'none',
                            //       cursor: 'pointer',
                            //       $nest: {
                            //         '&:first-child': {
                            //           borderRight: `1px solid ${Theme.divider}`
                            //         },
                            //         '&:hover': {
                            //           color: Theme.action.hover,
                            //           backgroundColor: Theme.action.hoverBackground
                            //         },
                            //       },
                            //     },
                            //     'i-modal': {
                            //       $nest: {
                            //         '> div': {
                            //           height: 'auto',
                            //         },
                            //         '.modal': {
                            //           borderRadius: '0.4rem',
                            //           minWidth: 'auto',
                            //           padding: '10px'
                            //         },
                            //         'i-button': {
                            //           border: 0,                      
                            //           borderRadius: '0.4rem',
                            //           color: '#fff',
                            //           padding: '0rem 0.5rem',
                            //           transition: 'opacity .2s ease-in-out',
                            //           cursor: 'pointer',
                            //         },
                            //       },
                            //     },
                            //     '.dropdown': {
                            //       margin: '0.25rem 0',
                            //       padding: '0.5rem',
                            //       width: 'auto',
                            //       minWidth: '75px',
                            //       backgroundColor: '#151515',
                            //     },
                            //     'i-dropdown-item': {
                            //       justifyContent: 'flex-start',
                            //       opacity: 1,
                            //       padding: '0 0.5rem',
                            //       $nest: {
                            //         '&:hover': {
                            //           backgroundColor: '#282c34',
                            //         },
                            //         li: {
                            //           fontSize: '12px',
                            //         },
                            //       },
                            //     },
                            //   },
                            // },
                        },
                    },
                    '#docsEditor': {
                        display: 'block',
                        margin: '20px 0',
                        opacity: 0,
                        height: '0!important',
                        visibility: 'hidden',
                        overflow: 'hidden',
                        $nest: {
                            '&.show': {
                                opacity: 1,
                                height: 'auto!important',
                                visibility: 'visible',
                            },
                        },
                    },
                    '.content': {
                        display: 'block',
                        // flex: 1,
                        padding: '28px 110px 48px',
                        // overflow: 'hidden',
                        // overflowY: 'auto',
                        width: '100%',
                        $nest: {
                            '&::-webkit-scrollbar': {
                                width: 0,
                            },
                            '@media (max-width: 700px)': {
                                paddingLeft: 20,
                                paddingRight: 20
                            },
                            'i-markdown ul li a': {
                                display: 'inline'
                            },
                            'i-markdown > h1': {
                                fontWeight: 700,
                                $nest: {
                                    '&:first-child': {
                                        marginTop: 0,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '.icon': {
                position: 'fixed',
                display: 'inline-block',
                width: '20px',
                height: '20px',
                margin: '15px',
            },
            'i-dropdown-button .icon': {
                display: 'none',
            },
            '.anchor': {
                display: 'block',
                position: 'relative',
                top: '-100px',
            },
            '.right-nav': {
                display: 'none',
                position: 'sticky',
                top: '90px',
                right: '20px',
                alignSelf: 'flex-start',
                maxHeight: 'calc(100vh - 120px)',
                margin: 0,
                paddingTop: '10px',
                borderLeft: `1px solid ${Theme.divider}`,
                $nest: {
                    '@media (min-width: 1060px)': {
                        $nest: {
                            '&.show': {
                                display: 'block',
                            },
                        },
                    },
                },
            },
            img: {
                maxWidth: '100%',
            },
            '#runFrame': {
                display: 'none',
                position: 'fixed',
                top: '90px',
                right: '30px',
                maxHeight: 'calc(100vh - 120px)',
                margin: 0,
                backgroundColor: Theme.docs.background,
                color: Theme.docs.text0,
                borderRadius: '5px',
                padding: '16px',
                border: `1px solid ${Theme.divider}`,
                $nest: {
                    '@media (min-width: 1060px)': {
                        $nest: {
                            '&.show': {
                                display: 'block',
                            },
                        },
                    },
                },
            },
            '#spinner': {
                position: 'relative',
                maxHeight: 'calc(100vh - 80px)',
                $nest: {
                    '.i-loading-spinner': {
                        background: 'white',
                        padding: '40px 20px',
                        borderRadius: '6px',
                        boxShadow: '1px 1px 8px 1px #bbbbbb',
                    },
                },
            },
            '.hljs': {
                display: 'block',
                overflowX: 'auto',
                padding: '.5em',
                color: Theme.docs.text0,
                background: 'transparent'
            },
            '.hljs-comment, .hljs-quote': {
                color: '#5c6370',
                fontStyle: 'italic'
            },
            '.hljs-doctag,.hljs-formula,.hljs-keyword': {
                color: '#c678dd'
            },
            '.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst': {
                color: '#e06c75'
            },
            '.hljs-literal': {
                color: '#56b6c2'
            },
            '.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string': {
                color: '#98c379'
            },
            '.hljs-built_in,.hljs-class .hljs-title': {
                color: '#e6c07b'
            },
            '.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable': {
                color: '#d19a66'
            },
            '.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title': {
                color: '#61aeee'
            },
            '.hljs-emphasis': {
                fontStyle: 'italic'
            },
            '.hljs-strong': {
                fontWeight: 700
            },
            '.hljs-link': {
                textDecoration: 'underline'
            }
        },
    });
});
define("@scom/scom-scbook/header.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    components_2.Styles.cssRule('i-scom-scbook-header', {
        position: 'sticky',
        top: 0,
        display: 'block',
        zIndex: 100,
        $nest: {
            '.hidden': {
                display: 'none !important',
            },
            '& > .header': {
                flexShrink: 0,
                width: '100%',
                height: '64px',
                padding: '8px 0',
                borderBottom: `1px solid ${Theme.divider}`,
                zIndex: 100,
                transform: 'translateZ(0)',
                backgroundColor: Theme.docs.background,
                $nest: {
                    '.menu-item': {
                        $nest: {
                            '&:hover': {
                                color: Theme.action.hover,
                            },
                            '&.menu-selected': {
                                color: Theme.action.selected,
                            },
                            '&.menu-selected:hover': {
                                color: Theme.action.hover,
                            }
                        }
                    }
                }
            },
            'i-scom-scbook-search': {
                marginRight: '6px',
                $nest: {
                    input: {
                        backgroundColor: Theme.input.background,
                    },
                },
            },
            '#scbookMenu': {
                margin: '0 20px 0 60px',
                $nest: {
                    nav: {
                        padding: '20px 20px',
                        $nest: {
                            a: {
                                $nest: {
                                    '&:hover': {
                                        opacity: 1,
                                        $nest: {
                                            '.title': {
                                                color: Theme.action.hover,
                                            },
                                        },
                                    },
                                    '.title': {
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        color: Theme.text.primary,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '&:not(.show) + i-panel > i-scom-scbook-navigator': {
                top: 0,
                height: '100vh'
            },
            '&:not(.show) + i-panel .right-nav': {
                top: 20
            }
        },
    });
});
define("@scom/scom-scbook/search.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Theme = components_3.Styles.Theme.ThemeVars;
    components_3.Styles.cssRule('i-scom-scbook-search', {
        fontFamily: Theme.typography.fontFamily,
        fontSize: Theme.typography.fontSize,
        position: 'relative',
        $nest: {
            '.search': {
                position: 'relative',
                display: 'inline-block',
                direction: 'ltr',
            },
            'i-icon': {
                position: 'absolute',
                top: '50%',
                left: '10px',
                display: 'inline-block',
                width: '1rem',
                height: '1rem',
                transform: 'translateY(-50%)'
            },
            input: {
                position: 'relative',
                verticalAlign: 'top',
                height: '2.5rem',
                border: 'none',
                fontWeight: 400,
                fontSize: '15px',
                borderRadius: '20px',
                lineHeight: '20px',
                outline: 'none',
                transition: 'width .5s ease',
                width: '170px',
                boxShadow: Theme.shadows[1],
                // responsive
                padding: '12px 8px 8px 38px',
                background: Theme.input.background,
                color: Theme.input.fontColor,
                $nest: {
                    '&::placeholder': {
                        color: Theme.text.disabled,
                        opacity: 1,
                    },
                    '&:focus': {
                        width: '220px',
                    },
                },
            },
            '.dropdown': {
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 'auto',
                right: 0,
                zIndex: 100,
                fontSize: '14px',
                lineHeight: '1.2em',
                minWidth: '600px',
                padding: '1rem',
                margin: '6px 0 0',
                border: 'none',
                borderRadius: '1rem',
                boxShadow: Theme.shadows[1],
                background: Theme.background.modal,
                $nest: {
                    '&.show': {
                        display: 'block',
                    },
                },
            },
            '.suggestion': {
                display: 'table',
                width: '100%',
                whiteSpace: 'normal',
                border: 'none',
                color: Theme.text.primary,
                cursor: 'pointer',
                overflow: 'hidden',
                $nest: {
                    '.header': {
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 400,
                        background: '#ebeff3',
                        color: '#28333d',
                        borderRadius: '1rem',
                        padding: '5px 10px',
                    },
                    '.column': {
                        display: 'table-cell',
                        borderRight: `1px solid ${Theme.divider}`,
                        color: Theme.text.primary,
                        overflow: 'hidden',
                        padding: '5px 7px 5px 5px',
                        textAlign: 'right',
                        textOverflow: 'ellipsis',
                        verticalAlign: 'top',
                        width: '135px',
                        maxWidth: '135px',
                        minWidth: '135px',
                    },
                    '.content': {
                        display: 'table-cell',
                        padding: '5px 10px',
                        width: '100%',
                    },
                    '.content-text': {
                        display: 'block',
                        fontWeight: 600,
                    },
                    '.content-paragraph-text': {
                        display: '-webkit-box',
                        '-webkit-line-clamp': 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    },
                    '.highlight': {
                        color: Theme.colors.info.main,
                        padding: 0,
                        background: 'none',
                        fontWeight: 600,
                    },
                },
            },
        },
    });
});
define("@scom/scom-scbook/store/interfaces.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-scbook/store/index.ts", ["require", "exports", "@ijstech/components", "@scom/scom-scbook/store/interfaces.ts"], function (require, exports, components_4, interfaces_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLanguagePath = exports.getDefaultLg = exports.getCurrentLg = exports.setCurrentLanguage = exports.setMutilingual = exports.getMutilingual = void 0;
    const store = {
        state: {
            multilingual: null,
            currentLang: null
        }
    };
    const getMutilingual = () => {
        return store.state.multilingual;
    };
    exports.getMutilingual = getMutilingual;
    const setMutilingual = (value) => {
        store.state.multilingual = value;
        store.state.currentLang = value && value?.default ? value.locales.find(lg => lg.code === value.default) : null;
    };
    exports.setMutilingual = setMutilingual;
    const getDefaultLg = () => {
        return store.state.multilingual?.default || '';
    };
    exports.getDefaultLg = getDefaultLg;
    const setCurrentLanguage = (value) => {
        store.state.currentLang = value;
        const locale = value?.code === 'cn' ? 'zh-hant' : value?.code;
        if (locale)
            components_4.application.locale = locale;
    };
    exports.setCurrentLanguage = setCurrentLanguage;
    const getCurrentLg = () => {
        const defaultLg = store.state.multilingual?.locales.find(lg => lg.code === getDefaultLg());
        return store.state.currentLang || defaultLg;
    };
    exports.getCurrentLg = getCurrentLg;
    const getLanguagePath = () => {
        return getCurrentLg()?.code;
    };
    exports.getLanguagePath = getLanguagePath;
    __exportStar(interfaces_1, exports);
});
define("@scom/scom-scbook/search.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-scbook/store/index.ts", "@scom/scom-scbook/search.css.ts"], function (require, exports, components_5, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Search = void 0;
    const Theme = components_5.Styles.Theme.ThemeVars;
    const __dirname = components_5.application.currentModuleDir;
    components_5.RequireJS.config({
        paths: {
            minisearch: `${__dirname}/lib/minisearch`,
        },
    });
    let Search = class Search extends components_5.Control {
        constructor() {
            super(...arguments);
            this.isDropdownShown = false;
            this._keyword = '';
        }
        get keyword() {
            return this._keyword;
        }
        set keyword(value) {
            this._keyword = value;
        }
        get baseUrl() {
            return this._baseUrl;
        }
        set baseUrl(url) {
            this._baseUrl = url;
        }
        buildIndex(documents, fields, storeFields) {
            if (!this.MiniSearch) {
                return;
            }
            this.miniSearch = new this.MiniSearch({
                fields,
                storeFields,
                searchOptions: {
                    fuzzy: 0.2,
                },
            });
            this.miniSearch.addAll(documents);
        }
        search(keyword) {
            return this.miniSearch.search(keyword).slice(0, 5);
        }
        autoSuggest(keyword) {
            return this.miniSearch.autoSuggest(keyword);
        }
        updatePath(slug) {
            if (slug) {
                let path = slug.toLowerCase() === 'readme' ? '' : slug;
                const lgPath = (0, index_1.getLanguagePath)();
                if (path.toLowerCase() === `${lgPath ? lgPath + '/' : ''}readme`) {
                    path = lgPath;
                }
                const baseUrl = this.baseUrl ? this.baseUrl + (this.baseUrl[this.baseUrl.length - 1] == '/' ? '' : '/') : '#/';
                window.history.pushState(slug, 'Title', `${baseUrl}${path}`);
                window.dispatchEvent(new Event('popstate'));
            }
        }
        renderSuggestion(data) {
            data.sort((v1, v2) => v1[0].score >= v2[0].score ? -1 : 1);
            if (data.length) {
                if (!this.dropdownElm) {
                    this.dropdownElm = this.createElement('span', this.wrapperElm);
                    this.dropdownElm.classList.add('dropdown', 'dataset');
                }
                this.dropdownElm.innerHTML = '';
                const suggestionElm = this.createElement('div', this.dropdownElm);
                suggestionElm.classList.add('suggestion');
                data.map((row) => {
                    // console.log('search row', row)
                    const suggestionHeader = this.createElement('div', suggestionElm);
                    suggestionHeader.classList.add('header');
                    suggestionHeader.innerText = row[0].title;
                    row.map((item) => {
                        const suggestionWrapper = this.createElement('div', suggestionElm);
                        suggestionWrapper.classList.add('wrapper');
                        suggestionWrapper.addEventListener('click', () => {
                            this.updatePath(item.slug.toLowerCase());
                            this.dropdownElm.classList.remove('show');
                        });
                        const suggestionColumn = this.createElement('div', suggestionWrapper);
                        suggestionColumn.classList.add('column');
                        const suggestionColumnText = this.createElement('span', suggestionColumn);
                        suggestionColumnText.classList.add('column-text');
                        suggestionColumnText.innerHTML = item.title;
                        const suggestionContent = this.createElement('div', suggestionWrapper);
                        suggestionContent.classList.add('content');
                        const suggestionContentText = this.createElement('span', suggestionContent);
                        suggestionContentText.classList.add('content-text');
                        suggestionContentText.innerHTML = item.title;
                        const suggestionParagraphText = this.createElement('span', suggestionContent);
                        suggestionParagraphText.classList.add('content-paragraph-text');
                        const rgxp = new RegExp('(\\S*.{0,10})?(' + Object.keys(item.match)[0] + ')(.{0,10}\\S*)?', 'ig');
                        // If you want to account for newlines, replace dots `.` with `[\\s\\S]`
                        const results = [];
                        item.text.replace(rgxp, function (match, $1, $2, $3) {
                            results.push(($1 ? '…' + $1 : '') + "<b class='highlight'>" + $2 + '</b>' + ($3 ? $3 + '…' : ''));
                        });
                        suggestionParagraphText.innerHTML = results.join(' ');
                    });
                });
                this.dropdownElm.classList.add('show');
            }
        }
        async initMiniSearch() {
            // return new Promise<void>((resolve, reject) => {
            //     try {
            //         RequireJS.require([`minisearch/index.min`], (minisearch: MiniSearch) => {
            //             this.MiniSearch = minisearch;
            //             resolve();
            //         });
            //     } catch (err) {
            //         reject(err);
            //     }
            // });
        }
        async init() {
            if (!this.wrapperElm) {
                this.wrapperElm = this.createElement('span', this);
                this.wrapperElm.classList.add('search', 'autocomplete');
                const icon = new components_5.Icon(this, { name: 'search', fill: Theme.input.fontColor });
                this.wrapperElm.appendChild(icon);
                this.inputElm = this.createElement('input', this.wrapperElm);
                this.inputElm.setAttribute('placeholder', 'Search');
                this.inputElm.setAttribute('autocomplete', 'off');
                this.inputElm.addEventListener('input', () => {
                    const input = document.querySelector('i-scom-scbook-search input');
                    const results = this.search(input.value);
                    const groupResult = Object.values(results.reduce((acc, result) => {
                        acc[result.id] = acc[result.id] || [];
                        acc[result.id].push(result);
                        return acc;
                    }, Object.create(null)));
                    this.renderSuggestion(groupResult);
                });
                await this.initMiniSearch();
                document.addEventListener('click', (e) => {
                    if (!this._enabled)
                        return false;
                    if (!this.contains(e.target)) {
                        // Clicked outside the box
                        if (this.dropdownElm)
                            this.dropdownElm.classList.remove('show');
                    }
                });
            }
        }
        static async create(options, parent) {
            let component = new this(parent, options);
            await component.init();
            return component;
        }
    };
    Search = __decorate([
        (0, components_5.customElements)('i-scom-scbook-search')
    ], Search);
    exports.Search = Search;
});
define("@scom/scom-scbook/event.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
});
define("@scom/scom-scbook/utils.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPath = exports.stringToSlug = void 0;
    ///<amd-module name='@scom/scom-scbook/utils.ts'/> 
    function stringToSlug(str) {
        str = str
            .replace(/^\s+|\s+$/g, '')
            .replace(/[A-Z]/g, function (s) {
            return "-" + s;
        })
            .replace(/^-+|-+$/g, '')
            .toLowerCase();
        const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        const to = "aaaaeeeeiiiioooouuuunc------";
        for (let i = 0, l = from.length; i < l; i++) {
            str = str.replace(from[i], to[i]);
        }
        str = str.replace(/[^a-z0-9-#]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        return str;
    }
    exports.stringToSlug = stringToSlug;
    function convertPath(path) {
        if (!path)
            return '';
        if (path === 'README.md')
            return 'readme';
        // @ts-ignore
        let slug = path.replaceAll('.md', '').replaceAll('/README', '').replaceAll('/readme', '');
        const splitted = slug.split('/').map(s => stringToSlug(s));
        slug = splitted.join('/');
        return slug;
    }
    exports.convertPath = convertPath;
});
define("@scom/scom-scbook/header.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-scbook/store/index.ts", "@scom/scom-scbook/utils.ts", "@scom/scom-scbook/search.tsx", "@scom/scom-scbook/header.css.ts"], function (require, exports, components_6, index_2, utils_1, search_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocsHeader = exports.Search = void 0;
    const Theme = components_6.Styles.Theme.ThemeVars;
    Object.defineProperty(exports, "Search", { enumerable: true, get: function () { return search_1.Search; } });
    const moonIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23326e81" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>';
    const sunIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23326e81" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>';
    let DocsHeader = class DocsHeader extends components_6.Module {
        constructor(parent, options) {
            super(parent, options);
            this.menuItem = [];
            this.searchIndex = [];
            this._showSearch = true;
            this._theme = 'dark';
            this._currentLg = (0, index_2.getDefaultLg)();
            this.events = [];
            this.$eventBus = components_6.application.EventBus;
        }
        get menu() {
            return this._menu;
        }
        set menu(value) {
            this._menu = value;
            if (this._menu && this._menu.length) {
                components_6.RequireJS.require([`${components_6.LibPath}lib/marked/marked.umd.js`], async (marked) => {
                    const acc = [];
                    for (const item of this._menu) {
                        if (item.text) {
                            // const markdown = await this.loadMarkdown(
                            //   `./dist/markdown/${item.file}`
                            // )
                            const htmlText = marked.parse(item.text);
                            /**
                             * <h[\d].*?> : detect the open tag
                             * ([^<]+) : group and catch the subTitle
                             * <\/h[\d]> : detect the close tag
                             * ([\s\S]*?) : group and catch the paragraph ungreedy
                             * (?=(?:<h[\d].*?>|$)) : detect the end point of paragraph
                             */
                            htmlText.replace(/<h[\d].*?>([^<]+)<\/h[\d]>([\s\S]*?)(?=(?:<h[\d].*?>|$))/gi, (str, subTitle, paragraph) => {
                                let cloneItem = Object.assign({}, item);
                                cloneItem.subTitle = subTitle;
                                const paraDom = document.createElement('div');
                                paraDom.innerHTML = paragraph;
                                cloneItem.paragraph = paraDom.innerText.replace(/\n/g, '');
                                if (cloneItem.subTitle && cloneItem.paragraph)
                                    acc.push(cloneItem);
                                return str;
                            });
                        }
                    }
                    let keys = [];
                    // if (acc && acc.length > 0) keys = Object.keys(acc[0]);
                    // console.log('acc', acc)
                    let id = 0;
                    for (const index of this.searchIndex) {
                        index['slug'] = (0, utils_1.convertPath)(index['slug']);
                        index['id'] = ++id;
                    }
                    this.searchBar.buildIndex(this.searchIndex, ['title', 'text'], ['title', 'text', 'slug']);
                    // console.log('build index search index', this.searchIndex);
                    // console.log('keys', keys);
                });
            }
        }
        get baseUrl() {
            return this._baseUrl;
        }
        set baseUrl(url) {
            this._baseUrl = url;
            this.searchBar.baseUrl = url;
        }
        get maxWidth() {
            return this._maxWidth;
        }
        set maxWidth(value) {
            this.style.maxWidth = "";
            this._maxWidth = value;
            if (this.pnlContainer)
                this.pnlContainer.maxWidth = this.maxWidth;
        }
        get showSearch() {
            return this._showSearch;
        }
        set showSearch(value) {
            this._showSearch = value;
            this.searchBar.visible = value;
        }
        get multilingual() {
            return this._multilingual;
        }
        set multilingual(value) {
            this._multilingual = value;
            this._currentLg = value?.default || '';
            const locale = this._multilingual?.locales.find(lg => lg.code === this._currentLg);
            (0, index_2.setCurrentLanguage)(locale);
            this.renderLgComboBox();
        }
        async loadSearchIndex(entrypoint = '') {
            entrypoint = entrypoint.indexOf('://') < 0 && !entrypoint.startsWith('/') ? `/${entrypoint}` : entrypoint;
            const filePath = this.getFilePath('.scbook/searchindex.json');
            const response = await components_6.application.fetch(`${entrypoint}/${filePath}`);
            if (!response.ok) {
                this.searchBar.visible = false;
                return null;
            }
            const searchIndex = await response.json();
            console.log('response', response, searchIndex);
            this.searchIndex = searchIndex;
            return searchIndex;
        }
        // private async loadMarkdown(src: string): Promise<string> {
        //     const response = await application.fetch(src, {
        //         headers: new Headers({ accept: 'application/vnd.github.v3.raw' }),
        //     });
        //     if (!response.ok) return '# There was error with your response, please check the details and try again';
        //     return response.text();
        // }
        onChangeTheme(target, event) {
            if (this._theme === 'light') {
                this.btnLight.background.color = 'transparent';
            }
            else {
                this.btnDark.background.color = 'transparent';
            }
            target.background.color = Theme.action.hoverBackground;
            const theme = target.tag;
            this._theme = theme;
            components_6.Styles.Theme.applyTheme(theme === 'light' ? components_6.Styles.Theme.defaultTheme : components_6.Styles.Theme.darkTheme);
            document.body.style.setProperty('--theme', theme);
        }
        onLocaleChanged(target, event) {
            const oldLg = this._currentLg;
            const locale = target.tag;
            this.updateLanguage(locale);
            this.$eventBus.dispatch("scbookLangChanged" /* EventId.ScbookLangChanged */, locale);
            const lgPath = (0, index_2.getLanguagePath)();
            const baseUrl = this.baseUrl ? this.baseUrl + (this.baseUrl[this.baseUrl.length - 1] == '/' ? '' : '/') : '#/';
            const currentHash = window.location.hash;
            let hash = oldLg ? currentHash.slice(currentHash.indexOf(oldLg) + oldLg.length) : currentHash.slice(currentHash.indexOf(baseUrl) + baseUrl.length);
            if (hash.startsWith('/'))
                hash = hash.slice(1);
            const slug = `${baseUrl}${lgPath ? `${lgPath}/` : ''}${hash}`;
            window.history.pushState(slug, 'Title', slug);
            window.dispatchEvent(new Event('popstate'));
        }
        onHide() {
            for (const event of this.events) {
                event.unregister();
            }
        }
        updateLanguage(lg) {
            const oldLg = this._currentLg;
            if (lg.code === this._currentLg)
                return;
            this._currentLg = lg.code;
            (0, index_2.setCurrentLanguage)(lg);
            if (this.btnLang && this.mdLang) {
                const oldTarget = this.mdLang?.querySelector(`#pnl${oldLg}`);
                if (oldTarget)
                    oldTarget.background.color = 'transparent';
                const currentTarget = this.mdLang?.querySelector(`#pnl${this._currentLg}`);
                if (currentTarget)
                    currentTarget.background.color = 'transparent';
                currentTarget.background.color = Theme.action.hoverBackground;
                this.btnLang.caption = lg.name;
            }
            else {
                this.renderLgComboBox();
            }
        }
        renderLgComboBox() {
            const multilingual = (0, index_2.getMutilingual)();
            this.pnlRight.clearInnerHTML();
            if (!multilingual)
                return;
            const options = multilingual.locales.map((locale) => {
                return this.$render("i-hstack", { id: `pnl${locale.code}`, tag: locale, padding: { left: '0.75rem', right: '0.75rem', top: '0.5rem', bottom: '0.5rem' }, hover: {
                        backgroundColor: Theme.action.hoverBackground
                    }, background: { color: locale.code === this._currentLg ? Theme.action.hoverBackground : 'transparent' }, onClick: (target, event) => {
                        optionsMd.visible = false;
                        this.onLocaleChanged(target, event);
                    } },
                    this.$render("i-label", { caption: locale.name, width: '100%', textOverflow: 'ellipsis' }));
            });
            const lgName = (0, index_2.getCurrentLg)()?.name;
            const lgBtn = this.$render("i-button", { id: 'btnLang', border: { radius: '0.25rem' }, background: { color: Theme.colors.primary.main }, boxShadow: 'none', width: 100, height: 30, margin: { left: '0.5rem' }, caption: lgName || '', icon: { name: 'globe', width: 16, height: 16, fill: Theme.colors.primary.contrastText }, font: { color: Theme.colors.primary.contrastText, size: '14px' }, onClick: () => {
                    optionsMd.linkTo = lgBtn;
                    optionsMd.visible = !optionsMd.visible;
                } });
            const optionsMd = this.$render("i-modal", { id: "mdLang", width: 150, zIndex: 999, popupPlacement: 'bottomRight', showBackdrop: false, padding: { top: 0, left: 0, right: 0, bottom: 0 }, onOpen: () => {
                    document.body.appendChild(optionsMd);
                }, onClose: () => {
                    optionsMd.remove();
                } },
                this.$render("i-vstack", { width: '100%', padding: { top: '0.5rem', bottom: '0.5rem' } }, options));
            this.pnlRight.append(lgBtn, optionsMd);
        }
        async init() {
            super.init();
            const multilingual = (0, index_2.getMutilingual)();
            this._currentLg = multilingual?.default || '';
            this.pnlRight.clearInnerHTML();
            if (multilingual)
                this.renderLgComboBox();
            this.registerEvents();
        }
        registerEvents() {
            this.events.push(this.$eventBus.register(this, "scbookLangChanged" /* EventId.ScbookLangChanged */, (locale) => {
                this.updateLanguage(locale);
            }));
        }
        async checkLogoExists(entrypoint, logoPath) {
            if (logoPath.indexOf('https://') >= 0 || logoPath.indexOf('http://') >= 0) {
                this.imgLogo.url = logoPath;
                return;
            }
            const filePath = logoPath ? this.getFilePath(logoPath) : '';
            if (logoPath) {
                const response = await components_6.application.fetch(`${entrypoint}/${filePath}`);
                if (!response.ok) {
                    this.imgLogo.classList.add('hidden');
                    this.logoText.classList.remove('hidden');
                }
                else if (entrypoint.indexOf('://') < 0 && !entrypoint.startsWith('/'))
                    this.imgLogo.url = `${components_6.application.rootDir}${entrypoint}/${filePath}`;
                else
                    this.imgLogo.url = `${entrypoint}/${filePath}`;
            }
            else {
                this.imgLogo.classList.add('hidden');
                this.logoText.classList.remove('hidden');
            }
        }
        async loadFile(path) {
            let count = 0;
            return new Promise((resolve, reject) => {
                const load = async (p) => {
                    try {
                        const response = await components_6.application.fetch(p);
                        if (response.ok) {
                            resolve(response);
                        }
                        else if (response.status == 404) {
                            if (count < 0) {
                                setTimeout(() => {
                                    load(p);
                                    count++;
                                }, 5000);
                            }
                        }
                    }
                    catch (e) {
                        console.error('load header failed: ', p);
                    }
                };
                load(path);
            });
        }
        async loadHeader(entrypoint, forceUpdate) {
            entrypoint = entrypoint.indexOf('://') < 0 && !entrypoint.startsWith('/') ? `/${entrypoint}` : entrypoint;
            let header;
            const KEY = '$$scbook_header';
            if (!forceUpdate) {
                if (window.localStorage) {
                    header = localStorage.getItem(KEY);
                }
            }
            if (entrypoint && (forceUpdate || !header)) {
                try {
                    // const request = new Request(`${entrypoint}/HEADER.md`);
                    const headerPath = this.getFilePath('HEADER.md');
                    const response = await this.loadFile(`${entrypoint}/${headerPath}`);
                    if (response.ok) {
                        header = await response.text();
                        // if (window.localStorage) {
                        //     window.localStorage.setItem(KEY, header);
                        // }
                    }
                }
                catch (err) { }
            }
            const menu = [];
            if (header) {
                for (const line of header.split('\n')) {
                    if (line.trim().indexOf('#') == 0) {
                        // Logo alternative text
                        const logoData = getData(line);
                        let [logoTitle, logoPath] = logoData;
                        try {
                            this.checkLogoExists(entrypoint, logoPath);
                        }
                        catch (e) { }
                        this.logoText.caption = logoTitle;
                        continue;
                    }
                    const data = getData(line);
                    const [title, link, target] = data;
                    let item = {
                        title: ''
                    };
                    if (title) {
                        item.title = title;
                        if (link) {
                            item.link = { href: link, target: target || '_blank' };
                        }
                        menu.push(item);
                    }
                }
            }
            this.menuItem = menu;
            this.scbookMenu.data = menu;
            // this.scbookMenu.items = menu;
            // Load search index
            try {
                if (entrypoint && this._showSearch) {
                    await this.loadSearchIndex(entrypoint);
                }
            }
            catch (e) { }
            function getData(str) {
                return [
                    str.substr(str.indexOf('[') + 1, str.indexOf(']') - (str.indexOf('[') + 1)).trim(),
                    str.substr(str.indexOf('(') + 1, str.indexOf(')') - (str.indexOf('(') + 1)).trim(),
                ];
            }
        }
        getFilePath(url) {
            const lgPath = (0, index_2.getLanguagePath)();
            return this.multilingual && !url.startsWith(lgPath) ? `${lgPath ? lgPath + '/' : ''}${url}` : url;
        }
        toggleMenu(target, event) {
            event.stopPropagation();
            event.preventDefault();
            const navigator = document.querySelector('#docsNavigator');
            if (navigator) {
                navigator.classList.contains('show') ? navigator.classList.remove('show') : navigator.classList.add('show');
            }
        }
        toggleEditMode() {
            const editor = document.querySelector('#docsEditor');
            const mdViewer = document.querySelector('#mdViewer');
            if (editor) {
                if (editor.classList.contains('show')) {
                    editor.classList.remove('show');
                    mdViewer?.classList.remove('hide');
                }
                else {
                    editor.classList.add('show');
                    mdViewer?.classList.add('hide');
                }
            }
        }
        render() {
            this.style.width = '100%';
            this.style.height = 'auto';
            return (this.$render("i-panel", { class: "header", width: '100%', overflow: 'hidden' },
                this.$render("i-hstack", { id: "pnlContainer", verticalAlignment: 'center', horizontalAlignment: 'space-between', wrap: "nowrap", position: 'relative', height: '100%', width: '100%', overflow: 'hidden', padding: { left: 4, right: 4 }, margin: { left: 'auto', right: 'auto' } },
                    this.$render("i-label", { id: "logoText", width: '259px', border: { right: { style: 'solid', width: '1px', color: Theme.divider } }, margin: { left: '20px' }, font: { size: '15px', weight: 700, color: Theme.text.primary }, textOverflow: 'ellipsis', class: "hidden", mediaQueries: [{ maxWidth: '701px', properties: { visible: false } }] }),
                    this.$render("i-image", { id: "imgLogo", height: 65, width: 162, padding: { top: 10, bottom: 10 }, margin: { right: '110px' }, mediaQueries: [{ maxWidth: '701px', properties: { visible: false, margin: { right: 0 } } }] }),
                    this.$render("i-button", { id: "btnMenu", icon: { name: 'bars', width: 20, height: 20, fill: Theme.text.primary }, background: { color: 'transparent' }, boxShadow: 'none', height: 'auto', padding: { left: 16, right: 16, top: 20, bottom: 20 }, border: { radius: '0px' }, onClick: this.toggleMenu, mediaQueries: [{ minWidth: '701px', properties: { visible: false } }] }),
                    this.$render("i-button", { id: "btnEdit", visible: false, icon: { name: 'pencil-alt', width: 20, height: 20, fill: Theme.text.primary }, background: { color: 'transparent' }, boxShadow: 'none', height: 'auto', padding: { left: 20, right: 20, top: 20, bottom: 20 }, border: { radius: '0px' }, onClick: this.toggleEditMode }),
                    this.$render("i-menu", { id: "scbookMenu", width: "100%", data: this.menuItem, maxWidth: '60%', overflow: 'hidden' }),
                    this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'end', padding: { right: 16 } },
                        this.$render("i-scom-scbook-search", { id: "searchBar" }),
                        this.$render("i-hstack", { horizontalAlignment: 'center', verticalAlignment: 'center', gap: "0.25rem", padding: { top: '0.25rem', right: '0.35rem', bottom: '0.25rem', left: '0.35rem' }, border: { radius: '9999px', color: Theme.divider, width: '1px', style: 'solid' } },
                            this.$render("i-button", { id: "btnLight", width: '1.25rem', height: '1.25rem', border: { radius: '50%' }, background: { color: 'transparent' }, tag: "light", boxShadow: 'none', icon: { image: { url: sunIcon, width: '1rem', height: '1rem', display: 'flex' } }, onClick: this.onChangeTheme }),
                            this.$render("i-button", { id: "btnDark", width: '1.25rem', height: '1.25rem', border: { radius: '50%' }, background: { color: Theme.action.hoverBackground }, boxShadow: 'none', tag: "dark", icon: { image: { url: moonIcon, width: '1rem', height: '1rem', display: 'flex' } }, onClick: this.onChangeTheme })),
                        this.$render("i-panel", { id: "pnlRight" })))));
        }
    };
    DocsHeader = __decorate([
        (0, components_6.customElements)('i-scom-scbook-header')
    ], DocsHeader);
    exports.DocsHeader = DocsHeader;
});
define("@scom/scom-scbook/navigator.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_7.Styles.Theme.ThemeVars;
    components_7.Styles.cssRule('i-scom-scbook-navigator', {
        display: 'block',
        flex: '0 0 280px',
        position: 'sticky',
        top: '64px',
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        zIndex: '99',
        borderRight: `1px solid ${Theme.divider}`,
        $nest: {
            "::-webkit-scrollbar": {
                backgroundColor: Theme.divider,
                width: 8,
                height: 8,
            },
            "::-webkit-scrollbar-thumb": {
                backgroundColor: Theme.background.default,
                borderRadius: 8
            },
            '&.hidden': {
                display: 'none',
            },
            '@media (max-width: 700px)': {
                position: 'sticky',
                width: '75% !important',
                left: '0',
                top: '80px',
                background: Theme.docs.background,
                height: '90% !important',
            },
            'i-panel': {
                height: '100%',
            },
            '.bold': {
                fontWeight: '700',
            },
            '.footer': {
                whiteSpace: 'nowrap',
                position: 'sticky',
                bottom: '0px',
                background: Theme.background.paper,
                borderTop: `1px solid ${Theme.divider}`,
                height: '50px',
                padding: '10px',
                $nest: {
                    img: {
                        height: '40px',
                        width: 'auto',
                        marginRight: '10px',
                    },
                },
            },
            'i-tree-view i-tree-node i-tree-node': {
                borderLeft: `1px solid ${Theme.divider}`
            },
            'i-tree-view.i-tree-view': {
                height: '100%',
                padding: '16px 0',
                $nest: {
                    'i-tree-node': {
                        $nest: {
                            '.i-tree-node_content': {
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                paddingInline: '0 16px !important',
                                cursor: 'pointer',
                                minHeight: '32px',
                                border: '1px solid transparent',
                                $nest: {
                                    '&:hover .i-tree-node_label': {
                                        color: Theme.action.hover
                                    },
                                    label: {
                                        lineHeight: '22px',
                                        padding: '8px 0 8px 16px',
                                        color: Theme.docs.text0,
                                    },
                                },
                            },
                            "&.active": {
                                $nest: {
                                    '> .i-tree-node_content': {
                                        backgroundColor: 'transparent',
                                        $nest: {
                                            "&:hover": {
                                                backgroundColor: Theme.action.selectedBackground,
                                                color: Theme.action.selected
                                            },
                                            '&:hover .i-tree-node_label': {
                                                color: Theme.action.selected
                                            }
                                        }
                                    }
                                }
                            },
                            '.i-tree-node_children': {
                                marginLeft: '16px',
                                $nest: {
                                    'i-tree-node': {
                                        $nest: {
                                            '.i-tree-node_content': {
                                                $nest: {
                                                    label: {
                                                        color: Theme.docs.text1
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            '&.is-checked': {
                                $nest: {
                                    '> .i-tree-node_content': {
                                        color: Theme.action.selected
                                    },
                                },
                            },
                            '.i-tree-node_label': {
                                marginRight: 'auto'
                            },
                            '.is-right': {
                                display: 'none'
                            },
                            '&.tree-node--label': {
                                cursor: 'default',
                                fontWeight: 600,
                                $nest: {
                                    '*': {
                                        cursor: 'default',
                                    },
                                    '.i-tree-node_content': {
                                        backgroundColor: 'inherit'
                                    },
                                    // '.i-tree-node_label': {
                                    //   color: '#8899a8'
                                    // }
                                }
                            },
                        },
                    },
                    '.i-tree-node_children': {
                        $nest: {
                            'i-tree-node.active': {
                                $nest: {
                                    '> .i-tree-node_content': {
                                        borderLeft: `1px solid ${Theme.action.selected}`
                                    },
                                }
                            }
                        }
                    }
                },
            },
            // '.tree-child-node': {
            //   borderLeft: '0px',
            //   $nest: {
            //     'i-tree-view-node.active > label': {
            //       borderLeft: '0px',
            //     },
            //   },
            // },
            // 'i-tree-view > i-tree-node:not(.custom-left).has-children': {
            //   marginLeft: 0,
            // },
            // 'i-tree-view .i-tree-node i-tree-node': {
            //   padding: '0',
            //   $nest: {
            //     '&:not(.custom-left)': {
            //       padding: 0,
            //     },
            //   },
            // },
            // '&::-webkit-scrollbar-track': {
            //   background: '#f1f1f1' /* color of the tracking area */,
            // },
            // '&::-webkit-scrollbar-thumb': {
            //   backgroundColor: '#aaa' /* color of the scroll thumb */,
            //   borderRadius: '10px' /* roundness of the scroll thumb */,
            // },
            '&.hide': {
                maxWidth: 0,
                opacity: 0,
                visibility: 'hidden',
            },
            // 'i-tree-node': {
            //   $nest: {
            //     'i-icon': {
            //       marginTop: '15px',
            //       marginRight: '15px',
            //     },
            //     label: {
            //       padding: '8px 20px 8px 20px',
            //     },
            //     '&.active > .i-tree-node_content label': {
            //       backgroundColor: '#FFF',
            //       color: 'rgba(12, 18, 52, 1)',
            //       borderTop: '1px solid rgb(221,220,228)',
            //       borderLeft: '1px solid rgb(221,220,228)',
            //       borderBottom: '1px solid rgb(221,220,228)',
            //     },
            //     '&.menu-title': {
            //       lineHeight: '10px',
            //       $nest: {
            //         '&:hover': {
            //           $nest: {
            //             '& > .i-tree-node_content label': {
            //               color: '#A2A9B9',
            //             },
            //           },
            //         },
            //         '& > .i-tree-node_content label': {
            //           color: '#A2A9B9',
            //           fontSize: '14px',
            //           fontWeight: 500,
            //           marginTop: '20px',
            //           textTransform: 'uppercase',
            //           cursor: 'auto',
            //           lineHeight: '25px',
            //         },
            //       },
            //     },
            //     '&:not(.custom-left)': {
            //       $nest: {
            //         '&:before': {
            //           content: 'none',
            //         },
            //         '&:last-of-type:before': {
            //           content: 'none',
            //         },
            //         '.i-tree-node_label:after': {
            //           content: 'none',
            //         },
            //       },
            //     },
            //   },
            // },
            // 'i-tree-node.level-0': {
            //   lineHeight: '10px',
            //   $nest: {
            //     '> .i-tree-node_content label': {
            //       color: 'rgba(92, 105, 117, 1)',
            //       fontSize: '15px',
            //       fontWeight: 400,
            //       lineHeight: '25px',
            //       transition: 'color .3s',
            //       $nest: {
            //         '&:hover': {
            //           color: 'rgba(12, 18, 52, 1)',
            //           background: 'rgb(236, 239, 241)',
            //         },
            //       },
            //     },
            //   },
            // },
            // 'i-tree-node.level-1': {
            //   lineHeight: '10px',
            //   $nest: {
            //     '> .i-tree-node_content label': {
            //       color: 'rgba(136, 153, 168, 1)',
            //       fontSize: '14px',
            //       fontWeight: 400,
            //       transition: 'color .3s',
            //       lineHeight: '25px',
            //       $nest: {
            //         '&:hover': {
            //           color: '#55f',
            //         },
            //       },
            //     },
            //   },
            // },
            // 'i-tree-node.level-2': {
            //   lineHeight: '10px',
            //   $nest: {
            //     '> .i-tree-node_content label': {
            //       color: 'rgba(136, 153, 168, 1)',
            //       fontSize: '14px',
            //       fontWeight: 400,
            //       transition: 'color .3s',
            //       lineHeight: '25px',
            //     },
            //   },
            // },
        },
    });
});
define("@scom/scom-scbook/navigator.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-scbook/store/index.ts", "@scom/scom-scbook/navigator.css.ts"], function (require, exports, components_8, index_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocsNavigator = void 0;
    const slugify = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    let DocsNavigator = class DocsNavigator extends components_8.Module {
        constructor(parent, options) {
            // super(parent, options);
            super();
            this.isNavOpened = true;
        }
        get treeData() {
            return this._treeData;
        }
        set treeData(value) {
            this._treeData = value;
            if (this._treeData) {
                this.renderTree();
            }
        }
        get baseUrl() {
            return this._baseUrl;
        }
        set baseUrl(url) {
            this._baseUrl = url;
        }
        handleActive(parent, prevNode) {
            const currentSlug = this.currentNode?.tag?.slug;
            if (currentSlug && parent.activeItem?.tag?.slug === currentSlug)
                return;
            this._currentNode = parent.activeItem;
            const url = parent.activeItem?.tag.slug;
            this.updatePath(url);
        }
        updatePath(slug) {
            if (slug) {
                let path = slug.toLowerCase() === 'readme' ? '' : slug;
                const lgPath = (0, index_3.getLanguagePath)();
                if (path.toLowerCase() === `${lgPath ? lgPath + '/' : ''}readme`) {
                    path = lgPath;
                }
                const baseUrl = this.baseUrl ? this.baseUrl + (this.baseUrl[this.baseUrl.length - 1] == '/' ? '' : '/') : '#/';
                window.history.pushState(slug, 'Title', `${baseUrl}${path}`);
                window.dispatchEvent(new Event('popstate'));
            }
        }
        toggleNav(isNavOpened) {
            const navElm = document.querySelector('i-scom-scbook-navigator');
            this.isNavOpened = isNavOpened;
            if (navElm) {
                this.isNavOpened ? navElm.classList.remove('hide') : navElm.classList.add('hide');
            }
        }
        // renderTreeNode(node: any, level: number = 0) {
        //     const emojiRegex =
        //         /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
        //     let treeNode = this.createElement('i-tree-view-node') as TreeNode;
        //     treeNode.setAttribute('caption', node.title);
        //     treeNode.setAttribute('useIcon', 'false');
        //     if (node.slug) treeNode.setAttribute('slug', node.slug);
        //     if (node.file || node.children) {
        //         treeNode.onClick = this.activeNode;
        //         treeNode.classList.add(`level-${level}`);
        //     } else {
        //         treeNode.classList.add('menu-title');
        //     }
        //     if (node.children) {
        //         treeNode.setAttribute('useIconRight', 'true');
        //         treeNode.setAttribute('collapsible', 'true');
        //         treeNode.setAttribute('expanded', 'true');
        //         node.children.map((child: any) => {
        //             let childNode = this.renderTreeNode(child, level + 1);
        //             treeNode.appendChild(childNode);
        //         });
        //     }
        //     // setTimeout(function () {
        //     //     if (treeNode.children && treeNode.children.length > 0) {
        //     //         treeNode.children[0].innerHTML = treeNode.children[0].innerHTML.replace(
        //     //             emojiRegex,
        //     //             (string: string) => {
        //     //                 console.log('----------', string);
        //     //                 return `${string} `;
        //     //             }
        //     //         );
        //     //     }
        //     // }, 10);
        //     return treeNode;
        // }
        async renderTree() {
            if (this.treeData) {
                if (this.treeView.data) {
                    const idx = this.treeData.findIndex((v) => v.active);
                    const activeNode = this.treeView.querySelector('i-tree-node.active');
                    if (idx > -1 && this.treeData[idx].children?.length && activeNode?.data?.id !== this.treeData[idx].id) {
                        this.treeData[idx].expanded = true;
                    }
                    const treeNodes = this.treeView.querySelectorAll('i-tree-node.is-checked');
                    for (const _treeNode of treeNodes) {
                        const treeNode = _treeNode;
                        const idxNode = this.treeData.findIndex((v) => v.id === treeNode.data?.id);
                        if (idxNode !== -1) {
                            this.treeData[idxNode].expanded = true;
                        }
                    }
                    if (JSON.stringify(this.treeData) === JSON.stringify(this.treeView.data)) {
                        return;
                    }
                }
                this.treeView.data = this.treeData;
                for (const treeItem of this.treeView.childNodes) {
                    const treeNode = treeItem;
                    if (treeNode.data?.label === true) {
                        treeNode._handleClick = () => false;
                        treeNode.classList.add('tree-node--label');
                    }
                }
                this._currentNode = this.treeView.activeItem;
            }
        }
        async init() {
            super.init();
        }
        render() {
            this.style.width = '280px';
            // this.style.backgroundColor = Theme.colors.primary.light
            return (this.$render("i-panel", null,
                this.$render("i-panel", { class: "navigator" },
                    this.$render("i-panel", { id: "tree-view-menu" },
                        this.$render("i-tree-view", { id: "treeView", data: [], onActiveChange: this.handleActive })))));
        }
        get currentNode() {
            return this._currentNode;
        }
    };
    DocsNavigator = __decorate([
        (0, components_8.customElements)('i-scom-scbook-navigator')
    ], DocsNavigator);
    exports.DocsNavigator = DocsNavigator;
});
define("@scom/scom-scbook/paging.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_9.Styles.Theme.ThemeVars;
    components_9.Styles.cssRule('i-scom-scbook-paging', {
        display: 'block',
        $nest: {
            '@media(max-width: 970px)': {
                $nest: {
                    '.paging': {
                        flexWrap: 'wrap',
                        gridTemplateColumns: '1fr'
                    }
                }
            },
            '.btnPaging': {
                boxShadow: Theme.shadows[1],
                border: `1px solid ${Theme.background.paper}`,
                padding: '16px',
                cursor: 'pointer',
                minWidth: 0,
                $nest: {
                    '&.hidden': {
                        display: 'none',
                    },
                    'i-label': {
                        display: 'block',
                        lineHeight: '25px',
                    },
                    '&.prev': {
                        $nest: {
                            'i-icon': {
                                float: 'left',
                            },
                            'i-panel.pager-content': {
                                float: 'right',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'right',
                                    },
                                },
                            },
                            '@media (max-width: 700px)': {
                                width: '100%',
                            },
                        },
                    },
                    '&.next': {
                        $nest: {
                            'i-icon': {
                                float: 'right',
                            },
                            'i-panel.pager-content': {
                                float: 'left',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'left',
                                    },
                                },
                            },
                            '@media (max-width: 700px)': {
                                width: '100%',
                                marginLeft: '0',
                            },
                        },
                    },
                    '&.prev-full': {
                        width: '100%',
                        $nest: {
                            'i-icon': {
                                float: 'left',
                            },
                            'i-panel.pager-content': {
                                float: 'right',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'right',
                                    },
                                },
                            },
                        },
                    },
                    '&.next-full': {
                        width: '100%',
                        $nest: {
                            'i-icon': {
                                float: 'right',
                            },
                            'i-panel.pager-content': {
                                float: 'left',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'left',
                                    },
                                },
                            },
                        },
                    },
                    'i-icon': {
                        height: '20px',
                        width: '20px'
                    },
                    '.pager-content': {
                        clear: 'none',
                        maxWidth: '90%',
                        $nest: {
                            'i-label': {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            },
                            '.pager-title1 div': {
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#8899A8',
                            },
                            '.pager-title2': {
                                whiteSpace: 'nowrap',
                                $nest: {
                                    div: {
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: 'block',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
});
define("@scom/scom-scbook/paging.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-scbook/store/index.ts", "@scom/scom-scbook/paging.css.ts"], function (require, exports, components_10, index_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocsPaging = void 0;
    const Theme = components_10.Styles.Theme.ThemeVars;
    let DocsPaging = class DocsPaging extends components_10.Module {
        constructor() {
            super(...arguments);
            this.events = [];
        }
        set flatTree(value) {
            this._flatTree = value;
            if (!this._currentNode && value && value.length > 0) {
                this._currentNode = value[0];
            }
            this.updatePager();
        }
        get flatTree() {
            return this._flatTree;
        }
        set currentNode(value) {
            this._currentNode = value;
            this.updatePager();
        }
        get currentNode() {
            return this._currentNode;
        }
        get baseUrl() {
            return this._baseUrl;
        }
        set baseUrl(url) {
            this._baseUrl = url;
        }
        updatePager() {
            let prevNodeIndex = -1, nextNodeIndex = -1;
            if (this._flatTree) {
                this._flatTree.forEach((value, index) => {
                    if (value.slug == this._currentNode.slug) {
                        let prevValid = false, nextValid = false;
                        prevNodeIndex = index - 1;
                        nextNodeIndex = index + 1;
                        while (!prevValid && this.flatTree[prevNodeIndex]) {
                            if (this.flatTree[prevNodeIndex].file)
                                prevValid = true;
                            else
                                prevNodeIndex--;
                        }
                        while (!nextValid && this.flatTree[nextNodeIndex]) {
                            if (this.flatTree[nextNodeIndex].file)
                                nextValid = true;
                            else
                                nextNodeIndex++;
                        }
                    }
                });
            }
            if (prevNodeIndex >= 0 && nextNodeIndex >= 0 && nextNodeIndex < this._flatTree.length) {
                this.prevPage.classList.remove('prev-full', 'hidden');
                this.prevPage.classList.add('prev');
                this.nextPage.classList.remove('next-full', 'hidden');
                this.nextPage.classList.add('next');
                this.prevPage.hidden = false;
                this.nextPage.hidden = false;
                this.labelPrev.caption = this._flatTree[prevNodeIndex] && this._flatTree[prevNodeIndex].caption || '';
                this.labelNext.caption = this._flatTree[nextNodeIndex] && this._flatTree[nextNodeIndex].caption;
            }
            else if (prevNodeIndex >= 0 && (nextNodeIndex == -1 || nextNodeIndex >= this._flatTree.length)) {
                this.nextPage.classList.add('hidden');
                this.prevPage.classList.remove('prev', 'hidden');
                this.prevPage.classList.add('prev-full');
                this.labelPrev.caption = this._flatTree[prevNodeIndex].caption;
            }
            else if (prevNodeIndex == -1 && nextNodeIndex >= 0) {
                this.prevPage.classList.add('hidden');
                this.nextPage.classList.remove('next', 'hidden');
                this.nextPage.classList.add('next-full');
                this.labelNext.caption = this._flatTree[nextNodeIndex].caption;
            }
        }
        nextPageOnClick() {
            let nextNodeIndex = -1;
            if (this._flatTree && this.currentNode) {
                this._flatTree.forEach((value, index) => {
                    if (value.slug == this._currentNode.slug) {
                        let valid = false;
                        nextNodeIndex = index + 1;
                        while (!valid) {
                            if (this.flatTree[nextNodeIndex].file)
                                valid = true;
                            else
                                nextNodeIndex++;
                        }
                    }
                });
            }
            const node = this.flatTree[nextNodeIndex];
            this.updatePath(node.slug.toLowerCase() === 'readme' ? '' : node.slug);
            this.scrollToTop();
        }
        prevPageOnClick() {
            let prevNodeIndex = -1;
            if (this._flatTree && this.currentNode) {
                this._flatTree.forEach((value, index) => {
                    if (value.slug == this._currentNode.slug) {
                        let valid = false;
                        prevNodeIndex = index - 1;
                        while (!valid) {
                            if (this.flatTree[prevNodeIndex].file)
                                valid = true;
                            else
                                prevNodeIndex--;
                        }
                    }
                });
            }
            const node = this.flatTree[prevNodeIndex];
            this.updatePath(node.slug.toLowerCase() === 'readme' ? '' : node.slug);
            this.scrollToTop();
        }
        scrollToTop() {
            window.scrollTo(0, 0);
        }
        updatePath(slug) {
            if (slug.endsWith('/'))
                slug = slug.slice(0, -1);
            if (slug.startsWith('/'))
                slug = slug.substr(1);
            const lgPath = (0, index_4.getLanguagePath)();
            if (slug.toLowerCase() === `${lgPath ? lgPath + '/' : ''}readme`) {
                slug = lgPath;
            }
            const baseUrl = this.baseUrl ? this.baseUrl + (this.baseUrl[this.baseUrl.length - 1] == '/' ? '' : '/') : '#/';
            window.history.pushState(slug, 'Title', `${baseUrl}${slug}`);
            window.dispatchEvent(new Event('popstate'));
        }
        onHide() {
            for (const event of this.events) {
                event.unregister();
            }
        }
        init() {
            this.i18n.init({
                'en': {
                    'previous': 'Previous',
                    'next': 'Next'
                },
                'zh-hant': {
                    'previous': '上一個',
                    'next': '下一個'
                }
            });
            super.init();
            this.$eventBus = components_10.application.EventBus;
            this.events.push(this.$eventBus.register(this, "scbookLangChanged" /* EventId.ScbookLangChanged */, () => {
                this.prevTitle.updateLocale(this.i18n);
                this.nextTitle.updateLocale(this.i18n);
            }));
        }
        render() {
            return (this.$render("i-grid-layout", { class: "paging", templateColumns: ['1fr', '1fr'], gap: { column: '1rem', row: '1rem' } },
                this.$render("i-hstack", { id: 'prevPage', class: 'btnPaging prev hidden', horizontalAlignment: 'space-between', verticalAlignment: 'center', gap: '1rem', onClick: this.prevPageOnClick },
                    this.$render("i-icon", { name: 'arrow-left' }),
                    this.$render("i-vstack", { class: 'pager-content', horizontalAlignment: 'end', stack: { grow: '1', shrink: '0', basis: '0%' }, overflow: "hidden" },
                        this.$render("i-label", { id: "prevTitle", caption: '$previous', class: 'pager-title1', font: { size: '12px', color: Theme.text.secondary } }),
                        this.$render("i-label", { id: 'labelPrev', class: 'pager-title2', maxWidth: "100%", font: { size: '16px', weight: 600 } }))),
                this.$render("i-hstack", { id: 'nextPage', class: 'btnPaging next hidden', horizontalAlignment: 'space-between', verticalAlignment: 'center', gap: '1rem', onClick: this.nextPageOnClick },
                    this.$render("i-vstack", { class: 'pager-content', stack: { grow: '1', shrink: '0', basis: '0%' }, overflow: "hidden" },
                        this.$render("i-label", { id: "nextTitle", caption: '$next', class: 'pager-title1', font: { size: '12px', color: Theme.text.secondary } }),
                        this.$render("i-label", { id: 'labelNext', class: 'pager-title2', maxWidth: "100%", font: { size: '16px', weight: 600 } })),
                    this.$render("i-icon", { name: 'arrow-right' }))));
        }
    };
    DocsPaging = __decorate([
        (0, components_10.customElements)('i-scom-scbook-paging')
    ], DocsPaging);
    exports.DocsPaging = DocsPaging;
});
define("@scom/scom-scbook/main.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-scbook/search.tsx", "@scom/scom-scbook/header.tsx", "@scom/scom-scbook/navigator.tsx", "@scom/scom-scbook/paging.tsx", "@scom/scom-scbook/store/index.ts", "@scom/scom-scbook/utils.ts", "@scom/scom-scbook/main.css.ts"], function (require, exports, components_11, search_2, header_1, navigator_1, paging_1, index_5, utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCBook = exports.DocsPaging = exports.DocsNavigator = exports.DocsHeader = exports.Search = void 0;
    Object.defineProperty(exports, "Search", { enumerable: true, get: function () { return search_2.Search; } });
    Object.defineProperty(exports, "DocsHeader", { enumerable: true, get: function () { return header_1.DocsHeader; } });
    Object.defineProperty(exports, "DocsNavigator", { enumerable: true, get: function () { return navigator_1.DocsNavigator; } });
    Object.defineProperty(exports, "DocsPaging", { enumerable: true, get: function () { return paging_1.DocsPaging; } });
    const Theme = components_11.Styles.Theme.ThemeVars;
    let SCBook = class SCBook extends components_11.Module {
        constructor() {
            super(...arguments);
            this.treeData = [];
            this.rightNavAnchors = [];
            this.isPageLoading = false;
            this._showHeader = true;
            this._showSearch = true;
        }
        get entrypoint() {
            return this._entrypoint;
        }
        set entrypoint(value) {
            this._entrypoint = value.startsWith('/') ? value.slice(1) : value;
            this.reloadPage();
        }
        get baseUrl() {
            return this._baseUrl;
        }
        set baseUrl(url) {
            this._baseUrl = url;
            this.docsHeader.baseUrl = url;
            this.docsNavigator.baseUrl = url;
            this.docsPaging.baseUrl = url;
        }
        get maxWidth() {
            return this._maxWidth;
        }
        set maxWidth(value) {
            this.style.maxWidth = "";
            this._maxWidth = value;
            if (this.pnlDocsWrapper)
                this.pnlDocsWrapper.maxWidth = this.maxWidth;
            if (this.docsHeader)
                this.docsHeader.maxWidth = this.maxWidth;
        }
        get showHeader() {
            return this._showHeader;
        }
        set showHeader(value) {
            this._showHeader = value;
            if (value) {
                this.docsHeader.classList.add("show");
            }
            else {
                this.docsHeader.classList.remove("show");
            }
            this.docsHeader.visible = value;
        }
        get showSearch() {
            return this._showSearch;
        }
        set showSearch(value) {
            this._showSearch = value;
            this.docsHeader.showSearch = value;
        }
        get themes() {
            return this._themes;
        }
        set themes(value) {
            this._themes = value;
            this.updateThemes(value);
        }
        get multilingual() {
            return this._multilingual;
        }
        set multilingual(value) {
            this._multilingual = value;
            (0, index_5.setMutilingual)(value);
            if (this.docsHeader)
                this.docsHeader.multilingual = value;
        }
        updateThemes(themes) {
            if (!themes)
                return;
            if (themes.dark) {
                this.mergeTheme(components_11.Styles.Theme.darkTheme, themes.dark);
            }
            if (themes.light) {
                this.mergeTheme(components_11.Styles.Theme.defaultTheme, themes.light);
            }
            const theme = themes.default === 'light' ? components_11.Styles.Theme.defaultTheme : components_11.Styles.Theme.darkTheme;
            components_11.Styles.Theme.applyTheme(theme);
            document.body.style.setProperty('--theme', themes.default);
        }
        mergeTheme(target, theme) {
            for (const key of Object.keys(theme)) {
                if (theme[key] instanceof Object) {
                    Object.assign(theme[key], this.mergeTheme(target[key], theme[key]));
                }
            }
            Object.assign(target || {}, theme);
            return target;
        }
        get theme() {
            return this._theme;
        }
        set theme(value) {
            this._theme = value;
            if (this.mdViewer)
                this.mdViewer.theme = value;
        }
        async init() {
            this.$eventBus = components_11.application.EventBus;
            this.entrypoint = this.getAttribute('entrypoint', true);
            this.multilingual = this.getAttribute('multilingual', true);
            this.activeRightNodeOnScroll = this.activeRightNodeOnScroll.bind(this);
            this.handlePopStateEvent = this.handlePopStateEvent.bind(this);
            super.init();
            this.showHeader = this.getAttribute('showHeader', true, true);
            this.showSearch = this.getAttribute('showSearch', true, true);
            this.renderPnlDocsWrapper();
            this.baseUrl = this.getAttribute('baseUrl', true);
            this.bindEvents();
            await this.reloadPage();
            const themes = this.getAttribute('themes', true);
            if (themes)
                this.themes = typeof themes === 'string' ? JSON.parse(themes) : themes;
            this.theme = this._theme || this.themes?.default || 'light';
        }
        async reloadPage() {
            if (this.showHeader && this.docsHeader) {
                this.docsHeader.multilingual = this.multilingual;
                await this.docsHeader.loadHeader(this.entrypoint);
            }
            this.checkLanguage();
            await this.loadPage();
        }
        checkLanguage() {
            const hash = this.hash.slice(this.hash.indexOf('#/') + 1);
            if (hash.startsWith('/'))
                return hash.substr(1);
            const splittedPath = hash.split('/');
            const lang = splittedPath[0];
            const storedLg = (0, index_5.getCurrentLg)();
            if (storedLg && lang && lang !== storedLg?.code) {
                const locale = (0, index_5.getMutilingual)()?.locales?.find((locale) => locale.code === lang);
                if (locale) {
                    (0, index_5.setCurrentLanguage)(locale);
                    this.$eventBus.dispatch("scbookLangChanged" /* EventId.ScbookLangChanged */, locale);
                }
            }
            else if (!hash && this.multilingual) {
                const defaultLg = this.multilingual.default;
                if (defaultLg) {
                    window.location.hash = `/${defaultLg}`;
                }
            }
        }
        async retryLoadFile(path) {
            let count = 0;
            return new Promise((resolve, reject) => {
                const load = async (p, isRetry = false) => {
                    const currentLang = (0, index_5.getLanguagePath)();
                    try {
                        const entrypoint = this.entrypoint.indexOf('://') < 0 && !this.entrypoint.startsWith('/') ? `/${this.entrypoint}` : this.entrypoint;
                        const response = await components_11.application.fetch(`${entrypoint}/${p}`);
                        if (response.ok) {
                            resolve(response);
                        }
                        else {
                            setTimeout(() => {
                                if (response.status == 404 && !count) {
                                    if (this.multilingual) {
                                        const defaultLg = (0, index_5.getDefaultLg)();
                                        if (path.startsWith('/'))
                                            path = path.substr(1);
                                        const splitPath = path.split('/');
                                        if (splitPath[0] === currentLang)
                                            splitPath.shift();
                                        const newPath = `${defaultLg ? defaultLg + '/' : ''}${splitPath.join('/')}`;
                                        load(newPath, true);
                                    }
                                    else {
                                        load(p, true);
                                    }
                                    count++;
                                }
                            }, currentLang ? 500 : 5000);
                        }
                    }
                    catch (e) {
                        console.log('load file catch', e);
                    }
                };
                load(path);
            });
        }
        flattenTree(tree) {
            const clonetTree = JSON.parse(JSON.stringify(tree));
            return clonetTree.reduce((acc, cur) => {
                if (cur.children) {
                    const temp = cur.children;
                    Reflect.deleteProperty(cur, 'children');
                    acc.push(cur);
                    acc.push(this.flattenTree(temp));
                }
                else {
                    acc.push(cur);
                }
                return acc.flat();
            }, []);
        }
        async processGitbook(content, filePath) {
            const fileRegex = new RegExp(/{% file src="([^#&?]*)" %}/gi);
            const embedRegex = new RegExp(/{% embed url="<a href=".*?">(.*?)"<\/a> %}/gi);
            const contentRefRegex = new RegExp(/<p>(.*?):<\/p>[\n]<p>[\n]*{% content-ref url="(.*?)" %}[\n].*?[\n]{% endcontent-ref %}[\n]*<\/p>/gi);
            const hintRegex = new RegExp(/{% hint style="(.*?)" %}(.*?){% endhint %}/gis);
            const tabsRegex = new RegExp(/<p>{% tabs %}(.+?){% endtabs %}<\/p>/gis);
            const tabRegex = new RegExp(/{% tab title="(.*?)" %}<\/p>(.+?)<p>{% endtab %}/gis);
            const anchorRegex = new RegExp(/<a\s+(target=["']_\w+["']\s+)?href="(.*?)">(.*?)<\/a>/gm);
            const preRegex = new RegExp(/<pre>(.*?)<\/pre>/gis);
            const imgRegex = new RegExp(/<img\s+(src=["'](.*?)["']\s+)?alt="(.*?)">/gis);
            if (imgRegex.test(content)) {
                content = content.replace(imgRegex, (_, group, src, alt) => {
                    if (src.indexOf('://') !== -1)
                        return `<img src="${src}" alt="${alt}">`;
                    let currentPath = this.currentNode?.tag?.file || '';
                    if (currentPath.endsWith('/'))
                        currentPath = currentPath.slice(0, -1);
                    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
                    const languagePath = (0, index_5.getLanguagePath)();
                    src = src.replace(this.entrypoint, '');
                    let mainPath = src.startsWith('./') ? src.slice(2) : src.startsWith('../') ? src.slice(3) : src;
                    if (mainPath.startsWith('/'))
                        mainPath = mainPath.slice(1);
                    const tempCurrentDir = currentDir.replace(`${languagePath}/`, '');
                    mainPath = mainPath.replace(tempCurrentDir, '');
                    let newRootDir = this.entrypoint;
                    if (newRootDir.endsWith('/'))
                        newRootDir = newRootDir.slice(0, -1);
                    if (currentDir && !newRootDir.includes(currentDir)) {
                        newRootDir = `${newRootDir}/${currentDir}`;
                    }
                    const newFileName = `${newRootDir}/${mainPath}`;
                    return `<img src="${newFileName}" alt="${alt}">`;
                });
            }
            if (preRegex.test(content)) {
                content = content.replace(preRegex, (_, html) => {
                    const encoder = new TextEncoder();
                    const encodedData = btoa(String.fromCharCode(...encoder.encode(html)));
                    let currentPath = this.currentNode?.tag?.file || '';
                    if (currentPath.endsWith('/'))
                        currentPath = currentPath.slice(0, -1);
                    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
                    let newRootDir = this.entrypoint;
                    if (newRootDir.endsWith('/'))
                        newRootDir = newRootDir.slice(0, -1);
                    if (currentDir && !newRootDir.includes(currentDir)) {
                        newRootDir = `${newRootDir}/${currentDir}`;
                    }
                    if (!newRootDir.startsWith('/') && newRootDir.indexOf('://') < 0)
                        newRootDir = `/${newRootDir}`;
                    return `<i-scom-code-viewer
                    code="${encodedData}"
                    language="typescript"
                    entryPoint="${newRootDir}"
                    display="block"
                    maxWidth="100%"
                    defaultLocale="${this.multilingual?.default || ''}"
                    currentLocale="${(0, index_5.getCurrentLg)()?.code || ''}"
                ></i-scom-code-viewer>`;
                });
            }
            if (fileRegex.test(content)) {
                const entrypoint = this.entrypoint.indexOf('://') < 0 && !this.entrypoint.startsWith('/') ? `/${this.entrypoint}` : this.entrypoint;
                const sclinkPath = `${entrypoint}/${filePath}`;
                const result = await components_11.application.fetch(sclinkPath);
                if (result.ok) {
                    const sclinkData = await result.json();
                    content = content.replace(fileRegex, (_, src) => {
                        const { size, filename } = sclinkData.filedata[src];
                        const link = `${this.entrypoint}/${src.replace(/\.\.\//g, '')}`;
                        return `<div class="sc-link">                    
                    <a href="${link}" download>
                      <div class="sc-link-icon">
                        <div class="icon-wrapper">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" style="height: 20.8px; vertical-align: middle; width: 20.8px;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path></svg>
                        </div>
                      </div>
                      <div class="sc-link-content">
                        <div class="info">
                          <div class="title">${filename}</div>
                          <div class="subtitle">${size}KB</div>
                        </div>
                        <div class="type">Binary</div>
                      </div>
                    </a>
                    </div>`;
                    });
                }
            }
            if (embedRegex.test(content)) {
                const entrypoint = this.entrypoint.indexOf('://') < 0 && !this.entrypoint.startsWith('/') ? `/${this.entrypoint}` : this.entrypoint;
                const sclinkPath = `${entrypoint}/${filePath}`;
                const result = await components_11.application.fetch(sclinkPath);
                if (result.ok) {
                    const sclinkData = await result.json();
                    content = content.replace(embedRegex, (_, url) => {
                        const { title, siteName, icon } = sclinkData.metadata[url];
                        return `<div class="sc-link">                    
                    <a href="${url}" target="_blank">
                      <div class="sc-link-icon">
                        <div class="icon-wrapper">
                          <img alt src="${icon}"/>
                        </div>
                      </div>
                      <div class="sc-link-content">
                        <div class="info">
                          <div class="title">${title}</div>
                        </div>
                        <div class="type">${siteName}</div>
                      </div>
                    </a>
                    </div>`;
                    });
                }
            }
            if (hintRegex.test(content)) {
                content = content.replace(hintRegex, (_, style, hint) => {
                    const icon = {
                        warning: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(185, 94, 4); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8.96V3.29h1v5.67h-1z" fill="currentColor"></path><path d="M8 12.5a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path></svg>`,
                        danger: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(211, 61, 61); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a.5.5 0 01.424.235l7.5 12A.5.5 0 0115.5 14H.5a.5.5 0 01-.424-.765l7.5-12A.5.5 0 018 1zM1.402 13h13.196L8 2.443 1.402 13z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9.41V6.12h1v3.29h-1z" fill="currentColor"></path><path d="M8 11.67a.76.76 0 110-1.52.76.76 0 010 1.52z" fill="currentColor"></path></svg>`,
                        info: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(52, 109, 219); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6.37H8a.5.5 0 01.5.5v5.5h-1v-5h-1v-1z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 12.37h-3v-1h3v1z" fill="currentColor"></path><path d="M7.74 5.16a.77.77 0 01-.76-.77.76.76 0 011.52 0 .77.77 0 01-.76.77z" fill="currentColor"></path></svg>`,
                        success: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(0, 136, 71); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.677 6.16l-4.443 4.444a.5.5 0 01-.708 0L4.323 8.4l.707-.707 1.85 1.85 4.09-4.09.707.707z" fill="currentColor"></path></svg>`,
                    };
                    return `<div class="sc-hint ${style}">
                  <div class="sc-hint-icon">
                    ${icon[style]}
                  </div>
                  <div class="sc-hint-content">${hint}</div>
                </div>`;
                });
            }
            if (contentRefRegex.test(content)) {
                content = content.replace(contentRefRegex, (_, title, url) => {
                    return `<li class="sc-content-ref">
                  <a href="${url}">
                    ${title}
                  </a>
                </li>`;
                });
            }
            if (tabsRegex.test(content)) {
                content = content.replace(tabsRegex, (_, tabsContent) => {
                    let tabsElm = `<i-tabs class="sc-tabs" width="auto" activePageIndex="0">`;
                    const tabs = [];
                    tabsContent.replace(tabRegex, (_, title, content) => {
                        tabs.push({ title, content });
                        return _;
                    });
                    for (let tab of tabs) {
                        tabsElm += `<i-tab tabSheetId="${tab.title}">${tab.title}</i-tab>`;
                    }
                    for (let tab of tabs) {
                        tabsElm += `<i-tab-sheet id="${tab.title}"><div>${tab.content}</div></i-tab-sheet>`;
                    }
                    tabsElm += '</i-tabs>';
                    return tabsElm;
                });
            }
            if (anchorRegex.test(content)) {
                content = content.replace(anchorRegex, (_, __, href, text) => {
                    let slug = this.docsPaging.currentNode.slug;
                    if (slug.startsWith('#/'))
                        slug = slug.substr(2);
                    if (href.indexOf(window.location.host) < 0) {
                        if (href.startsWith('http'))
                            return _;
                        else if (href.startsWith('#')) {
                            const newPath = `#/${slug}${href}`;
                            return `<a onclick="(function(e) {
                            e?.preventDefault();
                            const element = document.querySelector('${href}'); 
                            if (element) { 
                                const top = element.offsetTop + element.offsetHeight
                                window.scrollTo(0, top - 80);
                            } 
                        })(event)" slug="${newPath}" href="${newPath}">${text}</a>`;
                        }
                        else {
                            if (href.startsWith('/'))
                                href = href.slice(1);
                            let newSlug = href;
                            const lgPath = (0, index_5.getLanguagePath)();
                            if (this.multilingual && !newSlug.startsWith(lgPath))
                                newSlug = `${lgPath}/${newSlug}`;
                            let newPath = '';
                            if (newSlug)
                                newPath = `#/${(0, utils_2.convertPath)(newSlug)}`;
                            return `<a class="internal-link" href="${newPath}" slug="${newPath}">${text}</a>`;
                        }
                    }
                    ;
                    if (href.includes('..')) {
                        let baseUri = href.slice(0, href.indexOf('../'));
                        if (baseUri.endsWith('/'))
                            baseUri = baseUri.slice(0, -1);
                        const checkedUri = href.slice(href.indexOf('../'));
                        href = this.resolvePath(checkedUri, baseUri);
                    }
                    let mainHref = href.slice(href.indexOf('#/') + 2);
                    if (mainHref.startsWith('/'))
                        mainHref = mainHref.slice(1);
                    let newSlug = (0, utils_2.convertPath)(mainHref);
                    const finded = this.flatTree.find((item) => item.slug === newSlug);
                    if (!finded) {
                        newSlug = newSlug.replace(`${slug}`, '');
                    }
                    if (newSlug.startsWith('/'))
                        newSlug = newSlug.substr(1);
                    const lgPath = (0, index_5.getLanguagePath)();
                    if (this.multilingual && !newSlug.startsWith(lgPath))
                        newSlug = `${lgPath}/${newSlug}`;
                    return `<a class="internal-link" href="#/${newSlug}" slug="#/${newSlug}">${text}</a>`;
                });
            }
            return content;
        }
        resolvePath(href, basePath) {
            const hrefParts = href.split('/');
            const baseParts = basePath.split('/');
            hrefParts.forEach(part => {
                if (part === '..')
                    baseParts.pop();
                else if (part !== '.')
                    baseParts.push(part);
            });
            return baseParts.join('/');
        }
        activeNode(target, event) {
            const treeNodes = Array.from(document.querySelectorAll('.right-nav i-tree-view-node'));
            treeNodes.forEach((treeNode) => (treeNode.active = false));
            const treeViewNode = target;
            treeViewNode.active = true;
            if (event?.type === 'click') {
                const node = document.querySelector(`#${treeViewNode.id}`);
                window.scrollTo(0, node.offsetTop - 100);
            }
        }
        activeRightNodeOnScroll() {
            const passedAnchor = this.rightNavAnchors.reduce((acc, id) => {
                const elementTarget = document.getElementById(id);
                if (elementTarget)
                    if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
                        acc.push(id);
                    }
                return acc;
            }, []);
            const treeNode = document.querySelector(`.right-nav #${passedAnchor[passedAnchor.length - 1]}`);
            if (treeNode)
                this.activeNode(treeNode);
        }
        async handlePopStateEvent() {
            if (this.baseUrl && !window.location.hash.startsWith(this.baseUrl))
                return;
            await this.loadPage();
            await this.sleep(100);
            const navigator = document.querySelector('#docsNavigator');
            if (navigator)
                navigator.classList.remove('show');
            const splittedPath = window.location.hash.split('#');
            if (splittedPath.length <= 2)
                return;
            let lastItem = splittedPath[splittedPath.length - 1];
            if (lastItem.startsWith('/'))
                lastItem = lastItem.substr(1);
            if (lastItem) {
                const element = document.querySelector('#' + lastItem);
                if (element) {
                    const top = element.offsetTop + element.offsetHeight;
                    window.scrollTo(0, top - 80);
                }
            }
        }
        bindEvents() {
            window.addEventListener('popstate', this.handlePopStateEvent);
            window.addEventListener('scroll', this.activeRightNodeOnScroll);
        }
        unbindEvents() {
            window.removeEventListener('popstate', this.handlePopStateEvent);
            window.removeEventListener('scroll', this.activeRightNodeOnScroll);
        }
        onShow() {
            this.bindEvents();
            this.loadPage();
        }
        onHide() {
            this.unbindEvents();
            if (this.docsPaging)
                this.docsPaging.onHide();
            if (this.docsHeader)
                this.docsHeader.onHide();
        }
        async loadPage() {
            if (!this.entrypoint)
                return;
            this.isPageLoading = true;
            await this.loadMenu();
            if (!this.currentNode)
                return;
            try {
                this.mdViewer.visible = false;
                this.docsPaging.visible = false;
                this.pnlLoader.visible = true;
                await this.loadContent(this.currentNode.tag.file, this.currentNode.tag.slug).then(async () => {
                    const contentElm = document.querySelector('i-panel.docs-module i-panel.content');
                    if (!contentElm)
                        return;
                    this.docsPaging.currentNode = this.currentNode;
                    const md = await this.mdViewer.load(this.currentNode.text);
                    const processedMd = await this.processGitbook(md, `${this.currentNode.slug}.sclink`);
                    this.mdViewer.beforeRender(processedMd);
                    await this.sleep(200);
                    for (const ref of document.querySelectorAll('a.internal-link')) {
                        ref.addEventListener('click', (e) => {
                            e.preventDefault();
                            let slug = ref.getAttribute('slug') || '';
                            if (slug) {
                                slug = decodeURIComponent(slug).toLowerCase().replace('/readme', '').replace('.md', '');
                                window.history.pushState('', '', `/${slug}`);
                                window.dispatchEvent(new Event('popstate'));
                            }
                        });
                    }
                    if (this.isPageLoading == true) {
                        setTimeout(() => {
                            const h1 = this.querySelector('i-markdown h1:first-child');
                            if (h1)
                                h1.parentElement.insertBefore(this.createElement('hr'), h1.nextSibling);
                        }, 5);
                        this.isPageLoading = false;
                    }
                    this.loadRightNav();
                });
            }
            catch (err) {
            }
            finally {
                this.pnlLoader.visible = false;
                this.mdViewer.visible = true;
                this.docsPaging.visible = true;
            }
        }
        processMenu(menuText, trimSpace = 0, space = 2) {
            return new Promise(async (resolve, reject) => {
                let dataArr = menuText.split('\n');
                const beginWithAsteriskReg = /^[\s]*\*/;
                // dataArr = dataArr.reduce((acc, str) => {
                //     if (beginWithAsteriskReg.test(str)) {
                //         str = str.slice(trimSpace);
                //         acc.push(str);
                //     }
                //     return acc;
                // }, [] as any[]);
                let result = [];
                let indexes = [0];
                let lastLevel = -1;
                const spaceReg = /^\s*/;
                const captionReg = /\[(.*?)\]/;
                const fileReg = /\((.*?)\)/;
                let id = 1;
                const hash = this.hash.split('#')?.[0] || 'readme';
                for (let item of dataArr) {
                    if (!beginWithAsteriskReg.test(item)) {
                        let caption = item.trim().startsWith('## ') ? item.trim().substr(item.indexOf(' ') + 1, item.length) : '';
                        if (!caption)
                            continue;
                        result.push({
                            caption,
                            label: true
                        });
                        if (lastLevel >= 0) {
                            indexes.length = 1;
                            indexes[0]++;
                        }
                        lastLevel = 0;
                        continue;
                    }
                    const level = item.match(spaceReg)[0].length / space;
                    const caption = item?.match(captionReg)[1];
                    let file = item?.match(fileReg)[1];
                    let slug = (0, utils_2.convertPath)(file);
                    if (this.multilingual) {
                        const lg = (0, index_5.getLanguagePath)();
                        file = file.startsWith(lg) ? file : `${lg}/${file}`;
                        slug = slug.startsWith(lg) ? slug : `${lg}/${slug}`;
                    }
                    if (level === 0) {
                        result.push({
                            id: ++id,
                            caption,
                            file,
                            slug,
                            // expanded: true,
                            active: hash === slug,
                            tag: { file, slug },
                        });
                        if (lastLevel >= 0) {
                            indexes.length = 1;
                            indexes[0]++;
                        }
                        lastLevel = 0;
                    }
                    if (level > 0) {
                        indexes[level] >= 0 ? indexes[level]++ : (indexes[level] = 0);
                        indexes.length = level + 1;
                        lastLevel = level;
                        let item = {};
                        for (const [i, index] of indexes.entries()) {
                            if (Object.keys(item).length === 0) {
                                item = result[index];
                            }
                            else {
                                if (!item.hasOwnProperty('children')) {
                                    item['children'] = [
                                        {
                                            id: ++id,
                                            caption,
                                            file,
                                            slug,
                                            active: hash === slug,
                                            // expanded: true,
                                            tag: { file, slug },
                                        },
                                    ];
                                }
                                else {
                                    if (i === indexes.length - 1) {
                                        item.children.push({
                                            id: ++id,
                                            caption,
                                            file,
                                            slug,
                                            active: hash === slug,
                                            // expanded: true,
                                            tag: { file, slug },
                                        });
                                    }
                                    item = item['children'][index];
                                }
                            }
                        }
                    }
                }
                resolve(result);
            });
        }
        async loadMenu() {
            return new Promise(async (resolve, reject) => {
                let menuText = '';
                const lgPath = (0, index_5.getLanguagePath)();
                const summaryPath = this.multilingual ? `${lgPath ? lgPath + '/' : ''}SUMMARY.md` : 'SUMMARY.md';
                const response = await this.retryLoadFile(summaryPath);
                menuText = await response.text();
                this.processMenu(menuText).then((treeData) => {
                    this.treeData = treeData;
                    this.docsNavigator.treeData = this.treeData;
                    this.flatTree = this.flattenTree(this.treeData);
                    this.docsPaging.flatTree = this.flatTree;
                    this.docsHeader.menu = this.flatTree;
                });
                resolve(menuText);
            });
        }
        async loadContent(file, slug) {
            return new Promise(async (resolve, reject) => {
                let text = '';
                const response = await this.retryLoadFile(file);
                text = await response.text();
                // Replace root file from
                const regex = /!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
                const linkRegex = /\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
                const videoRegex = /(?:<video[^>]+src=\")(?<src>[^"]+)/g;
                const iframeRegex = /(?:<iframe[^>]+src=\")(?<src>[^"]+)/g;
                text = text.replace(regex, (string, filename) => {
                    if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0)
                        return string;
                    const newFileName = `${this.entrypoint}/${filename.replace(/\.\.\//g, '') //.replace('/\\/g', '')
                    }`;
                    return string.replace(filename, newFileName);
                });
                // Link
                text = text.replace(linkRegex, (string, filename) => {
                    if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0)
                        return string;
                    let newFileName;
                    if (filename.endsWith('.md'))
                        newFileName = `${window.location.href}/${filename.replace('/\\/g', '').replace('.md', '')}`;
                    else if (filename.includes('..')) {
                        newFileName = `${window.location.href}/${filename.replace('/\\/g', '').replace('.md', '')}`;
                    }
                    else
                        newFileName = `${filename.replace(/\.\.\//g, '').replace('/\.\//g', '')}`;
                    return string.replace(filename, newFileName);
                });
                // video
                text = text.replace(videoRegex, (string, filename) => {
                    if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0)
                        return string;
                    const newFileName = `${this.entrypoint}/${filename.replace(/\.\.\//g, '').replace('/\.\//g', '')}`;
                    return string.replace(filename, newFileName);
                });
                // iframe
                text = text.replace(iframeRegex, (string, filename) => {
                    if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0)
                        return string;
                    const newFileName = `${this.entrypoint}/${filename.replace(/\.\.\//g, '').replace('/\.\//g', '')}`;
                    return string.replace(filename, newFileName);
                });
                this.currentNode.text = text;
                const typescriptRegex = new RegExp(/\`\`\`typescript\((.*?)\)(.*?)\`\`\`/gis);
                const isTS = typescriptRegex.test(text);
                // const rightNav = document.querySelector('.right-nav');
                const runFrame = document.querySelector('#runFrame');
                if (isTS) {
                    // rightNav?.classList.remove('show');
                    runFrame?.classList.add('show');
                }
                else {
                    // rightNav?.classList.add('show');
                    runFrame?.classList.remove('show');
                }
                resolve(text);
            });
        }
        loadRightNav() {
            let toc = '';
            let level = 0;
            this.rightNavAnchors = [];
            const content = document.querySelector('.docs-container .content');
            if (content) {
                // @ts-ignore
                const a = content.innerHTML.replaceAll('<strong>', '').replaceAll('</strong>', '');
                // @ts-ignore
                a.replace(/<h([\d])(.*)>([^<]+)<\/h([\d])>/gi, (str, openLevel, temp, titleText, closeLevel) => {
                    if (openLevel != closeLevel || openLevel == 1) {
                        return str;
                    }
                    if (openLevel > level) {
                        toc += new Array(openLevel - level + 1).join('<i-tree-view>');
                    }
                    else if (openLevel < level) {
                        toc += new Array(level - openLevel + 1).join('</i-tree-view>');
                    }
                    level = parseInt(openLevel);
                    let anchor = titleText.replace(/\W/g, '-').toLowerCase();
                    if (anchor[anchor.length - 1] == '-')
                        anchor = anchor.substr(0, anchor.length - 1);
                    this.rightNavAnchors.push(anchor);
                    toc += `<i-tree-view-node id='${anchor}' caption='${titleText}' useIcon='false' ></i-tree-view-node>`;
                    return `<h${openLevel}><a class='anchor' aria-hidden='true' id=' {anchor}'></a>${titleText}</h${closeLevel}>`;
                });
            }
            if (level) {
                toc += new Array(level + 1).join('</i-tree-view>');
            }
            const right = document.querySelector('.right-nav');
            if (right)
                right.innerHTML = toc;
            const treeNodes = Array.from(document.querySelectorAll('.right-nav i-tree-view-node'));
            treeNodes.forEach((treeNode) => (treeNode.onClick = this.activeNode));
            this.activeRightNodeOnScroll();
        }
        sleep(time) {
            return new Promise((res, rej) => {
                setTimeout(res, time);
            });
        }
        get currentNode() {
            let currentHash = this.hash.split('#')?.[0];
            if (currentHash.startsWith('/'))
                currentHash = currentHash.substr(1);
            if (currentHash.endsWith('/'))
                currentHash = currentHash.slice(0, -1);
            const lgPath = (0, index_5.getLanguagePath)();
            if (this.multilingual && !currentHash.startsWith(lgPath)) {
                currentHash = `${lgPath ? lgPath + '/' : ''}${currentHash}`;
            }
            if (!currentHash || lgPath === currentHash) {
                currentHash = this.multilingual ? `${lgPath ? lgPath + '/' : ''}readme` : 'readme';
            }
            let node = this.flatTree.find((node) => {
                return node.slug === currentHash;
            });
            if (!node)
                node = this.flatTree.find((node) => {
                    return !!node.text;
                });
            return node;
        }
        get hash() {
            if (this.baseUrl && window.location.hash.startsWith(this.baseUrl)) {
                let length = this.baseUrl[this.baseUrl.length - 1] == '/' ? this.baseUrl.length : this.baseUrl.length + 1;
                return decodeURI(window.location.hash.substring(length));
            }
            return decodeURI(window.location.hash.substring(2));
        }
        renderPnlDocsWrapper() {
            const wrapper = this.$render("i-panel", { id: "pnlDocsWrapper", margin: { left: 'auto', right: 'auto' }, maxWidth: this._maxWidth || 1400, class: "docs-wrapper" },
                this.$render("i-scom-scbook-navigator", { id: "docsNavigator" }),
                this.$render("i-panel", { class: "docs-container" },
                    this.$render("i-panel", { class: "content" },
                        this.$render("i-vstack", { id: "pnlLoader", width: "100%", height: "100%", horizontalAlignment: "center", verticalAlignment: "center", background: { color: Theme.docs.background }, zIndex: 1, visible: false },
                            this.$render("i-panel", { class: 'spinner' })),
                        this.$render("i-markdown", { id: "mdViewer" }),
                        this.$render("i-scom-scbook-paging", { id: "docsPaging", display: "block", margin: { top: '1rem' } })),
                    this.$render("i-panel", { class: "right-nav" })));
            this.pnlWrapper.append(wrapper);
            if (this.showHeader)
                wrapper.classList.add('show-header');
            else
                wrapper.classList.add('no-header');
        }
        render() {
            return (this.$render("i-panel", { id: "pnlWrapper", class: "docs-module", minHeight: '100%', width: "100%" },
                this.$render("i-scom-scbook-header", { id: "docsHeader", visible: this._showHeader, maxWidth: this._maxWidth || 1400 })));
        }
    };
    SCBook = __decorate([
        (0, components_11.customElements)('i-scom-scbook')
    ], SCBook);
    exports.SCBook = SCBook;
});
define("@scom/scom-scbook", ["require", "exports", "@scom/scom-scbook/main.tsx"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCBook = void 0;
    Object.defineProperty(exports, "SCBook", { enumerable: true, get: function () { return main_1.SCBook; } });
});
