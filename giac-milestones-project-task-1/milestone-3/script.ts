document.getElementById("resume-form")!.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const qualification = (document.getElementById("qualification") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById("work-experience") as HTMLTextAreaElement).value;
    
    // Generate resume
    const resumeHTML = `
        <div class="section">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </div>
        <div class="section">
            <h3>Qualification</h3>
            <p>${qualification}</p>
        </div>
        <div class="section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
        <div class="section">
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
        </div>
    `;

    // Display the generated resume
    const resumeOutput = document.getElementById("resume")!;
    resumeOutput.innerHTML = resumeHTML;

    // Show the resume section
    const resumeSection = document.getElementById("resume-output")!;
    resumeSection.style.display = "block";
});
