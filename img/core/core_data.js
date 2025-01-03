const coreTeamData = [
    {
        category: "Technical",
        members: [
            { name: "Akshat Bisht", image: "img/core/Akshat Bisht.jpg" },
            { name: "Tejas Kharche", image: "img/core/Tejas Kharche.jpg" },
            { name: "Tushaam Agrawal", image: "img/core/Tushaam Agrawal.jpg" },
            // More members...
        ]
    },
    {
        category: "Admin",
        members: [
            { name: "Lakshya", image: "img/core/Lakshya.jpg" },
            { name: "Mayank Puri", image: "img/core/Mayank Puri.jpg" },
            // More members...
        ]
    },
    {
        category: "Graphic Design",
        members: [
            { name: "Aakash Srivastava", image: "img/core/Aakash Srivastava.jpg" },
            { name: "Paarth Chanana", image: "img/core/Parth Chanana.jpg" },
            { name: "Shristi Gupta", image: "img/core/Shristi Gupta.jpg" },
            { name: "Abhinav Awasthi", image: "img/core/Abhinav Awasthi.jpg" },
            // More members...
        ]
    },
    {
        category: "Marketing and Promotion",
        members: [
            { name: "Dev Kanabar", image: "img/core/Dev Kanabar.jpg" },
            { name: "Gunjan Goyal", image: "img/core/Gunjan Goyal.jpg" },
            { name: "Srinidhi Dulam", image: "img/core/Srinidhi Dulam.jpg" },
            // More members...
        ]
    },
    {
        category: "Content",
        members: [
            { name: "Utkarsh Kumar", image: "img/core/Utkarsh Kumar.jpg" },
            { name: "Priyansh Jha", image: "img/core/Priyansh Jha.jpg" },
            { name: "Navya Chhabra", image: "img/core/Navya Chhabra.jpg" },

            // More members...
        ]
    },
    {
        category: "Events and Logistics",
        members: [
            { name: "Mayank Ambastha", image: "img/core/Mayank Ambastha.jpg" },
            { name: "Tejas Dutta", image: "img/core/Tejas Dutta.jpg" },
            { name: "Rishi Sharma", image: "img/core/Rishi Sharma.jpg" },
            { name: "Lavanya Sharma", image: "img/core/Lavanya Sharma.jpg" },
            { name: "Nishik Ojha", image: "img/core/Nishik Ojha.jpg" },
            { name: "Aarushi Singh", image: "img/core/Aarushi Singh.jpg" },
            { name: "Kintan Jain", image: "img/core/Kintan Jain.jpg" },
            // More members...
        ]
    },
    {
        category: "Sponsorship and Curations",
        members: [
            { name: "Rishit Thamman", image: "img/core/Rishit Thamman.jpg" },
            { name: "Neil Gupta", image: "img/core/Neil Gupta.jpg" },
            // More members...
        ]
    },
    {
        category: "Social Media",
        members: [
            { name: "Shaivi Adesh", image: "img/core/Shaivi Adesh.jpg" },
            { name: "Nikunj", image: "img/core/Nikunj.jpg" },
            // More members...
        ]
    }
];


function createCoreTeamCards() {
    const coreContainer = document.getElementById('core-team-cards');
    coreTeamData.forEach((team, index) => {
        const card = `
            <div class="col-md-4">
                <div class="card core-team-card" data-index="${index}">
                    <div class="card-body">
                        <h5>${team.category}</h5>
                    </div>
                </div>
            </div>`;
        coreContainer.innerHTML += card;
    });

    document.querySelectorAll('.core-team-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            showCoreMembers(coreTeamData[index]);
        });
    });
}

function showCoreMembers(team) {
    const modal = document.getElementById("core-member-overlay");
    const coreMembersList = document.getElementById("core-members-list");
    const selectedTeam = document.getElementById("selected-team");

    selectedTeam.innerHTML = `<h3>${team.category}</h3>`;
    coreMembersList.innerHTML = team.members.map(member => `
        <div class="col-md-4">
            <div class="card executive-card">
                <img class="card-img-top" src="${member.image}" alt="${member.name}">
                <div class="card-body">
                    <h5>${member.name}</h5>
                </div>
            </div>
        </div>
    `).join('');

    modal.classList.remove("hidden");
    document.body.classList.add('blurred');
}

document.getElementById("core-member-overlay").addEventListener("click", (e) => {
    if (e.target.id === "core-member-overlay") {
        document.getElementById("core-member-overlay").classList.add("hidden");
        document.body.classList.remove('blurred');
    }
});

document.addEventListener("DOMContentLoaded", createCoreTeamCards);
