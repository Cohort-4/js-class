// console.log("data fetching using fetch api")

const apiUrl = "https://fakestoreapi.com/users";
// console.log(apiUrl);

const productUrl = "https://fakestoreapi.com/products";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const getUsers = async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
getUsers();

// display products
const displayProduct = async () => {
  try {
    const res = await fetch(productUrl);
    const productResult = await res.json();
    console.log(productResult);

    let productData = "";
    productResult.map((data) => {
      productData += `
        <section class="card">
        <img src=${data.image} alt="avatar" />
        <section class="card-content">
          <h3>${data.title}</h3>
          <p>
            ${data.description}
          </p>
          <section class="btn">
            <button>share</button>
            <button>view</button>
          </section>
        </section>
      </section>
      `;
    });
    document.querySelector("#card-container").innerHTML = productData;
  } catch (error) {
    console.log(error);
  }
};
displayProduct();
