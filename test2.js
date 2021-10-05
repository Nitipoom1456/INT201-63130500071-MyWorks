//63130500071 นิติภูมิ สุทธไชย
//2
//2.1
let nitipoomRegis = {
    student: { //student เป็น property ที่เป็น object ที่เก็บข้อมูลเกีายวกับนศ.
        id:63130500071,
        nameTH: "นิติภูมิ สุทธไชย",
        nameENG: "Nitipoom Suttachai"
    },
    allSemester: [{ //property allSemester เป็น array เก็บ object ของแต่ละ semester
        semester: '1/2563',
        courseRegister: [ //ใน property courseRegister เป็น array เก็บ course
            { //object course
                courseID: 'GEN101',
                courseName: 'Physical Education',
                credit: 1,
                grade: 'B+'
            },
            {
                courseID: 'GEN121',
                courseName: 'Learning and Problem Solving Skills',
                credit: 3,
                grade: 'B'
            },
            {
                courseID: 'INT100',
                courseName: 'Infornmation Technology Fundamentals',
                credit: 3,
                grade: 'B'
            },
            {
                courseID: 'INT101',
                courseName: 'Programing Fundamentals',
                credit: 3,
                grade: 'A'
            },
            {
                courseID: 'INT102',
                courseName: 'Web Technology',
                credit: 1,
                grade: 'B+'
            },
            {
                courseID: 'INT114',
                courseName: 'Discrete Mathematics for Information Tehcnology',
                credit: 3,
                grade: 'B'
            },
            {
                courseID: 'LNG220',
                courseName: 'Academic English',
                credit: 3,
                grade: 'B+'
            }
        ],
        summary: { //เป็น property ที่เป้น object ที่ข้างในจะมี property ต่างๆใช้คำนวน
            creditRegister: () => { //เป็น function ที่ return หน่วยกิตลงทะเบียนของเทอมนั้น
                let sum = 0;
                let courseList = nitipoomRegis.allSemester[0].courseRegister;
                for (let i = 0; i < courseList.length; i++) { //loop ใน array
                    sum += courseList[i].credit; //รวม credit
                }
                return sum;
            },
            calculateCredit: () => {
                let sum = 0;
                let courseList = nitipoomRegis.allSemester[0].courseRegister;
                for (let i = 0; i < courseList.length; i++) { 
                    if(courseList[i].grade !== undefined){ //เช็คว่ามีเกรดหรือไม่มี
                        sum += courseList[i].credit;
                    }
                }
                return sum;
            },
            pointLevel: () => {
                let point = 0;
                let courseList = nitipoomRegis.allSemester[0].courseRegister;
                for (let i = 0; i < courseList.length; i++) { //loop ใน array
                    if(courseList[i].grade !== undefined){
                        point += 4*courseList[i].credit;
                    }
                }
                return point;
            },
            gpa: () => {
                let gpa;
                let point;
                let courseList = nitipoomRegis.allSemester[0].courseRegister;
                for (let i = 0; i < courseList.length; i++) { //loop ใน array
                    if(courseList[i].grade !== undefined){
                        if(courseList[i].grade === 'A'){
                            point += 4*courseList[i].credit;
                        } else if(courseList[i].grade === 'B+'){
                            point += 3.5*courseList[i].credit;
                        } else if(courseList[i].grade === 'B'){
                            point += 3*courseList[i].credit;
                        } else if(courseList[i].grade === 'C+'){
                            point += 2.5*courseList[i].credit;
                        } else if(courseList[i].grade === 'C'){
                            point += 2*courseList[i].credit;
                        } else if(courseList[i].grade === 'D+'){
                            point += 1.5*courseList[i].credit;
                        } else if(courseList[i].grade === 'D'){
                            point += 1*courseList[i].credit;
                        } else if(courseList[i].grade === 'F'){
                            point += 0*courseList[i].credit;
                        } else{
                            point += 0*courseList[i].credit;
                        }
                    }
                }
                gpa = point/nitipoomRegis.allSemester[0].summary.calculateCredit();
                return gpa;
            },
            allCredit: () => {
                let sum;
                let courseList = nitipoomRegis.allSemester[0].courseRegister;
                for (let i = 0; i < courseList.length; i++) { 
                    if(courseList[i].grade !== undefined){
                        sum += courseList[i].credit;
                    }
                }
                return sum;
            },
            status: () => {
                let status = 'Normal'
                
            }
        }
    }],
    total: {
        allSemesterCreditRegister: () => {

        },
        allSemesterCalculateCredit: () => {

        },
        allSemesterPointLevel: () => {

        },
        allSemesterGPA/*GPAX*/: () => {

        },
        allSemesterCredit: () => {

        },
        allSemesterStatus: () => {

        }
    }
}



console.log(nitipoomRegis.allSemester[0].summary.pointLevel());