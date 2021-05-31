let icon = document.querySelector(".icon");
let navUl = document.querySelector(".navUl");
let product = document.querySelector(".product");
let company = document.querySelector(".company");
let connect = document.querySelector(".connect");
let productList = document.querySelector(".productList");
let companyList = document.querySelector(".companyList");
let connectList = document.querySelector(".connectList");
let arrow = document.getElementsByClassName("arrow");

function closeIcon() {
  navUl.classList.toggle("open");
  icon.classList.toggle("closeIcon");
}

function showFunc(name, nameList) {
  name.classList.toggle("cngColor");
  name.classList.toggle("rotate");
  nameList.classList.toggle("displayDropdown");
}

icon.addEventListener("click", closeIcon);
product.addEventListener("click", () => showFunc(product, productList));
company.addEventListener("click", () => showFunc(company, companyList));
connect.addEventListener("click", () => showFunc(connect, connectList));
