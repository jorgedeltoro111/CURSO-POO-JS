class Student{
    constructor({
        name,
        points
    }){
        this._name = name; //le ponemos '_' para indicarle que lo vamos a esconder
        this._points = points;//inicializamos nuestras variables 
    }

    get name(){//metodo get
        return this._name;
    }
    set name(name){//metodo set
        this._name = name;
    }
    get points(){//metodo get
        return this._points;
    }
    set points(points){//metodo set 
        this._points = points;
    }
};
const student = new Student({name: 'jorge', points: '200'});//instanciamos el objeto
console.log(student.name);//utilizamos los metodos getters para acceder a nuestros atributos
console.log(student.points);//Nota: usamos los getters sin parentesis
student.name = "Polola"; //Asi se utilizan los metodos setters para cambiar los atributos
student.points = 300;//lamando al objeto, indicando el atributo a cambiar con su setter
console.log(student.name);
console.log(student.points);