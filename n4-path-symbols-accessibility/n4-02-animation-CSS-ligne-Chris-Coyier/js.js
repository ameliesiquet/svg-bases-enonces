/* Affichez dans la console la longueur du path */
document.addEventListener('DOMContentLoaded', function() {
    const path = document.querySelector('path');
    const length = path.getTotalLength();
    console.log(length);
});
