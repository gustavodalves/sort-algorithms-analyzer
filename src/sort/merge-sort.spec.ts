import MergeSort from './merge-sort';

describe('Merge Sort', () => {
    it('should be sort with bubble sort algortihm', () => {
        const mergeSort = new MergeSort();

        const arr = [4,5,2,1];
        const sortedArr = mergeSort.sort(arr);

        expect(sortedArr).toEqual([ 1, 2, 4 ,5 ]);
    });
});
