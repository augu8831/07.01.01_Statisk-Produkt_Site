fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  console.log(cat);
  //fanger vores template
  const template = document.querySelector("template").content;
  //vi cloner
  const clone = template.cloneNode(true);
  //ændrer indhold
  clone.querySelector("a").textContent = cat.catgory;
  clone.querySelector("a").href = `productlist.html?category=${cat.category}`;
  //appender
  document.querySelector(".letterGroup ol").appendChild(clone);
}
