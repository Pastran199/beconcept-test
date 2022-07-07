export const run = async (inputSite, lightScore) => {
  const url = setUpQuery(inputSite, lightScore);
  const response = await fetch(url);
  return response.json();
};

export const setUpQuery = (inputSite, lightScore) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const parameters = {
    url: encodeURIComponent(inputSite),
  };
  let query = `${api}?`;
  query += `url=${parameters.url}&`;

  if (lightScore) {
    parameters.category = [
      "ACCESSIBILITY",
      "BEST_PRACTICES",
      "PERFORMANCE",
      "PWA",
      "SEO",
    ];

    for (let category in parameters.category) {
      query += `category=${parameters.category[category]}&`;
    }
  }

  return query;
};
