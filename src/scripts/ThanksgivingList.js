import { getGuests, useGuests } from "./thanksgivingProvider.js";
import { guestsEntryComponent } from "./thanksgivingCard.js";

const contentTarget = document.querySelector(".guests-container")

export const guestsListComponent = () => {
    getGuests()
    .then(() => {

        let allTheGuests = useGuests();

        let guestsHTMLRepresentations = " ";

        allTheGuests.forEach((singleGuest) => {

            guestsHTMLRepresentations += guestsEntryComponent(singleGuest);
        });

        contentTarget.innerHTML += `
        <h2 class= "guests-header">Thanksgiving Guests</h2>
        ${guestsHTMLRepresentations}
        `
    });
};
