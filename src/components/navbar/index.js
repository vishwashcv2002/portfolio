import './index.css';
import pdf from '../../assets/vishwash.pdf';

function Navbar() {
    return (
      <div className="Navbar">
        <header className="Navbar-header">
          <h1>vishwashcv</h1>
          <div className="Navbar-side">
            <a href='#' className='active'>Works</a>
            <a href={pdf}>Resume</a>
            <a href='https://www.linkedin.com/in/vishwash-cv-59a698233'>LinkedIn</a>
            <a href='https://www.behance.net/vishwashcv'>Behance</a>
          </div>
        </header>
      </div>
    );
  }
  
  export default Navbar;
  