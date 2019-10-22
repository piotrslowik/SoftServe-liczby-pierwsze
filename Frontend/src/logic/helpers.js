export const sortObjectsArrayByField = (array, field) => {
    array.sort((obj1, obj2) => (obj1[field] > obj2[field]) ? 1 : -1);
    return array;
}
export const makeObjectLast = (array, field, otherName) => {
    const names = array.map(obj => obj[field]);
    const index = names.indexOf(otherName);
    const other = array.splice(index, 1);
    array.push(other[0]);
    return array;
}
export const isStringInText = (string, text) => {
    return text.toLowerCase().indexOf(string.toLowerCase()) !== -1
  }