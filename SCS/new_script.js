<!DOCTYPE html>
<html>
<head>
    <title>Duke ETV Success Score</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center">Duke ETV Success Score</h1>
        <div class="input-container">
            <div class="form-group">
                <label for="input1">Age of Patient:</label>
                <br>
                <label class="radio-inline"><input type="radio" name="input1" value="1">Less than 1 month</label>
                <label class="radio-inline"><input type="radio" name="input1" value="2">1 - 6 months</label>
                <label class="radio-inline"><input type="radio" name="input1" value="3">6 months to 1 year</label>
                <label class="radio-inline"><input type="radio" name="input1" value="4">1 year to 10 years</label>
                <label class="radio-inline"><input type="radio" name="input1" value="5">≥ 10 years</label>
            </div>
            <div class="form-group">
                <label for="input2">Etiology (Select as many as appropriate):</label>
                <br>
                <label class="checkbox-inline"><input type="checkbox" name="input2" value="0">Post-infectious</label>
                <label class="checkbox-inline"><input type="checkbox" name="input2" value="1">Myelomeningocele</label>
                <label class="checkbox-inline"><input type="checkbox" name="input2" value="2">IVH</label>
                <label class="checkbox-inline"><input type="checkbox" name="input2" value="3">Non-tectal Tumor</label>
                <label class="checkbox-inline"><input type="checkbox" name="input2" value="4">Tectal Tumor</label>
                <label class="checkbox-inline"><input type="checkbox" name="input2" value="5">Aqueductal Stenosis</label>
            </div>
            <div class="form-group">
                <label for="input3">Previous Shunting:</label>
                <br>
                <label class="radio-inline"><input type="radio" name="input3" value="0">No</label>
                <label class="radio-inline"><input type="radio" name="input3" value="1">Yes</label>
            </div>
            <button class="btn btn-primary btn-block" onclick="predict()">Predict</button>
        </div>
        <p id="result" class="text-center"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
