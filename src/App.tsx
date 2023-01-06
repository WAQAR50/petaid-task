import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Grid from "@mui/material/Grid";
import LoginForm from "./components/LoginForm";
import Container from "@mui/material/Container";
import { Link, Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main-body">
        <TopBar></TopBar>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid className="sidebar-wrong-grid" item md={4}>
              <SideBar></SideBar>
            </Grid>
            <Grid className="reg-form" item md={8}>
              <Routes>
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/" element={<LoginForm />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
