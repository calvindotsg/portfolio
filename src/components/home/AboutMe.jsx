import React from "react";

import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

const AboutMe = ({
                     heading,
                     messages,
                     link,
                     resume
                }) => {

    const [profilePicUrl, setProfilePicUrl] = React.useState("");
    const [showPic] = React.useState(Boolean(link));
    const items = messages.map((message, index) => <p className="lead" key={index}>{message}</p>);
    React.useEffect(() => {
        setProfilePicUrl(link);
    }, [link]);

    return (
        <div id="aboutme" className="target-section jumbotron jumbotron-fluid m-0">
            <SlideUpWhenVisible>
                <div className="container container-fluid">
                    <div className=" row align-items-center">
                        <div className="col-sm-6 text-center">
                            {showPic && (
                                <img
                                    className="img-fluid my-3 card-image"
                                    width="250"
                                    height="250"
                                    src={profilePicUrl}
                                    alt="profile of calvin"
                                />
                            )}
                        </div>
                        <div className="col-sm-6">
                            <h2 className="display-4 mb-5 text-center">{heading}</h2>
                            <p className="lead text-center">{items}</p>
                            {resume && (
                                <p className="lead text-center">
                                    <a
                                        className="btn btn-outline-dark btn-lg"
                                        href={resume}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        role="button"
                                        aria-label="Resume/CV"
                                    >
                                        <i className="fas fa-file-pdf"/>{" "}Resume
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </SlideUpWhenVisible>
        </div>
    );
};

export default AboutMe;
