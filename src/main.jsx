import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import appStore from "./utils/appStore.jsx";
import Browse from './components/Browse.jsx'
import Error from './components/Error.jsx'
import { Provider } from "react-redux";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, //Parent layout
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
       {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
