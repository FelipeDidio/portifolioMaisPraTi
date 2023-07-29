function validationForm(){
    let validationCod = document.forms["register"]["cod"].value;
    let validadtionTitle = document.forms["register"]["title"].value;
    let validadtionDirector = document.forms["register"]["director"].value;
    let validadtionDate = document.forms["register"]["date"].value;
    let validadtionActor = document.forms["register"]["actor"].value;
    let validadtionNota = document.forms["register"]["nota"].value;
    let validadtionRadio = document.forms["register"]["radio"].value;

    if(validationCod ==""){
        alert("O código dever ser preenchido")
        return false;
    }
    if(validadtionTitle ==""){
        alert("O Título dever ser preenchido")
        return false;
    }
    if(validadtionDirector ==""){
        alert("O Diretor dever ser preenchido")
        return false;
    }
    if(validadtionDate ==""){
        alert("A data dever ser preenchida")
        return false;
    }
    if(validadtionActor == ""){
        alert("O Ator principal precisa ser preenchido")
        return false;
    }
    if(validadtionNota == ""){
        alert("A nota precisa ser informada")
        return false;
    }
    if(validadtionRadio ==""){
        alert("O Gênero dever ser preenchido")
        return false;
    }
    
    alert("A validação ocorreu de forma correta");
}

function insert(){
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;
    let director = document.forms["register"]["director"].value;
    let date = document.forms["register"]["date"].value;
    let radio = document.forms["register"]["radio"].value;
    let actor = document.forms["register"]["actor"].value;
    let nota = document.forms["register"]["nota"].value;
    

    let insert = window.document.getElementById("insertRow");
    
    insert.innerHTML = `
    <th scope='row'>${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${radio}</td>
    <td>${actor}</td>
    <td>${nota}</td>
    
    `;
}