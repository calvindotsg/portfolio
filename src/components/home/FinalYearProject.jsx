import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import FinalYearProjectCard from "./FinalYearProjectCard";
import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

const FinalYearProject = ({
                              heading,
                              finalYearProjectList
                        }) => {

    return (
        <Jumbotron fluid id="finalYearProject" className="bg-light m-0 target-section">
            <SlideUpWhenVisible>
                <Container className="shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="display-4 pb-5 text-center">
                        {heading}
                    </h2>
                    <Row>
                        {
                            finalYearProjectList.map((finalYearProject, index) => (
                                <FinalYearProjectCard
                                    key={`finalYearProject-card-${index}`}
                                    id={`finalYearProject-card-${index}`}
                                    value={finalYearProject}
                                />
                            ))
                        }
                    </Row>
                </Container>
            </SlideUpWhenVisible>
        </Jumbotron>
    );
};

export default FinalYearProject;
