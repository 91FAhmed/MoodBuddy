import React from "react";
import Main from "../components/Main";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
export default function Page() {
  const isAuth = false;
  let children = <Login />;

  if (isAuth) {
    children = <Dashboard />;
  }

  return <Main>{children}</Main>;
}
