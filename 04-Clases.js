//Prototipos pero con sintaxis de class
class Student{//Creacion de la clase estudiante
    constructor(name, age, certyfies){//Constructor con sus 3 parametros
        this.name = name;
        this.age = age;
        this.certyfies = certyfies;
    }
    addCertify(course){//Agregar un certificado nuevo
        this.certyfies.push(course);
    }
    showInformation(){//Metodo para mostrar la informacion
        console.log(`Nombre: ${this.name} Edad: ${this.age} Certificados: ${this.certyfies}`);
    }
};

const jorge = new Student('Jorge', 21, ['HTML', 'CSS', 'JS']);//Creacion del objeto
jorge.showInformation();//Informacion original
jorge.addCertify('PHP');//Agregamos un nuevo curso
jorge.showInformation();//Mostramos la nueva Informacion



//Otro ejemplo de clase estudiante
class Student {
    constructor({//Le mandaremos un objeto que contenga estos atributos
        name,
        email,
        username,
        twitter = undefined, //valores por defecto ya que no es necesario que lo tengan
        instagram = undefined, //valores por defecto ya que no es necesario que lo tengan
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};
const jorge2 = new Student({
    name: 'Jorge',
    email: 'jorgedeltoro111@outlook.es',
    username: 'neverland',
    facebook: 'Jorge Enrique',
    learningPaths: ['Programacion web', 'React'],
});
console.log(jorge);