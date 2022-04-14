import React from "react";
import { Route, Routes } from "react-router-dom";
import { data } from "../utils/navbar";
import Pro from '../context/isopen'
export const Root = () => {
  return (
    <Pro>
      <Routes>
        {data.map(({ id, path, component }) => {
          return <Route key={id} path={path} element={component} />;
        })}
      </Routes>
    </Pro>
  );
};

export default Root;
