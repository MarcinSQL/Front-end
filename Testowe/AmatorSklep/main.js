/* <div class="product-item on-sale">
<img src="./img/products/HUAWEI_P30_Lite.jpg" alt="">
<p class="product-name">HUAWEI_P30_Lite</p>
<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam amet vitae aspernatur illo placeat maxime quas quis sequi ut.</p>
<div class="product-price">
    <span class="price">2999.99 zl</span>
    <span class="price-sale">2799.99 zl</span>
</div>
<button class="product-add-to-basket-btn">Dodaj do koszyka</button>
<p class="product-item-sale-info">Promocja</p>
</div> */

const currentProducts = products;
let categories = new Set(); //set nie pozwala na powtarzanie elementow

const productSection = document.querySelector(".products");
const renderProducts = (items) =>{
    for(let i = 0; i < items.length; i++){
        const newProduct = document.createElement("div");
        newProduct.className = `product-item ${items[i].sale ? "on-sale" : ""}`;
    newProduct.innerHTML = `
    <img src="${items[i].image}" alt="product-image">
    <p class="product-name">${items[i].name}</p>
    <p class="product-description">${items[i].description}</p>
    <div class="product-price">
        <span class="price">${items[i].price.toFixed(2)} zł</span>
        <span class="price-sale">${(items[i].price - items[i].saleAmount).toFixed(2)}</span>
    </div>
    <button class="product-add-to-basket-btn">Dodaj do koszyka</button>
    <p class="product-item-sale-info">Promocja</p>
    `

    productSection.appendChild(newProduct);
    }
};

const renderCategories = (items) =>{
    for(let i = 0; i < items.length; i++){
        categories.add(items[i].category);
    }

    // console.log(categories);    //kategorie w set

    const categoriesItems = document.querySelector(".categories-items");
    categories = ["wszystkie", ...categories];

    // console.log(categories);    //konwert kategorii na tablice

    categories.forEach((category, index) =>{
        const newCategory = document.createElement('button');
        newCategory.innerHTML = category;

        index === 0 ? newCategory.classList.add("active") : "";

        categoriesItems.appendChild(newCategory);
    });
}

document.onload = renderProducts(currentProducts); //ladowanie przy odpaleniu strony
document.onload = renderCategories(currentProducts);