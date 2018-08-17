export const selectionSort = (array: number[]): number[] => {
    for (let i = 0; i < array.length; i++) {
        const minIndex = selectMinimum(array, i);
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
};

const selectMinimum = (subArray: number[], index: number): number => {
    let minValue = subArray[index];
    let minIndex = index;
    for (let i = minIndex + 1; i < subArray.length; i++) {
        if (subArray[i] < minValue) {
            minValue = subArray[i];
            minIndex = i;
        }
    }
    return minIndex;
};
