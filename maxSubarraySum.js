function maxSubarraySum (arr,num){
    if(num>arr.length){
      return null;
    }
    // 양수로만 작업을 하지 않는 한 0에서 시작하는 것은 도움이 되지 않기 떄문에
    // -Infinity로 설정
    let max = -Infinity;
    for(let i =0; i<arr.length-num + 1; i++){
      // 각 루프의 합계 저장 (temp)
      temp = 0;
  
      for(let j =0; j <num; j++){
        temp += arr[i+j];
      }
      if(temp>max){
         max = temp;
       
      }
    }
    return max;
  }
  
  maxSubarraySum([1,2,5,2,8,1,5],2,)