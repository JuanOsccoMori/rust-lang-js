function fibonnaci(num) {
    let fibo = [1, 1];
    for (let i = 2; i < num; i++) {
        fibo.push(fibo[i-1] + fibo[i-2]);
    }
    return fibo
}

console.log(fibonnaci(6))