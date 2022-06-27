// 1 A) print odd number in array   
function oddnumreturn(array){
    let resultArray=[];
     for(let ele of array){
      if(ele%2!==0){
        resultArray.push(ele)
      }   
     }  
     return resultArray;
    }
    console.log(oddnumreturn([1,2,3,4,5,6,7]));
  
  // B)Convert all the strings to title caps in a string array
      function toTitlecase(str){
        return str.toLowerCase().split(' ').map(function (word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }
      console.log(toTitlecase("wecome to happy learning"));
     
  // C) Sum of all numbers in an array
       Addnum=function(array){
     return array.reduce ((a, b) => a + b);
     };
     var array=[2,5,6,4];
     var sum=Addnum(array);
     console.log(sum);
  //  D) Return all the prime numbers in an array

  let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   let result = [];
     function isPrime(num) {
  if(num < 2) return false;

  for (let i = 2; i < num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});

console.log(result);
// E) Return all the palindromes in an array
const kalai=function(text){
    a=[];
    for (let key of text){
      output=key.split('').reverse().join('');
      if(output==key){
        a.push(output)
      }
    }
     console.log(a);
   };
    kalai(['madam','1011','123','malayalam']);

//F) Remove duplicates from an array
var a = ['fayez','fawaz','nawaz','fayez','bayas','nawaz','fayez'];


let dup = a.filter(function(value, index)
{ 
    return a.indexOf(value) == index 
});
console.log("DUPLICATES : " + dup);

//G)Return median of two sorted arrays of the same size.
   
 let median=(function(value1,value2){
  arr=[...value1,...value2];
  
  for (a=0;a<arr.length;a++) {
    for (b=0;b<arr.length;b++) {
        if(arr[a]<arr[b])
        {
            temp=arr[a];
            arr[a]=arr[b];
            arr[b]=temp;
        }
    }    
  }
  index=arr.length/2;
  median=(arr[index]+arr[index+1])/2;
  return median;

});

console.log(median([1,2,3,4,5,6],[7,8,9,10]));
// H) Rotate an array by k times.
(()=>{
  let rotateArray=function(arr,k){
    if(k==arr.length || k%arr.length==0)
    return arr;
    if(k>arr.length)
   k=k%arr.length;                                 
   for(i=0;i<k;i++){
      use=arr[arr.length-1];
      arr.unshift(use);
      arr.length=arr.length-1;
   }
   return arr;
 }
  console.log(rotateArray([1,2,3,4],6));
})()
// 2 ) Do the below programs in arrow functions.
  //B) Convert all the strings to title caps in a string array
       var caparray=[];
     letnarrowfun=(str)=>{
      for(let iterator of str){
        let a=iterator.toUppercase();
        caparray.push(a);
      }
      return caparray;
     }
     console.log(['kalai','mathy','chamu','sasi']);

  //c) Sum of all numbers in an array
  const add = arr => arr.reduce((a, b) => a + b, 0);
 
      var arr = [3, 6, 1, 5, 8];
         var sum = add(arr);
 
         console.log(sum);
//D)Return all the prime numbers in an array
      var numArray = [1,2, 3, 4, 5, 6, 7, 8, 9, 10,]

      numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

//E) Return all the palindromes in an array
  var reversedName=[];
   var palindromes=[];
    let arrowfun=(array)=>{
       for (var iterator of array){
        for (i=iterator.length-1;i>=0;i--){
          reversedName.push(iterator[i]);
        }
       reversedstring=reversedName.join("");
      
        {console.log(reversedstring)}
        for(i=iterator.length-1;i>=0;i--){
          reversedName.pop(iterator[i]);
        }
         return 9; 
       }
    }
      console.log(arrowfun(['madam','1231','access']));

      //A) Print odd numbers in an array.
    
      function oddnumberreturn(array){
        let resultArray=[];
         for (let ele of array){
           if(ele%2!==0){
             resultArray.push(ele)
           }
         }
          return resultArray;
      }
      console.log(oddnumreturn([1,2,3,4,5,6,7]));