document.addEventListener('DOMContentLoaded', function() {
    const billingOptions = document.querySelectorAll('input[name="billing"]');
    const prices = document.querySelectorAll('.price');

    billingOptions.forEach(option => {
        option.addEventListener('change', updatePrices);
    });

    function updatePrices() {
        const billingType = document.querySelector('input[name="billing"]:checked').value;

        prices.forEach(price => {
            price.textContent = price.getAttribute(`data-${billingType}`);
        });
    }
    
    // Initialize prices on load
    updatePrices();
});
