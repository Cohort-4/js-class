// GET Users=
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
// Using Async and wait
const getUsers = async () => {
  const response = await fetch(apiUrl);
  // console.log(response)
  const data = await response.json();
  // console.log("USING ASYNCWAIT", data);
};
getUsers();


//GET album
let albumUrl = "https://jsonplaceholder.typicode.com/albums";

const getAlbum = async() => {
  const res = await fetch(albumUrl)
  const data = await res.json()
  console.log("ALBUM DATA",data);
  const getUserDetails = data.map((user) => console.log(user));
  console.log(getUserDetails);
}
getAlbum();
