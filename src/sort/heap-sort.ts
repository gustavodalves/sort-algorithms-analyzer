import { SortingAlgorithm } from '../interfaces/sorthing-algorithm';
import { DeepClone } from '../utils/DeepClone';

export default class HeapSort implements SortingAlgorithm {
    sort<T>(array: T[]): T[] {
        const arrayDeepCloned = DeepClone.clone(array);
        const { length } = arrayDeepCloned;

        for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
            this.heapify(array, length, i);
        }

        for (let i = length - 1; i > 0; i--) {
            [array[0], array[i]] = [array[i], array[0]];

            this.heapify(array, i, 0);
        }

        return array;
    }

    private heapify<T>(array: T[], heapSize: number, rootIndex: number): void {
        let largestIndex = rootIndex;
        const leftChildIndex = 2 * rootIndex + 1;
        const rightChildIndex = 2 * rootIndex + 2;

        if (leftChildIndex < heapSize && array[leftChildIndex] > array[largestIndex]) {
            largestIndex = leftChildIndex;
        }

        if (rightChildIndex < heapSize && array[rightChildIndex] > array[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex !== rootIndex) {
            [array[rootIndex], array[largestIndex]] = [array[largestIndex], array[rootIndex]];

            this.heapify(array, heapSize, largestIndex);
        }
    }
}
