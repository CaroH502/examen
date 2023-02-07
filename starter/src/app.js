import {User} from "./User.js";
import sortBy from "../../node_modules/lodash-es/sortBy.js";


const mainContainer = document.querySelector("main");
const buttonSortByAge = document.querySelector("#sort--age");
let utilisateurs = [];

function displayUsers(utilisateurs){
    let users = sortBy(utilisateurs, ['lastName'])
    users.forEach(utilisateur => {
        utilisateur.render(mainContainer);
    });
}

const getUsers = async() => {
    let usersName = await fetch(`https://randomuser.me/api/?results=20`);
    const usersNamesJsoned = await usersName.json();
    console.log(usersNamesJsoned)
   
    usersNamesJsoned.results.forEach(user => {
    
        const userCreated = new User(user.name.title, user.name.first, user.name.last, user.location.city, user.location.country, user.dob.age, user.email,user.picture.large);
        
        utilisateurs.push(userCreated);

        displayUsers(utilisateurs);

        //userCreated.render(mainContainer)
    });
}

getUsers()

