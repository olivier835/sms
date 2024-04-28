<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item" v-for="link in links" :key="link.name">
        <router-link :to="link.url" class="navbar-link" active-class="active-link" exact>
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default { 
  name: 'NavBar',
  data() {
    return {
      links: [
        { text: 'Send Message', url: '/send-message', name: 'send' },
        { text: 'View Messages', url: '/view-messages', name: 'view' }
      ]
    };
    }
}
    </script>

    <style>
    
    .navbar {
  background-color: #333;
  padding: 10px 20px;
}

.navbar-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin-right: 20px;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  display: block;
}

.navbar-link:hover,
.navbar-link:focus {
  background-color: #555;
  outline: none;
}

.navbar-link:focus {
  outline: 3px solid #aaa;
  outline-offset: 2px;
}

.active-link {
  color: red; /* or any other visual indicator for active state */
  background-color: #222;
}
    </style>