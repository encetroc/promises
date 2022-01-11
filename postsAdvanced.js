const container = document.querySelector(".container");

async function getPosts() {
  const resultPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resultPosts.json();

  let postElements = "";
  for (let i = 0; i < 3; i++) {
    const resultComments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${i + 1}/comments`
    );
    const comments = await resultComments.json();

    let commentElements = "";
    comments.forEach((comment) => {
      commentElements += `<li>${comment.body}</li>`;
    });

    postElements += `
      <div class="card">
        ${posts[i].title}
        <hr>
        ${posts[i].body}
        <hr>
        <ul>${commentElements}</ul>
      </div>`;
  }
  container.innerHTML = postElements;
}

getPosts();
