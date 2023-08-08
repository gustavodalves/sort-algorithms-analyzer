import { SortingAlgorithm } from '../interfaces/sorthing-algorithm';
import { DeepClone } from '../utils/DeepClone';

export default class RadixSort implements SortingAlgorithm {
    sort<T>(array: T[]): T[] {
        const arrayDeepCloned = DeepClone.clone(array) as number[];
        const max = this.getMax(arrayDeepCloned);

        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            this.countingSort(arrayDeepCloned, exp);
        }

        return arrayDeepCloned as T[];
    }

    private getMax(array: number[]): number {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    private countingSort(array: number[], exp: number): void {
        const n = array.length;
        const output: number[] = new Array(n);
        const count: number[] = new Array(10).fill(0);

        for (let i = 0; i < n; i++) {
            const digit = Math.floor(array[i] / exp) % 10;
            count[digit]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = n - 1; i >= 0; i--) {
            const digit = Math.floor(array[i] / exp) % 10;
            output[count[digit] - 1] = array[i];
            count[digit]--;
        }

        for (let i = 0; i < n; i++) {
            array[i] = output[i];
        }
    }
}
