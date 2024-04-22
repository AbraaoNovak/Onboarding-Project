document.getElementById('department').addEventListener('change', function() {
    var equipmentInput = document.getElementById('equipment');
    if (this.value === 'BIM Design' || this.value === 'BDA Design' || this.value === 'FA Design' || this.value === 'Estimating' || this.value === 'Marketing') {
        equipmentInput.value = 'DELL G15 5525';
    } else {
        equipmentInput.value = 'DELL LATITUDE 3540';
    }
});