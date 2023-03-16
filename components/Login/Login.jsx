// EXTERNAL DEPS  =============================================================
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useMemo, useState } from "react";
import { createPortal } from "react-dom";

// INTERNAL DEPS  =============================================================
import {
    Button,
    Element,
    FormWrapper,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    InputField,
} from "fictoan-react";

// LAYOUTS  ================================================================

// COMPONENTS  ================================================================
import { LoginStyled } from "./Login.styled";

// UTILS  =====================================================================

// HOOKS  =====================================================================

// CONTEXTS  ==================================================================

// ASSETS  ====================================================================

// DATA  ======================================================================

// TYPES  =====================================================================

import { useToggle } from "@/hooks/useToggle";
import { useForm } from "react-hook-form";
import { PasswordModal } from "../PasswordModal/PasswordModal";
import axios from "axios";

const Login = () => {
    const router = useRouter();
    const currentYear = new Date().getFullYear();
    const [step, setStep] = useState("first_factor");
    const [otp, setOtp] = useState("");
    // const [showPassword, setShowPassword] = useToggle();
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const { control, handleSubmit, formState, watch } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onLoginSubmit = (loginData) => {
        onSubmit(loginData);
    };

    const onSubmit = (loginData) => {
        setIsLoading(true);
    };

    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
    const toggleSearchModal = (type) => {
        setIsSearchModalVisible((curr) =>
            typeof type === "boolean" ? type : !curr
        );
    };

    const postData = async () => {
        try {
            console.log(userName, email, "asffas");
            const res = await axios.post("/api/user", {
                username: userName,
                email: email,
            });

            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error(res.status);
            }
        } catch (error) {
            // setMessage("Failed to add pet");
        }
    };

    return (
        <LoginStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.32 }}
        >
            <Head>
                <title>Sign in to Setu — Setu</title>
            </Head>

            {/* <Element as="div"></Element> */}

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* LHS CONTENT */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="left-side-content" bgColour="slate-20">
                <Row isFullHeight>
                    <Portion className="img-container-text">
                        <Element
                            as="div"
                            className="hero-heading"
                            horizontallyCenterThis
                        >
                            <Heading as="h1" className="primary-heading">
                                Taking Authentication to the next level
                            </Heading>
                        </Element>
                        {/* <SetuLogo width={130} height={45} /> */}
                    </Portion>
                </Row>
            </Element>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* RHS FORM */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="right-side-content">
                <Row sidePadding="medium" marginTop="small">
                    <Portion>
                        <Heading
                            as="h2"
                            marginBottom="tiny"
                            marginTop="medium"
                            data-testid="heading"
                            style={{ fontWeight: "700" }}
                        >
                            Login
                        </Heading>

                        <FormWrapper
                            spacing="none"
                            onSubmit={handleSubmit(onLoginSubmit)}
                        >
                            <InputField
                                className="search-field"
                                name="search"
                                placeholder="Username"
                                autoComplete="off"
                                autoFocus
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                tabIndex={0}
                            />
                            <InputField
                                className="search-field"
                                name="search"
                                placeholder="Email"
                                autoComplete="off"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                tabIndex={0}
                            />

                            {loginError && (
                                <Text
                                    marginBottom="micro"
                                    textColour="red"
                                    data-testid="login-error-text"
                                >
                                    {loginError}
                                </Text>
                            )}
                            <Element
                                as="div"
                                verticallyCentreItems
                                marginTop="micro"
                            >
                                <Button
                                    kind="primary"
                                    shadow="hard"
                                    marginRight="micro"
                                    isLoading={isLoading}
                                    data-testid="login-button"
                                    onClick={() => postData()}
                                >
                                    Set Password
                                </Button>

                                {/* <Link href="/forgot-password">
                                    Forgot password?
                                </Link> */}
                            </Element>
                        </FormWrapper>
                    </Portion>
                    {process.env.HIDE_SIGNUP && (
                        <Portion>
                            <HRule
                                kind="secondary"
                                marginTop="micro"
                                marginBottom="micro"
                            />

                            <Text>
                                New here?{" "}
                                <Link href="/signup">
                                    Sign up for an account
                                </Link>
                                .
                            </Text>
                        </Portion>
                    )}
                </Row>

                <Row sidePadding="medium">
                    <Portion>
                        <Element as="footer">
                            <HRule
                                kind="secondary"
                                marginTop="micro"
                                marginBottom="micro"
                            />

                            <Text isSubtext>
                                &copy; {currentYear} Hushhush Technologies
                            </Text>
                        </Element>
                    </Portion>
                </Row>
                {isSearchModalVisible &&
                    createPortal(
                        <PasswordModal
                            isSearchModalVisible={isSearchModalVisible}
                            toggleSearchModal={toggleSearchModal}
                        />,
                        document.body
                    )}
            </Element>
        </LoginStyled>
    );
};

export default Login;
