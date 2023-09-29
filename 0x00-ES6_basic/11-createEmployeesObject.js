export default function createEmployeesObject(departmentName, employees) {
  const mydict = {};
  mydict[departmentName] = employees;
  return mydict;
}
