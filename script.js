function handleKeyUp(event) {
    if (event.keyCode === 13) {
        storeUsername();
    }
}

function storeUsername() {
    var username = document.getElementById("username").value;
    if (localStorage.getItem("username")) {
        document.getElementById("aside").style.display = "none";
        window.location.reload();
    } else {
        localStorage.setItem("username", username);
    }
}

if (localStorage.getItem("username")) {
    document.getElementById("aside").style.display = "none";
}
// ----------------------------------------------------------------MONTHS
// const month = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// const Thirukural = [
//     'அகர முதல எழுத்தெல்லாம் ஆதி<br>பகவன் முதற்றே உலகு',
//     'கற்றதனால் ஆய பயனென்கொல் வாலறிவன்<br>நற்றாள் தொழாஅர் எனின்',
//     'மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்<br>நிலமிசை நீடுவாழ் வார்'
// ];

// const main = document.getElementById("main");

// for (let i = 0; i < 12; i++) {
//     // Create a new section element
//     const section = document.createElement("section");

//     // Create a new ul element
//     const ul = document.createElement("ul");

//     // Get the total days in the month
//     const daysInMonth = new Date(new Date().getFullYear(), i + 1, 0).getDate();

//     // Add li elements with date and day for each day of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//         const li = document.createElement("li");
//         const date = new Date(new Date().getFullYear(), i, day);
//         const formattedDay = String(day).padStart(2, '0'); // Ensure two digits
//         li.innerHTML = `
//                     <span class="info">
//                         <h1 class="date" id="date">${formattedDay}</h1>
//                         <p class="day" id="day">${getDayOfWeek(date.getDay())}</p>
//                     </span>
//                 `;
//         ul.appendChild(li);
//     }

//     section.innerHTML = `
//                 <header>
//                     <h1 class="month">${month[i]}</h1>
//                     <p>${Thirukural[i % Thirukural.length]}</p>
//                 </header>
//             `;
//     section.appendChild(ul);
//     main.appendChild(section);
// }

// // Function to get the day of the week
// function getDayOfWeek(dayIndex) {
//     const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     return daysOfWeek[dayIndex];
// }

const month = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const Thirukural = [
    'அகர முதல எழுத்தெல்லாம் ஆதி<br>பகவன் முதற்றே உலகு',
    'கற்றதனால் ஆய பயனென்கொல் வாலறிவன்<br>நற்றாள் தொழாஅர் எனின்',
    'மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்<br>நிலமிசை நீடுவாழ் வார்'
];

const main = document.getElementById("main");

// Function to get the day of the week
function getDayOfWeek(dayIndex) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[dayIndex];
}

for (let i = 0; i < 12; i++) {
    // Create a new section element
    const section = document.createElement("section");

    // Create a new ul element
    const ul = document.createElement("ul");

    // Get the total days in the month
    const daysInMonth = new Date(new Date().getFullYear(), i + 1, 0).getDate();

    // Add li elements with date and day for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const li = document.createElement("li");
        const date = new Date(new Date().getFullYear(), i, day);
        const formattedDay = String(day).padStart(2, '0'); // Ensure two digits
        li.innerHTML = `
                    <span class="info">
                        <h1 class="date" id="${formattedDay}">${formattedDay}</h1>
                        <p class="day" id="day">${getDayOfWeek(date.getDay())}</p>
                    </span>
                `;

        ul.appendChild(li);

        // Check if the current date is today and apply specific styles
        if (day === new Date().getDate() && i === new Date().getMonth()) {
            li.style.color = '#9c0000';
            li.querySelector('.day').style.color = '#b90000';
        }
    }

    section.innerHTML = `
                <header>
                    <h1 class="month">${month[i]}</h1>
                    <p>${Thirukural[i % Thirukural.length]}</p>
                </header>
            `;
    section.appendChild(ul);
    main.appendChild(section);
}

window.onload = function () {
    const todayElement = document.getElementById(new Date().getDate().toString().padStart(2, '0'));
    if (todayElement) {
        todayElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
