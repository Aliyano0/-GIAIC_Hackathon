"use strict";
// Sections
const workExp = document.querySelector(".workexp-data");
const education = document.querySelector(".education-data");
const skills = document.querySelector(".skills-data");
// Buttons
const workExpBtn = document.getElementById("workexp-btn");
const skillsBtn = document.getElementById("skills-btn");
const educationBtn = document.getElementById("education-btn");
// Event Listeners 
function workExpExpander() {
    let clutter = " ";
    workExpBtn.addEventListener("click", function () {
        clutter += `<label class="labels" for="company">Enter Your Company Name: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Company" id="company">
                  <br>
                  <label class="labels" for="position">Enter Your Position: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Position" id="position"> 
                  <br>

                  <label class="labels date-labels" for="work-sdate">Input Start Date: </label>
                  <br class="display-hidden">
                  <input class="workdates" type="date" name="work-startdate" id="work-sdate">
                  <br>
                  <label class="labels date-labels" for="edate">Input End Date: </label>
                  <br class="display-hidden">
                  <input class="workdates" type="date" name="enddate" id="work-edate">
                  <br>
                  <label class="labels" for="work-desc">Description: </label>
                  <br>
                    <textarea class="inputs" name="work-description" id="work-desc" placeholder="Description"></textarea> 
                  <br>`;
        workExp.innerHTML = clutter;
    });
}
;
function skillsExpander() {
    let clutter = " ";
    skillsBtn.addEventListener("click", function () {
        clutter += `<label class="labels" for="skill">Skill Name: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Skill" id="skill">
                  <br>
                  <label class="labels" for="skill-lvl">Skill Level: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Skill Level" id="skill-lvl"> 
                  <br>`;
        skills.innerHTML = clutter;
    });
}
;
function educationExpander() {
    let clutter = " ";
    educationBtn.addEventListener("click", function () {
        clutter += `<label class="labels" for="institution">Enter Your Institution Name: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Intstitution" id="institution">
                  <br>
                  <label class="labels" for="degree">Enter Your Degree: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Degree" id="degree"> 
                  <br>

                  <label class="labels date-labels" for="sdate">Input Start Date: </label>
                  <br class="display-hidden">
                  <input class="edudates" type="date" name="startdate" id="sdate">
                  <br>
                  <label class="labels date-labels" for="edate">Input End Date: </label>
                  <br class="display-hidden">
                  <input class="edudates edudate-last" type="date" name="enddate" id="edate">
                  <br>`;
        education.innerHTML = clutter;
    });
}
;
// Interactivity ends here // 
// Form Input starts here  //
function generateResume() {
    document.getElementById('resume-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        const resumeContainer = document.querySelector(".resume-container");
        resumeContainer.style.borderColor = "rgba(125, 186, 92, 0.5)";
        // Get the input values
        // Personal Information
        const firstNameElement = document.getElementById("fname");
        const lastNameElement = document.getElementById("lname");
        const emailElement = document.getElementById("email");
        const addressElement = document.getElementById("address");
        const phoneNumberElement = document.getElementById("phnumber");
        const profilePicElement = document.getElementById("resume-image");
        // Education Input
        const educationInstitutionElement = document.getElementById("institution");
        const educationDegreeElement = document.getElementById("degree");
        const educationStartDateElement = document.getElementById("sdate");
        const educationEndDateElement = document.getElementById("edate");
        // Work Experience Input
        const experienceCompanyElement = document.getElementById("company");
        const experiencePositionElement = document.getElementById("position");
        const experienceWorkSdateElement = document.getElementById("work-sdate");
        const experienceWorkEdateElement = document.getElementById("work-edate");
        const experienceWorkDescElement = document.getElementById("work-desc");
        // Skills Input
        const skillsNameElement = document.getElementById("skill");
        const skillLvlElement = document.getElementById("skill-lvl");
        if (firstNameElement && lastNameElement && emailElement && addressElement && phoneNumberElement && profilePicElement && educationInstitutionElement && educationDegreeElement && educationStartDateElement && educationEndDateElement && experienceCompanyElement && experiencePositionElement && experienceWorkSdateElement && experienceWorkEdateElement && experienceWorkDescElement && skillLvlElement && skillsNameElement) {
            // Getting values of Elements:
            const name = firstNameElement.value + " " + lastNameElement.value;
            const email = emailElement.value;
            const address = addressElement.value;
            const phnumber = phoneNumberElement.value;
            const profilePictureFile = profilePicElement.files?.[0];
            const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
            const educationInstitution = educationInstitutionElement.value;
            const educationDegree = educationDegreeElement.value;
            const educationStartDate = educationStartDateElement.value;
            const educationEndDate = educationEndDateElement.value;
            const experienceCompany = experienceCompanyElement.value;
            const experiencePosition = experiencePositionElement.value;
            const experienceWorkSdate = experienceWorkSdateElement.value;
            const experienceWorkEdate = experienceWorkEdateElement.value;
            const experienceWorkDesc = experienceWorkDescElement.value;
            const skillName = skillsNameElement.value;
            const skillLvl = skillLvlElement.value;
            // Update the resume preview
            const resumeContent = `
            <div class="heading-display">
                <h1 class="heading-text-display">Resume</h1>
            </div>

            <div class="main-content">


                <div class="img-cont">
                    <img class="${profilePictureURL}" src="" alt="">
                </div>


                <div class="contactinfo-display">
                <h2 class="display-headings">Contact Information:</h2>
                <p class="display-paragraphs">Name: ${name}</p>
                <p class="display-paragraphs">Phone Number: ${phnumber}</p>
                <p class="display-paragraphs">Email: ${email}</p>
                <p class="display-paragraphs">Address: ${address}</p>
                </div>


                <div class="education-display">
                <h2 class="display-headings">Education: </h2>
                <ul>
                    <li class="display-lis">Institution: ${educationInstitution}</li>
                    <li class="display-lis">Degree: ${educationDegree}</li>
                    <li class="display-lis">Start Date: ${educationStartDate}</li>
                    <li class="display-lis">End Date: ${educationEndDate}</li>
                </ul>
                </div>


                <div class="workexp-display">
                <h2 class="display-headings">Work Experience:</h2>
                <ul>
                    <li class="display-lis">Company Name: ${experienceCompany}</li>
                    <li class="display-lis">Position: ${experiencePosition}</li>
                    <li class="display-lis">Start Date: ${experienceWorkSdate}</li>
                    <li class="display-lis">End Date: ${experienceWorkEdate}</li>
                    <li class="display-lis">Description: ${experienceWorkDesc}</li>
                </ul>
                </div>


                <div class="skills-display">
                <h2 class="display-headings">Skills:</h2>
                <ul>
                    <li class="display-lis">Skill: ${skillName}</li>
                    <li class="display-lis">Skill Level: ${skillLvl}</li>
                </ul>
                </div>


            </div>
        `;
            const resumeContainer = document.querySelector(".resume-container");
            resumeContainer.innerHTML = resumeContent;
        }
        else {
            console.error('One or More Output Elements are Missing');
        }
        ;
    });
}
;
// Form Input Ends here. // 
educationExpander();
skillsExpander();
workExpExpander();
generateResume();
