export default function hasValuesFromArray(setArray, valueCheck) {
  return valueCheck.every((value) => setArray.has(value));
}
