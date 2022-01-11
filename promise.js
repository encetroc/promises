const list = document.querySelector(".list");

const posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];

function getPosts() {
  setTimeout(() => {
    let listElements = "";
    posts.forEach((post) => {
      listElements += `<li>${post.title}</li>`;
    });
    list.innerHTML = listElements;
  }, 1000);
}

function fetchPost(id) {
  return new Promise((resolve, reject) => {
    if (id) {
      resolve({ id: id, title: `post ${id}` });
    } else {
      reject("Error: you need and id");
    }
  });
}

// each promises by itself
/* fetchPost(4)
  .then((data) => {
    posts.push(data);
    getPosts();
  })
  .catch((err) => {
    console.log(err);
  });

fetchPost(5)
  .then((data) => {
    posts.push(data);
    getPosts();
  })
  .catch((err) => {
    console.log(err);
  }); */

// all promises at the same time
Promise.all([fetchPost(4), fetchPost(5)])
  .then((data) => {
    data.forEach((el) => posts.push(el));
    getPosts();
  })
  .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  });
