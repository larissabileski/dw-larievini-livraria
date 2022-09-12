<template>
  <header>
    <span><RouterLink to="/">Home</RouterLink></span>
    <span>|</span>
    <span><RouterLink to="/livros">Livros</RouterLink></span>
    <span>|</span>
    <span><RouterLink to="/categorias">Categorias</RouterLink></span>
    <span>|</span>
    <span><RouterLink to="/autores">Autores</RouterLink></span>
    <span>|</span>
    <span><RouterLink to="/editoras">Editoras</RouterLink></span>
  </header>
</template>
<style>
header span {
  padding: 0px 20px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
