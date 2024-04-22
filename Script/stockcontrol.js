document.addEventListener('DOMContentLoaded', function() {
    const equipmentData = {
    'IT': 'DELL LATITUDE 3540',
    'HR': 'DELL LATITUDE 3540',
    'BDA Design': 'DELL G15 5525',
    'BIM Design': 'DELL G15 5525',
    'Sales': 'DELL LATITUDE 3540',
    'Online Sales': 'DELL LATITUDE 3540',
    'FA Design': 'DELL G15 5525',
    'Estimating': 'DELL G15 5525',
    'Project Menagement': 'DELL LATITUDE 3540',  // Fixed typo from 'Project Menagment'
    'Marketing': 'DELL G15 5587 ',
    'Sales Support': 'DELL LATITUDE 3540',
    'Purchasing': 'DELL LATITUDE 3540',
    'Logistics': 'DELL LATITUDE 3540',
    'Finance': 'DELL LATITUDE 3540',
    'BPM': 'DELL LATITUDE 3540',
    'Costumer Success': 'DELL LATITUDE 3540'

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

