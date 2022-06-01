import './App.css';
import Img1 from './assets/images/vadooanduuki.jpg';
import Img2 from './assets/images/uuki.png';
import Img3 from './assets/images/Screenshot (106).png';
import Img4 from './assets/images/Screenshot (101).png';
import Img5 from './assets/images/Screenshot (102).png';
import Img6 from './assets/images/Screenshot (103).png';
import Img7 from './assets/images/Screenshot (104).png';
import Img8 from './assets/images/Screenshot (105).png';
import email from './assets/images/email.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>👋🏻 Hello, I'm Vishwash and I'm Frontend Developer!</h1>
        <h1>I am passionate about designing and developing UI and websites using latest technologies, here are some sample projects added which I have developed on my own interest.</h1>
      </header>
      <center>
      <div className='works'>
      <h1>My Works</h1>
      </div>
      </center>
      <div className='total-content'>
                          <div className='Content'>
                                    <div className='img'>
                                        <img className="img1" src={Img1}/>
                                        <h1>Vadoo and UUKI</h1>
                                        <h2>UX designer Intern May 2022</h2>
                                    </div>
                                    <div  className='img'>
                                        <img className="img1" src={Img2}/>
                                        <h1>UUKI Community plaform</h1>
                                        <h2>Project Mobile app and Website May 2022</h2>
                                    </div>
                            </div>
                            <div className='Content'>
                                    <div  className='img'>
                                    <a href="https://vishwashcv.github.io/sample_websites/Nothing/index.html">
                                        <img className="img1" src={Img3}/>
                                        <h1>WEBSITE</h1>
                                        <h2>Its just a website for design purpose.</h2>
                                        </a>
                                    </div>
                                    <div  className='img'>
                                    <a href="https://vishwashcv.github.io/sample_websites/index.html">
                                    <img className="img1" src={Img4}/>
                                    <h1>TIME TABLE</h1>
                                        <h2>This Time Table is build for html layout practice.</h2>
                                        </a>
                                    </div>

                                </div>
                                <div className='Content'>
                                    <div  className='img'>
                                    <a href="https://vishwashcv.github.io/sample_websites/flipkart/flipkart site.html">
                                        <img className="img1" src={Img5}/>
                                        <h1>FLIPKART CLONE</h1>
                                        <h2>This website is build for flipkart clone UI.</h2>
                                        </a>
                                    </div>
                                    <div  className='img'>
                                    <a href="https://vishwashcv.github.io/sample_websites/web2/index.html">
                                    <img className="img1" src={Img6}/>
                                    <h1>FOOD ORDER</h1>
                                        <h2>This website is build for to order foods (UI).</h2>
                                        </a>
                                    </div>
                                </div>
                                <div className='Content'>
                                    <div  className='img'>
                                    <a href="https://vishwash.000webhostapp.com/">
                                        <img className="img1"  src={Img7}/>
                                        <h1>UNIVERSITY</h1>
                                        <h2>This University Project build for college students, and college management.</h2>
                                        </a>
                                    </div>
                                    <div  className='img'>
                                    <a href="https://vishwascv.000webhostapp.com/">
                                    <img className="img1" src={Img8}/>
                                    
                                    <h1>TICKET BOOKING</h1>
                                        <h2>This Ticket booking Project build for to book the tickets of the movie.</h2>
                                        </a>  
                                    </div>
                                </div>

            </div>
            <center>
            <hr/>
            <div className='footer'>
            <a href="mailto:vishwashclever@gmail.com">
              <img src={email}/>
              </a>
            </div>
            </center>
    </div>
  );
}

export default App;
