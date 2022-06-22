export const getQuote = async () => {
  const proxyUrl = "https://still-spire-54351.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  const response = await fetch(proxyUrl + apiUrl);
  return response.json();
};
