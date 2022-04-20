
const hideBloks = document.body.querySelector('.hideBloks');
const showBloks = document.body.querySelector('.showBloks');
const minMAX = document.body.querySelectorAll('.minMAX');
let checkBox = document.body.querySelectorAll(".form-check-input");
const tables = document.body.querySelectorAll("div[class='box-dash__item']");
const btnGetChart = document.body.querySelector(".btnGetChart");
minMAX.forEach((e,i)=>{
    e.classList.add("hidden")

})
console.log(tables);

hideBloks.addEventListener('click', ()=>{

    minMAX.forEach((e,i)=>{
        e.classList.add("hidden")

    })
})

showBloks.addEventListener('click', ()=>{
    minMAX.forEach((e,i)=>{
        e.classList.remove("hidden")

    })
})

checkBox.forEach(ch=>{
    ch.addEventListener('click', (event)=>{
        checkBox.forEach(a=>{
            a.checked=false;
        })
        btnGetChart.classList.remove('btn-dark');
        btnGetChart.classList.add('btn-primary');

        event.target.checked = true;
    })
})


// const response = fetch("http://flask.hvostov.by/tableInfo");
// const response = fetch("https://expressgameapp.herokuapp.com/");

const response = fetch("https://expressgameapp.herokuapp.com/tableinfo");
response.then((response) => {
    return response.json();
})
    .then((data) => {
        console.log(data);
        tables.forEach(table=>{
            let nameTable = table.querySelector('input').id;
            console.log(data[0][nameTable]);
            table.querySelector('.lvlNum').textContent = nameTable
            table.querySelector('.linePercent').textContent = data[0][nameTable].percent;
            table.querySelector('.progress-bar').style.width = data[0][nameTable].percent;
            table.querySelector('.lineNum').textContent = data[0][nameTable].line.lineNum;
            table.querySelector('.maxUser').textContent = data[0][nameTable].line.maxLineUser;
            table.querySelector('.minUser').textContent = data[0][nameTable].line.minLineUser;

            table.querySelector('.nowUser').textContent = data[0][nameTable].countUserInLvl;
            table.querySelector('.addUsers').textContent = data[0][nameTable].SpeedAddedUsers;

            table.querySelector('.addUsersPers').textContent = (data[0][nameTable].SpeedAddedUsers/data[0][nameTable].line.minLineUser).toFixed(3);
            table.querySelector('.dateFirstPay').textContent = data[0][nameTable].dateTimeUpdate.slice(0,19);
            table.querySelector('.position').textContent = 12544;
            table.querySelector('.countPays').textContent = 1;


        })
});


// <div className="spinner-border m-5" role="status">
//     <span className="visually-hidden">Loading...</span>
// </div>













