async function getJoke() {
  return fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  }).then((data) => {
    //console.log(data.json(), "<----------data.json()");
    let result = data.json();
    console.log(result, "<---------this is result...");
    return result;
  });
}
//const jokeList = [];
function newJoke() {
  getJoke().then((resp) => {
    console.log(resp.joke, "<--- joke");
    document.getElementById("joke").textContent = resp.joke;
    //jokeList.push(resp.joke);
    //console.log(jokeList);
  });
}
newJoke();
const button = document.getElementById("button");

button.addEventListener("click", newJoke);

// async function getJoke() {
//   try {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     const data = await response.json();
//     console.log(data);
//     console.log(response, "<---- should see response");
//   } catch (error) {
//     console.error("Error fetching joke:", error);
//   }
// }
