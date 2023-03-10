/*

QUEUE

A queue is a data structure that stores a list of elements. The queue follows the FIFO (First In First Out) principle. 
The first element that is added to the queue will be the first one to be removed. This is similar to waiting in a line 
at the grocery store. The first person in line is the first one to be served.

*/ 

class Queue{
    constructor(){
        this.array = [];
    }
    enqueue(value){
        this.array.push(value);
    }
    dequeue(){
        return this.array.shift();
    }
    peek(){
        return this.array[0];
    }
    isEmpty(){
        return this.array.length === 0;
    }
}

let queue = new Queue();

for(let i = 0; i < 10; i++){
    queue.enqueue(i);
}

console.log(
    JSON.stringify(queue, null, 2)
)

while(!queue.isEmpty()){
    console.log(queue.dequeue());
}

console.log(
    JSON.stringify(queue, null, 2)
)