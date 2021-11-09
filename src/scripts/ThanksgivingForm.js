import { saveGuestsEntry } from "./thanksgivingProvider.js";
import { guestsListComponent } from "./thanksgivingList.js";

const bullseyeTarget = document.querySelector("#GuestsFormContainer")

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveGuests") {

        const newGuests = {
            
            name: document.querySelector("#name").value,
            age: document.querySelector("#age").value,
            favoriteDish: document.querySelector("#favoriteDish").value,
            rightHanded: document.querySelector("#rightHanded").value,
            imageUrl: document.querySelector("#imageUrl").value,
        }
        // console.log(newGuests)
        //you do not need an id, id is assigned by the database
        document.querySelector("#name").value = ""
        document.querySelector("#age").value = ""
        document.querySelector("#favoriteDish").value = ""
        document.querySelector("#rightHanded").value = ""
        document.querySelector("#imageUrl").value = ""
        saveGuestsEntry(newGuests)
        .then(guestsListComponent)
    }
})

export const guestsFormComponent = () => {
    bullseyeTarget.innerHTML = `
    <div id="GuestsFormContainer">
        <h2>Welcome to Thanksgiving</h2>
 
        <fieldset>
            <label for="name">Guests Name</label>
            <input type="text" name="name" id="name">
        </fieldset>
        <fieldset>
            <label for="Age">Guests Age</label>
            <input type="text" name="age" id="age">
        </fieldset>
        <fieldset>
            <label for="favoriteDish">Favorite Dish</label>
            <input type="text" name="favoriteDish" id="favoriteDish">
        </fieldset>
        <fieldset>
        <label for="favoriteDish">Are you right handed? True or False</label>
        <select id="rightHanded">
        <option value="true">True</option>
        <option value="False">False</option>
        </select>
        </fieldset>
        <fieldset>
        <label for="imageUrl">Please submit image link of yourself</label>
            <input type="text" name="imageUrl" id="imageUrl">
        </fieldset>
        </div>


        <aside>
            <button id="saveGuests">Save Guests Information</button>
        </aside>
        
       `
}

// https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/my8hggsineyoairsoltt.jpg