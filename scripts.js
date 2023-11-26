// Sample project data
const projects = [
    { name: 'Mighty rides - Car online Management System', description: 'Developed a Web-based application named Photon for my DBMS course project. The app was inspired by Google Photos. Its frontend was built on bootstrap while the backend used PHP and SQL.', technology: 'Bootsrap, PHP, SQL' },
    { name: 'Sorting Algorithms Visualizer', description: 'Built a visualizer for sorting algorithms using "PyGame" and "Tkinter" modules of the python language. The aim of the project was to help students better understand how sorting algorithms work.', technology: 'Tkinter, PyGame, Python' },
    { name: 'Red Wine Quality Analysis', description: 'Worked as a team member in preparing a quality analysis report using "numpy", "pandas" and "matplotlib" libraries of python language.', technology: 'numpy, pandas, matplotlib, Python' },
    { name: 'Proof Of Work - Cryptocurrencies', description: 'Implemented the proof of work concept used in cryptocurrencies using C++ threads. Also worked on OpenMP and MPI libraries', technology: 'OpenMP, MPI, C++' },
    { name: 'Typing Tutor', description: 'Built a typing tutor game for Object Oriented Programming course. Used C++ language and implemented most OOP concepts.', technology: 'OOP, C++' },
    { name: 'Binary Star System Simulation', description: "Simulated a binary star system in which two stars orbit around one another following Newton's Law of Gravitation using VPython.", technology: 'VPython' },
    // Add more projects as needed
];

// Function to filter projects based on technology
function filterProjects() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const projectList = document.getElementById('project-list');

    // Clear the current project list
    projectList.innerHTML = '';

    // Filter and display projects
    projects.forEach(project => {
        if (project.technology.toLowerCase().includes(filterValue)) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${project.name}:</strong> ${project.description} --- <strong>${project.technology}</strong>`;
            projectList.appendChild(li);
        }
    });
}

// Initial project list display
filterProjects();
