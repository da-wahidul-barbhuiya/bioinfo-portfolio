<!-- <template>
    <div class="photo-collection">
      <h1>Photo Collection</h1>
      <div class="photo-grid">
        <div v-for="(photo, index) in photos" :key="index" class="photo-item">
          <img :src="photo.url" :alt="photo.alt">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    data() {
      return {
        photos: [
          { url: '/assets/PhotoCollection/1.jpeg', alt: 'Photo 1' },
          { url: '/assets/PhotoCollection/2.HEIC', alt: 'Photo 2' },
          {url:'/assets/wahid.jpeg',alt:'Photo 3'},
          // Add more photos as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .photo-collection {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .photo-item {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .photo-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  </style> -->

  <!-- <template>
    <div class="photo-collection">
      <h1>Photo Collection</h1>
      <div class="photo-grid">
        <div v-for="(photo, index) in photos" :key="index" class="photo-item">
          <img :src="photo.url" :alt="photo.alt" @error="handleImageError">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    data() {
      return {
        photos: [
        { url: '@/assets/PhotoCollection/1.jpeg', alt: 'Photo 1' },
        { url: '@/assets/PhotoCollection/2.HEIC', alt: 'Photo 2' },
        { url: '@/assets/wahid.jpeg', alt: 'Photo 3' },

          // Add more photos as needed
        ],
      };
    },
    methods: {
      handleImageError(error) {
        console.error('Image loading error:', error);
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-collection {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minma
    
    x(200px, 1fr));
    gap: 16px;
  }
  
  .photo-item {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .photo-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  </style> -->

  <!-- <template>
    <div class="gallery">
      <div class="gallery-panel"
           v-for="photo in photos"
           :key="photo.id">
        <img :src="thumbUrl(photo.filename)">
      </div>
    </div>
  </template>
<script>
import photos from '@/photos.json';
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/PhotoCollection/${filename}`);
    },
  },
};
</script> -->
<!-- <template>
  <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <img :src="thumbUrl(photo.filename)" :alt="photo.title || 'Untitled Photo'">
      <div class="photo-details">
        <h2>{{ photo.title || 'Untitled' }}</h2>
        <p v-if="photo.location">{{ photo.location }}</p>
        <p>Photographer: <a :href="photo.photographer.url" target="_blank">{{ photo.photographer.name }}</a></p>
        <p>Source: <a :href="photo.source.url" target="_blank">{{ photo.source.name }}</a></p>
      </div>
    </div>
  </div>
</template> 

<script>
import photos from '@/photos.json';
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`@/assets/PhotoCollection/${filename}`);
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles for your component */
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-panel {
  margin: 10px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.photo-details {
  margin-top: 8px;
  text-align: center;
}
</style>

   -->
<!-- 
   <template>
    <div>
      <h1>Photo Collection</h1>
      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <img :src="photo.url" :alt="photo.title" />
        <h2>{{ photo.title }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    data() {
      return {
        photos: [] // Array to store photo data
      };
    },
    mounted() {
      // Fetch photo data from the JSON file or an API
      this.fetchPhotos();
    },
    methods: {
      fetchPhotos() {
        // Assuming you are using some kind of HTTP library like Axios
        // You need to replace the URL with the actual path to your JSON file or API endpoint
        // axios.get('/path/to/photos.json')
        //   .then(response => {
        //     this.photos = response.data;
        //   })
        //   .catch(error => {
        //     console.error('Error fetching photos:', error);
        //   });
  
        // For this example, we'll manually set the photos array
        // Replace this with actual data fetching logic in a real application
        this.photos = [
          // { id: 1, title: 'Nature Scene', url: require('@/assets/PhotoCollection/1.jpeg') },
          // { id: 2, title: 'City Lights', url: require('@/assets/PhotoCollection/2.HEIC') },
          // { id: 3, title: 'Abstract Art', url: require('@/assets/abstract.jpeg') }
        ];
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles for the photo cards here */
  .photo-card {
    margin: 16px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }
  
  .photo-card img {
    max-width: 100%;
    border-radius: 4px;
  }
  </style> -->
<!--   
  <template>
  //eslint-disable vue/no-unused-components 

    <div>
      <h1>Photo Collection</h1>
      <div v-for="photo in photos" :key="photo.id" class="photo-card" @click="openLightbox(photo)">
        <img :src="photo.url" :alt="photo.title" />
        <h2>{{ photo.title }}</h2>
      </div>
  
       // Lightbox Modal 
      <div v-if="lightboxOpen" class="lightbox">
        <span class="close-btn" @click="closeLightbox">&times;</span>
        <img :src="selectedPhoto.url" :alt="selectedPhoto.title" />
        <h2>{{ selectedPhoto.title }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  import LazyImage from 'v-lazy-image';

  export default {
    components: {
    LazyImage,
  },
    data() {
      return {
        photos: [],          // Array to store photo data
        lightboxOpen: false,  // Flag to determine if the lightbox is open
        selectedPhoto: null   // Currently selected photo in the lightbox
      };
    },
    mounted() {
      // Fetch photo data from the JSON file or an API
      this.fetchPhotos();
    },
    
    methods: {
      fetchPhotos() {
        // Data fetching logic (replace with your actual data fetching logic)
        this.photos = [
          { id: 1, title: 'Nature Scene', url: require('@/assets/PhotoCollection/1.jpeg') },
          // { id: 2, title: 'City Lights', url: require('@/assets/PhotoCollection/2.HEIC') },
          // { id: 3, title: 'Abstract Art', url: require('@/assets/abstract.jpeg') }
          // Add more photos as needed
        ];
      },
      openLightbox(photo) {
        this.lightboxOpen = true;
        this.selectedPhoto = photo;
      },
      closeLightbox() {
        this.lightboxOpen = false;
        this.selectedPhoto = null;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your existing styles for photo cards here */
  
  .lightbox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }
  
  .lightbox img {
    max-width: 80%;
    max-height: 80%;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
  </style>
   -->
<!-- 
   <template>
    <div>
      <div class="gallery">
        <div v-for="photo in photos" :key="photo.id" class="gallery-item" @click="openLightbox(photo)">
          <img :src="photo.url" :alt="photo.title" class="gallery-image" />
          <div class="overlay">
            <h2 class="overlay-title">{{ photo.title }}</h2>
          </div>
        </div>
      </div>
  
       Lightbox Modal 
      <div v-if="lightboxOpen" class="lightbox">
        <span class="close-btn" @click="closeLightbox">&times;</span>
        <img :src="selectedPhoto.url" :alt="selectedPhoto.title" class="lightbox-image" />
        <h2>{{ selectedPhoto.title }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [],          // Array to store photo data
        lightboxOpen: false,  // Flag to determine if the lightbox is open
        selectedPhoto: null   // Currently selected photo in the lightbox
      };
    },
    mounted() {
      // Fetch photo data from the JSON file or an API
      this.fetchPhotos();
    },
    methods: {
      fetchPhotos() {
        // Data fetching logic (replace with your actual data fetching logic)
        this.photos = [
          { id: 1, title: 'Nature Scene', url: require('@/assets/PhotoCollection/1.jpeg') },
          // { id: 2, title: 'City Lights', url: require('@/assets/PhotoCollection/2.HEIC') },
          // { id: 3, title: 'Abstract Art', url: require('@/assets/abstract.jpeg') }
          // Add more photos as needed
        ];
      },
      openLightbox(photo) {
        this.lightboxOpen = true;
        this.selectedPhoto = photo;
      },
      closeLightbox() {
        this.lightboxOpen = false;
        this.selectedPhoto = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px;
  }
  
  .gallery-item {
    position: relative;
    overflow: hidden;
    margin: 10px;
    cursor: pointer;
  }
  
  .gallery-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.2s;
  }
  
  .gallery-image:hover {
    transform: scale(1.1);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    transition: opacity 0.3s;
  }
  
  .gallery-item:hover .overlay {
    opacity: 1;
  }
  
  .overlay-title {
    font-size: 1.5rem;
    margin: 0;
  }
  
  .lightbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
  }
  
  .lightbox-image {
    max-width: 80%;
    max-height: 80%;
    border-radius: 8px;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
  </style>
   -->
   <!-- Using cosmic js -->
   <!-- PhotoGallery.vue -->
<!-- PhotoGallery.vue -->
<!-- <template>
  <div>
    <h1>Photo Gallery</h1>
    <div v-for="photo in photos" :key="photo._id">
      <img :src="require('@/assets/wahid.jpeg')" alt="Local Photo" />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  data() {
    return {
      photos: [], // Array to store photos
    };
  },
  mounted() {
    // Fetch photos from Cosmic JS
    // Use your API credentials and endpoint
    fetch('https://api.cosmicjs.com/v1/your-bucket-slug/photos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Your-API-Key',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.photos = data.objects;
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>  -->
<!-- PhotoCollection.vue -->
<!-- <template>
  <div>
    <h1>Photo Collection</h1>
    <vue-gallery :images="galleryImages" :index="0" />
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  components: {
    VueGallery,
  },
  data() {
    return {
      galleryImages: [
        {
          src: require('@/assets/PhotoCollection/1.jpeg'), // Replace with your actual image path
          title: 'Photo 1',
        },
        // Add more images as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
-->
<!-- 
<template>
  <div>
    <h1>Photo Gallery</h1>
    <div >
      <img src="@/assets/PhotoCollection/1.jpeg" alt="">
      <img src="@/assets/PhotoCollection/2.jpg" alt="">
      <img src="@/assets/PhotoCollection/3.jpeg" alt="">
      <img src="@/assets/PhotoCollection/4.jpeg" alt="">
      <img src="@/assets/PhotoCollection/5.jpeg" alt="">
      <img src="@/assets/PhotoCollection/6.jpeg" alt="">
      <img src="@/assets/PhotoCollection/7.jpeg" alt="">
      <img src="@/assets/PhotoCollection/9.jpeg" alt="">
      <img src="@/assets/PhotoCollection/13.jpeg" alt="">
    </div>
  </div>
</template>
<script>
 /* eslint-disable vue/multi-word-component-names */
export default {
  name: 'PhotoCollection',
};
</script>
<style scoped>
.image-container {
  display: flex;
  justify-content: space-between;
  /* Adjust the width to fit your design */
}

.image-container img {
  height: 5rem;
  width: calc(33.33% - 10px); /* Adjust the width and any margin/padding as needed */
  /* You may also want to set a max-width or max-height to maintain image aspect ratio */
}
</style> -->
<!-- 
<template>
  <div>
    <h1 class="title">Photo Gallery</h1>
    <div class="image-container">
      <img src="@/assets/PhotoCollection/1.jpeg" alt="">
      <img src="@/assets/PhotoCollection/2.jpg" alt="">
      <img src="@/assets/PhotoCollection/3.jpeg" alt="">
      <img src="@/assets/PhotoCollection/4.jpeg" alt="">
      <img src="@/assets/PhotoCollection/5.jpeg" alt="">
      <img src="@/assets/PhotoCollection/6.jpeg" alt="">
      <img src="@/assets/PhotoCollection/7.jpeg" alt="">
      <img src="@/assets/PhotoCollection/9.jpeg" alt="">
      <img src="@/assets/PhotoCollection/13.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoCollection',
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.image-container img {
  height: 5rem;
  width: calc(33.33% - 1rem); /* Adjust the width and gap as needed */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
  border-radius: 8px; /* Add rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  cursor: pointer; /* Add pointer cursor on hover */
  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */
}

.image-container img:hover {
  transform: scale(1.1); /* Scale up on hover to 110% */
}

</style> -->
<!-- <template>
  <div>
    <h1 class="title">Photo Gallery</h1>
    <div class="image-container">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        @click="toggleImageSize(index)"
        :src="require(`@/assets/PhotoCollection/${photo}`)"
        :style="{ cursor: imageCursor }"
        alt=""
      />

    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoCollection',
  data() {
    return {
      photos: ['1.jpeg', '2.jpg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '9.jpeg', '13.jpeg'],
      imageCursor: 'pointer',
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    toggleImageSize(index) {
      // Toggle between regular size and full size
      if (this.imageCursor === 'pointer') {
        this.imageCursor = 'zoom-out'; // Use 'zoom-out' cursor when image is full size
      } else {
        this.imageCursor = 'pointer'; // Use 'pointer' cursor when image is regular size
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0; /* Remove default margin */
  background-color: #a86025; /* Set the desired background color for the whole page */
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100vh; /* Full screen height */
}

.image-container img {
  height: 20rem;
  width: calc(33.33% - 1rem);
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.image-container img:hover {
  transform: scale(1.1);
}
</style> -->

<!-- 
<template>
  <div>
    <nav class="navbar">
      <div class="navbar-item">Home</div>
    </nav>
    <h1 class="title">Photo Gallery</h1>
    <div class="image-container">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        @click="toggleImageSize(index)"
        :src="require(`@/assets/PhotoCollection/${photo}`)"
        :style="{ cursor: imageCursor }"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoCollection',
  data() {
    return {
      photos: ['1.jpeg', '2.jpg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '9.jpeg', '13.jpeg'],
      imageCursor: 'pointer',
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    toggleImageSize(index) {
      // Toggle between regular size and full size
      if (this.imageCursor === 'pointer') {
        this.imageCursor = 'zoom-out'; // Use 'zoom-out' cursor when image is full size
      } else {
        this.imageCursor = 'pointer'; // Use 'pointer' cursor when image is regular size
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0; /* Remove default margin */
  background-color: #a86025; /* Set the desired background color for the whole page */
}

.navbar {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.navbar-item {
  cursor: pointer;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100vh; /* Full screen height */
}

.image-container img {
  height: 20rem;
  width: calc(33.33% - 1rem);
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.image-container img:hover {
  transform: scale(1.1);
}
</style> -->
<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="router-link">Home</router-link>
    </nav>
    <h1 class="title">Photo Gallery</h1>
    <div class="image-container">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        @click="toggleImageSize(index)"
        :src="require(`@/assets/PhotoCollection/${photo}`)"
        :style="{ cursor: imageCursor }"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoCollection',
  data() {
    return {
      photos: ['1.jpeg', '2.jpg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '9.jpeg', '13.jpeg'],
      imageCursor: 'pointer',
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    toggleImageSize(index) {
      // Toggle between regular size and full size
      if (this.imageCursor === 'pointer') {
        this.imageCursor = 'zoom-out'; // Use 'zoom-out' cursor when image is full size
      } else {
        this.imageCursor = 'pointer'; // Use 'pointer' cursor when image is regular size
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0; /* Remove default margin */
  background-color: #a86025; /* Set the desired background color for the whole page */
}

.navbar {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.router-link {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100vh; /* Full screen height */
}

.image-container img {
  height: 20rem;
  width: calc(33.33% - 1rem);
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.image-container img:hover {
  transform: scale(1.1);
}
</style>

<!-- eslint-disable-next-line no-unused-vars -->