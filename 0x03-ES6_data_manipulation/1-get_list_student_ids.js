export default function getlistStudentIds(list) {
  if (Array.isArray(list)) {
    const ids = list.map((listid) => listid.id);
    return ids;
  }
  return [];
}
