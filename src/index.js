
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
            return findCheckbox(element.htmlFor ? document.getElementById(element.htmlFor) : element.querySelementector('INPUT'));
        default:
            return null;
    }
}


export default function (checkbox) {
    document.addEventListener('mouseup', function (e) {
        if (findCheckbox(e.target) !== checkbox || e.which !== 1) return;
        
        if (checkbox.indeterminate) {
            checkbox.addEventListener('click', function () {
                checkbox.checked = true;
            }, { once: true });
        } else if (!checkbox.checked) {
            checkbox.addEventListener('click', function () {
                checkbox.checked = false;
                checkbox.indeterminate = true;
            }, { once: true });
        }
    }, true);
}
