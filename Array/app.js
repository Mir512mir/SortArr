const arr1=[100,112,256,349,770];
const arr2=[72,86,113,119,265,445,770,892];
const newArray=arr1.concat(arr2);
newArray.sort(function(a,b){
    return a-b;
});

console.log(newArray)
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[6]);
    
}
