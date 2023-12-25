<!-- <template>
  <div>
    <h1 class="portfolio-title">Welcome to My Portfolio</h1>
    
    <div class="intro">
      <p>Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location].</p>
      <p>Feel free to explore my projects, learn more about me, and discover my hobbies.</p>
    </div>

    <div class="navigation-links">
      <router-link to="/" class="router-link">Home</router-link>
      <router-link to="/about" class="router-link">About</router-link>
      <router-link to="/projects" class="router-link">Projects</router-link>
      <router-link to="/hobbies" class="router-link">Hobbies</router-link>
    </div>
  </div>
</template>

<script>
 /* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Add your custom styles here */
.portfolio-title {
  color: #007BFF;
}

.intro {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

.navigation-links {
  margin-top: 20px;
}

.router-link {
  margin-right: 20px;
  text-decoration: none;
  color: #007BFF;
  font-weight: bold;
}

.router-link:hover {
  color: #0056b3;
}
</style> -->
<!-- <template>
  <div class="main-container">
    <div class="container-one">
      <div class="profile">
        <img src="@/assets/wahid.jpg" alt="">
        <div class="profile-info">
          <h3>Wahid!</h3>
          <p>Bioinformatics engineer</p>
        </div>
      </div>
      <div class="social-link">
        <div class="link">
          <a href="">
            <img src="@/assets/github.png" alt="">
            <h2>Github</h2>
          </a>
        </div>
        <div class="link">
          <a href="">
            <img src="@/assets/linkedin.png" alt="">
            <h2>LinkedIN</h2>
          </a>
        </div>
        <div class="link">
          <a href="">
            <img src="@/assets/twitter.png" alt="">
            <h2>Twitter</h2>
          </a>
        </div>
        <div class="link">
          <a href="">
            <img src="@/assets/insta.png" alt="">
            <h2>Instagram</h2>
          </a>
        </div>
      </div>
    </div>
    <div class="container-two">
      <div class="about-me">
        <h1>About me</h1>
        <p>I am a troubleshooting person, low confident low iq person with a disability of not understanding things quickly
          personality having very rare trait of good communication, slow mind working, not socially engaged, not working for others, always think about myself, good thing that I have joined to the gym, looser, disrespectful, not a good communicator@@@@.
        </p>
      </div>
      <div class="technology-section">
        <h1>Technologies Studied</h1>
        <div class="logos">
          <img src="@/assets/metagenomics.png" alt="">
          <img src="@/assets/rust.png" alt="">
          <img src="@/assets/flask.png" alt="">
          <img src="@/assets/javascript.png" alt="">
        </div>
      </div>
      <div class="button-container">
        <div class="project-button">
          <a href="">My Projects</a>
          <a href="">My Resume</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 /* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Your existing styles */
.main-container {
  display: flex;
  flex-direction: row;
  background-color: #e56565;
  border-radius: 25px;
}

.container-one {
  background-color: rgb(215, 250, 219);
  padding: 2.5%;
  width: 20%;
  border-radius: 25px;
}

.profile {
  display: flex;
  align-items: center;
}

.profile img {
  height: 5rem;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-info {
  height: 5rem; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.link a {
  text-decoration: none;
  color: black;
  font-size: 10px;
}

.link img {
  height: 2rem;
}

.container-two {
  background-color: beige;
  margin: 2.5%;
  width: 60%;
}

.about-me {
  text-align: left;
}

.logos {
  height: 0.5rem;
}
.logos img {
  height: 5rem;
  border-radius: 50%;
  margin-right: 10px;
}


.button-container {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.project-button {
  background-color: rgb(120, 85, 217);
  border-radius: 15px;
  padding: 5px;
  margin: 5px;
}

.project-button a {
  text-decoration: none;
  color: black;
}
</style> -->
<template>
  <div class="main-container">
    <div class="container-one">
      <div class="profile">
        <img src="@/assets/wahid.jpg" alt="">
        <div class="profile-info">
          <h3>Wahid!</h3>
          <p>Bioinformatics engineer</p>
        </div>
      </div>
      <div class="social-link">
        <div class="link">
          <a href="https://github.com/Wahid-ul">
            <img src="@/assets/github.png" alt="">
            <h2>Github</h2>
          </a>
        </div>
        <div class="link">
          <a href="https://in.linkedin.com/in/wahid-ul-alam-805774185">
            <img src="@/assets/linkedin.png" alt="">
            <h2>LinkedIN</h2>
          </a>
        </div>
        <div class="link">
          <a href="https://twitter.com/awahidul606">
            <img src="@/assets/twitter.png" alt="">
            <h2>Twitter</h2>
          </a>
        </div>
        <div class="link">
          <a href="https://www.instagram.com/wahid_ull/">
            <img src="@/assets/insta.png" alt="">
            <h2>Instagram</h2>
          </a>
        </div>
      </div>
    </div>
    <div class="container-two">
      <div class="navigation-bar">
        <router-link to="/" class="router-link">Home</router-link>
        <!-- <router-link to="/blogs" class="router-link">Blogs</router-link>
        <router-link to="/projects" class="router-link">Projects</router-link> -->
        <router-link to="/hobbies" class="router-link">Hobbies</router-link>
      </div>
      <div class="about-me">
        <h1>About me</h1>
        <p>Hello! I'm Wahid, a bioinformatics engineer with a passion for coding and solving problems. I hold a master degree on bioinformatics and have above one year experience in bioinformatics Industry. I've had the opportunity to work on projects relevent to the biological field mainly metagenomics world.
        </p>
        <p>I excel in collaborative work environments, where I actively contribute ideas and foster a positive team atmosphere. I am a firm believer in continuous self-improvement, always seeking new opportunities for growth. Beyond the professional realm, I have a passion for photography and enjoy unwinding by watching movies. My curiosity drives me to explore novel perspectives and discover innovative ways to approach challenges.</p>
        
        <p>For me, traveling is not just a pastime; it's a form of medicine for the mind, body, and soul. Stepping into new environments, immersing myself in diverse cultures, and exploring unfamiliar landscapes act as a powerful tonic. </p>
       
      </div>
      <div class="technology-section">
        <h1>Technologies Studied</h1>
        <div class="logos">
          <img src="@/assets/metagenomics.png" alt="">
          <img src="@/assets/rust.png" alt="">
          <img src="@/assets/flask.png" alt="">
          <img src="@/assets/javascript.png" alt="">
        </div>
      </div>
      <div class="button-container">
  <!-- <div class="navigation-links">
    <router-link to="/" class="router-link">Home</router-link>
    <router-link to="/about" class="router-link">About</router-link>
    <router-link to="/projects" class="router-link">Projects</router-link>
    <router-link to="/hobbies" class="router-link">Hobbies</router-link>
  </div> -->
</div>

    </div>
  </div>
</template>

<script>
 /* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Your existing styles */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif;
}

.main-container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: #e56565;
  border-radius: 25px;
}

.container-one {
  background-color: rgb(215, 250, 219);
  padding: 2.5%;
  width: 20%;
  border-radius: 25px;
}

.profile {
  display: flex;
  align-items: center;
}

.profile img {
  height: 5rem;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-info {
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.social-link {
  margin-top: 20px; /* Adjust the margin-top value as needed */
}
.link a {
  text-decoration: none;
  color: black;
  font-size: 10px;
}

.link img {
  height: 2rem;
}

.container-two {
  background-color: beige;
  margin: 2.5%;
  width: 60%;
  border-radius: 10px
}

.about-me {
  text-align: center;
}
.technology-section{
  text-align: center;
}
.logos {
  height: 0.5rem;
}

.logos img {
  height: 5rem;
  border-radius: 50%;
  margin-right: 10px;
}

.button-container {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.project-button {
  background-color: rgb(120, 85, 217);
  border-radius: 15px;
  padding: 5px;
  margin: 5px;
}

.project-button a {
  text-decoration: none;
  color: black;
}
.navigation-bar {
  display: flex;
  justify-content: space-around;
  background-color: #95c79d; /* Set your desired background color */
  padding: 10px;
  border-radius: 10px
}
.router-link {
  margin-right: 20px;
  text-decoration: none;
  color: #007BFF;
  font-weight: bold;
}

.router-link:hover {
  color: #0056b3;
}
</style>
