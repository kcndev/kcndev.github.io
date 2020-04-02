(function() {

    var urlIpApi = 'https://ipapi.co/json/';
    var urlCloudFare = 'https://www.cloudflare.com/cdn-cgi/trace';
    var urlGeoIpLookup = 'https://json.geoiplookup.io/api';
    window.infoGathered = {};

    var opts = {
        method: 'GET',
        headers: {}
    };

    fetch(urlIpApi, opts)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            infoGathered.IpApi = res;
        });

    fetch(urlCloudFare, {
            method: 'GET',
            headers: {
                'Content-type': 'text/plain'
            },
        })
        .then(function(res) {
            res.text().then(function(text) {
                infoGathered.cloudFare = text;
            });
        });

    fetch(urlGeoIpLookup, opts)
        .then(function(res) {
            infoGathered.geoIp = res;
        });

})();