import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa 'Routes' además de 'Route'
import Home from "../Containers/Home";
import Login from "../Containers/Login";
import Register from "../Containers/Register";
import NotFound from "../Containers/NotFound";
import Layout from "../Containers/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} /> /**Ruta comodin, captura
          todas las rutas que no coincidan con las anteriores */
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
 