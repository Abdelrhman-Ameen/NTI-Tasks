/*1*/
console.log("Problem 1")
let arr1=[1,3,5,6,7,8,1];
let arr2=[1,3,5,6,7,8,9];
function IsSorted(arr){for (let i=0;i<arr.length -1;i++) {if (arr[i]>arr[i+1]){return false;}}return true;}
console.log(arr1 , IsSorted(arr1));
console.log(arr2 , IsSorted(arr2));
/*2*/
console.log("Problem 2")
let arr3=[20,40,31,99,1,2,5,6,7,8,9,10,16];
function IsGreater(arr,k){
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        if (arr[i]>k){return arr.slice(i);}
    }
    return []
}
console.log("Problem 3")
console.log(`numbers that are in ${arr3} and greater than ${4} are: ${IsGreater(arr3,4)}`);
let arr4=[1,4,3];
function PlusOne(arr,k){
    arr[arr.length -1]++;
    return arr;
}
console.log(`the number is ${arr4} and after increment it will be = ${PlusOne(arr4)}`)
console.log("Problem 4")
let arr5=[1,1,1,3,3,4,5,1,6,1,9,1,0,22,22,34,1];
function Remove_Duplicates(arr){
    let seen=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]==arr[j]){arr.splice(j,1);j--}
        }
    }
    return arr;
}
console.log(`array before reomivng Duplicates : ${arr5} \n array after removing duplicates: ${Remove_Duplicates(arr5)}`);