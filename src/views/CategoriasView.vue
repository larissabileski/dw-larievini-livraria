<script>
import CategoriasApi from "../api/categorias";
const categorias = new CategoriasApi();
import axios from "axios";
export default {
  data() {
    return {
      nova_categoria: "",
      categorias: [],
    };
  },
  async created() {
    const categorias = await axios.get(`https://livraria-larievini.herokuapp.com/categorias`);
    this.categorias = categorias.data;
  },
  methods: {
    async salvar() {
      const categoria = {
        nome: this.nova_categoria,
      };
      const categoria_criada = await axios.post(
        `https://livraria-larievini.herokuapp.com/categorias`,
        categoria
      );
      this.categorias.push(categoria_criada.data);
      this.nova_categoria = "";
    },
    async excluir(categoria) {
      await axios.delete(`https://livraria-larievini.herokuapp.com/categorias/${categoria.id}`);
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de categorias</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="nova_categoria"
        @keyup.enter="salvar"
        placeholder="Cadastrar categoria:"
      />
      <button @click="salvar">Salvar</button>
    </div>
  </div>

  <div class="list-items">
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Categoria</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.id }}</td>
          <td>{{ categoria.nome }}</td>
          <td>
            <button @click="excluir(categoria)">Apagar</button>
            <button @click="editar(categoria)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
