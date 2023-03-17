import styled from "styled-components";


export const HomeStyled = styled.article`
    #hero-intro { background-color : ${props => props.theme.Header.bg}; }
    
    #name { font-size : 5.365926434854404em; }
    
    .framework-logo {
        width     : 24%;
        height    : 120px;
        max-width : 400px;
    }
    
    @media all and (max-width : 600px) {
        .relationship {
            width  : calc(100% - 128px);
            margin : 32px 64px;
        }
    }
`;
