class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = "spanish",
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  };

  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
  });
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
  });


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined, 
        instagram = undefined, 
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

class FreeStudent extends Student{
    constructor(props){
        super(props); //Nos va a permitir llamar al constructor de nuestra clase madre
    }
    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses(newCourse);
        }else{
            console.log('Solo puedes tomar cursos abiertos !');
        }
    }
};

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses(newCourse);
        }else{
            console.log('Solo puedes tomar cursos abiertos !');
        }
    }
};

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses(newCourse);
    }
};
class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
  
const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });
  