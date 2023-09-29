// import employeesList from './11-createEmployeesObject'

export default function createReportObject(employeesList) {
  const data = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return data;
}
