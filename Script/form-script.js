document.getElementById('department').addEventListener('change', function() {
    var equipmentInput = document.getElementById('equipment');
    if (this.value === 'BIM' || this.value === 'Engineering' || this.value === 'FA Design' || this.value === 'Estimating') {
        equipmentInput.value = 'DELL G15 5525';
    } else {
        equipmentInput.value = 'DELL LATITUDE 3540';
    }
});