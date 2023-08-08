import { SortingAlgorithm } from '../interfaces/sorthing-algorithm';
import { DeepClone } from '../utils/DeepClone';

export default class InsertionSort implements SortingAlgorithm {
    sort<T>(array: T[]): T[] {
        const arrayDeepCloned = DeepClone.clone(array);
        const { length } = arrayDeepCloned;

        for (let i = 1; i < length; i++) {
            const key = arrayDeepCloned[i];
            let j = i - 1;

            while (j >= 0 && arrayDeepCloned[j] > key) {
                arrayDeepCloned[j + 1] = arrayDeepCloned[j];
                j--;
            }

            arrayDeepCloned[j + 1] = key;
        }

        return arrayDeepCloned;
    }
}
