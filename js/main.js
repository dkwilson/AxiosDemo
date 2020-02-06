function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = "";

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error){
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
};

function generateSuccessHTMLOutput(response) {
    return  '<h4>Result:</h4>' + 
            '<h5>Status:</h4>' +
            '<pre>'+ response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>'+ JSON.stringify(response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>'+ JSON.stringify(response.data, null, '\t') + '</pre>';

}


function generateErrorHTMLOutput(error) {
    return  '<h4>Result:</h4>'  + 
            '<h5>Message:</h5>' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h4>' +
            '<pre>'+ error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>'+ JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>'+ JSON.stringify(error.response.data, null, '\t') + '</pre>';

}

function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = "";
    var todoId = document.getElementById('todoId').value;

    axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            id: todoId
        }
    })
    .then(function(response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error){
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
};

document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

function performPostRequest(event) {
    event.preventDefault();
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = "";
    var todoTitle = document.getElementById('todoTitle').value;
    

    axios.post('https://jsonplaceholder.typicode.com/todos', {
        userId: '1',
        title: todoTitle,
        completed: false
    })
    .then(function(response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
};

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = "";
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = "";
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = "";
}