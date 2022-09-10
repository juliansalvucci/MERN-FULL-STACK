import { createContext, useContext, useEffect, useState } from "react";
import { getPostsRequest, deletePostRequest, createPostRequest, getPostRequest, updatePostRequest} from "../api/posts";

//Componente global que contiene el estado que todos los componentes necesitan.

const postContext = createContext(); //Creo el contexto.

export const usePosts = () => {  //Hago un hook para usar el contexto.
  const context = useContext(postContext); //Tomo el contexto.
  if (!context) throw new Error("Post Provider is missing"); //Si no existe el contexto, lanzo un error.
  return context; //Si existe, retorno el contexto.
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    (async () => {
      const res = await getPostsRequest();
      setPosts(res.data);
    })();
  }, []);

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      setPosts([...posts, res.data]); //Agrego el registro creado al arreglo de publicaciónes, esto me evita hacer la petición completa.
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  return ( //Esto es para que el contexto sea accesible desde cualquier componente.
    <postContext.Provider
      value={{ posts, deletePost, createPost, getPost, updatePost }}
    >
      {children}
    </postContext.Provider>
  );
};