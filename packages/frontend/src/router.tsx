import { createBrowserRouter } from "react-router-dom";
import { Home } from "./features/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);