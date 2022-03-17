
function postRequest(url, params) {
    /* Send a POST request to url with params, return the xhr. */
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params)
    return xhr;
}

function download(title,ep,name,url) {
    alert("Your download will be visible after finished!")
    let params = "command=dl";
    params += "&title=" + title;
    params += "&ep=" + ep;
    params += "&name=" + name;
    url = url + "downloads/";
    return  postRequest(url, params);
}
