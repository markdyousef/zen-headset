exports.saveHeadsetData = (event, callback) => {
  const pubsubMessage = event.data;
  const name = pubsubMessage.data
    ? Buffer.from(pubsubMessage.data, "base64").toString()
      // JSON.parse(pubsubMessage.data)
    : "Nothing";
  callback(null, JSON.parse(name));
};
