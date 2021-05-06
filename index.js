let icon = document.querySelector(".icon");
let navUl = document.querySelector(".navUl");
let product = document.querySelector(".product");
let company = document.querySelector(".company");
let connect = document.querySelector(".connect");
let productList = document.querySelector(".productList");
let companyList = document.querySelector(".companyList");
let connectList = document.querySelector(".connectList");
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let arrow3 = document.querySelector(".arrow3");

function closeIcon() {
  navUl.classList.toggle("open");
  icon.classList.toggle("closeIcon");
}

function showProducts() {
  product.classList.toggle("cngColor");
  productList.classList.toggle("displayDropdown");
  arrow1.classList.toggle("rotate");
}

function showCompany() {
  company.classList.toggle("cngColor");
  companyList.classList.toggle("displayDropdown");
  arrow2.classList.toggle("rotate");
}

function showConnect() {
  connect.classList.toggle("cngColor");
  connectList.classList.toggle("displayDropdown");
  arrow3.classList.toggle("rotate");
}

icon.addEventListener("click", closeIcon);
product.addEventListener("click", showProducts);
company.addEventListener("click", showCompany);
connect.addEventListener("click", showConnect);
