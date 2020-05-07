const LinkedList = require('./LinkedList.js')

function main() {
  const lls = new LinkedList() 
  lls.insertFirst('Apollo')
  lls.insertFirst('sadsa');
  lls.insertLast('Starbuck');

  lls.insertAt('Tauhida', 2)

  lls.insertBefore('squirrel' , 'sadsa')
  lls.insertAfter('Helo', 'sadsa')
  display(lls)
  size(lls)
  isEmpty(lls)
  // findPrevious(lls, 'Helo')
  findLast(lls)
  reverse(lls)
  display(lls)
}

function display(list) { 
    let curr = list.head; 
    let str = ""; 
    while (curr) { 
        str += curr.value + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 

function size(lls) {
  console.log(lls.size); 
}

function isEmpty(lls) {
  if(lls.size === 0){
    console.log('Empty')
  }; 
}

// function findPrevious(lls, item) {
//   console.log('previous', lls.find(item))
// }  

function findLast(lls) {
  console.log('last', lls.find(null))
}

// function insertInSortedOrder(sortedSSL, item ){
//   let previous, current = this.head;

//   if(sortedSSL.head === null || sortedSSL.head.value > item) {
//     sortedSSL.head = new _Node(item, sortedSSL.head)
//   }
//   while(current !== null && current.value < item){
//     previous = current;
//     current = current.next;
//   }

//   previous.next = new _Node(item, current)
//   return sortedSSL;
// }

// function reverse(list) {
//   let current = list.head;
//   let previous = list.head;
//   let temp;

  function reverse(list) {
  let node = list;
  let previous = null;

  while(node) {
    let temp = node.next;

    node.next = previous;

    previous = node;

    node = temp
  }
  display(list)
  return previous
    }



main()
