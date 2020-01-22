class Figure {
    constructor(type, size, color) {
        this.type = type;
        this.size = size;
        this.color = color;
    }
    getInfo() {
        return `type: ${this.type} size : ${this.size} color: ${this.color}`;
    };
    getOne() {
        return 1
    };

}
let figure1 = require('./data');
let square1 = new Figure(figure1.type, figure1.size, figure1.color);
console.log(Figure.prototype.getOne());
console.log(Object.getOwnPropertyNames(figure1));