import { RandomArrayGenerator } from './RandomArrayGenerator';

describe('Random Array Generator', () => {
    it('should be return random array', () => {
        const size = 10;
        const max = 100;
        const array = RandomArrayGenerator.generate(size, max);

        expect(array).toHaveLength(size);
        expect(array.every(item => item <= max)).toBeTruthy();
    });
});
