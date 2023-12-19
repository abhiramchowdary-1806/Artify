document.body.style.backgroundColor = "#c7ecc7";

function createBox(title, url) {
  let box = document.createElement("div");
  box.style.backgroundColor = "orange";
  box.style.padding = "20px";
  box.style.borderRadius = "10px";
  box.style.textAlign = "center";
  box.style.animation = "rotate 4s linear infinite";
  box.style.margin = "10px";
  box.innerHTML =
    "<h2>" +
    title +
    "</h2>" +
    "<form action='" +
    url +
    "'>" +
    "<input type='text' placeholder='Username'><br>" +
    "<input type='password' placeholder='Password'><br>" +
    "<button class='blue-box' type='submit'>Log in</button>" +
    "<button class='blue-box' type='submit'>Sign up</button>" +
    "</form>";
  return box;
}

let investorsBox = createBox("For Investors", "https://www.flipkart.com");
let workersBox = createBox("For Skilled Workers", "https://www.amazon.com");
document.body.appendChild(investorsBox);
document.body.appendChild(workersBox);

let hyperlink = document.createElement("a");
hyperlink.style.backgroundColor = "#87ceeb";
hyperlink.style.padding = "20px";
hyperlink.style.borderRadius = "50%";
hyperlink.style.textAlign = "center";
hyperlink.style.marginTop = "50px";
hyperlink.style.display = "inline-block";
hyperlink.style.textDecoration = "none";
hyperlink.style.color = "white";
hyperlink.href = "https://www.google.com";
hyperlink.innerText = "Explore about arts";
document.body.appendChild(hyperlink);

let username = "cmr";
let password = "1234";