export const getAccessToken = (data) => {
  return data.access_token;
};

export const getAllItems = (data) => {
  return [...data.itemList.promoted, ...data.itemList.regular];
};

export const getTotalItems = (data) => {
  return data.searchMeta.totalCount;
};

export const getItemImageUrl = (item) => {
  return item.images[0].url;
};

export const getItemPice = (item) => {
  return item.sellingMode.price.amount;
};

export const attachAuthInterceptor = ((client, accessToken) => {
  client.interceptors.request.use(config => {
    config.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return config;
  });
});

export const sumItems = (items) => {
  return items.map(e => e.sellingMode.price.amount).reduce((total, e) => total + Number.parseFloat(e), 0).toFixed(2);
};