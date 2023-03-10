/*
Stack

A stack is a data structure that stores a list of elements and provides two main operations: 
push and pop. A push operation adds an element to the top of the stack, while a pop operation 
removes the element on the top of the stack. Stacks are often used to reverse the order of elements. 
For example, consider the problem of reversing a list of elements. We can do this by pushing all the 
elements onto a stack and then popping them off one by one. The order of the elements is reversed 
because the last element pushed is the first one popped off.

*/ 

class Stack{
    constructor(){
        this.array = [];
    }
    push(value){
        this.array.push(value);
    }
    pop(){
        return this.array.pop();
    }
    peek(){
        return this.array[this.array.length - 1];
    }
    isEmpty(){
        return this.array.length === 0;
    }
}

let stack = new Stack();

for(let i = 0; i < 10; i++){
    stack.push(i);
}

console.log(
    JSON.stringify(stack, null, 2)
)

while(!stack.isEmpty()){
    console.log(stack.pop());
}

console.log(
    JSON.stringify(stack, null, 2)
)