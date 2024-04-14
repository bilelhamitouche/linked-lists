class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let curr = this.head;
    let newNode = new Node(value);
    if (curr === null) {
      this.head = newNode;
    }
    while (curr) {
      if (curr.next === null) {
        curr.next = newNode;
        newNode.next = null;
      }
      curr = curr.next;
    }
  }
  prepend(value) {
    let curr = this.head;
    let newNode = new Node(value);
    if (curr === null) {
      this.head = newNode;
      newNode.next = curr;
    }
    newNode.next = curr;
    this.head = newNode;
  }
  size() {
    let curr = this.head;
    let length = 0;
    if (curr === null) return 0;
    while (curr) {
      length++;
      curr = curr.next;
    }
    return length;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr;
  }
  at(index) {
    let curr = this.head;
    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }
    return curr;
  }
  pop() {
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
  find(value) {
    let curr = this.head;
    let counter = 0;
    if (curr === null) return null;
    while (curr) {
      if (curr.value == value) return counter;
      counter++;
      curr = curr.next;
    }
  }
  toString() {
    let curr = this.head;
    while (curr) {
      console.log(`( ${curr.value} ) ->`);
      curr = curr.next;
    }
    console.log(null);
  }
  insertAt(value, index) {
    let curr = this.head;
    let newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size()) {
      this.append(value);
    } else {
      for (let i = 1; i < index - 1 && curr; i++) {
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }
  removeAt(index) {
    let curr = this.head;
    if (index === 0) {
      this.head = curr.next;
    } else if (index === this.size() - 1) {
      this.pop();
    } else {
      for (let i = 1; i < index - 1 && curr.next; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
  }
}
