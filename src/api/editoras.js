import axios from 'axios';
export default class EditorasApi {
  async buscarTodasAsEditorass() {
    const response = await axios.get('https://livraria-larievini.herokuapp.com/editoras');
    return response.data;
  }

  async buscarEditoras(id) {
    const response = await axios.get(`https://livraria-larievini.herokuapp.com/editoras/${id}`);
    return response.data;
  }

  async adicionarEditoras(editoras) {
    const response = await axios.post('https://livraria-larievini.herokuapp.com/editoras', editoras);
    return response.data;
  }

  async excluirEditoras(id) {
    const response = await axios.delete(`https://livraria-larievini.herokuapp.com/editoras/${id}`);
    return response.data;
  }

  async atualizarEditoras(editoras) {
    const response = await axios.put(
      `https://livraria-larievini.herokuapp.com/editoras/${editoras.id}`, editoras,);
    return response.data;
  }
}