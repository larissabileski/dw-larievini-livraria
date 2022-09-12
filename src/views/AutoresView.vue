<script>
import AutoresApi from "../api/autores";
const autores = new AutoresApi();
import axios from "axios";
export default {
  data() {
    return {
      novo_autor: "",
      autores: [],
    };
  },
  async created() {
    const autores = await axios.get(`https://livraria-larievini.herokuapp.com/autores`);
    this.autores = autores.data;
  },
  methods: {
    async salvar() {
      {   if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }}
      const autor = {
        nome: this.novo_autor,
      };
      const autor_criado = await axios.post(
        `https://livraria-larievini.herokuapp.com/autores`,
        autor
      );
      this.autores.push(autor_criado.data);
      this.novo_autor = "";
    },

    async excluir(autor) {
      await axios.delete(`https://livraria-larievini.herokuapp.com/autores/${autor.id}`);
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de autores</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="novo_autor"
        @keyup.enter="salvar"
        placeholder="Cadastrar autor:"
      />
      <button @click="salvar">Salvar</button>
    </div>
  </div>

  <div class="list-items">
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Autor</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="autor in autores" :key="autor.id">
          <td>{{ autor.id }}</td>
          <td>{{ autor.nome }}</td>
          <td>
            <button @click="excluir(autor)">Apagar</button>
            <button @click="editar(autor)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
