import React from 'react'
import { RouterProvider } from "react-router-dom";

import rootRoutes from "./routes";

const App:React.FC = () => {
  return (
  <>
  <RouterProvider router={rootRoutes} />
  </>  
  )
}

export default App