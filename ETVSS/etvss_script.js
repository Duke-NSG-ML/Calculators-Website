const weights = [0, 0, 0.06174190617021196, -0.3348953234353766, -0.18259168484911523, -0.20652259966317557, 0, -0.155977730977675, 0, 0, -0.01633977544968374, 0, -1.4890106987302139];


function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
}

function predict() {
    // Process Input 1 (Select 5 values)
    const input1Values = document.querySelectorAll('input[name="input1"]:checked');
    const input1Sum = Array.from(input1Values).reduce((acc, checkbox) => acc + parseFloat(checkbox.value), 0);

    // Process Input 2 (Select multiple options)
    const input2Values = document.querySelectorAll('input[name="input2"]:checked');
    const input2Sum = Array.from(input2Values).reduce((acc, checkbox) => acc + parseFloat(checkbox.value), 0);

    // Process Input 3 (Select one option)
    const input3Value = parseFloat(document.querySelector('input[name="input3"]:checked').value);

    // Calculate the weighted sum
    const z = (
        weights[0] * input1Sum +
        weights[5] * input2Sum +
        weights[11] * input3Value
    );

    // Calculate the sigmoid of the weighted sum
    const prediction = sigmoid(z);

    // Display the prediction
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Prediction: ${prediction.toFixed(2)}`;
}
