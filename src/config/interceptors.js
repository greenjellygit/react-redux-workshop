import {requestFinished, requestStarted} from "../actions/ui.action";

export const attachAuthInterceptor = ((client, accessToken) => {
  client.interceptors.request.use(config => {
    config.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return config;
  });
});

export const attachResponseInterceptor = ((client, dispatch) => {
  client.interceptors.response.use(config => {
    if (config.config.delay) {
      return new Promise(resolve => setTimeout(() => {
        dispatch(requestFinished());
        resolve(config);
      }, config.config.delay));
    }
    dispatch(requestFinished());
    return config;
  });
});

export const attachRequestInterceptor = ((client, dispatch) => {
  client.interceptors.request.use(config => {
    dispatch(requestStarted());
    return config;
  });
});