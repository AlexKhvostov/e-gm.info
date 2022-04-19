

// const response = fetch("http://flask.hvostov.by/tableInfo");
const response = fetch("https://expressgameapp.herokuapp.com/tableinfo");
// const response = fetch("https://expressgameapp.herokuapp.com/");
response.then((response) => {
    return response.json();
})
    .then((data) => {
        console.log(data);
    });
