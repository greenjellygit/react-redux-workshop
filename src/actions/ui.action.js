export const requestStarted = () => ({
  type: UiActionType.REQUEST_STARTED,
  isRequestInProgress: true
});

export const requestFinished = () => ({
  type: UiActionType.REQUEST_FINISHED,
  isRequestInProgress: false
});

export const UiActionType = {
  REQUEST_STARTED: 'REQUEST_STARTED',
  REQUEST_FINISHED: 'REQUEST_FINISHED',
};