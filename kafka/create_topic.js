import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'vivek-hacks',
  brokers: ['localhost:9092'],
});

async function main() {
    const admin = kafka.admin();
    console.log(await admin.listTopics());
    const result = await admin.createTopics({
      topics: [
        {
          topic: 'vivek-test-topic',
          numPartitions: 1,
          replicationFactor: 1,
        }
      ],
    });
    console.log(`create topics result = ${result}`);
    console.log(await admin.listTopics());
}

(async () => {
  await main();
})();
