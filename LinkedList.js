const _Node = require('./node.js')

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.next = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
    this.size++
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
      this.size++
    }
  }

  insertAfter(item, key) {
    let current = this.head
    
    if(this.head === null) {
      return null;
    }
  
    while(current !== null && current.value !== key) {
        current = current.next;
      }

      if(current.next === null) {
        return this.insertLast(item)
      }

      let newNode = new _Node(item, current)
      let tempNode = current.next
      current.next = newNode
      newNode.next = tempNode
      this.size++
      return;
      
  }

  insertBefore(item, key) {
    let previous = this.head
    let current = this.head
    
    if(this.head === null) {
      return null;
    }
  
    if(this.head.value === key) {
      return this.insertFirst(item)
    }
  
    while(current !== null && current.value !== key) {
        previous = current;
        current = current.next;
      }
    
      let newNode = new _Node(item, current)
      previous.next = newNode
      this.size++
      return;
  }

  insertAt(item, index) {
    let current = this.head
    let counter = 1
    let found = false
    console.log(this.head)
    if(this.head === null) {
      return null;
    }
  
    while (current.next !== null && !found) {
      counter++
      if (counter === index) {
        found = true
      }
      current = current.next
    }
    console.log('current', current)
    let newItem = new _Node(item, current.next)
    current.next = newItem
    this.size++
  }
  
  find(item) {
    //Start at the head
    let currNode = this.head;
    //If the list is empty
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      //Return null if it's the end of the liste and the item is not there
      if (item === null && currNode.next === null) {
        return currNode;
      }
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise, keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode
  }

  remove(item) {
    //if list is empty
    if (!this.head) {
      return null;
    }
    // if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    //keep track of previous
    this.size--
  }

}

module.exports = LinkedList