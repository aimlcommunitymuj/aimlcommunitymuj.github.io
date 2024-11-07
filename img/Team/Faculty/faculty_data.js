const facultyData = [
  {
      name: "Dr Sandeep Chaurasia",
      title: "Director SCSE",
      role: "Mentor of Community",
      image: "img/Team/Faculty/sandeep Chaurasia.jpg",
      linkedin: "https://www.linkedin.com/in/sandeep-chaurasia-0457568a/"
  },
  {
      name: "Dr Santosh Kumar Vishwakarma",
      title: "Head of Department",
      role: "Founder of Community",
      image: "img/Team/Faculty/Santosh_Kumar_Vishwakarma.jpg",
      linkedin: "https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/santosh-kumar-vishwakarma.html",
      isNormalLink: true
  },
  {
      name: "Dr. Varun Tiwari",
      title: "Assistant Professor at Manipal University Jaipur",
      role: "Faculty Convenor",
      image: "img/Team/Faculty/VarunTiwari.jpg",
      linkedin: "https://www.linkedin.com/in/dr-varun-tiwari-91837a52/?originalSubdomain=in"
  }
];

function createFacultyCards() {
  const facultyContainer = document.getElementById('faculty-cards');
  facultyData.forEach((faculty, index) => {
      const card = `
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="card">
                  <a href="#">
                      <img class="card-img-top img-raised" src="${faculty.image}" alt="${faculty.name}">
                  </a>
                  <div class="card-body">
                      <a href="#" class="card-title mb-2"><h5>${faculty.name}</h5></a>
                      <p class="text-muted small-xl mb-2">${faculty.title}</p>
                      <p class="card-text">${faculty.role}</p>
                      <ul class="list-inline social social-sm">
                          <li class="list-inline-item">
                              <a href="${faculty.linkedin}">
                                  ${faculty.isNormalLink ? '<i class="fa fa-globe"></i>' : '<i class="fab fa-linkedin"></i>'}
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>`;
      facultyContainer.innerHTML += card;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createFacultyCards();
  // Initialize AOS (Animate On Scroll)
  AOS.init({
      duration: 1200,
      once: false // Allow animations to occur each time the element comes into view
  });
});
