   document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('tip_calculator_form');
        form.addEventListener('input', updateValue);
        form.addEventListener('change', updateValue);
    
       function updateValue (e) {
            const bill_total = document.getElementById('bill_total').value;
            if(containsAnyLettersOrCharacters(bill_total)){
                alert("Please Enter a Valid Bill Amount");
                e.stopPropogation();
                return;
            }
            const bill_value = parseFloat(bill_total);
            const tip_range = parseFloat(document.getElementById('tip_range').value);
            const tip_value = (bill_value * tip_range) / 100;
            const total_amount = bill_value + tip_value;
            if(bill_total <=0){
                alert("Please Enter a Valid Bill Amount");
                document.getElementById('tip_range').value = 0;
                document.getElementById('tip_value').value = null;
                document.getElementById('bill_total').value = null;
                document.getElementById('tip_percentage').value = null;
                document.getElementById('total_amount').value = null;
                return;
            }   
    
            document.getElementById('tip_percentage').value = tip_range.toFixed(2);
            document.getElementById('tip_value').value = tip_value.toFixed(2);
            document.getElementById('total_amount').value = total_amount.toFixed(2);
        }
      
        function containsAnyLettersOrCharacters(str) {
            return /[a-zA-Z]/.test(str) || /[+-]/.test(str);
        }
    
    });
