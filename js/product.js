// https://kea-alt-del.dk/t7/api/products
// https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp

fetch("https://kea-alt-del.dk/t7/api/products/1528")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".buyitem h2").textContent = product.productdisplayname;
  document.querySelector(".buyitem .brand").textContent = product.brand;
  document.querySelector("img").scr = "https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp";
}

// {
//     "id": 1526,
//     "gender": "Unisex",
//     "category": "Accessories",
//     "subcategory": "Bags",
//     "articletype": "Backpacks",
//     "basecolour": "Black",
//     "season": "Fall",
//     "productionyear": 2010,
//     "usagetype": "Sports",
//     "productdisplayname": "Big Cat Backpack Black",
//     "parsed": 1,
//     "soldout": 0,
//     "relid": 1526,
//     "price": 1299,
//     "discount": null,
//     "variantname": "Big Cat Backpack",
//     "brandname": "Puma",
//     "brandbio": "PUMA is the World's Fastest Sports Brand",
//     "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
//     "agegroup": "Adults-Unisex",
//     "colour1": "",
//     "colour2": "",
//     "fashiontype": "Fashion",
//     "materialcaredesc": null,
//     "sizefitdesc": null,
//     "description": "<p style=\"text-align: justify;\"><br />1. Polyester/nylon blend for lightweight durability<br />2. Two-way zip opening and zip pockets on sides and front for optimum storage<br />3. Small zip case for added convenience<br />4. Adjustable and padded shoulder straps for added&nbsp;  comfort&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; <br />5. Slate-black in colour<br />6. 18\" length x 12\" breadth<br /><br />This backpack is big on space and style. It is light as a feather and looks stunningly good. Go packing with this Big cat! &nbsp; <br /><br />Note: Not suitable for carrying laptop.</p>",
//     "styledesc": null
//   }
