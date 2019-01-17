import indeterminableCheckbox from 'indeterminable-checkbox';


document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('input[type="checkbox"]').forEach(function (el) {
        indeterminableCheckbox(el);
    });
    
    document.querySelectorAll('input[type="checkbox"][data-indeterminate]').forEach(function (el) {
        el.indeterminate = true;
    });
    
});
