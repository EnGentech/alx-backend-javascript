export default function createIteratorObject(report) {
  const newList = [];
  const value = Object.values(report.allEmployees);
  for (const x of value) {
    newList.push(...x);
  }
  return newList;
}
