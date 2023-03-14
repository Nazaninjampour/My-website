

  // Importing Outlet and Link components from react-router-dom
  import { Outlet, Link } from "react-router-dom";
// Defining Layout component
  export default function Layout() {
    return (
      // Wrapping the layout inside a div with a class of "nnn" and Creating navigation bar and also Creating links for navigation
      <div className="nnn">
      
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
   {/* Rendering the child component within the Outlet component */}
        <Outlet />
      </div>
    );
  }
  