"use strict";
const base520Dist = 17.3;
const i90BridgeAddl = 7.8;
const i405NorthAddl = 8.9;
const form = document.querySelector(".form");
const costcoField = document.querySelector(".form-input-costco");
const tollField = document.querySelector(".form-input-toll");
const resultP = document.querySelector(".results-text");
function whichRoute({ costcoPrice, tollPrice, mpg = 31 }) {
    const costPerGal = costcoPrice / mpg;
    const sr520Price = base520Dist * costPerGal + tollPrice;
    const i90Price = (base520Dist + i90BridgeAddl) * costPerGal;
    const sr405Price = (base520Dist + i90BridgeAddl) * costPerGal;
    if (sr520Price < i90Price && sr520Price < sr405Price) {
        return "520 Toll Bridge";
    }
    else if (i90Price < sr520Price && i90Price < sr405Price) {
        return "South to I-90";
    }
    else {
        return "North to the 405";
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!costcoField || !tollField || !resultP)
        return;
    const route = whichRoute({
        costcoPrice: +costcoField.value,
        tollPrice: +tollField.value,
    });
    resultP.textContent = route;
});
