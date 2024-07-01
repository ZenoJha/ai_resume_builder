# Automated Resume Builder with Gemini AI

This project automates the resume-building process using Gemini AI. The application is built with ReactJS for the frontend and Strapi as the backend. It leverages Gemini AI to analyze user inputs and generate professional resumes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Automated Resume Generation**: Uses Gemini AI to create professional resumes.
- **User-Friendly Interface**: Built with ReactJS for a smooth user experience.
- **Backend Management**: Utilizes Strapi for managing user data and resume templates.
- **Customizable Templates**: Provides multiple resume templates for users to choose from.
- **Real-time Preview**: Allows users to preview their resume in real-time.

## Installation

### Prerequisites

- Node.js
- npm or yarn
- Strapi CLI
- Git

### Backend Setup (Strapi)

1. Clone the repository:
    ```bash
    git clone https://github.com/ZenoJha/ai_resume_builder/.git
    cd automated-resume-builder
    ```

2. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the Strapi server:
    ```bash
    npm run develop
    # or
    yarn develop
    ```

### Frontend Setup (ReactJS)

1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the React development server:
    ```bash
    npm run dev
    # or
    yarn run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Navigate to `http://localhost:1337/admin` to access the Strapi admin panel.
3. Create an account or log in to start using the automated resume builder.
4. Follow the prompts to input your details and generate a resume.

## Technologies

- **Frontend**: ReactJS
- **Backend**: Strapi
- **AI Integration**: Gemini AI
- **Styling**: Tailwind CSS 
- **Database**: MySQL (default for Strapi, can be changed)
- **Deployment**: Vercel

## Contributing

We welcome contributions to enhance the features and improve the usability of this project. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
