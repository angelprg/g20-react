class User {
  constructor(name, age, email){
    console.log('ejecutando contructor de user')
    this.name = name;
    this.age = age;
    this.email = email;
  }

  sendEmail(text){
    // enviando correo...
    // gmail.sent(this.email, text)
    console.log('Correo enviado correctamente a '+ this.email)
  }
}

class Admin extends User{
  constructor(name, age, email, password){
    console.log('ejecutando contructor de Admin')
    super(name, age, email)
    this.password = password
  }

  login(){
    // fetch(this.name, this.password)
    console.log(`El login de ${this.email} con el password ${this.password} se realizó exitosamente`)
  }


}

class SuperAdmin extends Admin {
  delteDatabase(){
    console.log('Borrando base de datos')
  }
}


const angel = new SuperAdmin("Angel", 30, "angel.resendiz@gmail.com", "asdf")
angel.sendEmail("Saludos cordiales")
angel.login();
angel.delteDatabase();

