export const request = type => ({
  type
});

export const response = (type, data) => ({
  type,
  data
});
