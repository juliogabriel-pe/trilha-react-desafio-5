import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    try {
    const { data } = await api.get(`/post?id=eq.${id}`);

    if (!data || data.length === 0) {
      console.error('Nenhum post encontrado com o ID:', id);
      return null;
    }

    return data[0];
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    return null;
  }

    return {}
}
