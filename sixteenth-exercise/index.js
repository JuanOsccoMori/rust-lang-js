


function fibonnaci(num) {
    let fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo.push(fibo[i-1] + fibo[i-2]);
        console.log(fibo[i])
    } 
}

fibonnaci(6)