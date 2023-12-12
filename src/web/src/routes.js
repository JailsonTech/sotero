import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  Library,
  SignUp,
  CreateGame,
  Login,
  Game,
  EditGame,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/create-game",
    element: <CreateGame />,
  },
  {
    path: "/edit-game/:gameId",
    element: <EditGame />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/game/:gameId",
    element: <Game />,
  },
]);
