import React from "react";
import { PasswordModalStyled } from "./PasswordModal.styled";
import { Row, Portion, Card, Element } from "fictoan-react";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { ImageGrid } from "../ImageGrid/ImageGrid";
export const PasswordModal = ({ toggleSearchModal }) => {
    const modalRef = useRef(null);
    useOnClickOutside(modalRef, () => toggleSearchModal());
    return (
        <PasswordModalStyled>
            <Element as="section" className="carousel-wrap">
                <Element as="div" className="carousel">
                    <Row
                        gutters="small"
                        margin="none"
                        style={{ overflowY: "auto" }}
                        ref={modalRef}
                    >
                        <Portion desktopSpan="whole">
                            <Card className="search-card">
                                <Element
                                    as="div"
                                    className="vertically-centre-items"
                                >
                                    <ImageGrid />
                                </Element>
                            </Card>
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </PasswordModalStyled>
    );
};
