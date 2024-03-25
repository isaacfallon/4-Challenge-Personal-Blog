const blogContainer = document.querySelector('#blog-container');
const backButton = document.querySelector('#back-button');
const clearButton = document.querySelector('#clear-storage');


window.addEventListener('load', function (event) {
  event.preventDefault();

  blogContainer.innerHTML = '';
  
  let blogParse = JSON.parse(localStorage.getItem('blogEntry'));


  for(let i = 0; i < blogParse.length; i++) {

    const item = blogParse[i];
    console.log(item);

    const ul = document.createElement('ul');

    const li = document.createElement('li');
    li.textContent = item.title;
    li.setAttribute('data-index', i);

    const li2 = document.createElement('li');
    li2.textContent = item.content;
    li2.setAttribute('data-index', i);

    const li3 = document.createElement('li');
    li3.textContent = item.user;
    li3.setAttribute('data-index', i);

    blogContainer.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
}
localStorage.setItem('blogEntry', JSON.stringify(blogParse));
 
});

backButton.addEventListener('click', function() {
  window.location.href="./index.html";
});

clearButton.addEventListener('click', function() {
  localStorage.clear();
  location.reload();
});