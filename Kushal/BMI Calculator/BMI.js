const form = document.getElementById('bmiForm');
const results = document.getElementById('results');
const bmiResult = document.querySelector('.bmi-result');
const bmiCategory = document.querySelector('.bmi-category');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

function getBMICategory(bmi) {
    if (bmi < 18.5) return { category: 'Underweight', color: '#4299E1' };
    if (bmi < 25) return { category: 'Normal weight', color: '#48BB78' };
    if (bmi < 30) return { category: 'Overweight', color: '#ECC94B' };
    return { category: 'Obese', color: '#F56565' };
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (height <= 0 || isNaN(height)) {
        showError('Please enter a valid height');
    } else if (weight <= 0 || isNaN(weight)) {
        showError('Please enter a valid weight');
    } else {
        const bmi = (weight / (height * height)) * 10000;
        const { category, color } = getBMICategory(bmi);
        results.style.display = 'block';
        bmiResult.textContent = `Your BMI: ${bmi.toFixed(1)}`;
        bmiCategory.textContent = category;
        bmiCategory.style.color = color;
    }
});

function showError(message) {
    results.style.display = 'block';
    bmiResult.textContent = 'Error';
    bmiCategory.textContent = message;
    bmiCategory.style.color = '#F56565';
}

// Hide results when user changes input
heightInput.addEventListener('input', () => { results.style.display = 'none'; });
weightInput.addEventListener('input', () => { results.style.display = 'none'; });

// Prevent negative or zero values in input fields
heightInput.addEventListener('input', () => {
    if (heightInput.value < 1) heightInput.value = '';
});
weightInput.addEventListener('input', () => {
    if (weightInput.value < 1) weightInput.value = '';
});