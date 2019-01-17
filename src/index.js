
/**
 * Finds the given label's corresponding checkbox
 * 
 * @param {(HTMLLabelElement|HTMLInputElement)} el A label or input element
 * @returns {HTMLInputElement} The corresponding checkbox or NULL if not found
 */
function findCheckbox(element) {
    switch (element.tagName) {
        case 'INPUT':
            return element.type === 'checkbox' ? element : null;
        case 'LABEL':
            return findCheckbox(element.htmlFor ? document.getElementById(element.htmlFor) : element.querySelector('INPUT'));
        default:
            return null;
    }
}

/**
 * Adds a one time click event listener to the checkbox
 * 
 * @param checkbox {HTMLInputElement}
 */
function addListener(checkbox) {
    var state = checkbox.indeterminate
        ? [true, false]
        : checkbox.checked
        ? [false, false]
        : [false, true];
        
    var getHandler = ([checked, indeterminate]) => function () {
        checkbox.checked = checked;
        checkbox.indeterminate = indeterminate;
    }
    
    checkbox.addEventListener('click', getHandler(state), { once: true });
}


export default function (checkbox) {
    
    document.addEventListener('mouseup', function (e) {
        if (findCheckbox(e.target) !== checkbox || e.which !== 1) return;
        
        addListener(checkbox);
    }, true);

    document.addEventListener('keyup', function (e) {
        if (findCheckbox(e.target) !== checkbox || e.keyCode !== 32) return;
        
        addListener(checkbox);
    }, true);

}
