
// 이진 검색
function binarySearch(arr, elem) {
  let start = 0;
  // -1 빼지 않으면 배열의 범위를 벗어남
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log(start, end, middle);
  while (arr[middle] !== elem && (start + end) / 2) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 8, 10, 22, 35, 44], 10);
// [2,5,6,8,10,22,35,44],15
//  S     M           E
