const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20] 
const array2 = [0,1,2,4,591,392,391,2,5,10,2,1,1,1,20,591]
const array3 = [1,1,1]
const array4 = [1,1,1,2,3,3]
const array5 = [1,2,2,3]
const array6 = [2, "2", "3", 3]
const array7 = [1,2,4,591,392,391,"2",5,10,2,"1","1",1,"20","20"] 
const array8 = ["0",1,2,4,591,392,391,2,5,10,2,1,1,1,20,591,"a"]
const array9 = ["2", "2", "3", "3","a","A"]

function compare(a, b) {
  return a - b;
}

function groupArray(arr){
  let newArray = [];
  if (arr.length === 0){
    return newArray
  }
  let newVal = arr[0];
  let eqArray = [];
  let hasArray = false;
  for (let i=1;i < arr.length;i++){
    if (arr[i] === newVal){  
      eqArray.push(newVal);
      hasArray = true;
    }else{
      if (hasArray){
        eqArray.push(newVal);
        newArray.push(eqArray);
        hasArray = false;
        eqArray = [];
      }else{
        newArray.push(newVal);
      }
    }
    newVal = arr[i];
  };
  if (hasArray){
    eqArray.push(newVal);
    newArray.push(eqArray);
  }else{
    newArray.push(newVal);
  }
  return newArray
}

function arrayOrganizer(arr) {
  let newArray = [];
  if (arr.length === 0){
    return newArray
  }
  
  numberArray = groupArray(arr.filter(item => typeof item === 'number').sort(compare));
  stringArray = groupArray(arr.filter(item => typeof item != 'number').sort());

  if (numberArray.length > 0 && stringArray.length === 0){
    return numberArray;
    }
    
  if (numberArray.length === 0 && stringArray.length > 0){
    return stringArray;
    }
  return newArray = [numberArray,stringArray]
}
