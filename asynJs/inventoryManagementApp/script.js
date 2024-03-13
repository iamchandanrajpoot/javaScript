// display data on screen -----------------------------------

function displayUserOnScreen(itemDetails) {
  // const ul = document.querySelector("ul");
  // ul.innerHTML = "";
  const inventoryItem = document.createElement("li");
  inventoryItem.setAttribute("key", itemDetails._id);
  inventoryItem.appendChild(
    document.createTextNode(
      `${itemDetails.itemName} - ${itemDetails.description} - ${itemDetails.price} - ${itemDetails.quantity}`
    )
  );

  const buy1Btn = document.createElement("button");
  buy1Btn.appendChild(document.createTextNode("Buy1"));
  buy1Btn.className = "buy1";
  inventoryItem.appendChild(buy1Btn);

  const buy2Btn = document.createElement("button");
  buy2Btn.appendChild(document.createTextNode("buy2"));
  buy2Btn.className = "buy2";
  inventoryItem.appendChild(buy2Btn);

  const buy3Btn = document.createElement("button");
  buy3Btn.appendChild(document.createTextNode("buy3"));
  buy3Btn.className = "buy3";
  inventoryItem.appendChild(buy3Btn);

  const userList = document.querySelector("ul");
  userList.appendChild(inventoryItem);
}

// ------------------------------------------------------------------------

// displaying all users data from database--------------------------
axios
  .get(
    "https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/"
  )
  .then((response) => {
    response.data.forEach((item) => {
      displayUserOnScreen(item);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// handling form submission----------------------------------------
function handleFormSubmit(event) {
  event.preventDefault();
  const itemDetails = {
    itemName: event.target.itemName.value,
    description: event.target.description.value,
    price: event.target.price.value,
    quantity: event.target.quantity.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/",
      itemDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("itemName").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}

// handling buy1-------------------------------------------
const ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  if (event.target.className === "buy1") {
    let valueOfKey = event.target.parentElement.getAttribute("key");
    console.log(valueOfKey);
    // getting data
    axios
      .get(
        `https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/${valueOfKey}`
      )
      .then((response) => {
        console.log(response);
        const updateInventoryItem = {
          itemName: response.data.itemName,
          description: response.data.description,
          price: response.data.price,
          quantity: response.data.quantity - 1,
        };

        // updating data
        axios
          .put(
            `https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/${valueOfKey}`,
            updateInventoryItem
          )
          .then((response) => {
            console.log(response);
            // after updating display data
            const ul = document.querySelector("ul");
            ul.innerHTML = "";
            axios
              .get(
                "https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/"
              )
              .then((response) => {
                response.data.forEach((item) => {
                  displayUserOnScreen(item);
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
ul.addEventListener("click", function (event) {
  if (event.target.className === "buy2") {
    let valueOfKey = event.target.parentElement.getAttribute("key");
    console.log(valueOfKey);
    // getting data
    axios
      .get(
        `https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/${valueOfKey}`
      )
      .then((response) => {
        console.log(response);
        const updateInventoryItem = {
          itemName: response.data.itemName,
          description: response.data.description,
          price: response.data.price,
          quantity: response.data.quantity - 2,
        };

        // updating data
        axios
          .put(
            `https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/${valueOfKey}`,
            updateInventoryItem
          )
          .then((response) => {
            console.log(response);
            // after updating display data
            const ul = document.querySelector("ul");
            ul.innerHTML = "";
            axios
              .get(
                "https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/"
              )
              .then((response) => {
                response.data.forEach((item) => {
                  displayUserOnScreen(item);
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
ul.addEventListener("click", function (event) {
  if (event.target.className === "buy3") {
    let valueOfKey = event.target.parentElement.getAttribute("key");
    console.log(valueOfKey);
    // getting data
    axios
      .get(
        `https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/${valueOfKey}`
      )
      .then((response) => {
        console.log(response);
        const updateInventoryItem = {
          itemName: response.data.itemName,
          description: response.data.description,
          price: response.data.price,
          quantity: response.data.quantity - 3,
        };

        // updating data
        axios
          .put(
            `https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/${valueOfKey}`,
            updateInventoryItem
          )
          .then((response) => {
            console.log(response);
            // after updating updating ui
            const ul = document.querySelector("ul");
            ul.innerHTML = "";
            axios
              .get(
                "https://crudcrud.com/api/92308839cdca422fae96e6c87a1a4ba2/inventoryData/"
              )
              .then((response) => {
                response.data.forEach((item) => {
                  displayUserOnScreen(item);
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
