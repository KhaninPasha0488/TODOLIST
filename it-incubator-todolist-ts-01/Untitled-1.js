// 1
 funtion(arr){
    let max1 = 0
    for(let i = 0; i< arr.length ;i++){
    if( arr[i] > max1){
       max1 = arr[i] 
    }
    return max1
   }
    
 }
//  2
funtion(arr2){
   let max1 = 0
   for(let i = 0; i< arr2.length ;i++)
   if( arr2[i] > max1){
      max1 = arr2[i] 
   }
   let max2=0
   let maxar=[]
   maxar.push(max1)
   for ( let i = 0 ;i < arr2.length ; i++){
      if(arr2[i]>max2 && arr2[i] < max1){ 
         max2 = arr2[i]

      }
      maxar.push(max2)

   }
   return maxar
}
//3
