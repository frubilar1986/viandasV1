import React from "react";

async function getPost(userId) {
    // const userId = Math.floor(Math.random()*10)+1;
    // console.log(userId)
  //url
  // const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
  const res = await fetch(url);
  const post = await res.json();
    // console.log(post)
  return post
}

export default getPost;
