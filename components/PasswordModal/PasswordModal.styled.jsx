import styled from "styled-components";
import { defaultColours } from "fictoan-react";
import { transparentize } from "polished";

export const PasswordModalStyled = styled.dialog`
    display: flex;
    position: fixed;
    width: 100vw !important;
    justify-content: center;
    height: 100vh !important;
    background-color: rgba(29, 16, 22, 0.2);
    z-index: 500000;
    border: none;
    background-color: rgba(0, 0, 0, 0.6);
    .carousel-wrap {
        display: flex;
        margin: 0px auto;
    }
    .carousel {
        border-radius: 10rem;
        min-height: 30rem;

        width: 50vw;
        overflow: hidden;
        position: relative;
        padding: 0;
        list-style: none;
        margin: 12vh auto 0;
        border-radius: 2px;
        .search-field {
            border: none;
            padding: 16px;
            background-color: ${(props) => props.theme.card.bg};
            :focus,
            :active {
                border: none;
            }
        }
        .search-card {
            display: flex;
            flex-direction: column;
            border-radius: 0.5rem;
            min-height: 20rem;

            .input-border {
                border-bottom: 1.5px solid ${(props) => props.theme.card.border};
            }
        }

        .cross-icon {
            display: flex;
            place-items: center;
            place-content: center;
            background: transparent;
            cursor: pointer;
            svg {
                width: 25px;
                height: 25px; // em-effing Safari fix
            }
        }

        .cross-icon-input {
            display: none;
        }

        .cross-icon-input svg .stroke {
            stroke: ${(props) => props.theme.Search.Icon.default.stroke};
        }

        @media all and (max-width: 1600px) {
            width: 50vw;

            .icon-wrapper {
                width: 80px;
            }

            .icon-wrapper.bridge {
                width: 60px;
                margin-right: 15px;
            }
        }

        @media all and (max-width: 900px) {
            width: 80vw;

            .icon-wrapper {
                width: 50px;
            }
            .icon-wrapper.bridge {
                width: 40px;
                margin-right: 15px;
            }
            .user-guide-container {
                display: none;
            }

            .cross-icon-input {
                display: flex;
            }
        }
    }
`;
