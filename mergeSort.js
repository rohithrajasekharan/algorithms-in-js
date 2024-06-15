function mergeSort(arr, l, r){
    if(l<r){
        let m = Math.floor((l+r)/2);
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        merge(arr, l, m, r);
    }
}

function merge(arr, l, m, r){
    let length1 = m-l+1;
    let length2 = r-m;
    let L = new Array(length1);
    let R = new Array(length2);
    for(let i=0; i<length1; i++){
        L[i] = arr[l+i];
    }
    for(let j=0;j<length2;j++){
        R[j] = arr[m+j];
    }
    let i =0;
    let j=0;
    let k=0;
    while(i<length1 && j<length2){
        if(L[i]<R[j]){
            arr[k] = L[l+i];
            i++;
            k++;
        }else{
            arr[k] = R[j+m+1];
        }
        k++;
    }

    while(i<length1){
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j<length2){
        arr[k] = R[j];
        j++;
        k++;
    }
}