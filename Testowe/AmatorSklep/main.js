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

let currentProducts = products;
let categories = new Set(); //set nie pozwala na powtarzanie elementow
let basket = [];
let addToBasketButtons;
const productSection = document.querySelector(".products");

const addToBasket = (e) => {
    const selectedId = parseInt(e.target.dataset.id);

    const key = currentProducts.findIndex((product) => product.id === selectedId);   //znajduje index produktu

    basket.push(currentProducts.at(key)); //dodaje caly produkt do koszyka
    
    const basketTotal = basket.reduce((sum, product) => {
        return (sum += product.price - (product.saleAmont ? product.saleAmont : 0));
      }, 0);

    basketTotal > 0 ? basketClearBtn.classList.add("active") : basketClearBtn.classList.remove("active");

    basketAmountSpan.innerHTML = `${basketTotal} zł`;
};

const renderProducts = (items) =>{
    productSection.innerHTML = "";
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
    <button data-id="${items[i].id}" class="product-add-to-basket-btn">Dodaj do koszyka</button>
    <p class="product-item-sale-info">Promocja</p>
    `

    productSection.appendChild(newProduct);
    }
    addToBasketButtons = document.querySelectorAll('.product-add-to-basket-btn');

    addToBasketButtons.forEach((btn) => btn.addEventListener('click', addToBasket));
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
        newCategory.dataset.category = category;

        index === 0 ? newCategory.classList.add("active") : "";

        categoriesItems.appendChild(newCategory);
    });
}

document.onload = renderProducts(currentProducts); //ladowanie przy odpaleniu strony
document.onload = renderCategories(currentProducts);

const categoriesButton = document.querySelectorAll(".categories-items button");

categoriesButton.forEach(btn => btn.addEventListener('click', (e) =>{
        const category = e.target.dataset.category;

        categoriesButton.forEach(btn => btn.classList.remove("active"));

        e.target.classList.add("active");

        currentProducts = products;

        if(category === 'wszystkie') currentProducts = products;
        else{
            currentProducts = currentProducts.filter((product) => product.category === category)
        }
        
        renderProducts(currentProducts);
    })
);

const searchBarInput = document.querySelector('.search-bar-input');


searchBarInput.addEventListener('input', (e) => {
    const search = e.target.value;

    const foundProducts = currentProducts.filter((product) => {
        if(product.name.toLowerCase().includes(search.toLowerCase())) return product;
    })

    const emptyState = document.querySelector('.empty-state');

    foundProducts.length === 0 ? emptyState.classList.add("active") : emptyState.classList.remove("active");

    renderProducts(foundProducts);
})

const basketClearBtn = document.querySelector('.basket-clear-btn');
const basketAmountSpan = document.querySelector(".basket-amount");

const clearBasket = () => {
    basketAmountSpan.innerHTML = "Koszyk";
    basket = [];
}

basketClearBtn.addEventListener('click', clearBasket);

