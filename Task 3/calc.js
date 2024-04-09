
    function addToResult(value) {
        document.getElementById('result').innerText += value;
    }

    function clearResult() {
        document.getElementById('result').innerText = '0';
    }

    function calculateResult() {
        try {
            document.getElementById('result').innerText = eval(document.getElementById('result').innerText);
        } catch(error) {
            document.getElementById('result').innerText = 'Error';
        }
    }