 
 
 
 
 /*   const form = document.querySelector('#form__login');

    form.addEventListener('submit', (event) => {

        event.preventDefault();
        const cpf = document.getElementById("cpf").value;
        const placa = document.getElementById("placa").value;
        // firebase code
        firebase.auth().signInWithCustomToken(cpf, placa)
        .then((result) => {
            // Signed in 
            window.location.replace ("index.html")
            alert("Bem-vindo!")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        })
    });*/