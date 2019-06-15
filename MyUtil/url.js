function getUrlParams() {
    let url = decodeURIComponent(location.search);
    let request = {}
    if (url.startsWith('?')) {
        let str = url.substr(1);
        let kwargs = str.split('&')
        for (let i of kwargs) {
            [k, v] = i.split('=')
            request[k] = v
        }
    }
    return request
}


function buildUrl(path, params) {
    var url = "" + path;
    var _paramUrl = "";
    if (params) {
        _paramUrl = Object.keys(params).map(function (k) {
            return [encodeURIComponent(k), encodeURIComponent(params[k])].join("=");
        }).join("&");
        _paramUrl = "?" + _paramUrl;
    }
    return url + _paramUrl;
}

