import http from  "k6/http"
function getDataWithToken(url, requestOptions){
    return  http.post(url , requestOptions); 
}
export {getDataWithToken}