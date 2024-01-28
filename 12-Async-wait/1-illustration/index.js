let userEndpoint = "https://fakestoreapi.com/users";

const getUsers = async () => {
  try {
    const res = await fetch(userEndpoint);
    //  console.log(res)
    const data = await res.json();
    console.log(
      "DATA RESULT",
      data.slice(0, 3).forEach((element) => {
        const { address, id, email, name } = element;
        console.log(`the id: ${id}`);
        console.log(`The location of the user is ${address.city}`);
        console.log(`This is the email of the users: ${email} `);
        console.log(`This is the name of the user: ${name.firstname}`);
      })
    );
    if(!data){
      throw new (error)
    }
  } catch (error) {
    console.log(error);
  }
};
getUsers();

// class work
// fetch 5 products from url=https://fakestoreapi.com/products