function factorial(n) {
  // Факториалы 0 и 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // У отрицательных чисел факториал не определен
  if (n < 0) {
    return undefined;
  }
 let result = n;
 // Цикл - умножить на (n-1), (n-2), и так далее до 1
 for (let i = n - 1; i > 1; i--) {
   result *= i; // либо result = result * i; - одно и то же
 }
 return result;
}
// Для проверки: 
// result = 5, i = 4 -> result = 5 * 4 = 20
// result = 20, i = 3 -> result = 20 * 3 = 60
// result = 60, i = 2 -> result = 60 * 2 = 120
// result = 120, i = 1 -> цикл заканчивается
// return 120

console.log(factorial(5)); // должно вывести 120
console.log(factorial(0)); // должно вывести 1
console.log(factorial(1)); // должно вывести 1
console.log(factorial(-1)); // должно вывести undefined
console.log(factorial(4)); // должно вывести 24