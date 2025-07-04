# React + Redux + Vite Starter

A modern, scalable React application template using Redux Toolkit for state management and Vite for fast development and builds.

---

## Open in StackBlitz

 [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/aungNyeinChan93/react_redux-toolkit_04)

## ✨ Features

- **React 19** with functional components and hooks
- **Redux Toolkit** for efficient, scalable state management
- **Vite** for lightning-fast development, HMR, and optimized builds
- **React Router** for client-side routing
- **Feature-based folder structure** for maintainability and scalability
- **Async data fetching** with Redux Thunks (e.g., GitHub users, cats, photos)
- **Reusable, modular components** and layouts
- **Example tests** for Redux logic
- **ESLint** for code quality and consistency
- **Tailwind CSS** (if used) for rapid UI development

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd redux_01
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🗂️ Project Structure

```
src/
  App.jsx                # Main app component
  main.jsx               # Entry point, React root, Redux Provider, Router
  store.js               # Redux store configuration
  router.js              # React Router configuration
  components/            # Shared and other UI components
    share/
    other/
  feature/               # Feature-based Redux slices and components
    cats/
      catsSlice.js
      components/
    dogs/
      dogsSlice.js
      components/
    githubUsers/
      usersSlice.js
      components/
    photo/
      photoSlice.js
      components/
    posts/
      postsSlice.js
      components/
    product/
      productSlice.js
    sugar/
      sugarSlice.js
    cafe/
      cafeSlice.js
    counter/
      counterSlice.js
    user/
      userSlice.js
  hooks/                 # Custom React hooks
  layouts/               # Layout components (e.g., MasterLayout)
  pages/                 # Page-level components for routes
  tests/                 # Example test files
public/                  # Static assets
```

---

## 🧩 Key Concepts

- **Redux Slices:** Each feature (e.g., cats, dogs, posts) has its own slice for state and reducers.
- **Async Thunks:** Used for API calls (e.g., fetching cats, GitHub users, photos).
- **Component Organization:** Components are grouped by feature for better maintainability.
- **Routing:** All main pages are defined in `router.js` and rendered via `RouterProvider`.
- **Testing:** Example test files are provided in `src/tests/`.

---

## 🛠️ Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

## 📦 Dependencies

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/)
- [Axios](https://axios-http.com/) (for API calls)
- [Tailwind CSS](https://tailwindcss.com/) (if used)

---

## 📝 Notes

- The project demonstrates best practices for scalable React + Redux apps.
- Easily extendable: add new features by creating a new folder in `feature/` and updating `store.js`.
- Example API fetching for cats, GitHub users, and photos.
- ESLint is included for code quality.
- For production, consider adding TypeScript and more robust testing.

---

## 🤝 Contributing

Feel free to fork, open issues, or submit pull requests to improve this template!

---

## 📄 License

This project is open source and available under the