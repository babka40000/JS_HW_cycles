function easyNum(n) {
    res = [];
    count = 2;
    
    while (count < 100000000) {

        easy = true;

        for (let i=2; i <= count; i++) {
            if ((count % (i) == 0) && (count != i))  {
                easy = false;
                break;
            }  
        }

        if (easy == true) {
            res.push(count);

            if (res.length == n) {
                return res;
            }
        }

        count++;
    }
}

let n = process.argv[2]
console.log(easyNum(n))