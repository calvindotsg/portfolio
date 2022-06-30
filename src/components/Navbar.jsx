import React, {useState} from "react";
import {useScrollPosition} from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {mainBody, about, career, education, onlineWritings, finalYearProject} from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {

    const [isTop, setIsTop] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [active, setActive] = useState('home');
    const navbarMenuRef = React.useRef();
    const navbarDimensions = useResizeObserver(navbarMenuRef);
    const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

    useScrollPosition(
        ({prevPos, currPos}) => {
            if (!navbarDimensions) return;
            currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
                ? setIsTop(true)
                : setIsTop(false);
            setScrollPosition(currPos.y);
        },
        [navBottom]
    );

    React.useEffect(() => {
        if (!navbarDimensions) return;
        navBottom - scrollPosition >= ref.current.offsetTop
            ? setIsTop(false)
            : setIsTop(true);

        const sections = document.querySelectorAll(".target-section");
        sections.forEach(function (current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            const pos = navBottom - scrollPosition;
            /* If our current scroll position enters the space where current section
             * on screen is, set active section
             */
            if (pos > sectionTop && pos <= sectionTop + sectionHeight) {
                setActive(sectionId);
            }
        });

    }, [navBottom, navbarDimensions, ref, scrollPosition]);

    return (
        <Navbar
            ref={navbarMenuRef}
            className={` fixed-top  ${
                !isTop ? "navbar-white" : "navbar-transparent"
            }`}
            expand="lg"
        >
            <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
                {`<${mainBody.lastName} />`}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {about.show && <NavLink title="About" active={active} anchor="aboutme"/>}
                    {finalYearProject.show &&
                        <NavLink title="Final year project" active={active} anchor="finalYearProject"/>}
                    {career.show && <NavLink title="Career" active={active} anchor="career"/>}
                    {education.show && <NavLink title="Education" active={active} anchor="education"/>}
                    {onlineWritings.show && <NavLink title="Writings" active={active} anchor="publication"/>}
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link
                        className="nav-link lead"
                        href="/"
                        rel="noreferrer noopener"
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        className="nav-link lead"
                        href="/contact"
                        rel="noreferrer noopener"
                    >
                        Contact me
                    </Nav.Link>
                    <Nav.Link
                        className="nav-link lead"
                        href={about.resume}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Resume
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
});

const NavLink = ({active, title, anchor}) => (
    <Nav.Link
        className={`nav-link lead ${active === anchor ? "active" : ""}`}
        href={`${process.env.PUBLIC_URL}/#${anchor}`}
    >
        {title}
    </Nav.Link>
)
export default Navigation;
