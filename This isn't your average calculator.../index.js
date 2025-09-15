<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css"> </head>
<body>
    <div class="calculator">
        <input type="text" id="display" value="0">
        <button onclick="clearDisplay()" class="clear">C</button>
        <button onclick="append('/')" class="operator">÷</button>
        <button onclick="append('*')" class="operator">×</button>
        <button onclick="append('-')" class="operator">-</button>
        <button onclick="append('7')">7</button>
        <button onclick="append('8')">8</button>
        <button onclick="append('9')">9</button>
        <button onclick="append('+')" class="operator">+</button>
        <button onclick="append('4')">4</button>
        <button onclick="append('5')">5</button>
        <button onclick="append('6')">6</button>
        <button onclick="append('.')">.</button>
        <button onclick="append('1')">1</button>
        <button onclick="append('2')">2</button>
        <button onclick="append('3')">3</button>
        <button onclick="calculate()" class="equal">=</button>
        <button onclick="append('0')" style="grid-column: span 2;">0</button>
        <button onclick="append('(')"> ( </button>
        <button onclick="append(')')"> ) </button>
    </div>

    <script>
        let display = document.getElementById("display");

        function append(value) {
            if (display.value === "0" && value !== '.') {
                display.value = value;
            } else {
                display.value += value;
            }
        }

        function calculate() {
            try {
                // Sanitize input to prevent code injection
                const sanitizedExpression = display.value.replace(/[^-()\d/*+.]/g, '');
                display.value = eval(sanitizedExpression);
            } catch {
                display.value = "Error";
            }
        }

        function clearDisplay() {
            display.value = "0";
        }
    </script>
</body>
</html>
