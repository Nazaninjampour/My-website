import React from 'react';


import Logo from "./logo.png";

export default function Home() {
  return (
    <div className='containerHome'>
      <img class="Logo" src={Logo} alt="Logo" /> {/* Display the logo */}
      <h2>Welcome to My Website</h2>
      <p>Hi there! My name is Nazanin Jmapour, and I'm a virsual designer. I'm passionate about UX/UI and I've created this website to share my work and connect with others who share my interests.</p>
      <p>On this website, you'll find information about My project, as well as examples of my previous work and testimonials from satisfied clients. Whether you're a potential customer, a fellow UX/UI enthusiast, or just curious to learn more about what I do, I hope you find something here that interests you.</p>
      <p>Thanks for stopping by!</p>
    </div>
  );
}
