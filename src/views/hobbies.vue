<!-- Home.vue -->
<template>
  <div class="home-container">
    <h1 class="header-text">Photography</h1>
    <div class="gallery-section">
    <router-link to="/gallery" class="router-link">Gallery</router-link>
      <!-- Your gallery content goes here -->
      <!-- For example, you can use an image grid or other gallery components -->
    </div>
  </div>
</template>

<script>
 /* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Hobbies',
};
</script>

<style scoped>
/* Add your styles here */
.home-container {
  background-image: url('@/assets/tornafort.JPG');
  background-size: cover;
  background-position: center;
  color: #3d3f51; /* Set text color to white or any other suitable color */
  padding: 20px;
  text-align: center;
  /* height: 100%; Make sure the container covers the entire page */
  
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-text {
  font-size: 2em;
  font-weight: bold;
}

.gallery-section {
  background-color: rgb(22, 177, 228);
  padding: 20px; /* Adjust padding as needed */
  border: 1px solid #490404; /* Optional: Add a border */
  border-radius: 8px; /* Optional: Add rounded corners */
}
</style>
