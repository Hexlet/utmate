// ?utm_source=source&utm_medium=med&utm_term=term&utm_content=cont&utm_campaign=campname

var initUrl = function (url) {
  if (url.slice(-1) != '/') url = url + '/';

  var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater

  if(!pattern.test(url)) {
    return false;
  } else {
    return url;
  }
}

var urlQueryParam = function (key, value){
  var resultUrl = key + '=' + value;
  return resultUrl;
}

var addUtmSource = function (url, value) {
  var resultUrl = url + '?' + urlQueryParam('utm_source', value);
  return resultUrl;
}

var addUtmMedium = function (url, value) {
  var resultUrl = url + '&' + urlQueryParam('utm_medium', value);
  return resultUrl;
}

var addUtmCampaign = function (url, value) {
  var resultUrl = url + '&' + urlQueryParam('utm_campaign', value);
  return resultUrl;
}
