import React from "react";
import { Element, Row } from "fictoan-react";
import { Portion } from "fictoan-react";
import SuccessCard from "@/components/SuccessCard/SuccessCard";

function SuccessPage() {
    return (
        <Row sidePadding="huge" gutters="medium" marginTop="micro">
            <Portion isFullWidth>
                <Element as="div" horizontallyCenterThis>
                    <SuccessCard />
                </Element>
            </Portion>
        </Row>
    );
}

export default SuccessPage;
