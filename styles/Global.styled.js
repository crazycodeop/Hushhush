import { createGlobalStyle } from "styled-components";
import { setuColours, SetuColoursCSS } from "./SetuColors";

export const GlobalStyle = createGlobalStyle`


    ${SetuColoursCSS}


    h1, h2, h3 { line-height : 1; }

    article { min-height : 100vh; }

    p { margin : 0; }

    div[class*="border"] { border-width : 11px !important; }

    .theme-toggle {
        position        : fixed;
        right           : 16px;
        bottom          : 16px;
        width           : 24px;
        cursor          : pointer;
        fill            : none;
        stroke          : ${setuColours.murkyNight};
        stroke-linecap  : round;
        stroke-linejoin : round;
        stroke-width    : 2px;
    }

    .flex {
        display : flex;
    }

    .flex-column {
        display        : flex;
        flex-direction : column;
    }

    .cursor-pointer { cursor: pointer; }

    //  SIDEBAR + CONTENT WRAPPER  ////////////////////////////////////////////
    #content-wrapper {
        /* margin-left : 64px; */
        //width       : calc(100% - 64px);
    }

    aside.is-expanded ~ #content-wrapper {
        width       : calc(100% - 220px);
        margin-left : 220px;
    }

    .icon-small svg{
      width   : 16px;
      height  : 16px;
    }
    .icon-medium svg{
      width   : 24px;
      height  : 24px;

    }
    .resp-iframe {
      position: absolute;
      top:      0;
      left:     0;
      width:    100%;
      height:   100%;
      border:   0;
    }
    .grid {
      display : grid;
    }
    .heading {
      font-weight:700;
    }

`;
