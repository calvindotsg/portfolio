import React from "react";
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import heroVideo from "../../assets/hero.mp4";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '80vh',
        position: 'relative',
        '& video': {
            objectFit: 'cover',
        },
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        paddingBottom: theme.spacing(4),
    },
}));

const MainBody = React.forwardRef(
    ({gradient, title, message, icons}, ref) => {

        const classes = useStyles();

        return (
            <section className={classes.root}>
                <ReactPlayer
                    url={heroVideo}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                />
                    <div id="stars"></div>
                <div className={classes.overlay}>
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                    >
                    <Container className="text-center">
                        <h1 ref={ref} className="display-1">
                            {title}
                        </h1>
                        <Typist className="lead typist" cursor={{show: true}}>
                            {" "}
                            {message}
                        </Typist>
                        <div className="p-5">
                            {icons.map((icon, index) => (
                                <a
                                    key={`social-icon-${index}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={icon.url}
                                    aria-label={`My ${icon.image.split("-")[1]}`}
                                >
                                    <i className={`fab ${icon.image}  fa-3x socialicons`}/>
                                </a>
                            ))}
                        </div>
                        <a
                            className="btn btn-outline-light btn-lg "
                            href="/#aboutme"
                            role="button"
                            aria-label="Learn more about me"
                        >
                            More about me
                        </a>
                    </Container>
                    </Box>
                    </div>
            </section>
        );
    }
);

export default MainBody;
