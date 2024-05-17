let userList;

const getUserList = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

const displayUserList = async () => {
  userList = await getUserList();
  const nameList = [];
  if (Array.isArray(userList)) {
    for (item of userList) {
      nameList.push(
        `<button class="buttons" id="${item.id}">${item.name}</button>`
      );
    }
    const namesContainer = document.getElementById("names-container");
    namesContainer.innerHTML = nameList.join("");
    await assignActions();
  } else {
    alert(userList.message);
  }
};

const assignActions = async () => {
  let buttonList = document.getElementsByClassName("buttons");
  for (btn of buttonList) {
    btn.addEventListener("click", (e) => {
      for (user of userList) {
        if (user.id == e.target.id) {
          const detailsContainer = document.getElementById("details-container");
          detailsContainer.innerHTML = `<p>Name : ${user.name}</p >
          <p>User-Name : ${user.username}</p >
          <p>Email : ${user.email}</p >
          <p>Phone : ${user.phone}</p >`;
        }
      }
    });
  }
};

displayUserList();
