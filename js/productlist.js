fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

// products.forEach(product=>showProduct(product)); (giver et produkt af gangen)
// Hvis man vil det kan bare skrive:
// products.forEach(showProduct);

function showProduct(product) {
  //   console.log(product);
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
  //appende
  document.querySelector("main").appendChild(copy);
}

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
