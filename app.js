const alertt = document.querySelector('.alert');
const form = document.querySelector('.task-entry');
const grocery = document.getElementById('task');
const submitbtn = document.querySelector('.btn-group');
const container = document.querySelector('.entries-recorder');
const list = document.querySelector('.list');
const deletee = document.querySelector('.clearbtn');
const datee = document.getElementById('date');
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');










let editElement;
let editElement1;
let editElement2;
let editElement3;
let editElement4;
let editElement5;
let editFlag = false;
let editId ="";
let editIdf=" ";

window.addEventListener('DOMContentLoaded',setupItems);
function handleSubmit(){
    if(!grocery.value==""){
        if(!datee.value=="" && datee.value>=0){
            if(!hr.value==""  && hr.value>=0){
                if(!min.value==""  && min.value>=0){
                    if(!sec.value==""  && sec.value>=0){

                        const value = grocery.value;
                        const id= new Date().getTime().toString();
                        //console.log(id);
                        if(editFlag === false)
                        {
                            createListItem(id,value,datee.value,hr.value,min.value,sec.value);
                            // //console.log("adding");
                            // const element= document.createElement('li');
                            // element.classList.add('addd');
                            // const attr =  document.createAttribute('data-id');
                            // attr.value=id;
                            // element.setAttributeNode(attr);
                            // element.innerHTML=`<div class="task-name" data-i="${grocery.value}" data-idd="${id}">${grocery.value}</div>
                            // <div class="dattee flex">
                            //     <div class="dayss" data-iddd="${datee.value}">
                            //         <h4 id="days">${datee.value}</h4>
                            //         <br>
                            //         <p>DAYS</p>
                            //     </div>
                            //     <div class="hours" data-iddd="${hr.value}">
                            //         <h4 id="hours">${hr.value}</h4>
                            //         <br>
                            //         <p>HOURS</p>
                            //     </div>
                            //     <div class="minutes" data-iddd="${min.value}">
                            //         <h4 id="minutes">${min.value}</h4>
                            //         <br>
                            //         <p>MIN</p>
                            //     </div>
                            //     <div class="seconds" data-iddd="${sec.value}">
                            //         <h4 id="seconds">${sec.value}</h4>
                            //         <br>
                            //         <p>SEC</p>
                            //     </div>
                            // </div>
                            // <div class="buttonss">
                            //     <button id="delete" class="deletee" onclick="deleteitem(this)"><i class="fa-sharp fa-solid fa-trash"></i></button>
                            //     <button id="complete" class="editt" onclick="edititem(this)" ><i class="fa-solid fa-pen-to-square"></i></button>
                            // </div>`;
                            // list.appendChild(element);
                            alertt.style.color="green";
                            alertt.textContent="task added sucessfully";
                        document.getElementById('submit').style.border="1px solid #0f0";
                        setTimeout(function(){
                            document.getElementById('submit').style.border="1px solid rgb(255, 255, 255)";
                           alertt.textContent="";
                           alertt.style.color="red";
                        },2000);

                        //local
                        addToLocalStorage(id,value,datee.value,hr.value,min.value,sec.value,id);
                        //
                        setBacktoDefault();
                        }
                        else if(editFlag === true){
                            editIdf=new Date().getTime().toString();
                            //console.log("editing");
                            //console.log("sankeerth");
                            editElement1.innerHTML=grocery.value;
                            editElement2.querySelector('h4#days').innerHTML=datee.value;
                            editElement3.querySelector('h4#hours').innerHTML=hr.value;
                            editElement4.querySelector('h4#minutes').innerHTML=min.value;
                            editElement5.querySelector('h4#seconds').innerHTML=sec.value;
                            editLocalStorage(editId,grocery.value,datee.value,hr.value,min.value,sec.value,editIdf);
                            alertt.style.color="green";
                            alertt.textContent="SUCESSFULLY EDITED";
                            setTimeout(function(){
                                alertt.textContent="";
                                alertt.style.color="red";
                            },2000);
                            setBacktoDefault();

                        }

                    }
                    else{
                        alertt.textContent="empty sec";
                        document.getElementById('sec').style.border="2px solid red";
                        setTimeout(function(){
                            document.getElementById('sec').style.border="2px solid #00fffb";
                           alertt.textContent="";
                        },2000);
                       }
                }
                else{
                    alertt.textContent="empty min";
                    document.getElementById('min').style.border="2px solid red";
                    setTimeout(function(){
                        document.getElementById('min').style.border="2px solid #00fffb";
                       alertt.textContent="";
                    },2000);
                    
                   }
            }
            else{
                alertt.textContent="empty hr";
                document.getElementById('hr').style.border="2px solid red";
                setTimeout(function(){
                    document.getElementById('hr').style.border="2px solid #00fffb";
                   alertt.textContent="";
                },2000);
               }
        }
        else{
            alertt.textContent="empty date";
            document.getElementById('date').style.border="2px solid red";
            setTimeout(function(){
                document.getElementById('date').style.border="2px solid #00fffb";
               alertt.textContent="";
            },2000);
           }
    }
    else{
        alertt.textContent="empty task";
        document.getElementById('task').style.border="2px solid red";
        setTimeout(function(){
           alertt.textContent="";
           document.getElementById('task').style.border="2px solid #00fffb";
        },2000);
       }
}


function handleclear(){
    const itemmm= document.querySelectorAll('.addd');
    //console.log(itemmm.length);
    //console.log("anusrita");
    if(itemmm.length > 0)
    {
        
        itemmm.forEach(function(item){
            //console.log(item);
            list.removeChild(item);
            //localstorage.remove(item);
            setBacktoDefault();
        });
        localStorage.removeItem('list');

    }
    alertt.textContent="cleared  all tasks";
        setTimeout(function(){
           alertt.textContent="";
        },2000);

        

}



function setBacktoDefault(){
    //console.log("soumi");
    grocery.value="";
    datee.value="";
    hr.value="";
    min.value="";
    sec.value="";
    editFlag=false;
    editId="";
    editIdf="";
    submitbtn.textContent="submit";

}

function addToLocalStorage(idd,valuee,dateee,hrr,minn,secc,idf){
    console.log("megha");
    const task = {
        id:idd,
        task:valuee,
        day:dateee,
        hr:hrr,
        min:minn,
        sec:secc,
        f1:dateee,
        f2:hrr,
        f3:minn,
        f4:secc,
        f5:idf,
    };
    //console.log(task);
    let items= getLocalstorage();
    items.push(task);
    localStorage.setItem("list",JSON.stringify(items));

}


function deleteitem(e){
    //console.log("arunima");
    ////console.log(e);
    const el = e.parentElement.parentElement;
    //console.log(el);
    list.removeChild(el);
    const ale =el.querySelector('.task-name');
    alertt.textContent=`deleted ${ale.getAttribute('data-i')}`;
        setTimeout(function(){
           alertt.textContent="";
        },2000);

    setBacktoDefault();
    // ewmove from local storage
    removeFromLocalStorage(ale.getAttribute('data-idd'));

    
}

function edititem(e){
    //console.log("shagun");
    const el = e.parentElement.parentElement;
    //console.log(el);
    const ale =el.querySelector('.task-name');
    const ale2 = el.querySelector('.dattee');
    const ale3= ale2.querySelector('.dayss');
    const ale4= ale2.querySelector('.hours');
    const ale5= ale2.querySelector('.minutes');
    const ale6= ale2.querySelector('.seconds');
    grocery.value=`${ale.getAttribute('data-i')}`;
    datee.value=`${ale3.getAttribute('data-iddd')}`;
    hr.value=`${ale4.getAttribute('data-iddd')}`;;
    min.value=`${ale5.getAttribute('data-iddd')}`;;
    sec.value=`${ale6.getAttribute('data-iddd')}`;;
    editFlag=true;
    editId=ale.getAttribute('data-idd');
    alertt.style.color="green";
    alertt.textContent=`editing ${ale.getAttribute('data-i')}`;
    setTimeout(function(){
    alertt.textContent="";
    alertt.style.color="red";
    },2000);
    submitbtn.textContent="EDIT";
    editElement= el;
    editElement1= ale;
    editElement2=ale3;
    editElement3=ale4;
    editElement4=ale5;
    editElement5=ale6;

}

function removeFromLocalStorage(id){
    //console.log(id);
    let items=getLocalstorage();

    items = items.filter(function(itemb){
        if(itemb.id !== id)
        return itemb;
    });
    localStorage.setItem("list",JSON.stringify(items));
}

function editLocalStorage(i1,i2,i3,i4,i5,i6,i7)
{
    let items = getLocalstorage();

    items= items.map(function(item){
        if(item.id === i1)
        {
        item.id=i1;
        item.task=i2;
        item.day=i3;
        item.hr=i4;
        item.min=i5;
        item.sec=i6;
        item.f1=i3;
        item.f2=i4;
        item.f3=i5;
        item.f4=i6;
        item.f5=i7;
        }
        return item;
    });
    localStorage.setItem("list",JSON.stringify(items));
}

function getLocalstorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}

function setupItems(){
    let items = getLocalstorage();
    if(items.length>0)
    {
        items.forEach(function(item){
            createListItem(item.id,item.task,item.day,item.hr,item.min,item.sec);
        });
    }
}

function createListItem(i1,i2,i3,i4,i5,i6){
    //console.log("adding");
    const element= document.createElement('li');
    element.classList.add('addd');
    // const attr =  document.createAttribute('data-id');
    // attr.value=id;
    // element.setAttributeNode(attr);
    element.innerHTML=`<div class="task-name" data-i="${i2}" data-idd="${i1}">${i2}</div>
    <div class="dattee flex">
        <div class="dayss" data-iddd="${i3}">
            <h4 id="days">${i3}</h4>
            <br>
            <p>DAYS</p>
        </div>
        <div class="hours" data-iddd="${i4}">
            <h4 id="hours">${i4}</h4>
            <br>
            <p>HOURS</p>
        </div>
        <div class="minutes" data-iddd="${i5}">
            <h4 id="minutes">${i5}</h4>
            <br>
            <p>MIN</p>
        </div>
        <div class="seconds" data-iddd="${i6}">
            <h4 id="seconds">${i6}</h4>
            <br>
            <p>SEC</p>
        </div>
    </div>
    <div class="buttonss">
        <button id="delete" class="deletee" onclick="deleteitem(this)"><i class="fa-sharp fa-solid fa-trash"></i></button>
        <button id="complete" class="editt" onclick="edititem(this)" ><i class="fa-solid fa-pen-to-square"></i></button>
    </div>`;
    list.appendChild(element);
    
}

setInterval(counterupdate,1000);
function counterupdate(){

    
    //console.log("updating");
    let items = getLocalstorage();
    items.forEach(function(item){
    //     if(item.counter === 0)
    // {
    //     f1 = parseInt(item.day);
    //     f2 = parseInt(item.hr);
    //     f3 = parseInt(item.min);
    //     f4 = parseInt(item.sec);
    //     item.counter++;
    //     //console.log("yes");
    // }

        let days = item.f1 * 86400000;
        let hr = item.f2 * 3600000;
        let min = item.f3 * 60000;
        let sec = item.f4 * 1000;
        let total = days+hr+min+sec;
        //console.log(total);
        let idf= new Date().getTime();
        ////console.log(parseInt(item.id));
        ////console.log(idf);
       // let prevtotal=(total1>0)?total1:0;
        let total1 = ((total + parseInt(item.f5) - idf ) >= 0)?(total + parseInt(item.f5) - idf):0 ;
        //console.log(idf-parseInt(item.f5));
        //console.log("final total should be dec 1k per sec");
        //console.log(total1);
        item.day = Math.floor(total1/86400000);
        item.hr =  Math.floor((total1-item.day*86400000)/3600000);
        item.min= Math.floor((total1 - item.day*86400000 - item.hr*3600000)/60000);
        item.sec = Math.floor((total1 - item.day*86400000 - item.hr*3600000 - item.min*60000)/1000);
        //ms= total % 1000;
        ////console.log("ms");
        ////console.log(ms);
        const live = document.querySelectorAll('.addd');
        live.forEach(function(li){
            if(li.querySelector('.task-name').getAttribute('data-idd') === item.id && item.day >=0 && item.hr >=0 && item.min >=0 && item.sec >=0  )
            {
                let li1 = li.querySelector('.dattee');
                let li2 = li1.querySelector('.dayss');
                let li3 = li1.querySelector('.hours');
                let li4 = li1.querySelector('.minutes');
                let li5 = li1.querySelector('.seconds');
                li2.querySelector('h4#days').innerHTML= item.day>0?item.day:"💀";
                li3.querySelector('h4#hours').innerHTML=item.hr>0?item.hr:"💀";
                li4.querySelector('h4#minutes').innerHTML=item.min>0?item.min:"💀";
                li5.querySelector('h4#seconds').innerHTML=item.sec>0?item.sec:"💀";
            }
            // else if( item.day <0){
            //     item.day=0;
            //     item.hr=0;
            //     item.min=0;
            //     item.sec=0;
                
            // }
          

        });
    });
    localStorage.setItem("list",JSON.stringify(items));


}