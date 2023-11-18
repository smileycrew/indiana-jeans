// Set up the transient state data structure and provide initial valuess
// const transientState = {
//     "ownsBlueJeans": false,
//     "socioLocationId": 0
// }
const transientState = new Map()
transientState.set("ownsBlueJeans", false)
transientState.set("socioLocationId", 0)
// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", true)
    console.log(transientState.get("ownsBlueJeans")) // this is how you read the values
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.set("socioLocationId", chosenLocation)
    console.log(transientState.get("socioLocationId"))
}
// Function to convert transient state to permanent state

export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(transientState))
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}