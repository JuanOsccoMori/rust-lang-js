let initial = 1;
let final = 10;


while (final != 0) {
    initial *= final;
    final --;
    if(final === 1)break;
}

console.log(initial);