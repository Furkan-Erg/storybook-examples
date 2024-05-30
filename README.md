# Next.js Project with Storybook

## Overview

Welcome to my Next.js project integrated with Storybook.js. This project is part of my journey to master front-end development by learning how to use Storybook.js for building and documenting UI components. Here, I have created and documented a Select component to showcase its functionality and usage.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Start Storybook:

   ```bash
   yarn storybook
   # or
   npm run storybook
   ```

## Project Structure

```bash
STORYBOOK-EXAMPLES/
├── components/
│   └── Select/
│       ├── Select.tsx
│       ├── Select.stories.ts
│       └── select.css
├── pages/
│   └── index.js
├── .storybook/
│   ├── main.js
│   ├── preview.js
├── public/
├── styles/
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

## Storybook

Storybook is a development environment for UI components. It allows you to develop components in isolation and document them interactively. This project uses Storybook to document the Select component.

To view the stories:

1. Run Storybook using `yarn storybook` or `npm run storybook`.
2. Open [http://localhost:6006](http://localhost:6006) in your browser.

## Select Component

The Select component is a reusable dropdown component. It is documented with various stories to showcase different states and configurations.

## Intent

The primary intent behind this project is to enhance my skills in:

- Integrating Storybook.js with Next.js.
- Building and documenting reusable UI components.
- Improving my understanding of component-driven development.

By sharing this project, I aim to contribute to the community and help others who are on a similar learning path.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.
