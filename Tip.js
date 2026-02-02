document.getElementById('calculate').addEventListener('click', function() {
            let bill = parseFloat(document.getElementById('bill').value);
            let tipPercent = parseFloat(document.getElementById('tip').value);
            let people = parseInt(document.getElementById('people').value);

            if (isNaN(bill) || bill <= 0) {
                alert("Please enter a valid bill amount");
                return;
            }
            if (isNaN(tipPercent) || tipPercent < 0) {
                alert("Please enter a valid tip percentage");
                return;
            }
            if (isNaN(people) || people <= 0) {
                alert("Please enter a valid number of people");
                return;
            }

            let totalTip = (bill * tipPercent) / 100;
            let tipPerPerson = totalTip / people;
            let totalPerPerson = (bill + totalTip) / people;

            document.getElementById('tipPerPerson').textContent = tipPerPerson.toFixed(2);
            document.getElementById('totalPerPerson').textContent = totalPerPerson.toFixed(2);
        });