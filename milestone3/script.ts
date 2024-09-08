
// Sections
const workExp = document.querySelector(".workexp-data") as HTMLDivElement;
const education = document.querySelector(".education-data") as HTMLDivElement;
const skills = document.querySelector(".skills-data") as HTMLDivElement;

// Buttons
const workExpBtn = document.getElementById("workexp-btn") as HTMLButtonElement;
const skillsBtn = document.getElementById("skills-btn") as HTMLButtonElement;
const educationBtn = document.getElementById("education-btn") as HTMLButtonElement;

// Event Listeners 
function workExpExpander(){ 
    let clutter: string= " ";
    workExpBtn.addEventListener("click", function(){
     clutter += `<label class="labels" for="company">Enter Your Company Name: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Intstitution" id="company">
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
                  <input class="workdates" type="date" name="enddate" id="edate">
                  <br>
                  <label class="labels" for="work-desc">Description: </label>
                  <br>
                    <textarea class="inputs" name="work-description" id="work-desc" placeholder="Description"></textarea> 
                  <br>`;
                    
    workExp.innerHTML = clutter
})};
function skillsExpander(){
    let clutter: string= " ";
    skillsBtn.addEventListener("click", function(){
     clutter += `<label class="labels" for="skill">Skill Name: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Skill" id="skill">
                  <br>
                  <label class="labels" for="skill-lvl">Skill Level: </label>
                  <br>
                  <input class="inputs" type="text" placeholder="Skill Level" id="skill-lvl"> 
                  <br>`;
                    
    skills.innerHTML = clutter
})};
function educationExpander(){
    let clutter: string= " ";
    educationBtn.addEventListener("click", function(){
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
                    
    education.innerHTML = clutter
})};



educationExpander();
skillsExpander();
workExpExpander();
