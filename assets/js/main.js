// Lista dos posts (adicione novos aqui)
const posts = [
  {
    title: "Primeiro Post",
    date: "01 Nov 2025",
    link: "posts/primeiro-post.html",
    description: "Introdução ao blog e objetivos do projeto."
  },
  {
    title: "Segundo Post",
    date: "02 Nov 2025",
    link: "posts/segundo-post.html",
    description: "Explorando segurança ofensiva e automação."
  }
];

// Gera a lista de posts dinamicamente
const postList = document.getElementById("post-list");
posts.forEach(post => {
  const div = document.createElement("div");
  div.classList.add("post-item");
  div.innerHTML = `
    <h3><a href="${post.link}">${post.title}</a></h3>
    <p class="post-date">${post.date}</p>
    <p>${post.description}</p>
  `;
  postList.appendChild(div);
});
