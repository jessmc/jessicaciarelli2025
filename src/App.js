import './App.scss';
import { useState } from "react";
import { Link, Element } from 'react-scroll';


function App() {

    // hide / show each section with menu items
    const [activeItem, setActiveItem] = useState(1);

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    };

    return (
        <div className="App">
            <div className="content">
                <div className="header">
                    <h1 className="homemade-apple-regular">jessica ciarelli</h1>
                    <h2 className="dongle-regular tiny-header">web developer</h2>
                </div>

                <nav>
                    <ul>
                        <li><Link to="section1" smooth={true} duration={500}>about</Link></li>
                        <li><Link to="section2" smooth={true} duration={500}>skills</Link></li>
                        <li><Link to="section3" smooth={true} duration={500}>contact</Link></li>
                    </ul> 
                </nav>

                <img class="divider" src="divider-1.svg"></img>

                <div className="box">

                    <Element name="section1">

                        <h4>about me</h4>

                        <p className="dongle-regular">I am a web developer with over 6 years of experience in PHP development, including WordPress themes and plugins. I love working with JavaScript and CSS to create beautiful, responsive websites. In my previous role as Director of Production I oversaw and developed both the front end and backend infrastructure for Fortune 500 companies, national non-profit organizations, elected officials, and leading advocacy and trade associations.
                        </p>
                        <p className="dongle-regular">In my free time I enjoy learning piano, studying Mandarin, and working on new projects in Java or Ruby/Ruby on Rails.</p>

                    </Element>

                    <img class="divider" src="divider-2.svg"></img>

                    <Element name="section2" className="skills">

                        <h4 className="open-sans">technical skills</h4>
                        <ul>
                            <li><img src="logos/php-brands-solid.svg" alt="php logo"></img> PHP</li>
                            <li><img src="logos/js-brands-solid.svg" alt="javascript logo"></img>JavaScript</li>
                            <li><img src="logos/react-brands-solid.svg" alt="react logo"></img>React</li>
                            <li><img src="logos/vuejs-brands-solid.svg" alt="vue logo"></img>Vue.js</li>
                            <li><img src="logos/jquery-logo.svg" alt="jquery logo"></img>JQuery</li>
                            <li><img src="logos/css3-alt-brands-solid.svg" alt="css logo"></img>CSS / SCSS</li>
                            <li><img src="logos/html5-brands-solid.svg" alt="html logo"></img>HTML</li>
                            <li><img src="logos/database-solid.svg" alt="database logo"></img>MySQL</li>
                            <li><img src="logos/github-brands-solid.svg" alt="github logo"></img>GIT</li>
                        </ul>

                        <p className="dongle-regular">I have also worked with helpful tools and APIs such as Algolia, Salesforce, Google Analytics & Tag Manager, Twilio, Mapbox, 
                            Mailgun and many more.
                        </p>

                    </Element>

                    <img class="divider" src="divider-3.svg"></img>

                    <Element name="section3" className="contact">

                        <h4 className="open-sans">contact me</h4>
                        <ul>
                            <li><a href="mailto:jciarelli@gmail.com"><i className="fa fa-envelope-open-o"></i> Email Me</a></li>
                            <li><a href="https://github.com/jessmc"> <i className="fa fa-github"></i> Github</a></li>
                            <li><a href="https://linkedin.com/in/jciarelli"> <i className="fa fa-linkedin"></i> LinkedIn</a></li>
                            <li><a href="https://codepen.io/jessmc"> <i className="fa fa-codepen"></i>  Codepen</a></li>
                        </ul>
                    </Element>
                </div>

            </div>



        </div>
    )
}

export default App;