function backTrack(root,path){
    if(!root || root.val==0){
        return false;
    }
    path.push(root.val);

    if(!root.left && !root.right){
        return true;
    }
    if(backTrack(root.left, path)){
        return true;
    }
    if(backTrack(root.right, path)){
        return true;
    }
    path.pop();
    return false;
}