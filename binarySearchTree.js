class Treenode{
    constructor(val){
        this.right=null;
        this.left=null;
        this.value=val;
    }
}

//O(logn)
function search(root, target){
    if(!root){
        return false;
    }
    if(target > root.value){
        return search(root.right,target);
    }
    else if(target < root.value){
        return search(root.left,target);
    }
    else{
        return true;
    }
}

function insert(root,value){
    if(root==null){
        return new Treenode(val);
    }
    if(value>root.value){
        root.right=insert(root.right,value);
    }
    else if(value<root.value){
        root.left = insert(root.left, value);
    }
    return root;
}

function findMin(root){
    let curr = root;
    while(curr && curr.left){
        curr = curr.left;
    }
    return curr;
}

function remove(root,value){
    if(root==null){
        return null;
    }
    if(value>root.value){
        root.right=remove(root.right,value);
    }
    else if(value<root.value){
        root.left = remove(root.left, value);
    }else{
        const minNode = findMin(root);
        root.value = minNode.value;
        root.right = remove(root.right, minNode.value);
    }
    return root;
}


//Depth First O(n)
function inorder(root){
    if(!root){
        return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

function preorder(root){
    if(!root){
        return;
    }
    console.log(root.val);
    inorder(root.left);
    inorder(root.right);
}

function postorder(root){
    if(!root){
        return;
    }
    inorder(root.left);
    inorder(root.right);
    console.log(root.val);
}
    
//Breadth First O(n)

function bfsSearch(root){
    let queue = [];
    if(root){
        queue.push(root)
    }
    while(queue.length>0){
        for(let i=0;i<queue.length;i++){
            const curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
             queue.push(curr.left);
            } 
            if(curr.right){
             queue.push(curr.right);
            }
        }
    }

}
















