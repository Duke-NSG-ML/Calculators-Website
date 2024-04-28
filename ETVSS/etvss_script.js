// Pranav Warman 2023
const weights = [0.194, -0.181, 0.121, 0.118, 0.0, -0.286, -0.045, -0.047, 0.0, 0.035, 0.0, 0.154, 0.0, -1.512, 0.945]
// [0, 0, 0.06174190617021196, -0.3348953234353766, -0.18259168484911523, -0.20652259966317557, 0, -0.155977730977675, 0, 0, -0.01633977544968374, 0, -1.4890106987302139];

function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
}

function validateInputs() {
    const input1Value = parseFloat(document.getElementById('input1').value);
    const input2Values = document.querySelectorAll('input[name="input2"]:checked');
    const input3Value = parseFloat(document.getElementById('input3').value);

    if (isNaN(input1Value) || input2Values.length === 0 || isNaN(input3Value)) {
        alert('Please select an option for all three questions.');
        return false;
    }

    return true;
}

function predict() {
    if (!validateInputs()) {
        return;
    }

    // Process Input 1 (Select one option)
    const input1Value = parseFloat(document.getElementById('input1').value);

    // Process Input 2 (Select multiple options)
    const input2Values = document.querySelectorAll('input[name="input2"]:checked');
    const input2Sum = Array.from(input2Values).reduce((acc, checkbox) => acc + weights[parseInt(checkbox.value)+5], 0);
    console.log(input2Sum)
    // Process Input 3 (Select one option)
    const input3Value = parseFloat(document.getElementById('input3').value);
    console.log(weights[12 + input3Value])
    // Calculate the weighted sum
    const z = (
        weights[input1Value - 1] + // Subtract 1 since the values start from 1
        input2Sum + 
        weights[12 + input3Value] +
        weights[14]
    );
    
    console.log(z);
    // Calculate the sigmoid of the weighted sum
    const prediction = sigmoid(z);
    const predictionPercentage = (prediction *100).toFixed(2)

    // Display the prediction
    const resultElement = document.getElementById('resultText');
    resultElement.innerText = `ETV Success Prediction: ${predictionPercentage}%`;
}
