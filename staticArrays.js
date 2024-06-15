class StaticArrays {
    insertEnd(arr, value, length, size) {
        if (length < size) {
            arr[length] = value; //add value to the last item if less than capacity
            length++;
        }
    }
    removeEnd(arr, length) {
        if (length > 0) {
            arr[length - 1] = 0; //overwrite last item if there is item
            length--;
        }
    }
    insertMiddle(arr, i, value, length) {
        for (let index = length - 1; index > i - 1; index--) {
            arr[index + 1] = arr[index] //shift items to the right from the inserting position
        }
        arr[i] = value;
        length++;
    }
    removeMiddle(arr, i, length) {
        for (let index = i + 1; index < length; index++) {
            arr[index - 1] = arr[index]; //shift items to the left from the removing position
        }
        length--;
    }
}