import { API_CARS } from "./constant.js";
import { fetchAPI } from "./fetchAPI.js";
import { params } from "./variable.js";


export function drawCars() {
    const api = `${API_CARS}?_sort=${params.sort}&_order=${params.order}`
    console.log(api);
    fetchAPI(api)
        .then(data => {
            const showing = document.querySelector(".option .showing");
            showing.innerHTML = `Showing all ${data.length} results`
            let cars = data.map(item => {
                return `
            <div class="item">
                    <img src="${item.image}" alt="product-1">
                    <ul class="status">
                        <li><i class="fa-regular fa-heart"></i></li>
                        <li><i class="fa-solid fa-shuffle"></i></li>
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    </ul>
                    <div class="price">${item.price.original}$</div>
                     ${item.price.discount !== 0 ? `<div class="discount">${item.price.discount}%</div>` : ""}
                    <button class="btn-buy">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Add to cart</p>
                    </button>
                </div>
            `
            })
            const products_list = document.querySelector(".list-products");
            products_list.innerHTML = cars.join("");

            const heart = document.querySelectorAll(".item .fa-heart");
            heart.forEach(item => {
                item.addEventListener("click", function () {
                    item.classList.toggle("fa-solid");
                    item.classList.toggle("fa-regular");
                });
            });
            const info = document.querySelectorAll(".item .fa-magnifying-glass");
            const modal = document.querySelector(".info");
            const layout_blur = document.querySelector(".modal");
            info.forEach((item, index) => {
                modal.innerHTML = "",
                    item.addEventListener("click", function () {
                        layout_blur.style.display = "block"
                        modal.classList.add("show");
                        modal.innerHTML = `
                <div class="card_1">
                    <img src="${data[index].image}" alt="">
                </div>
                <div class="card_2">
                    <div class="car_name">${data[index].name}</div>
                    <div class="car_rating"><i class="fa-solid fa-star"></i> ${data[index].rating}</div>
                    <div class="car_price">${data[index].price.original}$</div>
                    <div class="car_decs">${data[index].description}</div>
                    <hr>
                    <table>
                        <tr>
                            <td>Brand</td>
                            <td>${data[index].details.brand}</td>
                        </tr>
                        <tr>
                            <td>SKU</td>
                            <td>${data[index].details.sku}</td>
                        </tr>
                        <tr>
                            <td>Stock</td>
                            <td>${data[index].details.status}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>${data[index].details.categories}</td>
                        </tr>
                    </table>
                </div>
                `
                    })
            })
            window.addEventListener("click", function (e) {
                if (!modal.contains(e.target) && !e.target.classList.contains("fa-magnifying-glass")) {
                    modal.classList.remove("show");
                    layout_blur.style.display = "none"
                }
            });
        })
}