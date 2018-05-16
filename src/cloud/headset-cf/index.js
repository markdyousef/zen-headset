exports.saveHeadsetData = (event, callback) => {
  const pubsubMessage = event.data;
  const name = pubsubMessage.data
    ? Buffer.from(pubsubMessage.data, "base64").toString()
    : "Nothing";

  console.log(name);
  callback();
};
