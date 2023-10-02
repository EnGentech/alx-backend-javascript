export default function getStudentIdsSum(ids) {
  if (Array.isArray(ids)) {
    const studentIds = ids.map((id) => id.id);
    const sum = studentIds.reduce((sum, ids) => sum + ids, 0);
    return sum;
  }
  return [];
}
