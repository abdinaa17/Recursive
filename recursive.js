 Common JS questions using recursion. 
 
  // 1. Reverse a String
function reverse(str) {

if(str.length <= 1) return str
return reverse(str.slice(1)) + str[0] 

}


reverse('come')  // Output: emoc



// 2. Factorial 
function factorial(num) {
  if(num < 0) return `${num} is out of range`
  if (num <= 1) return 1
  return num * factorial(num -1)
}


factorial(6) // Output: 720

// 3. Fibonacci 
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
fib(6)   // Output: 8
