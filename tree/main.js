/*

    Tree

    A tree is a data structure that consists of nodes in a parent/child relationship.

    A tree has a root node. Each node in the tree can have zero or more child nodes.

*/

class Tree{
    constructor(root){
        this.root = root;
    }
}

class Node{
    constructor(value, children){
        this.value = value;
        this.children = children; //[]
    }
}

/*
    {
        value: 1,
        children: [
            {
                value: 2,
                children: [
                    {
                        value: 4,
                        children: []
                    },
                    {
                        value: 5,
                        children: []
                    }
                }
            },
            {
                value: 3,
                children: [
                    {   
                        value: 6,
                        children: []
                    },
                ]
            }
        ]
    }
*/ 

function treeToArray(tree){
    let array = [];
    let queue = [tree.root];
    while(queue.length > 0){
        let node = queue.shift();
        if(node){
            array.push(node.value);
            queue.push(...node.children);
        }
    }
    return array;
}

function addValue(node, value){
    node.children.push(new Node(value, []));
}

function findValue(node, value){
    if(node.value === value){
        return true;
    }else{
        for(let child of node.children){
            if(findValue(child, value)){
                return true;
            }
        }
        return false;
    }
}

let root = new Node(1, []);

addValue(root, 2);
addValue(root, 3);

addValue(root.children[0], 4);
addValue(root.children[0], 5);

addValue(root.children[1], 6);

let tree = new Tree(root);

console.log(
    treeToArray(tree).join(' -> ')
);

console.log(
    JSON.stringify(tree, null, 2)
)

console.log(
    findValue(tree.root, 6)
)