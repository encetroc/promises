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

function fetchPost(id, callback) {
  setTimeout(() => {
    const post = { id: id, title: `post ${id}` };
    posts.push(post);
    callback();
  }, 1500);
}

fetchPost(3, getPosts);
