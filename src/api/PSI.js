import { PSIKey } from "../properties/Key";

export const run = async (inputSite) => {
  const url = setUpQuery(inputSite);
  const response = await fetch(url);
  return response.json();
};

export const setUpQuery = (inputSite) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const parameters = {
    url: encodeURIComponent(inputSite),
    //category: ["accessibility", "best-practices", "performance", "pwa", "seo"],
  };
  let query = `${api}?`;
  for (let key in parameters) {
    query += `${key}=${parameters[key]}&`;
  }
  query += `key=${PSIKey}`;
  return query;
};
