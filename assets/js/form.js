const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

let array = [];

let userObject = [
    {
    title: '',
    content: '',
    user: ''
},
];

let existingBlogs = JSON.parse(localStorage.getItem('blogEntry'));

window.addEventListener('load', function (event) {
  event.preventDefault();

for(let i = 0; i < existingBlogs.length; i++) {

  const item = existingBlogs[i];
  console.log(item);

   array.push({
    title: item.title,
    content: item.content,
    user: item.user
  });

}

});

function storeEntries() {
  localStorage.setItem('blogEntry', JSON.stringify(array));
}


submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    array.push({
      title: usernameInput.value,
      content: titleInput.value,
      user: contentInput.value
    });
    
    storeEntries();
    window.location.href="./blog.html"
    }
 
  );