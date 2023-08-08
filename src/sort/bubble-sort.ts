import { SortingAlgorithm } from '../interfaces/sorthing-algorithm';
import { DeepClone } from '../utils/DeepClone';

export default class BubbleSort implements SortingAlgorithm {
    sort<T>(array: T[]): T[] {
        const arrayDeepCloned = DeepClone.clone(array);
        const { length } = arrayDeepCloned;

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (arrayDeepCloned[j] > arrayDeepCloned[j + 1]) {
                    const temp = arrayDeepCloned[j];
                    arrayDeepCloned[j] = arrayDeepCloned[j + 1];
                    arrayDeepCloned[j + 1] = temp;
                }
            }
        }

        return arrayDeepCloned;
    }
}
