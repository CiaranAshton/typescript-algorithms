export const binarySearch = (
    array: number[],
    elm: number,
    start = 0,
    end = array.length - 1,
): number => {
    const middle = Math.floor((start + end) / 2);
    return end < start
        ? -1
        : elm === array[middle]
            ? middle
            : elm < array[middle]
                ? binarySearch(array, elm, start, middle - 1)
                : binarySearch(array, elm, middle + 1, end);
};
