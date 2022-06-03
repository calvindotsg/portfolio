import React from "react";

const GetInTouch = ({heading, message, email}) => {
    return (
        <>
            <h2 className="display-4 pb-3 text-center">{heading}</h2>
            <p className="lead text-center">
                <a
                    className="btn btn-outline-dark btn-lg"
                    href="/contact"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Contact form button"
                >
                    Contact form
                </a>
            </p>
            <p className="lead text-center pb-3">
                {message}, {email}.
            </p>
        </>
    );
};

export default GetInTouch;
