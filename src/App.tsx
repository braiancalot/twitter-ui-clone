
import "./global.css"
import { RouterProvider } from 'react-router-dom'
import { Sidebar } from "./components/Sidebar/Sidebar"
import { router } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Sidebar />
        <div className="content">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  )
}

export default App
