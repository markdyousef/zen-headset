export const request = type => ({
  type
});

export const response = (type, data) => ({
  type,
  data
});

export const setState = (type, state) => ({
  type,
  state
});
