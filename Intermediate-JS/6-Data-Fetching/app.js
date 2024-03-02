// console.log("data fetching using fetch api")

const apiUrl = "https://fakestoreapi.com/users";
console.log(apiUrl);

const getUsers = async () => {
  const response = await fetch(apiUrl);
  const result = await response.json();
  console.log(result);

  let userInfo = "";
  result.map((data) => {
    userInfo += `<tr>
            <td>${data.id}</td>
            <td>${data.name.firstname}${data.name.lastname}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.username}</td>
          </tr>
    `;
  });
  document.querySelector("#user-data").innerHTML = userInfo;
};
getUsers();


