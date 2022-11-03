var arr = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5];
    
for( var i = 0; i < arr.length; i++){ 
                               
    if ( arr[i] === 5) { 
        arr.splice(i, 1); 
      break;
       }
}
console.log(arr)cd