export default function iterateThroughObject(reportWithIterator) {
  let newString = '';
  let index = 0;
  for (const itr of reportWithIterator) {
    index += 1;
    if (index === reportWithIterator.length) {
      newString += itr;
    } else {
      newString += `${itr} | `;
    }
  }
  return newString;
}
