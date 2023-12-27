import { createHashRouter, Navigate } from "react-router-dom"
import { App } from "../App"
import { Error, Profile, Chat, Dialogs, Login, Users } from "../../pages"
import { ProtectedRoute } from "./ProtectedRoute"

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/profile"} />,
      },
      {
        path: "/profile/:userId?",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dialogs/*",
        element: (
          <ProtectedRoute>
            <Dialogs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
])
