export const convertDate = (timestamp) => {
  let date = new Date(timestamp);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  return ( month + '/' + day + '/' + year );
}

export const API_KEY = "/?api_key=4354755b-7920-4743-83e9-cb45372f1579";
export const API = "https://project-2-api.herokuapp.com"
