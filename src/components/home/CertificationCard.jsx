import React from "react";
import Col from "react-bootstrap/Col";

const CertificationCard = ({value}) => {
    const {
        certificationTitle,
        certificationAuthority,
        issueDate,
        credentialLink
    } = value;

    return (
        <Col md="12">
            <div className="p-2">
                <h5>{certificationTitle}</h5>
                <div className="primary-text">
                    {certificationAuthority} — <span className="secondary-text">{issueDate}</span>
                </div>
                <p className="lead text-left">
                    <a
                        className="btn btn-outline-secondary mr-3"
                        href={credentialLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        role="button"
                        aria-label="Credential link"
                    >
                        <i className="fas fa-external-link-alt"></i>{" "}See credential
                    </a>
                </p>
                <hr/>
            </div>
        </Col>
    );
};


export default CertificationCard;
