export const contains = (lookFor, str) => str.indexOf(lookFor) !== -1;
export const doesNotContain = (lookFor, str) => str.indexOf(lookFor) === -1;

export const isEmpty = (lookFor, str) => str.length === 0;
export const isNotEmpty = (lookFor, str) => str.length > 0;
