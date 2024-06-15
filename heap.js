class Heap{
    constructor(){
        this.heap = new Array();
        heap.push(0);
    }

    push(val){
        this.heap.push(val);
        let i = this.heap.length-1;
        while(i>1 &&this.heap[Math.floor(i/2)]>this.heap[i]){
            let temp = this.heap[Math.floor(i/2)];
            this.heap[Math.floor(i/2)] = this.heap[i];
            this.heap[i] = temp;
            i = Math.floor(i/2);
        }
    }

    pop(){
        if(this.heap.length==1){
            return -1;
        }
        if(this.heap.length==2){
            return this.heap.pop();
        }
        

        let res = this.heap[1];
        this.heap[1] = this.heap.pop();
        let i = 1;

        while(2*i<this.length){
            if(this.heap[i]>this.heap[2*i]){
                let temp = this.heap[2*i];
                this.heap[2*i] = this.heap[i];
                this.heap[i] = temp;
                i = i*2;
            }else if((2*i+1)<this.length && this.heap[2*i+1]<this.heap[2*i] && this.heap[i]>this.heap[2*i+1]){
                let temp = this.heap[2*i];
                this.heap[2*i+1] = this.heap[i];
                this.heap[i] = temp;
                i = i*2+1;
            }else{
                break;
            }
        }
        return res;
    }

    heapify(arr){
        arr.append(arr[0]);
        this.heap = arr;

        let curr = this.heap.length/2;
        let i = curr;
        while(curr>0){
            while(2*i<this.heap.length){
                if(this.heap[i]>this.heap[2*i]){
                    let temp = this.heap[2*i];
                    this.heap[2*i] = this.heap[i];
                    this.heap[i] = temp;
                    i = i*2;
                }else if((2*i+1)<this.length && this.heap[2*i+1]<this.heap[2*i] && this.heap[i]>this.heap[2*i+1]){
                    let temp = this.heap[2*i];
                    this.heap[2*i+1] = this.heap[i];
                    this.heap[i] = temp;
                    i = i*2+1;
                }else{
                    break;
                }
            }
            curr-=1;    
        }
        
    }
}