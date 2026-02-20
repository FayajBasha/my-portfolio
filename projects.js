function openModal(project){

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDesc");
    const github = document.getElementById("githubLink");
    const demo = document.getElementById("demoLink");

    modal.style.display = "flex";

    if(project === "portfolio"){
        title.innerText = "My Portfolio Website";
        desc.innerText =
        "A personal developer portfolio built using HTML, CSS, and JavaScript. It showcases my skills, projects, and contact information. The site includes animations, responsive design, and multi-page navigation.";

        github.href = "https://github.com/YOUR_GITHUB_USERNAME/portfolio";
        demo.href = "#";
    }

    if(project === "court"){
        title.innerText = "Court Case Management e-Portal";
        desc.innerText =
        "A web-based system for digital filing and tracking of court cases. Users can submit case details, schedule hearings, and track progress. Built using HTML, CSS, JavaScript, PHP, and MySQL.";

        github.href = "https://github.com/YOUR_GITHUB_USERNAME/court-portal";
        demo.href = "#";
    }

    if(project === "logistics"){
        title.innerText = "Digital Reverse Logistics System";
        desc.innerText =
        "A platform for managing damaged goods returns and approvals. Includes item registration, return approval workflow, and status tracking. Developed using HTML, CSS, JavaScript, PHP, and MySQL.";

        github.href = "https://github.com/YOUR_GITHUB_USERNAME/reverse-logistics";
        demo.href = "#";
    }
}

function closeModal(){
    document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(e){
    const modal = document.getElementById("projectModal");
    if(e.target === modal){
        modal.style.display = "none";
    }
}
