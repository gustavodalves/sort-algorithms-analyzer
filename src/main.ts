import { AnalyzerSortAlgorithm } from './analyzer';
import { RandomArrayGenerator } from './utils/RandomArrayGenerator';

import {
    BubbleSort,
    HeapSort,
    InsertionSort,
    MergeSort,
    QuickSort,
    RadixSort
} from './sort';

const analyzer = new AnalyzerSortAlgorithm([
    new BubbleSort(),
    new InsertionSort(),
    new MergeSort(),
    new RadixSort(),
    new HeapSort(),
    new RadixSort(),
    new QuickSort(),
]);

const defaultArray = RandomArrayGenerator.generate(5000, 100000000);

const bestAlgorithm = analyzer.analyze(defaultArray);
console.log(`Best algorithm is: ${bestAlgorithm.constructor.name}`);

const sortedArrayByBestAlgorithm = (bestAlgorithm.sort(defaultArray));
console.log(sortedArrayByBestAlgorithm);
