export const fetchData = () => async dispatch => {
  // dispatch request

  // get text analysis from server
  const res = await fetch("http://localhost:5555/text");
  const data = await res.json();

  console.log(data)
  return data;
};
