import InsertionSort from './insertion-sort';

describe('Insertion Sort', () => {
    it('should be sort with bubble sort algortihm', () => {
        const insertionSort = new InsertionSort();

        const arr = [4,5,2,1];

        const sortedArr = insertionSort.sort(arr);

        expect(sortedArr).toEqual([ 1, 2, 4 ,5 ]);
    });
});
