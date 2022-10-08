import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

import CertificationCard from "./CertificationCard";
import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

const Certification = ({
                           heading,
                           certificationList
                   }) => {

    return (
        <Jumbotron fluid id="certification" className="bg-light m-0 target-section">
            <SlideUpWhenVisible>
                <Container className="shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="display-4 pb-5 text-center">{heading}</h2>
                    <Row>
                        {
                            certificationList.map((certification, index) => (
                                <CertificationCard
                                    key={`certification-card-${index}`}
                                    id={`certification-card-${index}`}
                                    value={certification}
                                />
                            ))
                        }
                    </Row>
                </Container>
            </SlideUpWhenVisible>
        </Jumbotron>
    );
};

export default Certification;
