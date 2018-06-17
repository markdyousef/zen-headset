const Board = require("./utils/board");
const PubSub = require("@google-cloud/pubsub");

const TOPIC = "headset_data";
const SUBSCRIPTION_NAME = "headset_data_subscription";

async function main() {
  const board = new Board({
    debug: true,
    verbose: true,
    simulate: true,
    boardType: "daisy",
    hardSet: true
  });

  const pubsub = new PubSub({
    projectId: "insai-204311"
  });

  // create topic if it doesn't already exist
  const topic = pubsub.topic(TOPIC);
  const topicExists = (await topic.exists())[0];
  if (!topicExists) {
    await topic.create();
  }

  // connect and start data stream
  await board.connect();
  await board.streamStart();

  const publisher = topic.publisher();
  board.on("sample", sample => {
    const data = new Buffer(JSON.stringify(sample));
    publisher.publish(data);
  });
}

main();
