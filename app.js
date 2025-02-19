function ShowPost() {
  const showButton = document.querySelector(".show");
  showButton.classList.add("hidden");
  const inputBox = document.querySelector(".input-box");
  inputBox.classList.add("visible");
}

const cardContainer = document.querySelector(".container");

const companyName = document.getElementById("company-name");
const tagLine = document.getElementById("tag-line");
const fullName = document.getElementById("fullName");
const role = document.getElementById("role");

function AddPost() {
  if (companyName.value.length > 18) {
    alert("Company Name Should Be Less Than 18 Characters");

    return;
  } else if (companyName.value.length < 3) {
    alert("Company Name Should Be Greater Than 2 Characters");
    return;
  } else if (tagLine.value.length > 30) {
    alert("Tagline Should Be Less Than 30 Characters");
    return;
  } else if (tagLine.value.length < 3) {
    alert("Tagline Should Be Greater Than 2 Characters");
    return;
  } else if (fullName.value.length > 18) {
    alert("Name Should Be Less Than 18 Characters");
    return;
  } else if (fullName.value.length < 3) {
    alert("Name Should Be Greater Than 2 Characters");
    return;
  } else if (role.value.length > 18) {
    alert("Role Should Be Less Than 18 Characters");
    return;
  } else if (role.value.length < 3) {
    alert("Role Should Be Greater Than 2 Characters");
    return;
  }

  cardContainer.innerHTML += ` <div class="container">
  <div class="row">
      <div class="cards">
          <div class="card-content row">
              <!-- Left Section -->
              <div class="left-section col-12 col-md-6 text-center">
                  <h3 class="company-name">Company Name</h3>
                  <p class="tagline">Tagline Goes Here</p>
                  <img src="./assets/qr.png" alt="QR Code" class="qr-code">
              </div>

              <!-- Right Section -->
              <div class="col-12 col-md-6 text-center mt-3 mt-md-0">
                  <h3 class="name">John Doe</h3>
                  <h6 class="role">Designer</h6>
                  <div class="contact-info">
                      <div class="contact-item">
                          <i class="fas fa-phone"></i>
                          <p>000-123-456-7890</p>
                      </div>
                      <div class="contact-item">
                          <i class="fas fa-envelope"></i>
                          <p>email@yourdomain.com</p>
                      </div>
                      <div class="contact-item">
                          <i class="fas fa-map-marker-alt"></i>
                          <p>Your address goes here<br>125 Street, USA</p>
                      </div>
                  </div>
              </div>
          </div>
          <img src="./assets/card1.png" class="card-pattern" alt="pattern">
      </div>
  </div>
</div>`;
}