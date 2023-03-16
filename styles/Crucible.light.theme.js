import { lighten, darken, transparentize } from "polished";
import { defaultColours } from "fictoan-react";

// import logoDP from "assets/images/logo-dp-on-tp.svg";

import { setuColours } from "./SetuColors";

export const CrucibleLightTheme = {
    body: {
        bg: defaultColours.white,
    },

    globals: {
        borderWidth: "1px",
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text: {
        font: {
            sans: "Matter",
            mono: "GT America Mono",
            serif: "FF Franziska",
        },
        paras: {
            font: "Matter",
            color: `${lighten(0.16, setuColours.murkyNight)}`,
            lineHeight: 1.44,
            size: 0.96,
            subtext: defaultColours.slate60,
        },
        headings: {
            font: "Matter",
            weight: 400,
            lineHeight: 1.2,
            color: setuColours.murkyNight,
            multiplier: 1.12,
        },
        links: {
            font: "Matter",
            default: {
                color: defaultColours.blue90,
            },
            onHover: {
                color: defaultColours.blue60,
            },
        },
        selection: {
            bg: setuColours.flashTurk,
            text: setuColours.murkyNight,
        },
        code: {
            inline: {
                bg: `${lighten(0.16, setuColours.salmonRouge)}`,
                text: setuColours.deepPurple,
                scale: 80,
            },
            block: {
                bg: defaultColours.slate10,
            },
            prism: {
                tokens: {
                    plain: defaultColours.grey,
                },
            },
        },
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card: {
        bg: defaultColours.white,
        border: defaultColours.slate20,
        borderRadius: "8px",
    },

    //  INPUT  ////////////////////////////////////////////////////////////////
    inputField: {
        default: {
            bg: `${lighten(0.024, defaultColours.slate10)}`,
            border: defaultColours.slate40,
            label: setuColours.murkyNight,
            text: setuColours.murkyNight,
        },
        onFocus: {
            bg: defaultColours.white,
            border: setuColours.flashTurk,
            text: setuColours.murkyNight,
            helpText: setuColours.murkyNight,
        },
        isValid: {
            bg: defaultColours.white,
            border: defaultColours.green80,
            label: setuColours.murkyNight,
        },
        isInvalid: {
            bg: defaultColours.red10,
            border: defaultColours.red80,
            label: defaultColours.red,
            helpText: defaultColours.red,
        },
        isReadOnly: {
            bg: defaultColours.grey20,
            border: defaultColours.grey20,
            label: setuColours.murkyNight,
        },
        required: {
            text: defaultColours.red,
        },
        icons: {
            default: {
                fill: defaultColours.slate30,
            },
            onFocus: {
                fill: setuColours.flashTurk,
            },
            isValid: {
                bg: defaultColours.grey50,
                border: defaultColours.red30,
            },
        },
        select: {
            chevron: setuColours.flashTurk,
        },
        radioButton: {
            default: {},
        },
    },

    /*  CHECKBOX  ===================  */
    checkBox: {
        square: {
            default: {
                bg: String(defaultColours.slate20),
            },
            onHover: {
                bg: String(defaultColours.slate40),
            },
            isChecked: {
                bg: String(setuColours.flashTurk),
            },
            isDisabled: {
                bg: String(defaultColours.slate10),
            },
        },
        check: {
            default: {
                border: String(defaultColours.white),
            },
        },
    },

    toggleSwitch: {
        case: {
            default: {
                bg: defaultColours.slate20,
            },
            onHover: {
                bg: defaultColours.slate40,
            },
            isChecked: {
                bg: setuColours.flashTurk,
            },
            isDisabled: {
                bg: defaultColours.slate10,
            },
        },
        actuator: {
            default: {
                bg: defaultColours.white,
            },
            onHover: {
                bg: defaultColours.white,
            },
            isChecked: {
                bg: defaultColours.white,
            },
            isDisabled: {
                bg: defaultColours.slate10,
            },
        },
    },
    // RADIO  /////////////////////////////////////////////////////////////////
    radioButton: {
        inset: {
            default: {
                bg: defaultColours.slate20,
            },
            onHover: {
                bg: defaultColours.slate40,
            },
            isSelected: {
                bg: setuColours.flashTurk,
            },
            isDisabled: {
                bg: defaultColours.slate10,
            },
        },
        circle: {
            default: {
                bg: defaultColours.white,
            },
        },
    },

    //  BUTTON  ///////////////////////////////////////////////////////////////
    button: {
        font: "Matter",
        primary: {
            default: {
                bg: setuColours.flashTurk,
                border: setuColours.flashTurk,
                text: defaultColours.white,
                borderRadius: "4px",
            },
            onHover: {
                bg: `${lighten(0.08, setuColours.flashTurk)}`,
                border: `${lighten(0.08, setuColours.flashTurk)}`,
                text: defaultColours.white,
            },
            isActive: {
                bg: setuColours.flashTurk,
                border: setuColours.flashTurk,
                text: defaultColours.white,
            },
            isLoading: {
                bg: setuColours.flashTurk,
                spinnerBorder: defaultColours.white,
            },
        },
        secondary: {
            default: {
                bg: `${lighten(0.4, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
                borderRadius: "4px",
            },
            onHover: {
                bg: `${lighten(0.4, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isActive: {
                bg: `${lighten(0.2, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isLoading: {
                bg: defaultColours.white,
                spinnerBorder: defaultColours.black,
            },
        },
    },

    //  PROGRESS BAR  /////////////////////////////////////////////////////////
    progressBar: {
        height: 8,
        bg: defaultColours.slate20,
        fill: defaultColours.green80,
    },

    //  TABLE  ////////////////////////////////////////////////////////////////
    table: {
        bg: defaultColours.white,
        text: setuColours.murkyNight,
        border: defaultColours.slate40,
        striped: {
            header: {
                bg: defaultColours.teal40,
            },
            cell: {
                bg: defaultColours.slate10,
            },
        },
        onHover: {
            bg: defaultColours.amber20,
            text: setuColours.murkyNight,
        },
    },

    tablePagination: {
        bg: defaultColours.white,
        text: setuColours.murkyNight,
        svg: {
            onHover: {
                stroke: lighten(0.16, setuColours.flashTurk),
            },
        },
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr: {
        primary: {
            bg: `${darken(0.24, setuColours.pearlyCoke)}`,
            height: "1px",
        },
        secondary: {
            bg: `${darken(0.16, setuColours.pearlyCoke)}`,
            height: "1px",
        },
        tertiary: {
            bg: `${darken(0.08, setuColours.pearlyCoke)}`,
            height: "1px",
        },
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel: {
        bg: defaultColours.white,
        border: defaultColours.slate20,
        dismissButton: {
            bg: defaultColours.white,
            color: defaultColours.slate90,
            content: "×",
        },
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    Sidebar: {
        collapsed: {
            bg: `${lighten(0.32, setuColours.flashTurk)}`,
            icon: {
                default: {
                    stroke: `${darken(0.08, setuColours.flashTurk)}`,
                },
                onHover: {
                    stroke: `${darken(0.16, setuColours.flashTurk)}`,
                },
                active: {
                    stroke: `${darken(0.24, setuColours.flashTurk)}`,
                },
            },
            label: {
                default: {
                    bg: `${lighten(0.4, setuColours.flashTurk)}`,
                    text: `${darken(0.08, setuColours.flashTurk)}`,
                },
                onHover: {
                    bg: setuColours.flashTurk,
                    text: defaultColours.white,
                },
            },
        },
        expanded: {
            bg: `${darken(0.04, setuColours.pearlyCoke)}`,
            icon: {
                default: {
                    stroke: `${darken(0.32, setuColours.thunderCloud)}`,
                },
                onHover: {
                    stroke: `${lighten(0.08, setuColours.thunderCloud)}`,
                },
                active: {
                    stroke: `${lighten(0.24, setuColours.thunderCloud)}`,
                },
            },
            label: {
                default: {
                    bg: `${transparentize(1, setuColours.pearlyCoke)}`,
                    text: `${darken(0.4, setuColours.thunderCloud)}`,
                },
                onHover: {
                    bg: defaultColours.white,
                    text: setuColours.murkyNight,
                },
            },
        },
    },

    //  TABS  //////////////////////////////////////////////////////////////
    tabs: {
        label: {
            default: {
                text: `${lighten(0.16, defaultColours.grey)}`,
            },
            onHover: {
                text: `${lighten(0.16, setuColours.flashTurk)}`,
            },
            isActive: {
                border: setuColours.flashTurk,
                text: darken(0.16, setuColours.flashTurk),
            },
            isDisabled: {
                text: `${darken(0.24, defaultColours.slate)}`,
            },
            hasAlert: {
                circle: {
                    bg: defaultColours.red90,
                    border: defaultColours.slate10,
                },
            },
        },
    },

    //  REPORTS TABLE  ////////////////////////////////////////////////////////
    ReportsTable: {
        selectedRow: {
            bg: setuColours.flashTurk,
        },
    },

    //  PRODUCT CARD  /////////////////////////////////////////////////////////
    ProductCard: {
        icon: {
            bg: defaultColours.teal20,
            stroke: setuColours.flashTurk,
        },
        title: {
            onHover: {
                text: setuColours.flashTurk,
            },
        },
        meta: {
            text: defaultColours.slate80,
        },
        flags: {
            comingSoon: {
                text: defaultColours.blue,
                bg: defaultColours.sky60,
            },
            earlyPreview: {
                text: defaultColours.violet,
                bg: defaultColours.violet20,
            },
            deprecated: {
                text: defaultColours.orange,
                bg: defaultColours.amber40,
            },
        },
    },

    //  INACTIVE OBJECTS  /////////////////////////////////////////////////////
    Inactive: {
        bg: `${darken(0.08, setuColours.pearlyCoke)}`,
        border: defaultColours.slate30,
    },

    //  MULTI-SELECT BUTTONS  /////////////////////////////////////////////////
    MultiSelectButtons: {
        default: {
            bg: defaultColours.slate10,
            text: defaultColours.slate,
        },
        selected: {
            bg: defaultColours.slate10,
            text: defaultColours.slate,
            border: defaultColours.teal,
            crossMark: defaultColours.teal,
        },
        unselected: {
            bg: defaultColours.red10,
            text: defaultColours.slate,
            border: defaultColours.red90,
            crossMark: defaultColours.red90,
        },
        applied: {
            bg: defaultColours.teal20,
            text: defaultColours.teal,
        },
    },

    // MULTI-SELECT DROPDOWN //////////////////////////////////////////////////
    MultiSelectDropDownTheme: {
        neutral5: defaultColours.teal20,
        neutral0: defaultColours.white,
        neutral10: defaultColours.teal20,
        neutral20: defaultColours.slate40,
        neutral30: defaultColours.slate40,
        neutral50: defaultColours.slate60,
        neutral80: defaultColours.teal,
        primary: setuColours.flashTurk,
        primary25: `${lighten(0.24, setuColours.flashTurk)}`,
    },

    MultiSelectDropDown: {
        option: {
            text: setuColours.murkyNight,
            onHover: setuColours.murkyNight,
        },
    },
};
