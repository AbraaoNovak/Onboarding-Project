document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#fullName, #email, #leader, #department, #equipment, #position, #identification, #location, .department, .equipment, #date');
    const confirmationText = document.getElementById('confirmationText');

    function updateMessageVisibility() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value === '' || (input.tagName === 'SELECT' && input.selectedIndex === 0)) {
                allFilled = false;
            }
        });
        confirmationText.style.display = allFilled ? 'block' : 'none';
    }

    inputs.forEach(input => input.addEventListener('change', updateMessageVisibility));
});
