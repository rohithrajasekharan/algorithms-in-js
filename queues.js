class ListNode {
    constructor(){
        this.val = null;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.left = null;
        this.right = null;
    }
    enqueue(val){
        const newNode = new ListNode(val);
        if(this.right!==null){
            this.right.next = newNode;
            this.right = this.right.next;
        }else{
            this.right= newNode;
            this.left = newNode;
        }
    }
    dequeue(){
        if(this.left!==null){
            this.left = this.left.next
        }else{
            return;
        }
    }
}