<template>
  <nav>
    <div class="nav-wrapper">
      <div class="container">
        <router-link to ="/" class="brand-logo">Charles Carden</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
         <router-link to="/projects">Projects</router-link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.nav-wrapper {
  background-color: #4f5466;
}
</style>
