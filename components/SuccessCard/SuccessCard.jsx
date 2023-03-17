import { Card, Heading, Text, Element, CardStyled } from "fictoan-react";
import React from "react";
import BadgeWithTick from "../../assets/icons/BadgeWithTick.svg";
import { SuccessCardStyled } from "./SuccessCard.styled";

function SuccessCard() {
    return (
        <SuccessCardStyled>
            <Card shape="rounded" padding="micro">
                <Element as="div" className="card-container">
                    <BadgeWithTick />
                    <Element as="div">
                        <Heading marginBottom="micro" as="h2">
                            Success
                        </Heading>
                        <Text size="large">
                            We have successfully authenticated your pattern
                            using graphical representation
                        </Text>
                    </Element>
                </Element>
            </Card>
        </SuccessCardStyled>
    );
}

export default SuccessCard;
