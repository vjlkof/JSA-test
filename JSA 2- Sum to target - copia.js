const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const array1 = [9,1];
const array2 = [7,2,4,591,392,391,2,5,10,2,1,1,1,20,3];
const array3 = [5,5];
const array4 = [7,3,4,591,392,391,2,5,10,2,1,1,1,20,3];
const array5 = [1,2,4,591,392,391,2,5,10,2,1,1,1,5,5];
const array6 = [1,2,4,591,392,391,2,5,10,2,1,1,1,4,6];
const array7 = [5,5,5,5,5,5,5,5,5,4,4,4,4,4,6,6,6,"af","B"];



function sumToTarget(arr, target) {
  if (arr.length === 0 || typeof target != 'number' ){
    return []
  }
  
  arr =  [ ...new Set(arr)].filter(item => typeof item === 'number');

  for (let i=0;i < arr.length;i++) {
    for (let j=i+1;j < arr.length;j++) {
      if (arr[i] + arr[j] === target){
        return [arr[i], arr[j]]
      }
    };
  };

  return [];
}
