import React from "react";

async function getUser() {
    const userId = Math.floor(Math.random()*10)+1;
    // console.log(userId)
  //url
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const res = await fetch(url);
  const user = await res.json();
    console.log(user)
  return user
}

export default getUser;
