function insertionSort(arr){
    for(let i=1; i<arr.length;i++){
        let j = i-1;
       while(j>=0 && arr[j+1]<arr[j]){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([1,3,2,6,4,5,5]));
