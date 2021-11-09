export const guestsEntryComponent = (guests) => {
    return `
        <section class="journalEntry"> 
            <div class="guests-name">${guests.name}</div>
            <div class="guests-age">${guests.age}</div>
            <div class="guests-favoriteDish">${guests.favoriteDish}</div>
            <div class="guests-rightHanded">${guests.rightHanded}</div>
            <img src="${guests.imageUrl}" alt="" width="500" height="600"}>
        </section>
    `
}