export default function getStudentsByLocation(student, address) {
  if (Array.isArray(student) && typeof (address) === 'string') {
    const studentsInLocation = student.filter((match) => match.location === address);
    return studentsInLocation;
  }
  return [];
}
