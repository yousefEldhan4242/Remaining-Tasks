// 1- Using Fetch
// Example:
/*
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Or With Async Function
async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("there is an error", error);
  }
}
getData();
 */

// 2- Using XMLHttpRequest
// Example:
/*
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://fakestoreapi.com/products");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
  }
};
*/

// 3- Using Axios

// Use This cdn in HTML file between <head> tags => <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Example:
/*
axios
  .get("https://fakestoreapi.com/products")
  .then((response) => console.log(response.data));
*/

// 4- Using Promise
// Example:
/*
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          // If the response is not OK, reject the promise with an error
          reject(
            new Error("Error In Network Response " + response.statusText)
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // Resolve the promise with the fetched data
        resolve(data);
      })
      .catch((error) => {
        // If there was an error during the fetch, reject the promise with the error
        reject(error);
      });
  });
}

fetchData()
  .then((data) => {
    console.log("Data fetched:", data); // This will run if the promise is resolved
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error); // This will run if the promise is rejected
  });
 */
