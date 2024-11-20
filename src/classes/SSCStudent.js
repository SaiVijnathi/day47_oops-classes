class SSCStudent{
    
    constructor(name, age, rollno, standard, section){
        console.log("Inside SSCStudent constructor");
        console.log(`Name: ${name}, Age: ${age}, RollNo: ${rollno}, Std: ${standard}, Sec: ${section}`);
        this.name = name;
        this.age= age;
        this.rollno= rollno;
        this.standard= standard;
        this.section= section;
        console.log(`${age} year old ${name} holding rollno ${rollno} is studying in ${standard} class ${section} section`)
    }
}

export default SSCStudent;