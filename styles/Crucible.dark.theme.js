import { lighten, darken } from "polished";
import { defaultColours } from "fictoan-react";

import { setuColours } from "./SetuColors";

// import logoFT from "../assets/images/logo-ft-on-tp.svg";

export const CrucibleDarkTheme = {
    themeName: "Dark",

    body: {
        bg: setuColours.murkyNight,
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
            color: `${lighten(0.56, setuColours.murkyNight)}`,
            lineHeight: 1.44,
            size: 0.96,
            subtext: `${lighten(0.4, setuColours.murkyNight)}`,
        },
        headings: {
            font: "Matter",
            weight: 400,
            lineHeight: 1.24,
            color: `${lighten(0.64, setuColours.murkyNight)}`,
            multiplier: 1.18,
        },
        links: {
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
                bg: `${lighten(0.32, setuColours.salmonRouge)}`,
                text: setuColours.murkyNight,
                scale: 80,
            },
            block: {
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            prism: {
                tokens: {
                    plain: `${lighten(0.56, setuColours.murkyNight)}`,
                },
            },
        },
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`,
        border: `${lighten(0.16, setuColours.murkyNight)}`,
        borderRadius: "8px",
    },

    //  INPUT  ////////////////////////////////////////////////////////////////
    input: {
        default: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            border: `${lighten(0.32, setuColours.murkyNight)}`,
            label: `${lighten(0.48, setuColours.murkyNight)}`,
            text: defaultColours.white,
        },
        onFocus: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            border: setuColours.flashTurk,
            text: defaultColours.white,
            helpText: defaultColours.slate20,
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
            bg: defaultColours.grey50,
            border: defaultColours.grey50,
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

    //  BUTTON  ///////////////////////////////////////////////////////////////
    button: {
        fontFamily: "Matter",
        primary: {
            default: {
                bg: `${darken(0.08, setuColours.flashTurk)}`,
                border: `${darken(0.08, setuColours.flashTurk)}`,
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
                spinnerBorder: defaultColours.black,
            },
        },
        secondary: {
            default: {
                bg: `${darken(0.24, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: `${lighten(0.08, setuColours.flashTurk)}`,
                borderRadius: "4px",
            },
            onHover: {
                bg: `${darken(0.24, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isActive: {
                bg: `${darken(0.32, setuColours.flashTurk)}`,
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
        bg: `${lighten(0.16, setuColours.murkyNight)}`,
        text: defaultColours.white,
        border: `${lighten(0.32, setuColours.murkyNight)}`,
        striped: {
            header: {
                bg: `${lighten(0.4, setuColours.murkyNight)}`,
            },
            cell: {
                bg: `${lighten(0.24, setuColours.murkyNight)}`,
            },
        },
        onHover: {
            bg: defaultColours.amber20,
            text: setuColours.murkyNight,
        },
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr: {
        primary: {
            bg: `${lighten(0.48, setuColours.murkyNight)}`,
            height: "1px",
        },
        secondary: {
            bg: `${lighten(0.32, setuColours.murkyNight)}`,
            height: "1px",
        },
        tertiary: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            height: "1px",
        },
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`,
        border: `${lighten(0.16, setuColours.murkyNight)}`,
        dismissButton: {
            bg: `${lighten(0.04, setuColours.murkyNight)}`,
            color: defaultColours.slate90,
            content: "×",
        },
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar: {
        bg: `${lighten(0.02, setuColours.murkyNight)}`,

        isCollapsed: {
            label: {
                text: defaultColours.white,
                bg: setuColours.flashTurk,
            },
        },

        header: {
            // logoPath: logoFT,
            bg: `${lighten(0.02, setuColours.murkyNight)}`,
            borderBottom: setuColours.murkyNight,
        },

        linksWrapper: {
            icons: {
                size: "24px",
                stroked: {
                    thickness: 2,
                    default: {
                        line: `${lighten(0.24, setuColours.murkyNight)}`,
                    },
                    onHover: {
                        line: `${lighten(0.24, setuColours.flashTurk)}`,
                    },
                    isActive: {
                        line: setuColours.flashTurk,
                    },
                },
                filled: {
                    default: {
                        bg: defaultColours.slate40,
                    },
                    onHover: {
                        bg: defaultColours.slate80,
                    },
                    isActive: {
                        bg: defaultColours.slate,
                    },
                },
            },

            links: {
                default: {
                    bg: setuColours.murkyNight,
                    text: `${lighten(0.56, setuColours.murkyNight)}`,
                    scale: 100,
                    weight: 600,
                },
                onHover: {
                    bg: `${lighten(0.08, setuColours.murkyNight)}`,
                    text: setuColours.flashTurk,
                },
                isSelected: {
                    bg: `${lighten(0.16, setuColours.murkyNight)}`,
                    border: setuColours.flashTurk,
                    text: setuColours.flashTurk,
                },
                hasAlert: {
                    bg: setuColours.dartRed,
                },
            },

            subLinks: {
                header: {
                    weight: 600,
                },
                default: {
                    bg: defaultColours.white,
                    text: `${lighten(0.24, setuColours.murkyNight)}`,
                    weight: 400,
                    scale: 92,
                },
                onHover: {
                    bg: defaultColours.slate10,
                    text: setuColours.flashTurk,
                },
                chevron: {
                    border: defaultColours.slate40,
                },
            },
        },

        footer: {
            bg: `${lighten(0.02, setuColours.murkyNight)}`,
            borderTop: `${lighten(0.16, setuColours.murkyNight)}`,
        },
    },

    ///////////////////////////////////////////////////////////////////////////
    // CUSTOM COMPONENTS
    ///////////////////////////////////////////////////////////////////////////
    Header: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`,
    },
    Footer: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`,
    },
    GuideCard: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`,
    },
};
