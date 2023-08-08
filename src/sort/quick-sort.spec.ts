import QuickSort from './quick-sort';

describe('Quick Sort', () => {
    it('should be sort with bubble sort algortihm', () => {
        const quickSort = new QuickSort();

        const arr = [4,5,2,1];
        const sortedArr = quickSort.sort(arr);

        expect(sortedArr).toEqual([ 1, 2, 4 ,5 ]);
    });
});
