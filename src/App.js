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
                    <h2 className="dongle-regular">web developer</h2>
                </div>

                <div className="menu">
                    <Link to="section1" smooth={true} duration={500}>about</Link>
                    <Link to="section2" smooth={true} duration={500}>skills</Link>
                    <Link to="section3" smooth={true} duration={500}>contact</Link>
                </div>

                <div className="box">

                    <Element name="section1">

                        <p className="dongle-regular">I am a web developer with over 6 years of experience in PHP development, including WordPress themes and plugins. I love working with JavaScript and CSS to create beautiful, responsive websites. In my previous role as Director of Production I oversaw and developed both the front end and backend infrastructure for Fortune 500 companies, national non-profit organizations, elected officials, and leading advocacy and trade associations.
                        </p>
                        <p className="dongle-regular">In my free time I enjoy learning piano, studying Mandarin, and working on new projects in Java or Ruby/Ruby on Rails.</p>

                    </Element>

                    <Element name="section2">

                        <h4 className="open-sans">Techncial Skills</h4>
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

                    </Element>

                    <Element name="section3">

                        <h4 className="open-sans">Contact Me</h4>
                        <a href="mailto:jciarelli@gmail.com"><i className="fa fa-envelope-open-o"></i> Email Me</a>
                        <a href="https://github.com/jessmc"> <i className="fa fa-github"></i> Github</a>
                        <a href="https://linkedin.com/in/jciarelli"> <i className="fa fa-linkedin"></i> LinkedIn</a>
                        <a href="https://codepen.io/jessmc"> <i className="fa fa-codepen"></i>  Codepen</a>

                    </Element>
                </div>

            </div>



        </div>
    )
}

export default App;