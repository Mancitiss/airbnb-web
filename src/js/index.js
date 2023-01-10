/*
Fetch the data on button click
 */
const SERVER_URL = "http://localhost:3000/"
const button = document.getElementById("fetch-btn");

button.addEventListener("click", function() {
  fetch(SERVER_URL + "users", { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "John", surname: "Felix"})
   })
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