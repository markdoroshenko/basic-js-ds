const { NotImplementedError } = require( '../extensions/index.js' );

const { ListNode } = require( '../extensions/list-node.js' );
const { Node } = require( '../extensions/list-tree' );

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

function convertArrayToJson(array) {
    if (!array.length) {
        return null;
    }

    const head = { value: array[0], next: null };
    let current = head;

    for (let i = 1; i < array.length; i++) {
        current.next = { value: array[i], next: null };
        current = current.next;
    }

    return head;
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    getUnderlyingList() {
        const result = [];
        let current = this.front;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return convertArrayToJson(result);
    }

    enqueue(value) {
        const newNode = new ListNode(value);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (!this.front) {
            return null; // Queue is empty
        }
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null; // Queue is now empty
        }
        return dequeuedValue;
    }
}

const queueItem = new Queue();
queueItem.enqueue( 5 );
queueItem.enqueue( 6 );
queueItem.enqueue( 7 );
console.log( 'queueItem', queueItem )

module.exports = {
    Queue
};
