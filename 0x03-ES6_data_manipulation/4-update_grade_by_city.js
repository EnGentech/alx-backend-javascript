export default function updateStudentGradeByCity(student, address, grade) {
  const studentsData = student.filter((byCity) => byCity.location === address);

  const updatedGrade = studentsData.map((newgrade) => {
    const findGrade = grade.find((allGrades) => allGrades.studentId === newgrade.id);
    if (findGrade) {
      return { ...newgrade, grade: findGrade.grade };
    }
    return { ...newgrade, grade: 'N/A' };
  });
  return updatedGrade;
}
