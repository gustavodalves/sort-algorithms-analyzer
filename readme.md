# Sort Algortihms

This project implements six sorting algorithms: Bubble Sort, Insertion Sort, Merge Sort, Radix Sort, Heap Sort, and Quick Sort. Each algorithm is briefly explained below along with its time complexity in the worst-case scenario (O notation).

## Implementations

* Bubble Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort
* Radix Sort

## Algortithms

1. Bubble Sort

    * Description: Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. It continues iterating through the list until no more swaps are needed, indicating that the list is sorted.

    * Time Complexity: O(n^2)
 
2. Insertion Sort

    * Description: Insertion Sort builds the final sorted array one element at a time. It takes each element from the input list and inserts it into its correct position in the sorted part of the array.

    * Time Complexity: O(n^2)

3. Merge Sort

    * Description: Merge Sort follows the divide-and-conquer approach. It recursively divides the input list into smaller sublists, sorts them independently, and then merges them to obtain the final sorted list.

    * Time Complexity: O(n log n)

4. Radix Sort

    * Description: Radix Sort sorts elements by their digits or bits. It sorts the elements from least significant digit/bit to the most significant one, utilizing stable sorting algorithms for each digit/bit position.
    
    * Time Complexity: O(d * (n + k)), where d is the number of digits/bits, n is the number of elements, and k is the range of possible values for each digit/bit.

5. Heap Sort

    * Description: Heap Sort uses a binary heap data structure to sort elements. It builds a max-heap (for ascending order) or a min-heap (for descending order) from the input list and repeatedly extracts the maximum (or minimum) element to obtain the sorted list.
    
    * Time Complexity: O(n log n)

6. Quick Sort
    
    * Description: Quick Sort also follows the divide-and-conquer approach. It selects a pivot element, partitions the input list into two sublists (elements smaller than the pivot and elements greater than the pivot), and recursively sorts the sublists.

    * Time Complexity: O(n^2).

## Tools
  * TypeScript
  * Jest

## Installation
In the project directory, you can run:

### `npm install`/`yarn`

to install all the necessary project libs

### `yarn test`/`npm run test`

runs all unity tests

### `yarn test-dev`/`npm run test-dev`

runs all unity tests with flag --watchAll