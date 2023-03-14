// Importing the photo from local file path
import photo from "./photo.jpg";
// Defining the About component
export default function About() {
  return (
    // Creating a div container and Adding header image
    <div className='container'>
       <img class="headerimage" src={photo} alt="Logo" />
      <h2>About</h2>
      <p>
        When I have the opportunity to work on any form of art, I delight in integrating challenges and exploring new experiences and feel liberated. I love the idea of creating something new. I live passionately and embrace my emotions rather than hold them back. I have an artistic point of view on my life and live in the present moment. As an Interactive designer, I am creative, accurate, and responsible. In addition, I’ve learned that time management and scheduling are essential to be successful in my career. I always listen to my audience to understand their needs and try to coordinate myself with their rhythm.
      </p>
      <h2>Education</h2>
      <ul>
        <li>Interactive Media Design - Seneca College</li>
        <ul>
          <li>06/2021 - 06/2023</li>
          <li>GPA: 3.98 (Top 5% of the Program)</li>
          <li>3-D Design</li>
          <li>Front End Web Development</li>
          <li>Packaging</li>
          <li>Graphic Design</li>
          <li>Digital Marketing Strategies and Motion Graphics</li>
          <li>UI UX Design</li>
        </ul>
        <li>Bachelor of Fine Arts in General Painting - Azad Art University</li>
        <ul>
          <li>Drawing</li>
          <li>Painting Techniques</li>
          <li>Color Theory</li>
          <li>Art History</li>
          <li>Composition</li>
          <li>Design principles</li>
        </ul>
        <li>Diploma of Graphic Design - Azadegan School of Fine Arts</li>
        <ul>
          <li>Design</li>
          <li>Typography</li>
          <li>Print and experiential design project</li>
          <li>Layout design</li>
          <li>Branding and marketing concepts</li>
          <li>Motion graphics and video editing</li>
        </ul>
      </ul>
    </div>
  );
}
