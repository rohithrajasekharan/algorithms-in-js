class DynamicArray {
    constructor(){
        this.size = 2;
        this.length = 0;
        this.arr = new Array(2);
    }
    resize(){
        this.size = 2 * this.size;
        const newArr = new Array(this.size);
        for(i=0;i<this.length;i++){
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }
    insertEnd(value){
        if(this.length==this.capacity){
            this.resize()
        }
        this.arr[this.length] = value;
        this.length++;
    }
    removeEnd(){
        if(this.length>0){
            this.length--;
            this.arr[this.length] = 0;
        }
    }
    insertMiddle(i,n){
        if(i==this.length){
            this.insertEnd(n)
        }else{
            for(let index=this.length;index>i-1;i--){
                this.arr[index+1]=this.arr[index];
            }
            this.arr[i] = n;
        }
    }
    removeMiddle(i){
            for(let index=i+1;index<this.length;i++){
                this.arr[index-1]=this.arr[index];
            }
            this.length--;
        }
    printValues(){
        return this.arr;
    }
}

const dm = new DynamicArray();
dm.insertEnd(50);
console.log(dm.printValues())