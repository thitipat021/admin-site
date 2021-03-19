// import {useCallback, useContext, useState} from 'react'
// import userApi from '../api/userApi'
// import {UserContext} from '../context/user'

// const KEYS = {
//     persons: 'persons',
//     personId: 'personId'
// }

// export const getRoleCollection = ()=>([
//     {id: '1', title: 'Doctor'},
//     {id: '2', title: 'Professor'},
//     {id: '3', title: 'Admin'},
// ])

// export function insertUser(data) {
//     let persons=getAllUsers(); 
//     data['id'] = generateUserId()
//     persons.push(data)
//     localStorage.setItem(KEYS.persons, JSON.stringify(persons))
// }

// export function updateUser(data) {
//     let persons = getAllUsers();
//     let recordIndex = persons.findIndex(x => x.id == data.id);
//     persons[recordIndex] = {...data}
//     localStorage.setItem(KEYS.persons, JSON.stringify(persons));
// }

// export function deleteUser(id) {
//     let persons = getAllUsers();
//     persons = persons.filter(x => x.id != id)
//     localStorage.setItem(KEYS.persons, JSON.stringify(persons));
// }

// export function generateUserId() {
//     if (localStorage.getItem(KEYS.personId) == null)
//         localStorage.setItem(KEYS.personId, '0')
//     var id = parseInt(localStorage.getItem(KEYS.personId))
//     localStorage.setItem(KEYS.personId, (++id).toString())
//     return id;
// }

// export async function getAllUsers() {
//     // if (localStorage.getItem(KEYS.persons) == null)
//     //     localStorage.setItem(KEYS.persons, JSON.stringify([]))
//     // let persons = JSON.parse(localStorage.getItem(KEYS.persons));
//     // let roles = getRoleCollection();
//     const user = useContext(UserContext)
//     const [persons, setPersons] = useState()
//     const response = await userApi.get('/all-users', {
//         headers:{
//             Authorization:user.user?.token
//         }
//     })
//     if(response.data.success){
//         setPersons(response.data.message)
//     }
//     return persons.map((e) => {
//         console.log()
//     })
// }