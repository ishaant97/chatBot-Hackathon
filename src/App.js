import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Authentication from "./components/Authentication";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/auth/signin" element={<Authentication />} />
          <Route exact path="/auth/signup" element={<Authentication />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}
