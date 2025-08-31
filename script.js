function processarFormulario(){
    let nome = document.querySelector("#nome").value.trim()
    let email = document.querySelector("#email").value.trim()
    let telefone = document.querySelector("#telefone").value.trim()
    let instagram = document.querySelector("#instagram").value.trim()

    if(nome === ""){
        alert("Você deve informar seu nome")
        return false
    }

    if(email === ""){
        alert("Você deve informar seu email")
        return false
    }

    if(!email.includes("@gmail.com") && !email.includes("@hotmail.com") && !email.includes("@yahoo.com") && !email.includes("@outlook.com")){
        alert("Você deve inserir um email válido")
        return false
    } 
    
    if(telefone === ""){
        alert("Você deve informar seu telefone")
        return false
    }

    if(instagram === ""){
        alert("Você deve informar seu instagram")
        return false
    }
}