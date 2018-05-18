const PubSub = require("@google-cloud/pubsub");

const TOPIC = "headset_data";
const SUBSCRIPTION_NAME = "headset_data_subscription";

async function main() {
  const pubsub = new PubSub({
    projectId: "Insai"
  });

  // create topic if it doesn't already exist
  const topic = pubsub.topic(TOPIC);
  const topicExists = (await topic.exists())[0];
  if (!topicExists) {
    await topic.create();
  }

  // Subscription
  let subscription = pubsub.subscription(SUBSCRIPTION_NAME);
  const subscriptionExists = (await subscription.exists())[0];
  if (!subscriptionExists) {
    subscription = (await topic.createSubscription(
      TOPIC,
      SUBSCRIPTION_NAME
    ))[0];
    console.log("Created Subscription: ", SUBSCRIPTION_NAME);
  }

  // Subscription
  subscription.on("message", message => {
    console.log(JSON.parse(message.data))
    message.ack();
    return;
  });
}

main().catch(err => console.log(err));
