// Node
// val
// next
// prev

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  construtor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push 추가하기
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNOde;
    } else {
      this.tail.next = newNOde;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // pou 맨마지막 노드 삭제
  pop(val) {
    if (!head) return undefined;
    let poppeNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppeNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return poppeNode;
  }
}
