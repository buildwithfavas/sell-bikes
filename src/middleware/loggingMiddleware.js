const loggingMiddleware = (store) => (next) => (action) => {
  console.log("previous state:", JSON.stringify(store.getState()));
  const result = next(action);
  console.log("next state:", JSON.stringify(store.getState()));
  return result;
};

export default loggingMiddleware;
