import React from "react";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
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
            < div className="p-3 mb-2">
                <h5>{ProjectTitle} - <span className="text-muted text-secondary">{Time}</span></h5>

                <div className="card-text">
                    <div>{Title} - <span className="text-secondary">{DegreeTitle}</span></div>
                    <ReactPlayer
                        className="img-fluid my-3 card-image"
                        url={DemoLink}
                        playing
                        loop
                        muted
                        width="95%"
                        height="95%"
                    />
                    <div className="my-2"> {
                        Descriptions.map((description, index) => (
                            <div className="lead"
                               key={`finalYearProject-description-${index}`}
                            >{description}</div>
                        ))
                    }</div>
                    <p className="lead text-center">
                        <a
                            className="btn btn-outline-dark btn-lg"
                            href={ProjectLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            role="button"
                            aria-label="ProjectLink"
                        >
                            Project Link
                        </a>
                        {" "}
                        <a
                            className="btn btn-outline-dark btn-lg"
                            href={GithubLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            role="button"
                            aria-label="GithubLink"
                        >
                            Github Link
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
