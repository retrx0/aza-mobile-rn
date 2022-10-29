import api from "..";

const apiCourier = (query: any, payload?: any) => {
  let path = api.defaults.baseURL;
  path += `/${query.model}`;
  if (query.id) path += `/${query.id}`;
  if (query.url) path += `/${query.url}`;
  // if (query.var) path += `?${QueryString.stringify(query.var)}`;

  return api(query, { data: payload })
    .then((response) => response)
    .catch((error) => ({ error }));
};

export default apiCourier;
