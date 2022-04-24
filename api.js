const post_title = document.getElementById("post__title");
const post_body = document.getElementById("post__body");
const author = document.getElementById("author");
const comment_area = document.getElementById("comment__area");

const random = Math.floor(Math.random() * 100);
const post_id = random + 1;
let user_id = null;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((obj) => {
    const post = obj.find((post_list) => post_list.id == post_id);
    console.log(post);
    user_id = post.userId;
    post_title.innerHTML = post.title;
    post_body.innerHTML = post.body;
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const user = users.find((user_list) => user_list.id == user_id);
    console.log(user);
    author.innerHTML = user.name;
  });

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((obj) => {
    const comment = obj.filter(
      (comment_list) => comment_list.postId == post_id
    );
    console.log(comment);
    for (let i = 0; i < comment.length; i++) {
      const new_comment = document.createElement("div");
      comment_area.appendChild(new_comment);
      const comment_name = document.createElement("h4");
      comment_name.innerHTML = comment[i].name;
      new_comment.appendChild(comment_name);
      const comment_body = document.createElement("p");
      comment_body.innerHTML = comment[i].body;
      new_comment.appendChild(comment_body);
    }
  });
