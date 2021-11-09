export default class BidimensionalPoint {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public imprimirPosiciones() {
        console.log(this.x, this.y);
    }
}
