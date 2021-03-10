
const { NewsSearchClient } = require("@azure/cognitiveservices-newssearch");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");
const { REACT_APP_BING_NEWS_API_KEY } = process.env;
 
async function main() {
  const newsSearchKey = process.env["newsSearchKey"] || "<newsSearchKey>";
  const cognitiveServiceCredentials = new CognitiveServicesCredentials(
    newsSearchKey
  );
  const client = new NewsSearchClient(cognitiveServiceCredentials);
  const query = "Microsoft Azure";
  const options = {
    count: 10,
    freshness: "Month",
    safeSearch: "Strict"
  };
  client.news
    .search(query, options)
    .then(result => {
      console.log("The result is:");
      console.log(result);
    })
    .catch(err => {
      console.log("An error occurred:");
      console.error(err);
    });
}
 
main();