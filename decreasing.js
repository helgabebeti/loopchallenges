var sum = 0;
for(var i=1; i<100; i++) {
    if(i % 3 === 0 || i % 100 === 0){
        sum += i;
    }
    console.log(sum);
}