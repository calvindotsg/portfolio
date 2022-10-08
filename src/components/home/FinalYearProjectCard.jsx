import React from "react";
import Col from "react-bootstrap/Col";

import DemoPoster from "../../assets/FYP-Demo.png";
import DemoLink from "../../assets/FYP-Demo.mp4";

const FinalYearProjectCard = ({value}) => {
    const {
        ProjectTitle,
        DegreeTitle,
        Title,
        Time,
        ProjectLink,
        GithubLink,
        Descriptions,
        TechStack,
    } = value;

    return (
        <Col md="12">
            <div className="p-3 mb-2">
                <h5>{ProjectTitle} - <span className="text-muted text-secondary">{Time}</span></h5>
                <div className="card-text">
                        <div>{Title} - <span className="text-secondary">{DegreeTitle}</span></div>
                    <div
                        className="wrapper"
                    >
                        <video
                            className="img-fluid my-3 card-image wrapper__img"
                            controls
                            loop
                            muted
                            preload="none"
                            poster={DemoPoster}
                            title="Final year project demo video"
                        >
                            <source
                                src={DemoLink}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="my-2"> {
                        Descriptions.map((description, index) => (
                            <div className="lead"
                                 key={`finalYearProject-description-${index}`}
                            >{description}</div>
                        ))
                    }</div>
                    <p className="lead text-center">
                        <a
                            className="btn btn-outline-secondary mr-3"
                            href={ProjectLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            role="button"
                            aria-label="Project link"
                        >
                            <i className="fas fa-external-link-alt"></i> Web app
                        </a>
                        {" "}
                        <a
                            className="btn btn-outline-secondary mr-3"
                            href={GithubLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            role="button"
                            aria-label="Github link"
                        >
                            <i className="fab fa-github"/> Repo
                        </a>
                    </p>
                    {TechStack.length ? (
                        <div className="lead text-muted">
                            TechStack: {
                            TechStack.map((tech, index) => (
                                <span className="lead text-muted mr-2"
                                      key={`finalYearProject-tech-${index}`}
                                >{tech}</span>
                            ))
                        }
                        </div>) : <div/>
                    }
                </div>
                <hr/>
            </div>
        </Col>
    );
};

export default FinalYearProjectCard;
