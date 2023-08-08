export class RandomArrayGenerator {
    static generate(size: number, max: number) {
        const array: number[] = [];
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * max));
        }

        return array;
    }
}
