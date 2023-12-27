import ReactDOM from "react-dom/client"
import React from "react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { RouterProvider } from "react-router-dom"
import { router } from "./app/routes/router"
import { GlobalStyled } from "./styled/GlobalStyled"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <GlobalStyled />
    <RouterProvider router={router} />
  </Provider>,
)
