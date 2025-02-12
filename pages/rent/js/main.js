import { drawCars } from "./drawCars.js";
import { params } from "./variable.js";


drawCars();

const sort_options = document.querySelector("#sort-options");

sort_options.addEventListener("click",function()
{
    console.log(this.value);
    switch(this.value)
    {
        case "popular":
            params.sort = "",
            params.order = ""
            break;
        case "top-rated":
            params.sort = "rating",
            params.order = "desc"
            break;
        case "latest":
            params.sort = "id",
            params.order = "desc"
            break;
        case "oldest":
            params.sort = "id",
            params.order = "asc"
            break;
        case "price-low-to-high":
            params.sort = "price.original",
            params.order = "asc"
            break;
        case "price-high-to-low":
            params.sort = "price.original",
            params.order = "desc"
            break;
        case "highest-discount":
            params.sort = "price.discount",
            params.order = "desc"
            break;
        case "lowest-discount":
            params.sort = "price.discount",
            params.order = "asc"
            break;
        case "a-to-z":
            params.sort = "name",
            params.order = "asc"
            break;
        case "z-to-a":
            params.sort = "name",
            params.order = "desc"
            break;    
    }
    drawCars();
})


