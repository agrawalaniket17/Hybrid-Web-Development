let btnAdd = document.querySelector('#add');
let btnCal = document.querySelector('#calculate');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let countryInput = document.querySelector('#country');
btnAdd.addEventListener('click',() => {
    let name = nameInput.value;
    let age = ageInput.value;
    let country = countryInput.value;
    let template = `<tr>
    <td>${name}</td>
    <td>${age}</td>
    <td>${country}</td>
    </tr>`;
    table.innerHTML += template;
});
btnCal.addEventListener('click',() => {
    var mytab = document.getElementById('mytab');
    let sum=0;
    info.innerHTML='';
    for(i=1;i<mytab.rows.length;i++)
    {
        //get the collection of cells of the current row
        var obj = mytab.rows.item(i).cells;
        //for(j=0;j<obj.length;j++){
            //info.innerHTML = info.innerHTML + ''+obj.item(j).innerHTML;
        //}
        sum+=parseInt(obj.item(i).innerHTML);
        info.innerHTML=info.innerHTML + '<br\>';
    }
    info.innerHTML ="Total sum is" + sum + '<br/';
});