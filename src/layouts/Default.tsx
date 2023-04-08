import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "./Default.css"
import "../global.css"

export function Default() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {<Outlet />}
      </div>
    </div>
  );
}