import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "vivek-hacks",
  brokers: ["localhost:9092"],
});

async function main() {
  const producer = await kafka.producer();
  await producer.connect();
  for (let i = 0; i < 10; i++) {
    const result = await producer.send({
      topic: "vivek-test-topic",
      messages: [
        {
          key: "key1",
          value: `some data ${i}${i+1}`,
        },
      ],
    });
    console.log(`producer.send result = ${JSON.stringify(result, null , 2)}`);
  }
  await producer.disconnect();
}

(async () => {
  await main();
})();
