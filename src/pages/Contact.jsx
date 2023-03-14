import { Link } from "react-router-dom"; // import the Link component from react-router-dom package

export default function Contact() { // define functional component Contact
    return (
        <div className='containercontact'>
            <h2>Contact info</h2>
            <p>Nazanin Jampour</p>
            <p>njampour@myseneca.ca</p>
            <p><a href="https://www.linkedin.com/in/nazanin-jampour-01a284105/">linkedin.com/in/nazanin-jampour-01a284105</a></p>

            {/* create a link to the home page */}
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}