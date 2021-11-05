const urlEncode = function(text) {
  let trimText = text.trim();
  let urlString = trimText.split(" ").join("%20");
  return urlString;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("blue is greener than purple for sure"));
