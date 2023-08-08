import { SortingAlgorithm } from '../interfaces/sorthing-algorithm';
import { DeepClone } from '../utils/DeepClone';

export default class QuickSort implements SortingAlgorithm {
    sort<T>(array: T[]): T[] {
        const arrayDeepCloned = DeepClone.clone(array);
        this.quickSortRecursive(arrayDeepCloned as number[], 0, array.length - 1);
        return arrayDeepCloned;
    }

    private quickSortRecursive(array: number[], low: number, high: number): void {
        if (low < high) {
            const pivotIndex = this.partition(array, low, high);
            this.quickSortRecursive(array, low, pivotIndex - 1);
            this.quickSortRecursive(array, pivotIndex + 1, high);
        }
    }

    private partition(array: number[], low: number, high: number): number {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                this.swap(array, i, j);
            }
        }

        this.swap(array, i + 1, high);
        return i + 1;
    }

    private swap(array: number[], i: number, j: number): void {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
