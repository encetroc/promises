async function fecthTodo() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();
  console.log(data);
}

fecthTodo();
