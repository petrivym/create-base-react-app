import React from "react"
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode
}

const RootLayout = () => {
  return (
    <div className="root__provider">
      <Outlet/>
    </div>
  )
};

export default RootLayout;
