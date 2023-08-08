import HeapSort from './heap-sort';

describe('Heap Sort', () => {
    it('should be sort with bubble sort algortihm', () => {
        const heapSort = new HeapSort();

        const arr = [4,5,2,1];

        const sortedArr = heapSort.sort(arr);

        expect(sortedArr).toEqual([ 1, 2, 4 ,5 ]);
    });
});
