import './App.css';

function App() {
  return (
    <div>
      <header>
  <nav id="navbar">
    <ul>
      <li><a href="#mimic">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
      </header>
      
   <section id="mimic" class="welcome-section">
    <h1>Hey, I am Cristina</h1>
    <p>a web developer</p>
   </section>
      
   <section id="projects">
    <h2 id="work">These are some of my projects</h2>
    <div id="project-img">
      <a class="project-a" href="https://codepen.io/cristina_jura/full/bGMoRZB" target="blank">
        <img class="project-image" src="https://live.staticflickr.com/65535/52406225709_b6e3e30d32.jpg" alt="project" />
        <p class="project-title"><span class="code">&lt;</span> 25 + 5 Clock <span class="code">&#47;&gt;</span> </p>
      </a>
      <a class="project-a" href="https://codepen.io/cristina_jura/full/RwMqmKb" target="blank">
        <img class="project-image" src="https://live.staticflickr.com/65535/52375153239_578fa657ba.jpg" alt="project" />
        <p class="project-title"><span class="code">&lt;</span> JavaScript Calculator <span class="code">&#47;&gt;</span> </p>
      </a>
      <a class="project-a" href="https://codepen.io/cristina_jura/full/zYWEjWp" target="blank">
        <img class="project-image" src="https://live.staticflickr.com/65535/52375069493_a303834c74.jpg" alt="project" />
        <p class="project-title"><span class="code">&lt;</span> Drum Machine <span class="code">&#47;&gt;</span> </p>
      </a>
      <a class="project-a" href="https://codepen.io/cristina_jura/full/qBxoZLR" target="blank">
        <img class="project-image" src="https://live.staticflickr.com/65535/52375068408_ee1869d1be.jpg" alt="project" />
        <p class="project-title"><span class="code">&lt;</span> Random Quote Machine <span class="code">&#47;&gt;</span> </p>
      </a>
      <a class="project-a" href="https://codepen.io/cristina_jura/full/oNWyomz" target="blank">
        <img class="project-image" src="https://live.staticflickr.com/65535/51406200909_e9f299cb24_b.jpg" alt="project" />
        <p class="project-title"><span class="code">&lt;</span> Survey Form <span class="code">&#47;&gt;</span></p>
      </a>
      <a class="project-a" href="https://codepen.io/cristina_jura/full/YzVJdwX" target="blank">
        <img class="project-image" src="https://live.staticflickr.com/65535/51405362855_cafc52f3d0_b.jpg" alt="project" />
        <p class="project-title"><span class="code">&lt;</span> Product Landing Page <span class="code">&#47;&gt;</span></p>
      </a>
    </div>
    <br/>
    <a class="show-but" href="https://codepen.io/your-work" target="blank">Show All <i class="fas fa-chevron-right"></i></a>
  </section>

<section id="bottom-page">
    <h1 id="contact">Let's work together...</h1>
    <p>How do you take your coffee?</p>
    <div id="red-line"></div>
    <div class="bottom-div">
      <a class="bottom-a" href="https://www.facebook.com/profile.php?id=100000780556603" target="blank"><i class="fab fa-facebook-square"></i> Facebook</a>
      <a class="bottom-a" href="https://github.com/cristinajura" target="blank"><i class="fab fa-github"></i> GitHub</a>
      <a class="bottom-a" href="https://twitter.com/JuraCristina" target="blank"><i class="fab fa-twitter"></i> Twitter</a>
      <a class="bottom-a" href="mailto:cristina.jura16@gmail.com" target="blank"><i class="fas fa-at"></i> Send a mail</a>
      <a class="bottom-a" href="tel:0040-734-407-892" target="blank"><i class="fas fa-mobile-alt"></i> Call me</a>
    </div>
  </section>
    </div>
  );
}

export default App;
