var url = "https://localhost:44329/products";

var productList = document.getElementById("products-list");
if (productList) {
    fetch(url)
        .then(response => response.json())
        .then(data => showProducts(data))
        .catch(ex => {
            alert("Something went wrong...");
            console.log(ex);
        });
}


function showProducts(products) {
    products.forEach(product => {
        let li = document.createElement("li");
        let text = `${product.name} ($ ${product.price})`;
        li.appendChild(document.createTextNode(text))
        productList.appendChild(li);
    });

}