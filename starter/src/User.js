

export class User {

    title;
    firstName;
    lastName;
    city;
    country;
    age;
    email;
    picture;
    isHere = false;
    #element;

    constructor(title, firstName, lastName, city, country, age,
        email, picture){
            this.title = title;
            this.firstName = firstName;
            this.lastName = lastName;
            this.city = city;
            this.country = country;
            this.age = age;
            this.email = email;
            this.picture = picture;
            
            this.#element = this.#generateElement();

            this.#element.addEventListener("click", (e) => {
                if(this.#element.dataset.present === "false"){
                    this.#element.dataset.present = true;
                } else{
                    this.#element.dataset.present = false;
                }
            })
    }

    #generateElement() {
        const divContainer = document.createElement("div");
        divContainer.classList.add("user");
        divContainer.dataset.present = "false";

        const html = `
		<img src=" ${this.picture}">
		<div class="user--info">
				<h1>${this.title} ${this.firstName} ${this.lastName}</h1>
				<p>${2023-this.age} years old</p>
				<p> ${this.city}, ${this.country}</p>
		</div>
		<a href=" ${this.email}">
				<span class="mail">✉️</span>
		</a>
        `
        divContainer.insertAdjacentHTML("afterbegin", html);

        return divContainer;
    }

    render(element){
        element.append(this.#element);
    }
}