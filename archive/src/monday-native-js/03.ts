import {student, StudentType} from './02-students';


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true
}


export const checkCity = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}

