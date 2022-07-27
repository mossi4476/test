function printArray(arr, n) {
  for (let i = 0; i < n; i++) document.write(arr[i] + " ");
}
function compare(a, b) {
  if (a % 2 == 0 && b % 2 == 0 && a > b) return -1;

  if (a % 2 != 0 && b % 2 != 0 && b < a) return 1;

  if (a % 2 != 0) return -1;

  return 1;
}

var arr = [1, 2, 6, 7, 8, 4, 1, 9, -3];
var n = arr.length;

arr.sort(compare);

printArray(arr, n);
