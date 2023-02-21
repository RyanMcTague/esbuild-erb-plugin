function sayHello() {
  const h1 = document.createElement('h1');
  const node = document.createTextNode('Hello');
  h1.appendChild(node);
  document.appendChild(h1);
}

sayHello();
