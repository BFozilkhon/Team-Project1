import React from "react";
import { Route, Routes } from "react-router-dom";
import { data } from "../utils/navbar";

export const Root = () => {
  return (
    <Routes>
      {data.map(({ id, path, component }) => {
        return <Route key={id} path={path} element={component} />;
      })}
    </Routes>
  );
};

export default Root;
