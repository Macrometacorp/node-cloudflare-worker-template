const jsc8 = require("jsc8");

const client = new jsc8({
  url: "https://gdn.paas.macrometa.io",
  apiKey: MACROMETA_API_KEY, // set environment variable in .env
  fabricName: "_system",
  agent: fetch // this tells the SDK to use the fetch which is native to the browser
});

async function handleRequest() {
  try {
    const docs = await client.executeQuery(
      `FOR doc IN ${MACROMETA_COLLECTION} RETURN doc`
    );
  
    return new Response(JSON.stringify(docs), {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      status: 200,
    });
  } catch(error) {
    console.error(error);
  }
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

