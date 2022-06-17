import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { VscEmptyWindow } from "react-icons/vsc";

export function HomePage() { //Esto es para que el contexto sea accesible desde cualquier componente.
  const { posts } = usePosts(); //Hago un hook para usar el contexto.

  const renderPost = () => { //Función que renderiza las publicaciones.
    if (posts.length === 0) //Si no hay publicaciones, muestro un mensaje.
      return (
        <div className="flex flex-col justify-center items-center"> 
          <VscEmptyWindow className="w-48 h-48 text-white" /> 
          <h1 className="text-white text-2xl">There are no posts</h1> 
        </div>
      );

    return ( //Si hay publicaciones, renderizo una card por cada una.
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    );
  };

  return ( //Renderizo el contenido.
    <main>
      <header className="flex justify-between items-center my-4">
        <h1 className="text-2xl text-gray-300 font-bold">
          Posts ({posts.length})
        </h1>
        <Link
          to="/new"
          className="bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
        >
          Create Post
        </Link>
      </header>

      {renderPost()}
    </main>
  );
}