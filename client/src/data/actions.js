export const request = type => ({
  type
});

export const response = (type, data, message) => ({
  type,
  data,
  message
});

export const setState = (type, state) => ({
  type,
  state
});
