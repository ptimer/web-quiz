# Web Quiz

This application is a web-based quiz where users can answer questions and get their results.

## ✨ Features

- Take a quiz with single or multiple choice questions.
- Display correct and incorrect answers.
- Score calculation and display of the final result.
- Responsive design for a comfortable experience on different devices.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Mock Server:** [json-server](https://github.com/typicode/json-server)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/ptimer/web-quiz.git
    cd web-quiz
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

To run the application, you need to start two processes: the development server and the mock server.

1.  **Start the mock server**

    Open a terminal and run the command:

    ```bash
    npm run server
    ```

    The server will be available at `http://localhost:3000`.

    > **Note:** If port 3000 is occupied, the server will not start as it does not automatically find a free port. In this case, change the value of the `--port` flag in the `server` command in the `package.json` file.

2.  **Start the development server**

    Open a second terminal and run the command:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port specified in the console).

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run server`: Starts the mock server with data from `mock-server/db.json` on port 3000.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run lint:fix`: Fixes ESLint errors automatically.
- `npm run preview`: Previews the production build.
