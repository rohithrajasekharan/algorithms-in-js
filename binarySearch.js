function binarySearch(low, high, target){
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(mid>target){
            high = mid - 1;
        }else if(mid<target){
            low = mid + 1;
        }else{
            return "found"
        }
    }
    return "not found";
}

console.log(binarySearch(1, 100, 50))