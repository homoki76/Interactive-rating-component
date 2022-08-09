let submitBtn = document.getElementById("submit");
let rates = document.querySelectorAll("[data-rate]");
let selectedRate;
let ratingCard = document.getElementById("ratingCard");
let successCard = document.getElementById("ty-wrapper");

// getting the selected rate
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        selectedRate = rate.innerText;

        // removing .selected class on other numbers
        rates.forEach((rate) => {
            rate.classList.remove("numButtonActive");
        });

        // adding .selected class to the selected number
        rate.classList.add("numButtonActive");
    });
});

// sending the selected rate to the (thank you) card

submitBtn.addEventListener("click", () => {
    if (selectedRate) {
        let selectedRateContainer = document.getElementById(
            "selection"
        );
        selectedRateContainer.innerText = selectedRate;

        document.getElementById("ty-wrapper").style.display = "block";
        document.getElementById("wrapper").style.display = "none";
    }
});