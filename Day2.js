class ArrayUtilities {
    /* Your magic here */
    static addZeros = (numbers) => numbers.map((number) => `${number}0`);
    static moreThanFifty = (numbers) => numbers.filter((number) => number > 50);
    static removeFirst = ([first, ...numbers]) => numbers;
    static sumAll = (numbers) => numbers.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    static divide = (number) => [...String(number)];
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const addZeros = ArrayUtilities.addZeros(numbers);
  console.log(addZeros);
  /* [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] */
  
  const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
  console.log(moreThanFifty);
  /* [60, 70, 80, 90, 100] */
  
  const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
  console.log(noFirst);
  /* [70, 80, 90, 100] */
  
  const sumAll = ArrayUtilities.sumAll(noFirst);
  console.log(sumAll);
  /* 340 */
  
  const divided = ArrayUtilities.divide(sumAll);
  console.log(divided);
  /* ["3","4","0"] */
  