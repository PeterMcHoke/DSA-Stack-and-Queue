'use strict'
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(value) {
        if (this.top === null) {
            this.top = new _Node(value, null);
            return this.top;
        }
        //the current this.top becomes next on the new node and then we reassign this.top to our new node.
        const node = new _Node(value, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.value;
    }
}

module.exports = Stack