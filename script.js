   document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('tip_calculator_form');
        form.addEventListener('input', updateValue);
        form.addEventListener('change', updateValue);
    
        function updateValue () {
            const bill_total = parseFloat(document.getElementById('bill_total').value) || null;
            const tip_range = parseFloat(document.getElementById('tip_range').value);
            const tip_value = (bill_total * tip_range) / 100;
            const total_amount = bill_total + tip_value;
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
    
    });