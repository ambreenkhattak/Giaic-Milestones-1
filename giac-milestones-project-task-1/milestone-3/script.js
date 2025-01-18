document.getElementById("resume-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var qualification = document.getElementById("qualification").value;
    var skills = document.getElementById("skills").value;
    var workExperience = document.getElementById("work-experience").value;
    // Generate resume
    var resumeHTML = "\n        <div class=\"section\">\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n        </div>\n        <div class=\"section\">\n            <h3>Qualification</h3>\n            <p>").concat(qualification, "</p>\n        </div>\n        <div class=\"section\">\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </div>\n        <div class=\"section\">\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n        </div>\n    ");
    // Display the generated resume
    var resumeOutput = document.getElementById("resume");
    resumeOutput.innerHTML = resumeHTML;
    // Show the resume section
    var resumeSection = document.getElementById("resume-output");
    resumeSection.style.display = "block";
});
