import RadixSort from './radix-sort';

describe('Radix Sort', () => {
    it('should be sort with bubble sort algortihm', () => {
        const radixSort = new RadixSort();

        const arr = [4,5,2,1];
        const sortedArr = radixSort.sort(arr);

        expect(sortedArr).toEqual([ 1, 2, 4 ,5 ]);
    });
});
