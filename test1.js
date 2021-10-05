let std = {
    id: 63130500071,
    nameTH: "นิติภูมิ สุทธไชย",
    nameENG: "Nitipoom Suttachai"
}


let semester = {
    semester: '',
    courseRegister: [{id:'INT101',courseName:'Programing Fund',credit:3,grade:''},{}],
    summary:{
        registerCredit: => {
            let sum;
            for (let i = 0; i < courseRegister.lenght; i++) {
                sum += courseRegister[i].credit;
            }
            return sum;
        },
        calculateCredit: =>  {}
    }
}

let total = {

}

let allSemester = [{semester:'',cr}]