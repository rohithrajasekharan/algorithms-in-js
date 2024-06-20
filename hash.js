//hash implementation
const names = ["alice", "brad", "collin", "brad", "dylan", "kim"];
const countMap = new Map();

function hashUsage(){
    for(let i=0;i<names.length;i++){
        if(!countMap.has(names[i])){
            countMap.set(names[i],1);
        }else{
            countMap.set(names[i],countMap.get(names[i])+1);
        }
    }
    return countMap;
}

class Pair{
    constructor(key,val){
        this.key = key;
        this.val = val;
    }
}

class HashMap{
    constructor(){
        this.size=0;
        this.capacity=2;
        this.map = new Array(this.capacity).fill(null)
    }

    hash(key){
        let index = 0;
        for(let i=0;i<key.length;i++){
            index += key.charCodeAt(i);
        }
        return index%this.capacity;
    }

    rehash(){
        this.capacity = 2*this.capacity;
        let newMap = new Array(this.capacity).fill(null);
        let oldMap = this.map;
        this.map = newMap;
        this.size = 0;
        for(let i=0;i<oldMap.length;i++){
            if(oldMap[i]){
                this.put(oldMap[i].key,oldMap[i].val);
            }
        }
    }

    put(key,val){
        let index = this.hash(key);
        while (true){
            if(this.map[index].key==null){
                this.map[index] = new Pair(key,val);
                this.size += 1;
                if(this.size>= this.capacity/2){
                    this.rehash();
                }
                return;
            }
            else if (this.map[index].key == key){
                this.map[index].val = val;
                return;
            } 
            index += 1;
            index = index % this.capacity;
        }
    }

    get(key){
        let index = this.hash(key);
        while(this.map[index]!==null){
            if(this.map[index].key==key){
                return this.map[index].val;
            }
            index += 1;
            index = index % this.capacity;
        }
        return null;
    }

    remove(key){
        if(this.get(key)==null){
            return;
        }
        let index = this.hash(key);
        while(true){
            if(this.map[index].key==key){
                this.map[index] = null;
                this.size -= 1;
                return;
            }
            index += 1;
            index = index % this.capacity;
        }
    }
    rehash(){
        this.capacity = 2*this.capacity;
        let oldMap = this.map;
        let newMap = new Array(this.capacity).fill(null);
        for(let i=0;i<oldMap.length;i++){
            newMap
        }
    }
}