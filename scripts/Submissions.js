export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
    let html = `
    <h3>Submissions:</h3>
    `
    const mapSubmissions = submissions.map((submission) => {
        return `
            <section class="submissions">
                <div>owns jeans? ${submission.ownsBlueJeans}</div>
                <div>area type foreign key? ${submission.socioLocationId}</div>
            </section>
        `
    })
    html += mapSubmissions.join("")
    return html
}