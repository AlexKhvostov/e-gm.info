const levelListArr = [["1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D"],
    ["1", "2", "3", "4", "5", "6", "7", "8"],
    ["9", "10", "11", "12", "13", "14", "15", "16"],
    ["17", "18", "19", "20", "21", "22", "23", "24"]];
const tables = document.body.querySelectorAll("div[class='box-dash__item']");
const btnChart = document.body.querySelector(".btnShowChart");
const tableOrBox = document.body.querySelector("#tableOrBox")
const BoxsCol4x = document.body.querySelectorAll('.table4x')
const tbodys = document.body.querySelectorAll('tbody')


tableOrBox.addEventListener('input', () => {
    document.body.querySelector(".dash__table").classList.toggle("hidden")
    document.body.querySelector(".dash__box").classList.toggle("hidden")
})

function levelBoxGenerator(data) {
// data = {
//      lvlNum_v = "",
//      linePercent_v = "",
//      lineNum_v = "",
//      minUser_v = "",
//      nowUser_v = "",
//      maxUser_v = "",
//      addUsers_v = "",
//      addUsersPers_v = "",
//      position_v = "",
//      countPays_v = "",
//      dateFirstPay_v = ""
//     }
//



    const div0 = document.createElement('div');
    div0.className = 'box-dash__item mini';

    const div1 = document.createElement('div');
    div1.className = "box-dash__row";

    const div1_1 = document.createElement('div');
    div1_1.className = "form-check";

    const RadioLVL = document.createElement('input');
    RadioLVL.className = "form-check-input RadioLVL";
    RadioLVL.type = "radio";
    RadioLVL.name = "Level";
    RadioLVL.id = data.lvlNum_v;
    RadioLVL.value = data.lvlNum_v;

    const div1_2 = document.createElement('div');
    div1_2.className = 'box-dash__level';
    const lvlNum = document.createElement('span');
    lvlNum.className = "lvlNum";
    lvlNum.textContent = data.lvlNum_v;

    const div1_3 = document.createElement('div');
    div1_3.className = 'box-dash__percent minMAX hidden'
    const linePercent = document.createElement('span');
    linePercent.className = "linePercent";
    linePercent.textContent = data.linePercent_v;

    const div1_4 = document.createElement('div');
    div1_4.className = 'box-dash__text minMAX hidden';
    div1_4.textContent = "Линия";

    const div1_5 = document.createElement('div');
    div1_5.className = 'box-dash__line'
    const lineNum = document.createElement('span');
    lineNum.className = "lineNum";
    lineNum.textContent = data.lineNum_v;

    const div2 = document.createElement('div');
    div2.className = 'progress';

    const div2_1 = document.createElement('div');
    div2_1.className = 'progress-bar progress-bar-striped';
    div2_1.style.width = data.linePercent_v;
    // div2_1.role="progressbar";
    // div2_1.aria-valuenow="60";
    // div2_1.aria-valuemin="0";
    // div2_1.aria-valuemax="100";

    const div3 = document.createElement('div');
    div3.className = 'minMAX hidden';

    const div3_1 = document.createElement('div');
    div3_1.className = 'box-dash__row';

    const div3_1_1 = document.createElement('div');
    div3_1_1.className = 'box-dash__text';
    div3_1_1.textContent = 'min';

    const div3_1_2 = document.createElement('div');
    div3_1_2.className = 'box-dash__min';

    const minUser = document.createElement('span');
    minUser.className = "minUser";
    minUser.textContent = data.minUser_v;

    const div3_1_3 = document.createElement('div');
    div3_1_3.className = 'box-dash__text';
    div3_1_3.textContent = 'now';

    const div3_1_4 = document.createElement('div');
    div3_1_4.className = 'box-dash__now';

    const nowUser = document.createElement('span');
    nowUser.className = "nowUser";
    nowUser.textContent = data.nowUser_v;

    const div3_1_5 = document.createElement('div');
    div3_1_5.className = 'box-dash__text';
    div3_1_5.textContent = 'max';

    const div3_1_6 = document.createElement('div');
    div3_1_6.className = "box-dash__max";

    const maxUser = document.createElement('span');
    maxUser.className = "maxUser";
    maxUser.textContent = data.maxUser_v;

    const div3_2 = document.createElement('div');
    div3_2.className = 'box-dash__row';

    const div3_2_1 = document.createElement('div');
    div3_2_1.className = "box-dash__text";
    div3_2_1.textContent = "+за 24ч:";

    const div3_2_2 = document.createElement('div');
    div3_2_2.className = 'box-dash__perhour';
    const addUsers = document.createElement('span');
    addUsers.className = "addUsers";
    addUsers.textContent = data.addUsers_v;

    const div3_2_3 = document.createElement('div');
    div3_2_3.className = "box-dash__text";
    div3_2_3.textContent = "+% за 24ч:";


    const div3_2_4 = document.createElement('div');
    div3_2_4.className = 'box-dash__perhour_percenr';
    const addUsersPers = document.createElement('span');
    addUsersPers.className = "addUsersPers";
    addUsersPers.textContent = data.addUsersPers_v;

    const div3_3 = document.createElement('div');
    div3_3.className = 'box-dash__row';

    const div3_3_1 = document.createElement('div');
    div3_3_1.className = "box-dash__text";
    div3_3_1.textContent = "Место входа:";

    const div3_3_2 = document.createElement('div');
    div3_3_2.className = 'box-dash__position';
    const position = document.createElement('span');
    position.className = "position";
    position.textContent = data.position_v;

    const div3_3_3 = document.createElement('div');
    div3_3_3.className = "box-dash__text";
    div3_3_3.textContent = "Линия:";

    const div3_3_4 = document.createElement('div');
    div3_3_4.className = 'box-dash__count-pays';
    const countPays = document.createElement('span');
    countPays.className = "countPays";
    countPays.textContent = data.countPays_v;

    const div3_4 = document.createElement('div');
    div3_4.className = 'box-dash__row';

    const div3_4_1 = document.createElement('div');
    div3_4_1.className = "box-dash__text";
    div3_4_1.textContent = "Дата входа:";

    const div3_4_2 = document.createElement('div');
    div3_4_2.className = 'box-dash__first-pay';
    const dateFirstPay = document.createElement('span');
    dateFirstPay.className = "dateFirstPay";
    dateFirstPay.textContent = data.dateFirstPay_v;





    div0.append(div1);
    div1.append(div1_1);
    div1_1.append(RadioLVL);
    div1.append(div1_2);
    div1_2.append(lvlNum)
    div1.append(div1_3);
    div1_3.append(linePercent);
    div1.append(div1_4);
    div1.append(div1_5);
    div1_5.append(lineNum);

    div0.append(div2);
    div2.append(div2_1)

    div0.append(div3);

    div3.append(div3_1);

    div3_1.append(div3_1_1);
    div3_1.append(div3_1_2);
    div3_1_2.append(minUser);
    div3_1.append(div3_1_3);
    div3_1.append(div3_1_4);
    div3_1_4.append(nowUser);
    div3_1.append(div3_1_5);
    div3_1.append(div3_1_6);
    div3_1_6.append(maxUser);

    div3.append(div3_2);

    div3_2.append(div3_2_1);
    div3_2.append(div3_2_2);
    div3_2_2.append(addUsers);
    div3_2.append(div3_2_3);
    div3_2.append(div3_2_4);
    div3_2_4.append(addUsersPers);

    div3.append(div3_3);
    div3_3.append(div3_3_1);
    div3_3.append(div3_3_2);
    div3_3_2.append(position);
    div3_3.append(div3_3_3);
    div3_3.append(div3_3_4);
    div3_3_4.append(countPays);

    div3.append(div3_4);
    div3_4.append(div3_4_1);
    div3_4.append(div3_4_2);
    div3_4_2.append(dateFirstPay);


    return div0;

}

function levelTableGenerator(data){
//// date = {
// //      lvlNum_v = "",
// //      linePercent_v = "",
// //      lineNum_v = "",
// //      minUser_v = "",
// //      nowUser_v = "",
// //      maxUser_v = "",
// //      addUsers_v = "",
// //      addUsersPers_v = "",
// //      position_v = "",
// //      countPays_v = "",
// //      dateFirstPay_v = ""
// //     }
// //
    const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');
    tr1.className = 'table-active';
    tr2.className = 'table-active';

    const lvlNum = document.createElement('th'); // уровень

    const Line = document.createElement('td'); // линия /  %  / кол-во новых
    const Line2 = document.createElement('td'); // линия /  %  / кол-во новых

    const users = document.createElement('td');  // текущее   /  и след. порог
    const users2 = document.createElement('td');  // текущее   /  и след. порог

    const per24h = document.createElement('td');
    const per24h2 = document.createElement('td');

    const openLine = document.createElement('td');
    const openLine2 = document.createElement('td');

    const openDate = document.createElement('td');
    const openDate2 = document.createElement('td');

     lvlNum.className = "col";
     lvlNum.rowSpan=2;

     Line.className = "col";
     users.className = "col";
     per24h.className = "col";
     openLine.className = "col";
     openDate.className = "col";

     Line2.className = "col";
     users2.className = "col";
     per24h2.className = "col";
     openLine2.className = "col";
     openDate2.className = "col";

    lvlNum.textContent = data.lvlNum_v;
    Line.textContent = data.lineNum_v +" | "+ data. linePercent_v;
    Line2.textContent ="от "+ data.minUser_v ;

    users.textContent = data.nowUser_v;
    users2.textContent = "из "+  data.maxUser_v;

    per24h.textContent = data.addUsersPers_v;
    per24h2.textContent = " из "+  data.addUsers_v;

    openLine.textContent = "11 линия" ;
    openLine2.textContent = data.position_v+" место";

    openDate.textContent = data.dateFirstPay_v.slice(0,10) ;
    openDate2.textContent = data.dateFirstPay_v.slice(-8);




    tr1.append(lvlNum);
    tr1.append(Line);
    tr1.append(users);
    tr1.append(per24h);
    tr1.append(openLine);
    tr1.append(openDate);

    // tr2.append(lvlNum2);
    tr2.append(Line2);
    tr2.append(users2);
    tr2.append(per24h2);
    tr2.append(openLine2);
    tr2.append(openDate2);


    tbodys[0].append(tr1);
    tbodys[0].append(tr2);

}

window.addEventListener("load", () => {
// const response = fetch("http://flask.hvostov.by/tableInfo");
// const response = fetch("https://expressgameapp.herokuapp.com/");
    const response = fetch("https://expressgameapp.herokuapp.com/tableinfo");
    response.then((response) => {
        return response.json();
    })
        .then((data) => {

            console.log("Данные с сервера получены");
            alert("Данные с сервера получены");

            console.log(data);

            levelListArr.forEach((col,x)=>{

                col.forEach((lvl,y)=>{
                    if (data[0].hasOwnProperty(lvl)){
                        let dataPars = {
                            "lvlNum_v" : lvl,
                            "linePercent_v" : data[0][lvl]?.percent || "00000",
                            "lineNum_v" : data[0][lvl]?.line?.lineNum || "0",
                            "minUser_v" : data[0][lvl]?.line?.minLineUser || "0",
                            "nowUser_v" : data[0][lvl]?.countUserInLvl || "0",
                            "maxUser_v" : data[0][lvl]?.line?.maxLineUser || "0",
                            "addUsers_v" : data[0][lvl]?.SpeedAddedUsers || "0",
                            "addUsersPers_v" : (data[0][lvl]?.SpeedAddedUsers /data[0][lvl].line.minLineUser).toFixed(3) || "0",
                            "position_v" : 12544 || "0",
                            "countPays_v" : 11 || "0",
                            "dateFirstPay_v" : data[0][lvl]?.dateTimeUpdate.slice(0, 19) || ""

                        }
                        BoxsCol4x[x].append(levelBoxGenerator(dataPars))
                        levelTableGenerator(dataPars)
                    } else {
                        let dataPars = {
                            "lvlNum_v" : lvl,
                            "linePercent_v" : "00000",
                            "lineNum_v" : "0",
                            "minUser_v" : "0",
                            "nowUser_v" :  "0",
                            "maxUser_v" : "0",
                            "addUsers_v" :  "0",
                            "addUsersPers_v" :  "0",
                            "position_v" :  "0",
                            "countPays_v" :  "0",
                            "dateFirstPay_v" :  "0"

                        }
                        BoxsCol4x[x].append(levelBoxGenerator(dataPars))
                        levelTableGenerator(dataPars)
                    }
                })
            })

        })

        .then((data) => {
            const RadioLVL = document.body.querySelectorAll(".RadioLVL");
            RadioLVL.forEach(radio => {

                    radio.addEventListener('input', (event) => {
                        RadioLVL.forEach(a => {
                            a.checked = false;
                            a.classList.remove("active");
                        })
                        btnChart.classList.remove('btn-dark');
                        btnChart.classList.add('btn-primary');
                        event.target.checked = true;
                        event.target.classList.add("active");
                    });
                }
            );
            const minMAX = document.body.querySelectorAll('.minMAX');
            const expandBloks = document.body.querySelectorAll('.expandBloks');
            const linePercent = document.body.querySelectorAll('.linePercent');
            const boxDash__item = document.body.querySelectorAll('.box-dash__item');
            const forMinMax = document.body.querySelectorAll('.forMinMax');

            console.dir(linePercent);
            console.dir(boxDash__item);

            expandBloks.forEach(btn => {
                btn.addEventListener('click', () => {
                    boxDash__item.forEach(a=>{
                        a.classList.toggle("mini")
                    })
                    minMAX.forEach((e, i) => {
                        e.classList.toggle("hidden")
                    })
                    expandBloks.forEach(e=>{
                        if (e.textContent == "▲") {
                            e.classList.toggle("up")
                            e.textContent = "▼"
                        } else {
                            e.classList.toggle("up")
                            e.textContent = "▲"
                        }
                    })



                })
            })

        })
});















