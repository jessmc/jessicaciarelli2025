import './App-old.scss';
import React, { useState } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="App">
      <div className="menu-button">
        <button onClick={toggleVisibility}>
          <img src="menu.png" alt="Opens the menu"></img>
          </button>
      </div>

      <img alt="sticker creativity" className="sticker-1" src="/creativity.png"></img>
      
      
        { isVisible && 
        <div className="menu">
          <h5>Jump to:</h5>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={toggleVisibility}>
            <img src="close.png" alt="Closes the menu"></img>
          </button>
        </div>
         }
      
      <header className="App-header">
          <div className="header-left">
            <h1>HI! 👋 I'm Jessica</h1>
          </div>
          <div className="header-right">
            <div className="headshot"><img alt="Jessica Headshot" src="/jess_train.png"></img></div>
          </div>
      </header>
      <div>
     
      
      <img alt="sticker idea" className="sticker-2" src="/idea.png"></img>
      <img alt="sticker coding" className="sticker-3" src="/coding.png"></img>
      <img alt="sticker coding" className="sticker-4" src="/computer-engineer.png"></img>

      <p className="about-me" id="about-me">Thanks for visiting! I am a web developer with over 6 years of experience in PHP development, including WordPress themes and plugins. 
      I love working with JavaScript and CSS to create beautiful, responsive websites. In my free time I enjoy learning to play piano, studying Mandarin Chinese, and other programming languages such as Ruby / Ruby on Rails and Java.  </p>

      <div className="skills" id="skills">
        <h3>Some Tools I Use</h3>
          <ul>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>JQuery</li>
            <li>CSS / SCSS</li>
            <li>HTML</li>
            <li>MySQL</li>
            <li>GIT</li>
          </ul>
      </div>
      </div>
      <footer>
        <h3 id="contact">Contact Me</h3>

        <div className="socials">
        
          <a href="mailto:jciarelli@gmail.com"><i className="fa fa-envelope-open-o"></i> Email Me</a>
          <a href="https://github.com/jessmc"> <i className="fa fa-github"></i> Github</a>
          <a href="https://linkedin.com/in/jciarelli"> <i className="fa fa-linkedin"></i> LinkedIn</a>
          <a href="https://codepen.io/jessmc"> <i className="fa fa-codepen"></i>  Codepen</a>
        </div>
        <p>All stickers featured on this site were lovingly borrowed from: <br></br> 
        <a href="https://www.flaticon.com/free-stickers/creativity" title="creativity stickers">Creativity stickers created by Stickers - Flaticon</a> <br></br> 
        <a href="https://www.flaticon.com/free-icons/open-menu" title="menu icons">Menu icons created by twentyfour - Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
