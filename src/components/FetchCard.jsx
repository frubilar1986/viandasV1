import React, { useEffect, useState } from "react";
import getUser from "../helpers/getUser";
import getPost from "../helpers/getPost";

// const initialUser = {
//   name: "franc",
//   email: "fr@gmailcom",
// };
// const initialPost = [
// {
//   id: 1,
//   title:'titulo post'
// },
// {
//     id: 2,
//     title:'titulo post2'
//   }
// ]

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPost] = useState([]);

  const updatePost = () => {
    getPost(user.id).then((newPost) => {
      setPost(newPost);
    });
  };
  const updateUser = () => {
    getUser()
      .then((newUser) => setUser(newUser));
  };
  
  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if (user?.id) {
      updatePost();
    }
  }, [user]);

  return (
    <div>
      <div>
        <button onClick={updateUser} type="button">
          Nuevo Usuario
        </button>
      </div>
      <p>Nombre: {user.name}</p>
      <p>Apellido: {user.email}</p>
      <br />
      <h2>Post - user : {user.id} </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCard;
