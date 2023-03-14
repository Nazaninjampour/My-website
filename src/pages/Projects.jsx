import Portfolio from "./Portfolio.jpg"; // import the image file

export default function Projects() { // define the component
  return (
    <div className='containerproject'> {/* main container */}
      <h2>Projects</h2>
      <h3>Web Designer - KOA Co. Tehran, Iran 05/2018 - 06/2019</h3> {/* job position */}
      <ul>
        <li>Completed reports on the progress of the assigned projects and presented results to managers, supervisors, and clients.</li>
        <li>Developed new website design templates, created storyboards and visual mockups, and produced professional visual presentations.</li>
      </ul>
      <h3>Graphic Designer - KOA Co. Tehran, Iran 06/2015 - 05/2018</h3> {/* job position */}
      <ul>
        <li>Designed new products and advertisements and communicated with clients to ensure that their goals and requirements were fully met.</li>
        <li>Worked closely with various Marketing and Technical teams, trained and coordinated multiple Graphic Design Interns, and worked on the improvement of the whole design process.</li>
      </ul>
    
      <div><img class="image" src={Portfolio} alt="Portfolio" /></div> {/* display the image */}
    </div>
  );
}

