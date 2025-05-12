function numOrder(operator){

    count=0
    switch (operator) {
        case '+':
          count++;
          break;
        case '-':
          count--;
          break;
    }
    document.getElementById('result').value = count;
}