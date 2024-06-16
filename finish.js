document.addEventListener('DOMContentLoaded', () => {
    const selectedAddOns = JSON.parse(localStorage.getItem('selectedAddOns')) || [];
    const totalPrice = localStorage.getItem('totalPrice') || 9;
    const selectedAddOnsContainer = document.getElementById('selected-addons');
    const totalPriceElement = document.getElementById('total-price');

    selectedAddOns.forEach(addOn => {
        const addOnDiv = document.createElement('div');
        addOnDiv.className = 'addon';
        let price = '';
        if (addOn === 'Online service') {
            price = '+$1/mo';
        } else if (addOn === 'Larger storage') {
            price = '+$2/mo';
        } else if (addOn === 'Customizable Profile') {
            price = '+$2/mo';
        }
        addOnDiv.innerHTML = `${addOn} <span>${price}</span>`;
        selectedAddOnsContainer.appendChild(addOnDiv);
    });

    totalPriceElement.textContent = `+$${totalPrice}/mo`;
});
