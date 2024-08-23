function getUrlParameterValue(url, parameter) {

    const urlObj = new URL(url);


    const params = new URLSearchParams(urlObj.search);


    return params.get(parameter);
}


var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign")); 
