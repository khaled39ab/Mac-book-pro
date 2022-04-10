document.getElementById("extra-parts").addEventListener("input", (e) => {
    const bestPriceText = document.getElementById("best-price");
    const bestPrice = parseInt(bestPriceText.innerText);

    let totalPrice;
    const totalPriceText = document.getElementById("total-price");
    totalPriceText.innerText = totalPrice;

    const extraMemoryText = document.getElementById("extra-memory");
    const extraMemory = parseInt(extraMemoryText.innerText);
    
    const extraStorageText = document.getElementById("extra-storage");
    const extraStorage = parseInt(extraStorageText.innerText);

    const deliveryChargeText = document.getElementById("delivery-charge");
    const deliveryCharge = parseInt(deliveryChargeText.innerText);

    const grandTotalText = document.getElementById("grand-total");
    const grandTotal = parseInt(grandTotalText.innerText);

    if (e.target.getAttribute('name') == "memory") {
        if (e.target.value == 2) {
            const extraMemoryCost = 180;
            extraMemoryText.innerText = extraMemoryCost;

            totalPrice = bestPrice + extraMemoryCost + extraStorage + deliveryCharge;
            totalPriceText.innerText = totalPrice;

            grandTotalText.innerText = totalPrice;
        } else {
            const memoryCost = 0;
            extraMemoryText.innerText = memoryCost;

           totalPrice = bestPrice + memoryCost + extraStorage + deliveryCharge;
           totalPriceText.innerText = totalPrice;

           grandTotalText.innerText = totalPrice;
        }
    }
    else if (e.target.getAttribute('name') == "storage") {
        if (e.target.value == 2) {
            const extraStorageCost = 100;
            extraStorageText.innerText = extraStorageCost;

            totalPrice = bestPrice + extraStorageCost + extraMemory + deliveryCharge;
            totalPriceText.innerText = totalPrice;

            grandTotalText.innerText = totalPrice;
        } else if (e.target.value == 3) {
            const extraStorageCost = 180;
            extraStorageText.innerText = extraStorageCost;

            totalPrice = bestPrice + extraStorageCost + extraMemory + deliveryCharge;
            totalPriceText.innerText = totalPrice;

            grandTotalText.innerText = totalPrice;
        } else{
            const extraStorageCost = 0;
            extraStorageText.innerText = extraStorageCost;

            totalPrice = bestPrice + extraStorageCost + extraMemory + deliveryCharge;
            totalPriceText.innerText = totalPrice;

            grandTotalText.innerText = totalPrice;
        }
    }
    else if (e.target.getAttribute('name') == "delivery") {
        if (e.target.value == 1) {
            const deliveryCharge = 0;
            deliveryChargeText.innerText = deliveryCharge;

            totalPrice = bestPrice + extraStorage + extraMemory + deliveryCharge;
            totalPriceText.innerText = totalPrice;

            grandTotalText.innerText = totalPrice;
        } else{
            const deliveryCharge = 20;
            deliveryChargeText.innerText = deliveryCharge;

            totalPrice = bestPrice + extraStorage + extraMemory + deliveryCharge;
            totalPriceText.innerText = totalPrice;

            grandTotalText.innerText = totalPrice;
        }
    }
});

//Promo code apply button
document.getElementById("apply-btn").addEventListener("click", function(){
    const promoCodeText = document.getElementById("promo-input");
    const promoCode = promoCodeText.value;
    if(promoCode === "steveKaku"){
        const grandTotalText = document.getElementById("grand-total");
        const totalPriceText = document.getElementById("total-price");
        const totalPrice = totalPriceText.innerText;
        grandTotalText.innerText = Math.ceil(totalPrice * 0.80);

        promoCodeText.value = "";
    } else {
        alert("Wrong Promo Code");
        promoCodeText.value = "";
    }
});