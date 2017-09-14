function theBeatlesPlay(arr1, arr2){
  var answer = [];
  
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      answer.push(`${arr1[i]} plays ${arr2[j]}`);
    }
  }
  return answer;
}
