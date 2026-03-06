function openModal(project){

const modal = document.getElementById("projectModal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const github = document.getElementById("githubLink");
const demo = document.getElementById("demoLink");

modal.style.display = "flex";

if(project === "jewellery"){

title.innerText = "Jewellery ERP Management System";

desc.innerText =
"A full-stack web-based ERP system developed for managing jewellery shop operations such as billing, inventory management, customer records, and sales tracking. Built using Python, FastAPI, React, and MySQL.";

github.href = "#";
demo.href = "#";

}

else if(project === "portfolio"){

title.innerText = "My Portfolio Website";

desc.innerText =
"A personal developer portfolio built using HTML, CSS, and JavaScript. It showcases my skills, projects, and contact information with responsive design and animations.";

github.href = "https://github.com/YOUR_GITHUB_USERNAME/portfolio";
demo.href = "#";

}

else if(project === "court"){

title.innerText = "Court Case Management e-Portal";

desc.innerText =
"A web-based system for digital filing and tracking of court cases. Users can submit case details, schedule hearings, and track progress. Built using HTML, CSS, JavaScript, PHP, and MySQL.";

github.href = "https://github.com/FayajBasha/Development-of-e-Portal-for-facilitating-Case-Management-Hearing-of-various-types-of-cases.git";
demo.href = "#";

}

else if(project === "logistics"){

title.innerText = "Digital Reverse Logistics System";

desc.innerText =
"A platform for managing damaged goods returns and approvals. Includes item registration, return approval workflow, and status tracking. Developed using HTML, CSS, JavaScript, PHP, and MySQL.";

github.href = "https://github.com/FayajBasha/Digital-Reverse-Logistics-for-Damaged-Goods.git";
demo.href = "#";

}

}

function closeModal(){
document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event){

const modal = document.getElementById("projectModal");

if(event.target === modal){
modal.style.display = "none";
}

}