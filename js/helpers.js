async function httpGet(path) {
    var response = await fetch(path, {
        method: 'GET',
    });
    var data = await response.text();
    return data;
}
