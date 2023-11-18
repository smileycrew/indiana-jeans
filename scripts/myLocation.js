import { setSocioLocationId } from "./TransientState.js"

export const myLocationsComponent = async () => {
    document.addEventListener("change", handleLocationChange)
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()
    let html = "<h2>What type of location do you live in?</h2>"
    const mapLocations = locations.map((location) => {
        return `
            <input type="radio" name="location" value="${location.id}"/>${location.label}`
    })
    html += mapLocations.join("")
    return html
}

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToNumber = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToNumber)
    }
}