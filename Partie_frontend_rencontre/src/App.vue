<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary justify-content-end"> <!-- Add `navbar-expand-lg` class and `justify-content-end` class here -->
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto"> <!-- Add `ml-auto` class here -->
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/disponibilites">Liste des disponibilités</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/users">Liste des utilisateurs</RouterLink>
          </li>
          
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/login">Se connecter</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/admin">Administrateur</RouterLink>
          </li>
         
        </ul>
      </div>
    </nav>
    <div class="container mt-3">
      <RouterView />
    </div>
  </div>
</template>