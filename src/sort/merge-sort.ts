import { SortingAlgorithm } from '../interfaces/sorthing-algorithm';
import { DeepClone } from '../utils/DeepClone';

export default class MergeSort implements SortingAlgorithm {
    private merge<T>(left: T[], right: T[]): T[] {
        const mergedArray: T[] = [];

        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                mergedArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                mergedArray.push(right[rightIndex]);
                rightIndex++;
            }
        }

        while (leftIndex < left.length) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        }

        while (rightIndex < right.length) {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }

        return mergedArray;
    }

    public sort<T>(array: T[]): T[] {
        const arrayDeepCloned = DeepClone.clone(array);
        if (arrayDeepCloned.length <= 1) {
            return arrayDeepCloned;
        }

        const middle = Math.floor(arrayDeepCloned.length / 2);
        const left = arrayDeepCloned.slice(0, middle);
        const right = arrayDeepCloned.slice(middle);

        const sortedLeft = this.sort(left);
        const sortedRight = this.sort(right);

        return this.merge(sortedLeft, sortedRight);
    }
}
