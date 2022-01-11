/* const list = document.querySelector(".list");

async function fecthPosts() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();
  let listElements = "";
  for (let i = 0; i < 5; i++) {
    listElements += `<li>${posts[i].title}</li>`;
  }
  list.innerHTML = listElements;
}

fecthPosts(); */

const list = document.querySelector(".list");

const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts");

/* postsPromise
  .then((result) => result.json())
  .then((posts) => {
    let listElements = "";
    for (let i = 0; i < 5; i++) {
      listElements += `<li>${posts[i].title}</li>`;
    }
    list.innerHTML = listElements;
  }); */

async function getPosts() {
  const result = await postsPromise;
  const posts = await result.json();
  let listElements = "";
  for (let i = 0; i < 5; i++) {
    listElements += `<li>${posts[i].title}</li>`;
  }
  list.innerHTML = listElements;
}

getPosts();
