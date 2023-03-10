/*

Binary Tree

A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
each childreen refers to the left and right childreen of the node and each node refer to a new one.

*/ 

class Tree{
    constructor(root){
        this.root = root;
    }
}

class Node{
    constructor(value, left, right){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function treeToArray(tree){
    let array = [];
    let queue = [tree.root];
    while(queue.length > 0){
        let node = queue.shift();
        if(node){
            array.push(node.value);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return array;
}

function addValue(node, value){
    if(value < node.value){
        if(node.left){
            addValue(node.left, value);
        }else{
            node.left = new Node(value);
        }
    }else{
        if(node.right){
            addValue(node.right, value);
        }else{
            node.right = new Node(value);
        }
    }
}

function findValue(node, value){
    if(node.value === value){
        return true;
    }else if(value < node.value){
        if(node.left){
            return findValue(node.left, value);
        }else{
            return false;
        }
    }else{
        if(node.right){
            return findValue(node.right, value);
        }else{
            return false;
        }
    }
}

let root = new Node(5);
addValue(root, 3);
addValue(root, 7);
addValue(root, 2);
addValue(root, 4);
addValue(root, 6);
addValue(root, 8);

let tree = new Tree(root);

console.log(treeToArray(tree).join(' -> '));

console.log(findValue(root, 3));

console.log(findValue(root, 9));

console.log(
    JSON.stringify(tree, null, 2)
)

console.log(tree);

printTreeFancy(tree);