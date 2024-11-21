
registroForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const nombre = document.getElementById('loginnombre').value;
    const apellido = document.getElementById('loginapellido').value;
    const genero = document.getElementById('logingenero').value;
    console.log("email:",email) 
    console.log("password:",password)
    console.log("nombre: ",nombre)
    console.log("apellido:",apellido)
    console.log("genero:",genero)
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(!usuarios) usuarios=[]
    const usuario = {
        email,password,nombre,apellido,genero
    }
    const usuarioExiste = usuarios.find(user => user.email === email);

    if (usuarioExiste) {
        alert('este correo ya esta registrado,cambialo')
    } else{
        usuarios.push(usuario);
        localStorage.setItem("usuarios",JSON.stringify(usuarios));

    usuarios.push(usuario)     
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
    alert("registro exitoso")
    window.location.href="./index.html"
}});
