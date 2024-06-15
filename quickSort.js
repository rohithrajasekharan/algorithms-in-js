function quickSort(arr, s, e){
    if(e-s+1<=1){
        return arr;
    }
    let pivot = arr[e];
    let left = s;
    for(let i=0;i<e;i++){
        if(arr[i]<=pivot){
            let temp = arr[left];
            arr[left] = arr[i];
            arr[i] = temp;
            left++;
        }
    }
    arr[e] = arr[left];
    arr[left] = pivot;

    quickSort(arr, s, left-1);
    quickSort(arr, left+1, e);

    return arr;
}