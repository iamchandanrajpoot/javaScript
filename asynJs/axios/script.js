const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
    .get("https://crudcrud.com/api/a9172417646b4bb28adfc1857460023e/unicorns")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function postTodo() {
  const todoData = { title: "Learn Axios", completed: false };
  const headers = {
    "Content-Type": "application/json",
  };
  axios
    .post(
      "https://crudcrud.com/api/a9172417646b4bb28adfc1857460023e/unicorns",
      todoData,
      { headers }
    )
    .then((response) => {
      console.log("Todo successfully posted:", response.data);
    })
    .catch((error) => {
      console.error("Error posting todo:", error);
    });
}

function putTodo() {
  // Write your code here
  axios
    .put(
      "https://crudcrud.com/api/a9172417646b4bb28adfc1857460023e/unicorns/65def07072109f03e8c7f3d6",
      { title: "Learn Axios", completed: true }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteTodo() {
  // Write your code here
  axios
    .delete(
      "https://crudcrud.com/api/a9172417646b4bb28adfc1857460023e/unicorns/65def07072109f03e8c7f3d6"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
