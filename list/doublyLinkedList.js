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
  // shift 처음 노드 삭제
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  // unshift 처음 노드 추가
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }
  }
  // Get을 사용하는 이유는 배열과 다르게 index 번호를 사용 불가능해서
  // List 돌면서 하나하나 가지고 오면 성능에 좋지 못하기 때문에 Get을 사용
  get(index) {
    // 정해진 범위 밖으로 나갈 수는 없다
    if (idex < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  // Set 해당 노드의 값을 우리가 입력한 값으로 바꿔준 다음에 참을 출력한다.
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}
