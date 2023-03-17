// EXTERNAL DEPS  =============================================================
import Head from "next/head";
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
import { ImageGrid } from "../ImageGrid/ImageGrid";
import axios from "axios";
import { shuffleArr } from "@/utils";
import { toast } from "react-toastify";
import Link from "next/link";

const Login = () => {
    const router = useRouter();
    const currentYear = new Date().getFullYear();
    // const [showPassword, setShowPassword] = useToggle();
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [imageSet, setImageSet] = useState([]);

    const [loginError, setLoginError] = useState("");

    const onSubmit = (loginData) => {
        setIsLoading(true);
    };

    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

    const getUserData = async () => {
        console.log(email, "email");
        try {
            setIsLoading(true);
            const { data } = await axios.post("/api/login", {
                username: userName,
                email: email,
            });
            const userAllImagesSet = shuffleArr(data?.data);
            setImageSet(userAllImagesSet);
            if (userAllImagesSet) {
                setIsLoading(false);
                setIsSearchModalVisible(true);
            }
        } catch (error) {
            setIsLoading(false);
            setImageSet([]);
            setIsSearchModalVisible(false);
            toast(error?.response?.data.message);
        }
    };

    const onLoginSubmit = (e) => {
        e.preventDefault();
        return getUserData();
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

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* LHS CONTENT */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="left-side-content" bgColour="slate-20">
                <Row
                    gutters="medium"
                    isFullHeight
                    isFullWidth
                    className="row-heading"
                >
                    <Portion className="img-container-text">
                        <Heading
                            as="h1"
                            textColor="white"
                            className="primary-heading"
                            marginBottom="medium"
                        >
                            Taking Authentication to the next level
                        </Heading>
                    </Portion>
                </Row>
            </Element>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* RHS FORM */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {isSearchModalVisible ? (
                <Row sidePadding="micro" paddingTop="small">
                    <Portion>
                        <Element
                            as="div"
                            className="grid-page"
                            marginTop="small"
                        >
                            <ImageGrid
                                showCategory={false}
                                initialImageSet={imageSet}
                                context="LOGIN"
                            />

                            <Element as="div" marginTop="micro">
                                <a
                                    onClick={() =>
                                        setIsSearchModalVisible(false)
                                    }
                                >
                                    Go back{" "}
                                </a>
                                <Link
                                    href="/forgot-password"
                                    style={{ marginLeft: "1rem" }}
                                >
                                    forgot password
                                </Link>
                            </Element>
                        </Element>
                    </Portion>
                </Row>
            ) : (
                <Element as="section" id="right-side-content">
                    <Row sidePadding="micro" marginTop="small">
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
                                onSubmit={(e) => onLoginSubmit(e)}
                            >
                                <InputField
                                    className="search-field"
                                    name="search"
                                    placeholder="Email"
                                    autoComplete="off"
                                    autoFocus
                                    required
                                    type="email"
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
                                    marginTop="micro"
                                    className="button-group"
                                >
                                    <Button
                                        kind="primary"
                                        marginBottom="nano"
                                        type="submit"
                                        shadow="hard"
                                        marginRight="micro"
                                        isLoading={isLoading}
                                        data-testid="login-button"
                                    >
                                        For Password -&gt;
                                    </Button>

                                    <Element
                                        as="div"
                                        marginTop="nano"
                                        marginLeft="nano"
                                    >
                                        <Link href="/sign-up">
                                            Create Account -&gt;
                                        </Link>
                                    </Element>
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
                                    <Link href="/sign-up">
                                        Create Account -&gt;
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
                </Element>
            )}
        </LoginStyled>
    );
};

export default Login;
