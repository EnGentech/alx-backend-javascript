import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let validate = {};

  try {
    const image = await uploadPhoto();
    const users = await createUser();
    validate = { image, users };
  } catch (err) {
    validate = { image: null, users: null };
  }
  return validate;
}