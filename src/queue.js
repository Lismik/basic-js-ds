const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.queue;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) {
      this.queue = new ListNode(value);
    } else {
      let prom = this.queue;
      while (prom.next) {
        prom = prom.next;
      }
      prom.next = new ListNode(value);
    }
  }

  dequeue() {
    let queueLast = this.queue.value;
    this.queue = this.queue.next;
    return (this.queue === null) ? null : queueLast;
  }
}

module.exports = {
  Queue
};
