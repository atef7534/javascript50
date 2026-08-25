// Import Stage
// The entire array
import  placeholderPropertyObj  from "./properties/placeholderPropertyObj.js"

// The placeholder property
import  propertyForSaleArr  from "./properties/propertyForSaleArr.js"

function getPropertyHtml(sales = [placeholderPropertyObj]) {
    const response = sales.map(
        item => {
        return `
                <section class="card">
                    <img src="./images/${item.image}">
                    <div class="card-right">
                        <h2>${item.propertyLocation}</h2>
                        <h3>${item.priceGBP}</h3>
                        <p>${item.comment}</p>
                        <h3>${
                            item.roomsM2.reduce(
                                (total, currentValue) => total + currentValue, 0
                            )
                        } m&sup2;</h3>
                    </div>
                </section> 
                `
        }).join('')
        return response
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)