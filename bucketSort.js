function bucketSort(arr){
    const counts = [0, 0, 0];
    for(let i=0;i<arr.length;i++){
        counts[arr[i]] += 1;
    }

    let i=0;
    for(let n=0; n< counts.length;n++){
        for(let j=0; j< counts[n]; j++){
            arr[i] = n;
            i++;
        }
    }
}