document.addEventListener('input', (e) => {
    const bestPriceText = document.getElementById("best-price");
    const bestPrice = parseInt(bestPriceText.innerText);

    if (e.target.getAttribute('name') == "memory") {
        if (e.target.value == 2) {
            const extraMemoryText = document.getElementById("extra-memory");
            const extraMemoryCost = 180;
            extraMemoryText.innerText = extraMemoryCost;

            const totalPrice = document.getElementById("total-price");
            totalPrice.innerText = bestPrice + extraMemoryCost;
        } else{
            const extraMemoryText = document.getElementById("extra-memory");
            const extraMemoryCost = 0;
            extraMemoryText.innerText = extraMemoryCost;

            const totalPrice = document.getElementById("total-price");
            totalPrice.innerText = bestPrice + extraMemoryCost;
        }
    }
    else if (e.target.getAttribute('name') == "storage") {
        if (e.target.value == 2) {
            document.getElementById("extra-storage").innerText = 100;
        } else if (e.target.value == 3) {
            document.getElementById("extra-storage").innerText = 180;
        }
    }
    else if (e.target.getAttribute('name') == "delivery") {
        if (e.target.value == 2) {
            document.getElementById("delivery-charge").innerText = 20;
        }
    }
});