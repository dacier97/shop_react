import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "../containers/Layout";
import AppContext from "../context/appContext";
import useInitialState from "../Hooks/useInitialState";
import Checkout from "../pages/Checkout";
import SendEmail from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import PasswordRecovery from "../pages/PasswordRecovery";
import "../styles/global.css";

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/recovery-password"
          element={
            <Layout>
              <PasswordRecovery />
            </Layout>
          }
        />
         <Route
          path="/send-email"
          element={
            <Layout>
              <SendEmail/>
            </Layout>
          }
        />
         <Route
          path="/new-password"
          element={
            <Layout>
              <NewPassword />
            </Layout>
          }
        />
         <Route
          path="/account"
          element={
            <Layout>
              < MyAccount/>
            </Layout>
          }
        />
         <Route
          path="/signup"
          element={
            <Layout>
              <CreateAccount />
            </Layout>
          }
        />
         <Route
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />
         <Route
          path="/orders"
          element={
            <Layout>
              <Orders/>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
