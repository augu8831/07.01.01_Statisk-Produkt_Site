const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);
// .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

// products.forEach(product=>showProduct(product)); (giver et produkt af gangen)
// Hvis man vil det kan bare skrive:
// products.forEach(showProduct);

function showProduct(product) {
  console.log(product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //hvis produkt er udsolgt
    copy.querySelector("article").classList.add("soldtOut");
  }

  // kan bruge .href eller setAttribute
  copy.querySelector(".read-more").setAttribute("href", `productpage.html?id=${product.id}`);
  //appende
  document.querySelector("main").appendChild(copy);
}

// function showProducts(products) {
//   // looper og kalder showProduct
//   products.forEach(showProduct);
// }

// function changeImg(product) {
//   const urlParams = new URLSearchParams(window.location.search);
//   const id = urlParams.get("id");
//   document.querySelector;
// }

//
// id	1543
// gender	"Men"
// category	"Footwear"
// subcategory	"Shoes"
// articletype	"Casual Shoes"
// season	"Fall"
// productionyear	2010
// usagetype	"Casual"
// productdisplayname	"Basket-Biz Sneaker"
// price	3499
// discount	null
// brandname	"Puma"
// soldout	0
