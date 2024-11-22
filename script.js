document.addEventListener("DOMContentLoaded", function() {
    async function getJobs() {
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
    
    async function displayJobTitle() {
        try {
            const data = await getJobs();
    
            if (!data || !data.jobs) {
                throw new Error("No jobs found in data");
            }
    
            const jobTitle = document.querySelectorAll(".job-title");
            const companyName = document.querySelectorAll("#company-name");
            const time = document.querySelectorAll(".time");
            const timePeriod = document.querySelectorAll("#duration");
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
                    location[index].innerHTML = job.location;
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    displayJobTitle();

});