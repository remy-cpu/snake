class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;//!表示这个元素不会为空（我自己能确定）
  }
  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;