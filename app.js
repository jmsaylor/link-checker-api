const { apiKey } = require("./config");
const fetch = require("node-fetch");

// console.log(apiKey);

const analyzeURL = async (link) => {
  const response = await fetch("https://www.virustotal.com/api/v3/urls", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": apiKey,
    },
    body: {
      url: JSON.stringify(link),
    },
  });
  return response;
};

const printAsync = async () => {
  console.log(
    await analyzeURL(
      "https://www.makeuseof.com/tag/4-quick-sites-that-let-you-check-if-links-are-safe/"
    )
  );
};

printAsync();
