"use strict"
console.alert("page is loading!")

// functional programming 
// const a=[1,2,3,4,5,6];

// const b=a.map(x => x*x).filter(x=>x%2!=0);
// console.log(b);




// #1 max of two numbers
function maxTwo(n1, n2){
    if(n1>=n2)
        return n1;
    
    else
        return n2;
    
}
// let a=10;
// let b=8;
console.log(maxTwo(2,9));

//#2 max  of three
function maxOfThree(n1,n2,n3){
    let max= 0;
    if(n1>=n2 && n2>=n3)
    rmax=n1;
    else if(n1>=n2 && n1<=n3)
    max=n3;
    else if(n1<=n2 && n2>=n3){
        max=n2
    }
    return max;

}

console.log(maxOfThree(1,9,0));

//#3 isVowel function
function isVowel(char){
    let isV=false;
   const vowels=[a,e,i,o,u,A,E,I,O,U] ;
   for (let index = 0; index < vowels.length; index++) {
       if(char===array[index]){
        isV=true;
   }
   }

return isv;
}

// #4 sum() and multiply function forloop

const arr = [1,2,3,4];
calculateSumAndProduct(arr);

function calculateSumAndProduct(arr){
    let total = sum;
    console.log(total);

    let product=multiply;
console.log(product);
}
function sum(arr){
    return arr.reduce(function(preVal,elem,i,array){
        return preVal+elem;
    })
}
function multiply(arr){
    console.log(arr.reduce((x,y)=>x*y));
}

// #5 reverse function

function reverse(str){
     let reversed="";
    // for (const char of str) {
    //     reversed=char+reversed;
        
    // }
    reversed= str.split("").reverse().join(""); 
    reversed= [...str].reverse().join('');//or using rest param
    reversed= str.split("").reduce((char1,char2)=>char2+char1,'');
console.log(reversed);
}

//6 findLongestWord()
function findLongestWord(strarray){
let longest= "";
//longest=strarray.filter((x,y)=>x.length>y.length);

longest=strarray.sort(function(a,b){
    return b.length-a.length
})[0];

}

//7 filterLongestWord()
function flterLongestWord(arrs,i){
    let newArrs=new Array(arrs.length);
  
    for (let index = 0; index < arrs.length; index++) {
        if(arrs[index].length>i){
            for (let index = 0; index < newArrs.length; index++) {
                 newArrs.push(arrs[index]);
                
            }
            
        }   
    }
    return newArrs;
}

//8 computeSumOfSquares
function computeSumOfSquares(strs){
    let total = strs.map((x)=>(x*x)).reduce((a,b)=>(a+b));
}



//#9 printOddNumbersOnly()

function printOddNumbersOnly(oddArr){
  return  oddArr.filter((x)=>(x%2===1));
}

//#10 computeSumOfSquaresOfEvensOnly()
function computeSumOfSquaresOfEvensOnly(evenArr){

return evenArr.filter(x=>x%2===0).map(x=>x*x).reduce((a,b)=>(a+b));
}

//#11
calculateSumAndProduct(arr);

function calculateSumAndProduct(arr){
    let total = sum;
    console.log(total);

    let product=multiply;
console.log(product);
}
function sum(arr){
    return arr.reduce((num1,num2)=>num1+num2);
    
}
function multiply(arr){
    return arr.reduce((x,y)=>x*y);
    console.log(arr.reduce((x,y)=>x*y));
}

//#12 findSecondBiggest(secBigArr)
function findSecondBiggest(secBigArr){
  let first=second=-Infinity;

  if(secBigArr.length<2){
      console.log("invalid Array size");
  }
  else{
      for (let index = 0; index < secBigArr.length; index++) {
          if(secBigArr[index]>first){
              second = first;
              first=secBigArr[index];
          }
          else if(secBigArr[index] >second && secBigArr[index]!=first){
              second=secBigArr[index];
          }
          
      }
      if (second==-Infinity){
          console.log("there is no second biggest! ")
      }
  }
  return second;
}
//#13  printFibo(a,b,i)
function printFibo(n,a,b){
    while(n>0){
        tmp=a;
        console.log(a);
        a=b;
        b+=tmp;
        n--;
    }
}
