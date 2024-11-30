document.addEventListener("DOMContentLoaded", function() {

    const modalBackground = document.querySelector("#modal-background"); 
    const contactBtn = document.querySelector(".contact");
    const profilePic = document.querySelector(".profile-pic");
    const exitBtn = document.querySelector(".exit-btn");


    async function getData() {
        try {
            const response = await fetch("CV.json");
    
            if (!response.ok) {
                throw new Error("HTTP" + response.status);
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    
    async function displayJobs() {
        try {
            const data = await getData();
    
            if (!data || !data.jobs) {
                throw new Error("No jobs found in data");
            }
    
            const jobTitle = document.querySelectorAll(".job-title");
            const companyName = document.querySelectorAll(".company-name");
            const time = document.querySelectorAll(".time");
            const timePeriod = document.querySelectorAll(".duration");
            const location = document.querySelectorAll(".location")

    
            data.jobs.forEach((job, index) => {
                if (jobTitle[index]) {
                    jobTitle[index].innerHTML = job.title;
                }

                if (companyName[index]) {
                    companyName[index].innerHTML = job["company-name"];
                }

                if (time[index]) {
                    time[index].innerText = job.time;
                }

                if (timePeriod[index]) {
                    timePeriod[index].innerText = job["time-period"];
                }

                if (location[index]) {
                    location[index].innerHTML = job.location
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    displayJobs();

    async function displayEducation() {
        try {
            const data = await getData();
    
            if (!data || !data.schools) {
                throw new Error("No schools found in data");
            }
    
            const educationTitle = document.querySelectorAll(".education-title");
            const educationCentre = document.querySelectorAll(".education-centre");
            const type = document.querySelectorAll(".type");
            const timePeriod = document.querySelectorAll(".duration-for-education");
            const schoolLocation = document.querySelectorAll(".school-location")

    
            data.schools.forEach((school, index) => {
                if (educationTitle[index]) {
                    educationTitle[index].innerHTML = school.title;
                }

                if (educationCentre[index]) {
                    educationCentre[index].innerHTML = school.school;
                }

                if (type[index]) {
                    type[index].innerText = school.type;
                }

                if (timePeriod[index]) {
                    timePeriod[index].innerText = school["time-period"];
                }

                if (schoolLocation[index]) {
                    schoolLocation[index].innerHTML = school.location
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    displayEducation();

    contactBtn.addEventListener('click', () => {
        modalBackground.style.visibility = "visible";
        modalBackground.style.opacity = "1";
    
    });

    exitBtn.addEventListener('click', () =>{
        modalBackground.style.visibility = "hidden";
        modalBackground.style.opacity = "0";
    });

    const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden'); // Start hidden
    observer.observe(section);
});



});