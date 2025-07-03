const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
  userContainer.innerHTML = "Loading...";
  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = "";
      users.forEach(user => {
        const div = document.createElement("div");
        div.className = "user-card";
        div.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(div);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

reloadBtn.addEventListener("click", fetchUsers);

// Fetch users on first load
fetchUsers();
