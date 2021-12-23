const form=document.getElementById("mainForm");




// function getDateFromForm(event){
//     event.preventDefault();

//     const radio=form.querySelector('[name="radio" ]');
//     const select=form.querySelector('[name=select]');
//     const check=form.querySelector('[name=check]');
//     const name=form.querySelector('[name="name"]');
//     const email=form.querySelector('[name="email"]');
//     const phone=form.querySelector('[name="phone"]');
//     const question=form.querySelector('[name="question"]');

//     const values={
//         radio:radio.value,
//         select:select.value,
//         check:check.value,
//         name:name.value,
//         email:email.value,
//         phone:phone.value,
//         question:question.value,

//     };
    
//     console.log(values);
// }

// form.addEventListener('submit',getDateFromForm)
function getDateFromForm(form){

    let i,j,date=[]
    for(i=0;i<form.elemets.lenght;i++){
        if(form.elemets[i].name===""){
            continue
        }
        switch(form.elemets[i].nodeName){
            case 'INPUT':
                switch(form.elemets[i].type){
                    case 'text': date.push(form.elemets[i].name+" = "+form.elemets.value)
                    case 'email': date.push(form.elemets[i].name+" = "+form.elemets.value)
                    case 'number': date.push(form.elemets[i].name+" = "+form.elemets.value)
                    case 'radio': date.push(form.elemets[i].name+" = "+form.elemets.value)
                        if(form.elemets[i].checked){
                            date.push(form.elemets[i].name+" = "+form.elemets.value)
                        }
                        
                    case 'checkbox':
                        if(form.elemets[i].checked){
                            date.push(form.elemets[i].name+" = "+form.elemets.value)
                        }
                    break;
                }
            case'select': if(form.elemets[i].checked){
                 date.push(form.elemets[i].name+" = "+form.elemets.value)
        }   
        }
    }
    return date;
}

function sendDate(event){
    event.preventDefault();
    console.log(detDateFromForm())
}
form.addEventListener('submit',sendDate())