require("dotenv/config");
const jsc8 = require('jsc8');
const mockData = require('./data.json');

const client = new jsc8({
    url: "https://gdn.paas.macrometa.io",
    apiKey: process.env.MACROMETA_API_KEY
});

(async () => {
    // 1. create collection
    await client.createCollection(process.env.MACROMETA_COLLECTION, {
        stream: true
    });

    // 2. insert data into collection
    await client.insertDocumentMany(process.env.MACROMETA_COLLECTION, mockData);

    // // 3. done!
    console.log(`Finished creating the collection ${process.env.MACROMETA_COLLECTION} and inserting ${mockData.length} documents.`);

    process.exit(0);
})();