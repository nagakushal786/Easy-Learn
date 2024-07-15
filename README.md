# Easy Learn - Your personalized learning App

## Project Summary
"Easy Learn" is a comprehensive E-learning platform designed to teach various coding technologies. Developed entirely using ReactJS with robust error handling, this personalized platform offers structured, journey-wise modules dedicated to each topic. Additionally, it includes a feedback page where users can share their thoughts on their learning experience.

## Table of Contents
- [Project Summary](#project-summary)
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [License](#license)

## Features
- Fully developed using ReactJS
- Error handling integrated
- Journey-wise learning modules
- Dedicated modules for each topic
- Feedback page for user reviews

## File Structure
- src
  - components
    - card
      - index.jsx
      - style.module.css
    - error-toast
      - ErrorToast.jsx
      - ErrorToast.module.css
    - loader
      - Loader.jsx
      - Loader.module.css
    - nav
      - Nav.jsx
      - Nav.module.css
  - context
    - Theme.context.js
  - data
    - courses.json
  - pages
    - app
      - chapter
        - Chapter.jsx
        - Chapter.module.css
      - courses
        - Courses.jsx
        - Courses.module.css
      - details
        - Details.jsx
        - Details.module.css
      - feedback
        - FeedBack.jsx
        - FeedBack.module.css
      - hero
        - Hero.jsx
        - Hero.module.css
      - learn
        - Learn.jsx
        - Learn.module.css
    - misc
      - Page404
        - Page404.jsx
        - Page404.module.jsx
App.js
index.css
index.js
    

## Installation
To set up the "Easy Learn" application on your local machine, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/easy-learn.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd easy-learn
    ```

3. **Install the dependencies:**
    ```sh
    npm install
    ```

## Running the Application
Once the dependencies are installed, you can run the application using the following command:

```sh
npm start
```

This will start the development server, and you can view the application in your browser at http://localhost:3000.

## License

Feel free to adjust the file paths, repository URL, and other specifics according to your actual project setup. This structure gives users a clear overview of the project and instructions on how to get it up and running.