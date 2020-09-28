<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <a class="navbar-brand" href="/">The Vue Store!</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     <router-link to="/" activeClass="active" class="navItem" tag="li"><a class="nav-link">Items</a></router-link>
     <router-link to="/max" activeClass="active" class="navItem" tag="li"><a class="nav-link">Max Items</a></router-link>
    </ul>
  </div>
</nav>
</div>
</template>
