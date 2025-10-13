const dropdownValues = document.querySelectorAll('.dropdown__value');
dropdownValues.forEach(dropdownValue => {
    const dropdown = dropdownValue.closest('.dropdown');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    dropdownValue.addEventListener('click', function() {
        dropdownList.classList.toggle('dropdown__list_active');
    });
    const dropdownItems = Array.from(dropdown.querySelectorAll('.dropdown__item'));
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const link = this.querySelector('.dropdown__link');
            dropdownValue.textContent = link.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        });
    });
});