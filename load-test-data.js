require("dotenv/config");
const jsc8 = require('jsc8');

const client = new jsc8({
    url: "https://gdn.paas.macrometa.io",
    apiKey: process.env.MACROMETA_API_KEY
});

(async () => {
    // 1. create collection with the name employees
    await client.createCollection("employees", {
        stream: true
    });

    // 2. insert data into the employees collection
    const docs = [
        {
            email: "akachi.kendall@example.com",
            firstname: "Akachi",
            lastname: "Kendall",
            zipcode: 80301
        },
        {
            email: "harley.myung@example.com",
            firstname: "Harley",
            lastname: "Myung",
            zipcode: 80302
        },
        {
            email: "kei.shay@example.com",
            firstname: "Kei",
            lastname: "Shay",
            zipcode: 80303
        },
        {
            email: "padma.kennedy@example.com",
            firstname: "Padma",
            lastname: "Kennedy",
            zipcode: 80303
        },
        {
            email: "shirley.hira@example.com",
            firstname: "Shirley",
            lastname: "Hira",
            zipcode: 80303
        }
    ];

    await client.insertDocumentMany("employees", docs);

    // 3. done!
    console.log(`Finished creating the collection employees and inserting ${docs.length} documents.`);

    process.exit(0);
})();