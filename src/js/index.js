/*
Fetch the data on button click
 */
const button = document.getElementById("fetch-btn");

button.addEventListener("click", function() {
  fetch("http://localhost:3000/users")
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => buildList(json));
});

/*
Build the user's list
 */
function buildList(data) {
  console.log(data);
}