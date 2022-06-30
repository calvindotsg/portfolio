import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {
    navBar,
    mainBody,
    about,
    repos,
    getInTouch,
    career,
    onlineWritings,
    education,
    finalYearProject
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FinalYearProject from "./components/home/FinalYearProject";
import Career from "./components/home/Career";
import Education from "./components/home/Education";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Publication from './components/home/Publication';
import FormsContacts from "./components/contact/FormsContacts";

const Home = React.forwardRef((props, ref) => {
    return (
        <>
            <MainBody
                title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
                message={mainBody.message}
                icons={mainBody.icons}
                ref={ref}
            />
            {about.show && (
                <AboutMe
                    heading={about.heading}
                    messages={about.messages}
                    link={about.imageLink}
                    imgSize={about.imageSize}
                    resume={about.resume}
                />
            )}
            {finalYearProject.show && (
                <FinalYearProject
                    heading={finalYearProject.heading}
                    finalYearProjectList={finalYearProject.lists}
                />
            )}

            {repos.show && (
                <Project
                    heading={repos.heading}
                    username={repos.gitHubUsername}
                    length={repos.reposLength}
                    specific={repos.specificRepos}
                />
            )}

            {career.show && (
                <Career
                    heading={career.heading}
                    careerList={career.lists}
                />
            )}

            {education.show && (
                <Education
                    heading={education.heading}
                    educations={education.lists}
                />
            )}
            {onlineWritings.show && (
                <Publication
                    quote={onlineWritings.quote}
                    heading={onlineWritings.heading}
                    list={onlineWritings.list}
                />
            )}
            {getInTouch.show && (
                <GetInTouch
                    heading={getInTouch.heading}
                    message={getInTouch.message}
                    email={getInTouch.email}
                />
            )}
        </>
    );
});

const Contact = React.forwardRef((props, ref) => {
    return (
        <>
            <MainBody
                title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
                message={mainBody.message}
                icons={mainBody.icons}
                ref={ref}
            />
            <FormsContacts
                heading={getInTouch.heading}
                message={getInTouch.message}
            />
            {about.show && (
                <AboutMe
                    heading={about.heading}
                    messages={about.messages}
                    link={about.imageLink}
                    imgSize={about.imageSize}
                    resume={about.resume}
                />
            )}
        </>
    );
});

const App = () => {
    const titleRef = React.useRef();

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
            {navBar.show && <Navbar ref={titleRef}/>}
            <ScrollToTop smooth color="#3A5079" />
            <Route path="/" exact component={() => <Home ref={titleRef}/>}/>
            <Route path="/contact" exact component={() => <Contact ref={titleRef}/>}/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
