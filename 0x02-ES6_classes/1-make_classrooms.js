import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const check = [new ClassRoom(9), new ClassRoom(20), new ClassRoom(34)];
  return check;
}