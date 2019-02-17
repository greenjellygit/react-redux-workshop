export const connectAllegro = () => ({
  types: [AuthenticateActionType.CONNECTION_STARTED, AuthenticateActionType.CONNECTION_SUCCESS, AuthenticateActionType.CONNECTION_FAILURE],
  payload: {
    client: "allegroAuth",
    request: {
      method: "post",
      url: "/token",
      params: {
        grant_type: 'client_credentials'
      }
    },
  }
});

export const AuthenticateActionType = {
  CONNECTION_STARTED: 'CONNECTION_STARTED',
  CONNECTION_SUCCESS: 'CONNECTION_SUCCESS',
  CONNECTION_FAILURE: 'CONNECTION_FAILURE',
};