<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">My Portfolio app ✨</h1>

  <p align="center">
    <a href="https://calvin.sg">calvin.sg</a>
    modified from
    <a href="https://hashirshoaeb.github.io/home">https://hashirshoaeb.github.io/home</a>
    and
    <a href="https://xunxdd.github.io/portfolio">https://xunxdd.github.io/portfolio</a>
  </p>
</p>
<!-- PROJECT LOGO -->

[![GitHub stars](https://img.shields.io/github/stars/calvin-sg/portfolio)](https://github.com/calvin-sg/portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/calvin-sg/portfolio)](https://github.com/calvin-sg/portfolio/network)
[![GitHub issues](https://img.shields.io/github/issues/calvin-sg/portfolio)](https://github.com/calvin-sg/portfolio/issues)
[![GitHub license](https://img.shields.io/github/license/calvin-sg/portfolio)](https://github.com/calvin-sg/portfolio/blob/master/LICENSE)

[![Site preview](/public/demo.gif)](https://calvin.sg)

## Table of Contents

* [Introduction 👋](#introduction-)
* [Technology Stack 🛠️](#technology-stack-)
* [Structure ⚓](#structure-)
* [Sharing 💗](#sharing-)
* [Prerequisites 🍪](#prerequisites-)
* [Setup And Deployment 🔧](#setup-and-deployment-)
* [Terms and License](#terms-and-license)
* [Usage](#usage)
    * [Available Scripts](#available-scripts)
        * [npm start](#npm-start)
        * [npm test](#npm-test)
        * [npm run build](#npm-run-build)
        * [npm run eject](#npm-run-eject)

## Introduction 👋

A personal static website application hosted with Firebase, built with React to showcase my portfolio and recent projects.

## Technology Stack 🛠️

Dependencies defined in package.json:

* [React](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Emailjs](https://www.emailjs.com/)
* [React-player](https://www.npmjs.com/package/react-player)
* [Axios](https://www.npmjs.com/package/axios)
* [Semantic UI](https://semantic-ui.com/)
* [sweetalert2](https://sweetalert2.github.io/)
* [react-scroll-to-top](https://www.npmjs.com/package/react-scroll-to-top)
* [Typist](https://github.com/jstejada/react-typist)
* [Font Awesome](https://fontawesome.com/)
* [Firebase](https://firebase.google.com/)
* [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)

## Structure ⚓

- Navigation bar (optional)
- Body
    - Name | Profession
    - LinkedIn / GitHub
    - Resume | About me
- About Me
    - Display picture
    - About myself
    - Resume button
- Recent Projects (using GitHub API)
- Career
- Education
- My published works
- Contact me
- Footer
    - Footer Note
    - Copyrights - open source
    - Acknowledgements

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository,
edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star ⭐ if you like the project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also
own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13)
   in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain,
   refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io,
   refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.
    - There you will see "social-image.png".
    - Delete it.
    - Take a screenshot of your version and rename it "social-image.png" and place it there.

Next time if you make changes, repeat from step 8.

## Terms and License

- `LGPL-3.0` license. 2022. Calvin. See [LICENSE](https://github.com/calvin-sg/portfolio/blob/master/LICENSE) for more information.

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm install`

To install the dependencies package.

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.