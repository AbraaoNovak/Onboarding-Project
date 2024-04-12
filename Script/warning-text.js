document.addEventListener('DOMContentLoaded', function() {
    const peripheralCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    const channelCheckboxes = document.querySelectorAll('.checkbox-group-circles input[type="checkbox"]');
    const confirmationText = document.getElementById('confirmationText');
    const warningText = document.getElementById('warningText');
    const confirmCheckbox = document.getElementById('confirmCheckbox');
    const confirmLabel = document.querySelector('.checkbox-confirmation');
    const form = document.querySelector('form');

    function updateMessageVisibility() {
        let peripheralsCount = Array.from(peripheralCheckboxes).filter(cb => cb.checked).length;
        let channelsCount = Array.from(channelCheckboxes).filter(cb => cb.checked).length;

        confirmationText.style.display = (peripheralsCount >= 2 && channelsCount >= 2) ? 'block' : 'none';
    }

    form.addEventListener('submit', function(event) {
        let peripheralsCount = Array.from(peripheralCheckboxes).filter(cb => cb.checked).length;
        let channelsCount = Array.from(channelCheckboxes).filter(cb => cb.checked).length;

        if (peripheralsCount < 2 || channelsCount < 2) {
            event.preventDefault(); // Stop form from submitting
            warningText.style.display = 'block';
            confirmLabel.style.display = 'block'; // Show confirmation checkbox
        } else if (!confirmCheckbox.checked) {
            event.preventDefault(); // Stop form from submitting if not confirmed
            warningText.style.display = 'block';
            confirmLabel.style.display = 'block'; // Ensure checkbox is visible for confirmation
        }
    });

    peripheralCheckboxes.forEach(cb => cb.addEventListener('change', updateMessageVisibility));
    channelCheckboxes.forEach(cb => cb.addEventListener('change', updateMessageVisibility));
});
