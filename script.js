// script.ts
var _a, _b;
function handleFormSubmit(event) {
    event.preventDefault(); 
    
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var knowledgebaseInput = document.getElementById('Knowledgebase');
    var experienceInput = document.getElementById('experience');
    var achievementsInput = document.getElementById('achievements');
    var skillsInput = document.getElementById('skills');
    var fileInput = document.getElementById('profile-pic');

    var profilePicUrl;
    if (fileInput.files && fileInput.files[0]) {
        var file = fileInput.files[0];
        profilePicUrl = URL.createObjectURL(file);
    }

    var resumeData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        knowledgebase: knowledgebaseInput.value,
        experience: experienceInput.value,
        achievements: achievementsInput.value,
        skills: skillsInput.value,
        profilePic: profilePicUrl
    };
    if (!resumeData.name || !resumeData.email || !resumeData.phone) {
        alert('Please fill in all required fields.');
        return;
    }
    generateResume(resumeData);
    var saveButton = document.getElementById('save-resume');
    saveButton.style.display = 'block';
    clearForm();
}

function generateResume(data) {

    var resumeContainer = document.getElementById('resume-container');
    resumeContainer.innerHTML = ''; 
    
    var resumeContent = "\n        <div class=\"resume\">\n            ".concat(data.profilePic ? "<div class=\"resume-pic\"><img src=\"".concat(data.profilePic, "\" alt=\"Profile Picture\"></div>") : '', "\n            <div contenteditable=\"true\" data-field=\"name\">").concat(data.name, "</div>\n            <div contenteditable=\"true\" data-field=\"email\">").concat(data.email, "</div>\n            <div contenteditable=\"true\" data-field=\"phone\">").concat(data.phone, "</div>\n            <h3>Credentials / Qualifications</h3>\n            <div contenteditable=\"true\" data-field=\"knowledgebase\">").concat(data.knowledgebase, "</div>\n            <h3>Career Highlights</h3>\n            <div contenteditable=\"true\" data-field=\"experience\">").concat(data.experience, "</div>\n            <h3>Achievements</h3>\n            <div contenteditable=\"true\" data-field=\"achievements\">").concat(data.achievements, "</div>\n            <h3>Skills</h3>\n            <div contenteditable=\"true\" data-field=\"skills\">").concat(data.skills, "</div>\n        </div>\n    ");

    resumeContainer.innerHTML = resumeContent;
}

function clearForm() {
    var form = document.getElementById('mainform');
    form.reset();
    var imagePreview = document.getElementById('image-preview');
    imagePreview.innerHTML = ''; 
    
}

function handleImagePreview(event) {
    var input = event.target;
    var imagePreview = document.getElementById('image-preview');
    if (input.files && input.files[0]) {
        var file = input.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgElement = document.createElement('img');
            imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            imgElement.alt = 'Profile Picture';
            imagePreview.innerHTML = ''; 
        
            imagePreview.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
}

(_a = document.getElementById('mainform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
(_b = document.getElementById('profile-pic')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', handleImagePreview);
