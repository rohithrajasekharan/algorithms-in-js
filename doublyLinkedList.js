class ListNode {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedLists {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }
    insertFront(value) {
        const newNode = new ListNode(value);
        newNode.prev = this.head;
        newNode.next = this.head.next;
        this.head.next.prev = newNode;
        this.head.next = newNode;
    }
    removeFront() {
        this.head.next.next.prev = this.head;
        this.head.next = this.head.next.next;
    }
    insertEnd(value) {
        const newNode = new ListNode(value);
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }
    removeEnd() {
        this.tail.prev.prev.next = this.tail;
        this.tail.prev = this.tail.prev.prev;
    }
    insertMiddle(index, value) {
        let i=0;
        let curr;
        while(i<index-1 && curr!==null){
            i++;
            curr = curr.next;
        }
        let node = new ListNode(value);
        node.next = curr.next;
        node.prev = curr;
        curr.next = node;
    }
    printValues(){
        let curr = this.head;
        while(curr!=null){
            print(curr.value);
            curr = curr.next;
        }
    }
}

const list = new DoublyLinkedLists();
list.insertFront(5);
console.log(list.printValues());