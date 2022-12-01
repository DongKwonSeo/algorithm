// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[i], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log("ONE PASS COMPLETE!");
//   }
//   return arr;
// }

// 리팩토링
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps;
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      console.log(arr, arr[i], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    // console.log("ONE PASS COMPLETE!")
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([33, 45, 11, 21, 55, 21]);
refactoring