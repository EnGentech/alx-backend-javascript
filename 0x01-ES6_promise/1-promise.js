export default function getFullResponseFromAPI(value) {
  return new Promise((resolve, reject) => {
    if (value === true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else if (value === false) {
      reject(Error(
        'The fake API is not working currently',
      ));
    }
  });
}
