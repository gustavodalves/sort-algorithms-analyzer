import { SortingAlgorithm } from './interfaces/sorthing-algorithm';

interface AlgorithmTimes {
    [key: string]: number;
  }

export class AnalyzerSortAlgorithm {
    constructor(private readonly algorithms: SortingAlgorithm[]) {}

    analyze<T>(array: T[]) {
        const initialObject: AlgorithmTimes = {};

        const algorithmTimes = this.algorithms.reduce((acc, algorithm) => {
            const startTime = new Date().getTime();
            algorithm.sort(array);
            const endTime = new Date().getTime();

            const algorithmTime = endTime - startTime;
            return {
                ...acc,
                [algorithm.constructor.name]: algorithmTime
            };
        }, initialObject);

        const algorithmNames = Object.keys(algorithmTimes);
        const minTime = Math.min(...algorithmNames.map((name) => algorithmTimes[name]));
        const mostEfficientAlgorithmName = algorithmNames.find(
            (name) => algorithmTimes[name] === minTime
        );

        const algorithmSortedByTime = Object.entries(algorithmTimes).sort((a, b) => {
            const aTime = a[1];
            const bTime = b[1];

            return bTime - aTime;
        });

        for (const [name, time] of algorithmSortedByTime) {
            console.log(`${name}: ${time}ms`);
        }

        const mostEfficientAlgorithm = this.algorithms.find(
            (algorithm) => algorithm.constructor.name === mostEfficientAlgorithmName
        );

        if(!mostEfficientAlgorithm) {
            throw new Error('Not found algorithm');
        }

        return mostEfficientAlgorithm;
    }
}
