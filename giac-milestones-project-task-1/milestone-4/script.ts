// script.ts
document.getElementById('generateResumeBtn')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeHTML = `
        <div class="resume-header">
            <h2>${name}</h2>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
        </div>
        
        <div class="resume-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>

        <div class="resume-section">
            <h3>Work Experience</h3>
            <p>${work}</p>
        </div>

        <div class="resume-section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    const generatedResume = document.getElementById('generatedResume');
    if (generatedResume) {
        generatedResume.innerHTML = resumeHTML;
    }
});
