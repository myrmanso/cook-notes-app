import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_PROJECTS_API_URL,
    })
  }

  getAllRecipes = async () => {
    try {
      const result = (await this.api.get('/recipes')).data;

      return result;
    } catch (error) {
      console.log(error)
    }
  }
  // getAllRecipes = () => {
  //   this.api.get('/recipes')
  //     .then((response) => response)
  //     .catch((erro) => console.log(erro))
  // }

  getRecipeByName = async (name) => (await this.api.get(`/recipes/name/${name}`)).data;

  postCreateRecipe = async (data) => {
    try {
      const response = await this.api.post('/recipe', { ...data, userCreator: '60cd6ad650cb80f790be92e9' });

      return response;
    } catch (error) {
      console.log(error)
    }
  }
  // getFilterRecipes = async (params) => {
  //   return (await (this.api.get('/recipes/search', { ...params }))).data;
  // }
}

export default new ApiService();
