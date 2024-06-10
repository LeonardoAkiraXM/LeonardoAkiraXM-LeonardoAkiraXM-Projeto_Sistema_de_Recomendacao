import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: '100vh', background: 'none', color: 'white' }}><h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
    <p style={{ fontSize: "18px", marginBottom: "30px" }}>
      This project was generated By{" "}
      <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
        Dhiwise
      </a>
      Quickly use below links to navigate through all pages.
    </p>
    <ul style={{ listStyle: "none", padding: "0" }}>
      <li style={{ marginBottom: "10px" }}>
        <Link href="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Login
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link href="/homepage" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Homepage
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link href="/comunidade" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Comunidade
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link href="/cursos" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Cursos
        </Link><li style={{ marginBottom: "10px" }}>
  <Link href="/cadastro" style={{ color: "#87CEFA", textDecoration: "none" }}>
    Cadastro
  </Link>
</li>
<ul>
<div>
);
};

export default Home;
