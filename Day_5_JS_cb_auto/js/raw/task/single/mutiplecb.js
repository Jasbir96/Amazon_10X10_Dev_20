let amount = 100;
// library
function chargeCredit(delay, cb) {
    setTimeout(function () {
        cb();
        cb();
    }, delay);
}
// dev
chargeCredit(100, function () {
    amount = amount - 50;
    console.log("remaining amount", amount);
});





