import styled from "styled-components";
import { motion } from "framer-motion";

export const SignUpStyled = styled(motion.article)`
    display: grid;
    height: 100vh;
    padding-bottom: 0;
    grid-template-columns: 60% 40%;
    /* grid-template-areas: "content form"; */
    @media screen and (max-width: 1000px) {
        grid-template-columns: unset;
        grid-template-rows: 30% 70%;
    }
    #left-side-content {
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 0px 8vw 0px;
        z-index: 1000;
        background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.48),
                rgba(66, 202, 205, 0.48)
            ),
            url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80")
                0px 0px no-repeat;
    }
    #right-side-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .img-container-text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (min-width: 1000px) {
            margin-bottom: 5rem;
        }
    }
    .primary-heading {
        font-size: 4rem;
        color: white;
        @media only screen and (max-width: 1000px) {
            font-size: 3rem !important;
            margin-bottom: 1rem !important;
        }
        @media only screen and (max-width: 600px) {
            font-size: 2rem !important;
            /* margin-bottom: 1rem !important; */
        }
    }
    .search-field {
        /* border: none; */
        /* padding: 16px; */
        margin: 1rem 0;
        background-color: ${(props) => props.theme.card.bg};
    }
    .row-heading {
        display: grid;
        grid-template-columns: repeat(24, 1fr);
    }

    .button-group {
        display: flex;
        flex-direction: column;
        button {
            max-width: max-content;
        }
    }
    .grid-page {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
`;
