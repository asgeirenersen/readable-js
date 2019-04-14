export const contains = (lookFor, arr) => arr.indexOf(lookFor) !== -1;
export const doesNotContain = (lookFor, arr) => arr.indexOf(lookFor) === -1;

export const isEmpty = (lookFor, arr) => arr.length === 0;
export const isNotEmpty = (lookFor, arr) => arr.length > 0;

export const injectAt = (index, val, arr) => arr.splice(index, 0, val);
export const replaceAt = (index, val, arr) => arr.splice(index, 1, val);
export const deleteAt = (index, arr) => arr.splice(index, 1);
export const takeAt = (index, arr) => {
    const val = arr[index];
    deleteAt(index);
    return val;
}
export const takeFirst = (arr) => arr.shift();
export const takeLast = (arr) => arr.pop();

export const copyRange = (fromIndex, toIndex, arr) => arr.slice(fromIndex, toIndex);
export const copyFrom = (fromIndex, arr) => arr.slice(fromIndex);
