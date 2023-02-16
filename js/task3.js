'use strict';
console.log('-------------task3------------');

const rectangle = {
  widthValue: 5,
  heightValue: 5,
  set width(val) {
    Number.isFinite(val) ? this.widthValue = val : this.widthValue = 'Ошибка';
  },
  set height(val) {
    Number.isFinite(val) ? this.heightValue = val : this.heightValue = 'Ошибка';
  },
  get perimeter() {
    // eslint-disable-next-line max-len
    if (this.widthValue === 'Ошибка' || this.heightValue === 'Ошибка') return 'Ошибка';
    const p = (this.widthValue + this.heightValue) * 2;
    return `Периметр прямоугольника = ${p} см`;
  },
  get square() {
    // eslint-disable-next-line max-len
    if (this.widthValue === 'Ошибка' || this.heightValue === 'Ошибка') return 'Ошибка';
    const s = this.widthValue * this.heightValue;
    return `Периметр прямоугольника = ${s} см^2`;
  },
};


rectangle.width = 25;
rectangle.height = 20;
console.log(rectangle.perimeter);
console.log(rectangle.square);
