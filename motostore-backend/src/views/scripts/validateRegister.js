function valida_envia(){
    //valido el nombre
    if (document.register.username.value.length == 0 ||
         document.register.username.value.length < 5){
           alert("El nombre de usuario debe tener al menos 5 caracteres")
           document.register.username.focus()
           return 0;
    }

    if (document.register.password.value.length == 0 ||
        document.register.password.value.length < 8){
          alert("La contraseña debe contener al menos 8 caracteres")
          document.register.password.focus()
          return 0;
   }

   if (document.register.password.value !== 
    document.register.re_password.value){
      alert("Las contraseñas deben coincidir")
      document.register.password.focus()
      return 0;
}
     
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.register.submit();
}