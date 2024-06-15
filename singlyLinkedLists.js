class ListNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = new ListNode(-1);
        this.tail = this.head; 
    }
    insertEnd(val){
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }
    remove(index){
        let i = 0; 
        let curr;
        while(i<index && curr!==null){
            i++;
            curr = curr.next;
        }
        if(curr!==null){
            curr.next = curr.next.next;
        }
    }
}