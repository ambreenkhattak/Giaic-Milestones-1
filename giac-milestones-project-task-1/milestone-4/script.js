var _a;
// script.ts
(_a = document.getElementById('generateResumeBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var work = document.getElementById('work').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n        <div class=\"resume-header\">\n            <h2>".concat(name, "</h2>\n            <p><strong>Mobile:</strong> ").concat(mobile, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n        </div>\n        \n        <div class=\"resume-section\">\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Work Experience</h3>\n            <p>").concat(work, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
    var generatedResume = document.getElementById('generatedResume');
    if (generatedResume) {
        generatedResume.innerHTML = resumeHTML;
    }
});
