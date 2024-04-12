document.getElementById('allAbove').addEventListener('change', function() {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox !== document.getElementById('allAbove')) {
            checkbox.checked = isChecked;
        }
    });
});