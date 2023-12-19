# Anime Website **TaiHen**

## **Overview**

This is a movie website built using **React, Vite, Redux Toolkit, Redux Saga, React Hot Toast, React Icons, React Slick and Swiper**. The project aims to provide a user-friendly interface for users to explore and discover information about movies.

This is a React application built with Vite and TypeScript, aiming to provide a platform for movie enthusiasts to explore and discover their favorite shows. The project leverages **Redux** for state management, **Redux-Saga** for handling asynchronous actions, **SCSS** for styling, **Jest** for testing, **React Hot Toast** for notifications, **React Icons** for icon, **React Slick** and **Swiper** for slider.

Styling is achieved using **SCSS** to enhance maintainability and provide a more structured approach to CSS. The styles are modularized and organized in the respective component folders.

The application uses **Redux** for state management. The state logic is divided into actions, reducers, and sagas to handle asynchronous operations. The Redux store is configured in **`redux/store.ts`**.

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Testing](#testing) 
- [License](#license) 

## **Installation**

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

```bash
# Clone the repository
git clone "dien ten git"

# Change directory to the project folder
cd movie_webapp

# Install dependencies
npm install

```

## **Usage**

```bash
# Start the development server
npm run dev
```
Visit [Movie Website](http://localhost:5173) in your browser to see the application.

## **Features**
- **Browse Movies:** Explore the world of cinema with thousands of movies of diverse genres.
- **Search Functionality:** Easily find specific movies titles.
- **Detailed Information:** View comprehensive details about each movies.
- **Movies By Genre:**  Choose the favorite movie by genre: action, adventure, animation, comedy, drama, fantasy
- **Movies By Trend:** Update popular movies recently.
- **Quality Movie:** Rate movies based on imdb.
- **Upcoming Movie*:** Updated list of upcoming movies
- **Cart:** Display and checkout the list of movies that have been added to the cart through **Detailed Information:**.
- **State Management:** Redux and Redux-Saga for efficient state management.
- **Styling:** SCSS for a modular and maintainable styling approach.
- **Testing:** Jest for unit testing to ensure code reliability.

## **Folder Structure**
The project structure is organized as follows:

```bash
project-root/
|-- src/
|   |-- api/
|   |-- components/
|   |   |-- button/
|   |   |-- footer/
|   |   |-- header/
|   |   |-- heroSlide/
|   |   |-- movie-grid/
|   |   |-- movie-list/
|   |   |-- movie-sidebar/
|   |   |-- pages/
|   |   |   |-- cart/
|   |   |   |-- category/
|   |   |   |-- genres/
|   |   |   |-- home/
|   |   |   |-- movie-detail/
|   |   |   |-- watchMovie/
|   |   |-- pagination/
|   |   |-- poster-movie/
|   |   |-- search/
|   |   |-- skeleton/
|   |   |-- spinner/
|   |   |-- tablet-nav-sidebar/
|   |   |-- trailer/
|   |-- custom-hook/
|   |-- sagas/
|   |-- scss/
|   |-- slices/
|   |-- store/
|   |-- title/
|   |-- __test__/
|   |-- App.tsx
|   |-- main.tsx
|-- public/
|-- .gitignore
|-- package.json
|-- tsconfig.json
|-- README.md
```

- `src`: Contains the source code of the application.
  - `components`: include reusable UI components and individual pages or views.
  - `store`: Redux-related files (actions, reducers, sagas).
  - `__test__`: Unit tests using Jest.
- `public`: Static assets.

## **Testing**
Unit tests are written using Jest. You can run the tests with the following command:
```bash
npm run test
```
## **License**
This project is licensed under the [ThinhDN8]().