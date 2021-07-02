import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_PROJECTS_API_URL,
    })

    this.api.interceptors.request.use(
      config => {
        config.headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
        };

        if (config.url.includes('/auth')) {
          return config;
        }
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

        return config;
      },
    );

    this.api.interceptors.response.use(
      config => {
        config.headers['Access-Control-Allow-Origin'] = '*';

        return config;
      },
      error => {
        if (error.response.status === 401 && error.response.data.type === 'Auth') {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }

        return error;
      }
    );
  }

  getAllRecipes = async () => {
    try {
      const result = (await this.api.get('/recipes')).data;

      return result;
    } catch (error) {
      console.log('getAllRecipes', error)
    }
  }

  getAllUserRecipes = async () => {
    const userId = localStorage.getItem('result');

    try {
      const result = (await this.api.get(`/user/${userId}/recipes`)).data;

      return result;
    } catch (error) {
      console.log('getAllUserRecipes', error)
    }
  }

  getRecipeByNameAndUserId = async (name) => {
    const userId = localStorage.getItem('result');

    try {
      const result = (await this.api.get(`/user/recipes/search?name=${name}&userId=${userId}`)).data;

      return result;
    } catch (error) {
      console.log('getRecipeByNameAndUserId', error)
    }
  }

  getRecipeById = async (recipeId) => {
    try {
      const result = (await this.api.get(`/recipe/${recipeId}`)).data;

      return result;
    } catch (error) {
      console.log('getRecipeById', error)
    }
  }

  getRecipeByName = async (name) => (await this.api.get(`/recipes/name/${name}`)).data;

  postCreateRecipe = async (data) => {
    const userId = localStorage.getItem('result');

    try {
      const response = await this.api.post('/recipe', { ...data, userCreator: userId });

      return response;
    } catch (error) {
      console.log('postCreateRecipe', error)
    }
  }

  addRecipe = async (recipeId) => {
    const userId = localStorage.getItem('result');

    try {
      const response = await this.api.patch(`/user/${userId}/recipe/${recipeId}`);

      return response;
    } catch (error) {
      console.log('addRecipe', error)
    }
  }

  updateRecipe = async (data, recipeId) => {
    try {
      const response = await this.api.patch(`/recipe/${recipeId}`, data);

      return response;
    } catch (error) {
      console.log('updateRecipe', error)
    }
  }

  signupUser = async userData => {
    const { data } = await this.api.post('/auth/signup', userData);

    return data;
  }

  loginUser = async userData => {
    const { data } = await this.api.post('/auth/login', userData);

    return data;
  }
}

export default new ApiService();
