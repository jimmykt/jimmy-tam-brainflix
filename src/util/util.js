export const convertDate = (timestamp) => {
  let date = new Date(timestamp);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  return ( month + '/' + day + '/' + year );
}

