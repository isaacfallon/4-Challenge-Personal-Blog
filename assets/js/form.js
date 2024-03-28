// Javascript logic for the index.html (form entry) page.

// Gather all necessary query selectors for user inputs and submit button.
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// Declare an empty array we will eventually push our user input data into.
let array = [];

// Set up a templated object within an array the data will take the shape of.
let userObject = [
    {
    title: '',
    content: '',
    user: ''
},
];

// Load all existing blog entries, assign them to a variable and flatten them to a string. 
let existingBlogs = JSON.parse(localStorage.getItem('blogEntry'));
// PLEASE NOTE: this passes an error in the console log if there are no existing blog entries to pull from 
// (clearing of local storage + like on a fresh page load) as it reads the 'length' as null which is normal. 
// This means that there is no issue and should be ignored. As soon as a blog entry is added, the error goes away as expected.

// On page load, prevent default behaviour and loop through the existing blogs saved in local storage to then be added to the array.
window.addEventListener('load', function (event) {
  event.preventDefault();

  // Loop through all existing blog entries stored in local storage and push them to the array. 
for(let i = 0; i < existingBlogs.length; i++) {


  const item = existingBlogs[i];

   array.push({
    title: item.title,
    content: item.content,
    user: item.user
  });
}
});

// A function to store blog entries.
function storeEntries() {
  localStorage.setItem('blogEntry', JSON.stringify(array));
}

// When we hit the submit button, we first check to see if there are any blank fields. If there are, alert the user saying so. 
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (titleInput.value === '' || contentInput.value === '' || usernameInput.value === '') {
      alert ('Please enter all fields before submitting');
    } else {

      // Then, push all user inputs to the empty array as an object inside the array.
    array.push({
      title: usernameInput.value,
      content: titleInput.value,
      user: contentInput.value
    });
    
    // Call the store entries function to save all of the entries to local storage. 
    storeEntries();
    // Take the user to the 'blog.html' (blog entries) location.
    window.location.href="./blog.html"
    }
  }
  );
