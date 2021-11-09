let guests = []

export const useGuests = () => {
    return guests.slice()
}

export const getGuests = ()  => {
    return fetch('http://localhost:8088/people')
        .then(someGuests => someGuests.json())
        .then(people =>{
            guests = people
        })
}

export const saveGuestsEntry = (guests) => {
    return fetch('http://localhost:8088/people', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guests)
    })
    // .then(getGuests)
}




