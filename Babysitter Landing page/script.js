document.getElementById('pop-up-newsletter').addEventListener('click', function (event) {
    if (event.target == document.getElementById('pop-up-newsletter')) {
        document.getElementById('pop-up-newsletter').style.display = 'none';
    }
});

setTimeout(function () {
    document.getElementById('pop-up-newsletter').style.display = 'flex';
}, 60000);