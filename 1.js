class Figure {
    constructor(type, size, color) {
        this.type = type;
        this.size = size;
        this.color = color;
    }
    getInfo() {
        return `type: ${this.type} size : ${this.size} color: ${this.color}`;
    }
}