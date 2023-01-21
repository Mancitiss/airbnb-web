//decrease and increase amount guess when click button with id btn_decrease and btn_increase maximum 10 and minimum 0
function stepper(btn) {
    var input = btn.parentNode.querySelector('input[type=number]');
    var step = parseInt(input.getAttribute('step') || '1');
    var min = parseInt(input.getAttribute('min') || '0');
    var max = parseInt(input.getAttribute('max') || '10');
    if (btn.className == 'btn_increase') {
        if (input.value < max) {
            input.value = parseInt(input.value) + step;
        }
    } else {
        if (input.value > min) {
            input.value = parseInt(input.value) - step;
        }
    }
}