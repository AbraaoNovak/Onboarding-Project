document.addEventListener('DOMContentLoaded', function() {
    const equipmentData = {
    'IT': 'DELL LATITUDE 3540',
    'HR': 'DELL LATITUDE 3540',
    'Engineering': 'DELL G15 5525',
    'BIM': 'DELL G15 5525',
    'Sales': 'DELL LATITUDE 3540',
    'Customer Services': 'DELL LATITUDE 3540',
    'Supply Chain': 'DELL LATITUDE 3540',
    'FA Design': 'DELL G15 5525',
    'Estimating': 'DELL G15 5525',
    'Project Management': 'DELL LATITUDE 3540',  // Fixed typo from 'Project Menagment'
    'Sales Representative': 'DELL LATITUDE 3540',
    'Sales Support & Online Sales': 'DELL LATITUDE 3540'
    };

    const stockData = {
    'DELL G15 5525': 10,
    'DELL LATITUDE 3540': 1,
    };

    console.log

    document.getElementById('department').addEventListener('change', function() {
        const selectedArea = this.value;
        const equipmentInput = document.getElementById('equipment');
        const stockStatus = document.getElementById('stockStatus');

        if (selectedArea && equipmentData[selectedArea]) {
            equipmentInput.value = equipmentData[selectedArea];
            updateStockDisplay(equipmentData[selectedArea]);
        } else {
            equipmentInput.value = '';
            stockStatus.style.display = 'none';
        }
    });

    function updateStockDisplay(equipment) {
        const stockStatus = document.getElementById('stockStatus');
        if (stockData[equipment] > 0) {
            stockStatus.textContent = `Availability: In Stock (${stockData[equipment]} units available)`;
            stockStatus.className = 'stock-available';
            stockStatus.style.display = 'block';
        } else {
            stockStatus.textContent = "Availability: Out of Stock";
            stockStatus.className = 'stock-unavailable';
            stockStatus.style.display = 'block';
        }
    }

    
    });

