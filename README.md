# Maneesh Soni - Portfolio Website

A modern and responsive personal portfolio website built using **React, TypeScript, and Vite** to showcase my projects, skills, achievements, and professional experience.

## 🚀 About

This portfolio website serves as a digital representation of my work, highlighting my technical expertise, projects, and accomplishments in software development and technology.

## ✨ Features

- Responsive Design
- Modern UI/UX
- Project Showcase
- Skills & Technologies Section
- Education & Experience
- Contact Information
- Fast Performance with Vite
- Mobile-Friendly Interface

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- HTML5
- CSS3
- JavaScript

## 📂 Project Structure

```text
src/
├── components/
├── assets/
├── pages/
├── styles/
├── App.tsx
└── main.tsx
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd portfolio-website
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 📦 Build for Production

```bash
npm run build
```

## 🎯 Purpose

This portfolio website is designed to:


- Showcase Personal, Academic, and Professional Projects by demonstrating problem-solving abilities, technical expertise, and real-world application of knowledge.
- Highlight Technical Skills and Competencies across software development, artificial intelligence, machine learning, web technologies, databases, and modern development tools.
- Present Professional Achievements and Experiences, including internships, certifications, leadership activities, and notable accomplishments.
- Demonstrate Continuous Learning and Growth by showcasing ongoing projects, technical interests, and contributions to the developer community.
- Establish a Strong Professional Presence that reflects my capabilities, passion for technology, and commitment to building impactful solutions.
- Provide an Accessible Platform for Networking and Collaboration, enabling recruiters, professionals, and fellow developers to connect, communicate, and explore potential opportunities.
- Serve as a Centralized Hub for my resume, project documentation, technical blogs, contact information, and professional profiles.

## 👨‍💻 Author

**Maneesh Soni** - [GitHub Profile](https://github.com/maneeshsoni09)

## 📄 License

This project is open-source and available for personal and educational use.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
