/*

    Linked Lists

    A linked list is a data structure that contains a sequence of nodes. Each node
    contains a value and a reference to the next node in the sequence. The last node
    in the sequence points to null. The first node in the sequence is called the head
    of the list. Linked lists are often used to implement stacks and queues.
    
*/ 

class List{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

function listToArray(list){
    let array = [];
    while(list){
        array.push(list.value);
        list = list.next;
    }
    return array;
}

function arrayToList(array){
    let list = null;
    for(let i = array.length - 1; i >= 0; i--){
        list = new List(array[i], list);
    }
    return list;
}

function reverse(list){
    let array = listToArray(list);
    array.reverse();
    return arrayToList(array);
}


let root = null;

for(let i = 0; i < 10; i++){
    root = new List(i, root);
}

console.log(listToArray(root).join(' -> '));

root = reverse(root);

console.log(listToArray(root).join(' -> '));

console.log(
    JSON.stringify(root, null, 2)
)
