const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    let element = document.body;
    element.classList.toggle("dark-mode");
});

const clearButton = document.querySelector('#clear-storage');

clearButton.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
  });

  window.addEventListener('load', function (event) {
    event.preventDefault();

});