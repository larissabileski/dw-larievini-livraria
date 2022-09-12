<script>
import EditorasApi from "../api/editoras";
const editoras = new EditorasApi();
import axios from "axios";
export default {
  data() {
    return {
      novo_editora: "",
      editoras: [],
    };
  },
  async created() {
    const editoras = await axios.get(`https://livraria-larievini.herokuapp.com/editoras`);
    this.editoras = editoras.data;
  },
  methods: {
    async salvar() {
      const editora = {
        nome: this.nova_editora,
      };
      const editora_criada = await axios.post(`https://livraria-larievini.herokuapp.com/editoras`, editora);
      this.editoras.push(editora_criada.data);
      this.nova_editora = "";
    },
    async excluir(editora){
      await axios.delete(`https://livraria-larievini.herokuapp.com/editoras/${editora.id}`)
      const indice = this.editoras.indexOf(editora)
      this.editoras.splice (indice,1);
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
}
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de editoras</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="nova_editora"
        @keyup.enter="salvar"
        placeholder="Cadastrar editora:"
      />
      <button @click="salvar">Salvar</button>
    </div>
  </div>

  <div class="list-items">
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Editora</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="editora in editoras" :key="editora.id">
          <td>{{ editora.id }}</td>
          <td>{{ editora.nome }}</td>
          <td>
            <button @click="excluir(editora)">Apagar</button>
            <button @click="editar(editora)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
