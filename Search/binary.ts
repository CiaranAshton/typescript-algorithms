export const binarySearch = (
    array: number[],
    element: number,
    start = 0,
    end = array.length,
    middle = Math.floor((start + end) / 2),
): number =>
    end < start
        ? -1
        : element === array[middle]
            ? middle
            : element < array[middle]
                ? binarySearch(array, element, start, middle - 1)
                : binarySearch(array, element, middle + 1, end);
