// Importing React and required components from react-router-dom
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// Importing page components and layout component
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './components/Layout';

// Exporting App function as default
export default function App() {
  return (
    
    // Wrapping the application inside a div
    <div>
  
  {/* Creating routes using react-router-dom */}
  <Routes>
    
    {/* Defining a base route for the application */}
    
    <Route path="/" element={<Layout />}>
      
      {/* Defining sub-routes */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="*" element={<Contact />} />
    </Route>
  </Routes>
</div>
  );
}


