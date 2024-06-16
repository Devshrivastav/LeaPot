document.addEventListener('DOMContentLoaded', () => {
    const planPrice = 9;  // Base plan price
    const checkboxes = document.querySelectorAll('.addon-checkbox');
    const totalPriceElement = document.getElementById('total-price');
    const nextStepButton = document.getElementById('nextStepButton');

    function updateTotalPrice() {
        let total = planPrice;
        let selectedAddOns = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.getAttribute('data-price'), 10);
                selectedAddOns.push(checkbox.value);
            }
        });

        totalPriceElement.textContent = `+$${total}/mo`;

        // Store the selected add-ons and total price in local storage
        localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
        localStorage.setItem('totalPrice', total);
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotalPrice);
    });

    nextStepButton.addEventListener('click', updateTotalPrice);
});
