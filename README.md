# React Users Web Application

This project is a Single Page Application (SPA) developed using React, showcasing various React skills such as hooks, lifecycles, state management, Webpack optimization, and web performance.

## How to Run the Project

1. **Clone the repository:**
   ```
   git clone https://github.com/devmaaa/user_project
   cd user_project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run start
   ```

4. **Open the browser:**
   Visit `http://localhost:3000` in your browser to view the application.

## How to Build the Project for Production

1. **Build the project:**
   ```
   npm run build
   ```


2. **Open the browser:**
   Visit `http://localhost:5000` in your browser to view the production build of the application.

## Running Tests

To run the tests for this project, you can use the following script:   

   ```
   npm run start
   ```

## Analyzing Webpack Bundle Size

To analyze the webpack bundle size, you can use the following script:

```
npm run build:analyze
```

This script will build the project with webpack bundle analyzer enabled. After the build process is completed, it will automatically open a new tab in your default browser showing the webpack bundle analyzer report, which provides insights into the size of the generated bundles and their dependencies.

## SPA Features
### Theme Switcher with dark and light mode , with animations
### User List Page

- Displays users with Name, Email, Age.
- Pagination and sorting options available.
- Search users by name.
- Skeleton Animations when navigating between pages.

### User Details Page

- Shows detailed user information: Full Name, Email, Age, Address, Profile Picture..
- Back button for easy navigation.

### Home Page

- Dynamic content fetched from an API (like JSONPlaceholder).
- Users can add, delete, and list items (e.g., tasks, notes)..

## Design Decisions

- **Routes/Pages**: The application consists of three main routes/pages: Home, User List Page, and User Details Page. Each route is implemented as a separate component to maintain code modularity and readability.

- **TypeScript**: The entire application is written in TypeScript to leverage its static typing benefits. Interfaces and types are utilized extensively for ensuring strong typing throughout the application.

- **React Features**: React hooks like `useState`, `useEffect`, and `useMemo` are used effectively throughout the application for state management and side effect handling. React Router is used for navigation between different pages.

- **State Management**: Context API is chosen as the state management tool for its simplicity and suitability for small to medium-sized applications. A theme switcher (light/dark mode) is implemented using Context API.

- **Performance Optimization**: Code-splitting, memoization, and optimization of render-blocking resources are implemented to improve performance. Webpack is customized to optimize the final bundle size.

- **Extras**: Styled-components is used for styling to enable component-level styling and better code maintainability. The application is designed to be responsive, ensuring a consistent user experience across different devices. Error boundaries are implemented for better error handling.
