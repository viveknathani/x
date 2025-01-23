import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "vivek-hacks",
  brokers: ["localhost:9092"],
});

async function main() {
  const consumer = kafka.consumer({ groupId: 'my-group' });
  await consumer.connect();
  await consumer.subscribe({ topic: 'vivek-test-topic', fromBeginning: true });

  console.log('Subscribed to topic, waiting for messages...');

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()} on topic: ${topic}`);
    }
  });
}

(async () => {
  await main();
})();
