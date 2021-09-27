var students = [];
var numberOfStudents = 0;
addStudent('karoui');
addStudent('klouz');
addStudent('cousa');
addStudent('boh');
addStudent('koo');

console.log(students);
clearStudents();
console.log(students);
console.log()
function addStudent(student){
students.push(student);
numberOfStudents = students.length;
}


console.log(students);
function createStudent(fName,lName,mail,ag,edu){
    var student={
        firstName : fName ,
        lastName : lName,
        fullName: fName + ' ' + lName,
        email :mail,
        age: ag ,
        education : edu,

    }
return student;
}
function getNumberOfStudents(){
    return numberOfStudents;
}
function clearStudents(){
    students.length=0;
}

function createFullName(firstName,lastName){
    return `my name is: ${firstName} ${lastName}`
}
/*function getStudentsByInitials(name,initial){
    return name.charAt(0)==initial;
}*/
function isFullName(name){
    var names =name.split(' ');
    return names.length>1;
}
function getStudentsByInitials(firstInitial,secondInitial){
    var i = 0;
    var secondStud=[];
    var splitter = [];
    while(i<students.length){
        if (isFullName(students[i])){
            splitter= students[i].split(' ');
            if (splitter[0].charAt(0)==firstInitial && splitter[1].charAt(0)==secondInitial){secondStud.push(students[i])}
        }
        i++;
    }
    return secondStud;
}

function createStudent(fName,lName,mail,ag,edu){
    var student={
        firstName : fName ,
        lastName : lName,
        fullName: fName + ' ' + lName,
        email: mail,
        age: ag ,
        education : edu,

    }
return student;
}

function addSkills(student,skill1){
    if(!(typeof(student.skills)==undefined)){
        student.skills=student.skills.Concat(skill1);
        
    }
    else{student.skills=skill1;}
}
function removeStudent(firstName){
    var i=0;
    while(i<students.length){
        if(students[i].firstName==firstName){
            students.splice(i,1);
        }
        else{i++;}
    }
    numberOfStudents= students.length;
}
function isStudentOlderThan(student,age){
    return student.age>age;
}
function doesStudentHaveSkills(student){
    return !(student.skills==undefined);
}
function isStudentQualified(student){
    return (doesStudentHaveSkills(student)||isStudentOlderThan(student,18));
}
function numberOfStudentsOlderThan(age){
    var n=0;
    for(var i=0;i<students.length;i++){
        if (isStudentOlderThan(students[i],age)){
            n=n+1;
        }
    }
    return n;
}
function getStudentsWithSkills(){
    var sws =[];
    for (var i=0;i<students.length;i++){
        if(doesStudentHaveSkills(students[i])){
            sws.push(students[i]);
        }
    }
    return sws;
}
function getAllStudentsWithSkill(skill){
    var saws=[];
    
    for(var i=0;i<students.length;i=i+1){
        if(!(students[i].skills==undefined)){
            ver=false;
            var j=0
            while(ver==false||j<students[i].skills.length){
                if (students[i].skills[j]==skill){
                    saws.push(students[i]);
                    ver=true;
                }
                else{j++;}
            }
        }
    }
    return saws;
}

/*var me = createStudent('Amine','Karoui','mohmaedmaine.karoui@medtech.tn',21,'SE');
console.log(me.skill);
addSkills(me,['HTML','CSS']);
console.log(me.skill);*/



clearStudents();
console.log(students);
console.log(getNumberOfStudents());

var st1=createStudent('mehdi','klouz','mehdi.klouz@medtech.tn',19,'SE');
var st2=createStudent('yosr','karoui','yosr.karoui@medtech.tn',21,'SE');
var st3=createStudent('ahmed','belghith','ahmed.belghith@medtech.tn',21,'SE');
var st4=createStudent('farouk','kooli','farouk.kooli@medtech.tn',21,'SE');
var st5=createStudent('yassine','klouz','yassine.klouz@msb.tn',18,'MSB');

addStudent(st1);
addStudent(st2);
addStudent(st3);
addStudent(st4);
addStudent(st5);

addSkills(st1,['8 pool']);
addSkills(st4,['7awes','gardien']);
addSkills(st3,['khobzti','Bannac']);   


console.log(students);
console.log(getNumberOfStudents());
removeStudent('mehdi');
console.log(students);
console.log(numberOfStudents);
console.log(isStudentOlderThan(st2,18));
console.log(doesStudentHaveSkills(st3));
console.log(isStudentQualified(st3));
console.log(numberOfStudentsOlderThan(20));
console.log(getStudentsWithSkills());
console.log(getAllStudentsWithSkill('7awes'));
