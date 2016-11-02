let sum = 0;

process.argv.forEach(function(element, index) {
    if(index >= 2) {
        sum += Number(element)
    }
});

console.log(sum);
