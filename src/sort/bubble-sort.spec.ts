import BubbleSort from './bubble-sort';

describe('Bubble Sort', () => {
    it('should be sort with bubble sort algortihm', () => {
        const bubbleSort = new BubbleSort();

        const arr = [4,5,2,1];

        const sortedArr = bubbleSort.sort(arr);

        expect(sortedArr).toEqual([ 1, 2, 4 ,5 ]);
    });
});
