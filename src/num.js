export const isNumber = (val) => !isNaN(parseFloat(val));
export const isNotNumber = (val) => isNaN(parseFloat(val));

export const asIntOr = (val, fallBack) => {
    const int = parseInt(val, 10);
    return isNumber(int) ? int : fallBack;
};
export const asFloatOr = (val, fallBack) => {
    const float = parseFloat(val);
    return isNumber(float) ? float : fallBack;
};
