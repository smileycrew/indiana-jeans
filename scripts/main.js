import { myLocationsComponent } from "./myLocation.js"
import { ownsJeansComponent } from "./ownsJeans.js"
import { PageFooter } from "./footer.js"
import { saveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"

const container = document.querySelector("#container")

const render = async () => {
    const renderOwnsJeans = ownsJeansComponent()
    const renderPageFooter = PageFooter()
    const renderLocationsComponent = await myLocationsComponent()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await SubmissionList()
    container.innerHTML = `
    ${renderOwnsJeans}
    ${renderLocationsComponent}
    ${buttonHTML}
    ${submissionListHTML}
    ${renderPageFooter}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()