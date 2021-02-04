$("#login").submit(function(e) 
{
    e.preventDefault();

    let correo = $("#correo").val();
    let clave = $("#clave").val();

    $.ajax({
        url : "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        datatype : "json"
    }).done(function(response) 
    {
        let arrayusuario = [];
        let arrayclave = [];
        let mensaje;
        
        for (let i = 0; i < response.length; i++) 
        {
           arrayusuario.push(response[i].userId);
           arrayclave.push(response[i].id);
        }
       
        for (let i = 0; i < arrayusuario.length; i++) 
        {
            if(arrayusuario[i] == correo && arrayclave[i] == clave)
            {               
                mensaje = "existe";
                break;
            }          
        }

        if (mensaje == "existe") 
        {
            Swal.fire({
                icon: 'success',
                title: 'Correcto!!!',
                text: 'Bienvenido al Sistema',
                confirmButtonText: `OK`           
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "main.php";
                    console.log(response);
                  }
              });       
        } 
        else 
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El Usuario no existe'             
              });           
        }
 
    });

})



