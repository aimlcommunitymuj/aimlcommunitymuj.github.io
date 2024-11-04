const executiveData = [
    {
        name: "Aaryan Gupta",
        title: "Chairman",
        image: "img/Executive/Aaryan Gupta.jpg",
        icon: "fa fa-gavel" // Font Awesome icon for Chairman
    },
    {
        name: "Hardik Gupta",
        title: "President",
        image: "img/Executive/Hardik Gupta.jpg",
        icon: "fa fa-star" // Font Awesome icon for President
    },
    {
        name: "Maldev Singh Chouhan",
        title: "Vice President",
        image: "img/Executive/Maldev Singh.jpg",
        icon: "fa fa-shield-alt" // Font Awesome icon for Vice President
    },
    {
        name: "Kashish Bhasin",
        title: "Treasurer",
        image: "img/Executive/Kashish Bhasin.jpg",
        icon: "fas fa-money-bill-wave"
    },
    {
        name: "Ronit Mann",
        title: "Web master",
        image: "img/Executive/Ronit Mann.jpg",
        icon: "fas fa-code" 
    },
    {
        name: "Chetanya Jolly",
        title: "General Secretary",
        image: "img/Executive/Chetanya Jolly.jpg",
        icon: "fas fa-user-tie" 
    },
    {
        name: "Sanya Sinha",
        title: "Media Director",
        image: "img/Executive/Sanya Sinha.jpg",
        icon: "fas fa-video" 
    },
    {
        name: "Ron Alexis",
        title: "Editorial Head",
        image: "img/Executive/Ron Alexis.jpeg",
        icon: "fas fa-newspaper" 
    },
    // Add more members as needed
];

function createExecutiveCards() {
    const execContainer = document.getElementById('executive-cards');
    executiveData.forEach((exec) => {
        const card = `
            <div class="col-md-4">
                <div class="card executive-card">
                    <img class="card-img-top" src="${exec.image}" alt="${exec.name}">
                    <div class="card-body">
                        <h5>${exec.name}</h5>
                        <p><i class="${exec.icon}"></i> ${exec.title}</p>
                    </div>
                </div>
            </div>`;
        execContainer.innerHTML += card;
    });
}

document.addEventListener("DOMContentLoaded", createExecutiveCards);

