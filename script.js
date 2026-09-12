// ==========================================
// ASEAN EXPLORER
// ==========================================


// ==========================================
// DATA
// ==========================================

const countries = [

    {
        name: "Indonesia",
        flag: "🇮🇩",
        capital: "Jakarta",
        leader: "Prabowo Subianto",
        currency: "Rupiah",
        language: "Bahasa Indonesia",
        food: "Rendang",
        landmark: "Candi Borobudur",
        area: "1.904.569 km²",
        lat: -2.5,
        lng: 118,
        fact: "Indonesia adalah negara kepulauan terbesar di dunia."
    },

    {
        name: "Malaysia",
        flag: "🇲🇾",
        capital: "Kuala Lumpur",
        leader: "Anwar Ibrahim",
        currency: "Ringgit",
        language: "Bahasa Melayu",
        food: "Nasi Lemak",
        landmark: "Menara Petronas",
        area: "330.803 km²",
        lat: 4.2,
        lng: 101.9,
        fact: "Malaysia terdiri dari wilayah di Semenanjung Malaya dan Kalimantan."
    },

    {
        name: "Singapore",
        flag: "🇸🇬",
        capital: "Singapore",
        leader: "Lawrence Wong",
        currency: "Singapore Dollar",
        language: "Inggris, Melayu, Mandarin, Tamil",
        food: "Hainanese Chicken Rice",
        landmark: "Marina Bay Sands",
        area: "728 km²",
        lat: 1.35,
        lng: 103.8,
        fact: "Singapura merupakan negara-kota di Asia Tenggara."
    },

    {
        name: "Thailand",
        flag: "🇹🇭",
        capital: "Bangkok",
        leader: "Anutin Charnvirakul",
        currency: "Baht",
        language: "Thai",
        food: "Pad Thai",
        landmark: "Grand Palace",
        area: "513.120 km²",
        lat: 15.8,
        lng: 100.9,
        fact: "Thailand terkenal dengan budaya dan kuil-kuilnya."
    },

    {
        name: "Vietnam",
        flag: "🇻🇳",
        capital: "Hanoi",
        leader: "Lương Cường",
        currency: "Dong",
        language: "Vietnamese",
        food: "Pho",
        landmark: "Ha Long Bay",
        area: "331.212 km²",
        lat: 14,
        lng: 108,
        fact: "Vietnam terkenal dengan Ha Long Bay."
    },

    {
        name: "Philippines",
        flag: "🇵🇭",
        capital: "Manila",
        leader: "Ferdinand Marcos Jr.",
        currency: "Peso",
        language: "Filipino & Inggris",
        food: "Adobo",
        landmark: "Chocolate Hills",
        area: "300.000 km²",
        lat: 12.8,
        lng: 121.7,
        fact: "Filipina merupakan negara kepulauan."
    },

    {
        name: "Myanmar",
        flag: "🇲🇲",
        capital: "Naypyidaw",
        leader: "Min Aung Hlaing",
        currency: "Kyat",
        language: "Myanmar",
        food: "Mohinga",
        landmark: "Shwedagon Pagoda",
        area: "676.578 km²",
        lat: 21.9,
        lng: 95.9,
        fact: "Myanmar memiliki banyak pagoda dan situs bersejarah."
    },

    {
        name: "Cambodia",
        flag: "🇰🇭",
        capital: "Phnom Penh",
        leader: "Hun Manet",
        currency: "Riel",
        language: "Khmer",
        food: "Amok",
        landmark: "Angkor Wat",
        area: "181.035 km²",
        lat: 12.5,
        lng: 104.9,
        fact: "Kamboja merupakan rumah bagi Angkor Wat."
    },

    {
        name: "Laos",
        flag: "🇱🇦",
        capital: "Vientiane",
        leader: "Sonexay Siphandone",
        currency: "Kip",
        language: "Lao",
        food: "Laap",
        landmark: "Pha That Luang",
        area: "236.800 km²",
        lat: 19.8,
        lng: 102.4,
        fact: "Laos tidak memiliki garis pantai."
    },

    {
        name: "Brunei Darussalam",
        flag: "🇧🇳",
        capital: "Bandar Seri Begawan",
        leader: "Sultan Hassanal Bolkiah",
        currency: "Brunei Dollar",
        language: "Melayu",
        food: "Ambuyat",
        landmark: "Masjid Omar Ali Saifuddien",
        area: "5.765 km²",
        lat: 4.5,
        lng: 114.7,
        fact: "Brunei berada di Pulau Kalimantan."
    },

    {
        name: "Timor-Leste",
        flag: "🇹🇱",
        capital: "Dili",
        leader: "Xanana Gusmão",
        currency: "US Dollar",
        language: "Tetum & Portugis",
        food: "Batar Da'an",
        landmark: "Cristo Rei",
        area: "14.874 km²",
        lat: -8.8,
        lng: 125.7,
        fact: "Timor-Leste menjadi anggota ASEAN ke-11 pada 2025."
    }

];


// ==========================================
// GAME DATA
// ==========================================

let score =
    Number(localStorage.getItem("asean_score")) || 0;

let correct =
    Number(localStorage.getItem("asean_correct")) || 0;

let played =
    Number(localStorage.getItem("asean_played")) || 0;

let streak =
    Number(localStorage.getItem("asean_streak")) || 0;

let xp =
    Number(localStorage.getItem("asean_xp")) || 0;


let quizMode = "";

let quizCountries = [];

let questionIndex = 0;


// ==========================================
// PAGE NAVIGATION
// ==========================================

function showPage(id) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target =
        document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    if (id === "map") {
        setTimeout(createMap, 100);
    }

    window.scrollTo(0, 0);
}


// ==========================================
// RENDER COUNTRIES
// ==========================================

function renderCountries(list) {

    const container =
        document.getElementById("countryList");

    if (!container) return;

    container.innerHTML = "";


    list.forEach(country => {

        const card =
            document.createElement("div");

        card.className = "country-card";


        card.innerHTML = `

            <div class="flag">
                ${country.flag}
            </div>

            <h3>
                ${country.name}
            </h3>

            <p>
                🏛️ ${country.capital}
            </p>

        `;


        card.onclick = function() {

            showCountry(country.name);

        };


        container.appendChild(card);

    });

}


// ==========================================
// HOME
// ==========================================

function renderHomeCountries() {

    const container =
        document.getElementById(
            "homeCountryList"
        );

    if (!container) return;

    container.innerHTML = "";


    countries.forEach(country => {

        const card =
            document.createElement("div");

        card.className = "country-card";


        card.innerHTML = `

            <div class="flag">
                ${country.flag}
            </div>

            <h3>
                ${country.name}
            </h3>

            <p>
                🏛️ ${country.capital}
            </p>

        `;


        card.onclick = function() {

            showCountry(country.name);

        };


        container.appendChild(card);

    });

}


// ==========================================
// COUNTRY DETAIL
// ==========================================

function showCountry(name) {

    const country =
        countries.find(
            c => c.name === name
        );

    if (!country) return;


    const container =
        document.getElementById(
            "detailContent"
        );


    container.innerHTML = `

        <div class="detail">

            <div class="detail-header">

                <div class="detail-flag">
                    ${country.flag}
                </div>

                <h1>
                    ${country.name}
                </h1>

                <p>
                    Asia Tenggara
                </p>

            </div>


            <div class="detail-grid">

                <div class="detail-item">
                    <span>Ibu Kota</span>
                    <strong>
                        🏛️ ${country.capital}
                    </strong>
                </div>

                <div class="detail-item">
                    <span>Pemimpin</span>
                    <strong>
                        👤 ${country.leader}
                    </strong>
                </div>

                <div class="detail-item">
                    <span>Mata Uang</span>
                    <strong>
                        💰 ${country.currency}
                    </strong>
                </div>

                <div class="detail-item">
                    <span>Bahasa</span>
                    <strong>
                        🗣️ ${country.language}
                    </strong>
                </div>

                <div class="detail-item">
                    <span>Makanan</span>
                    <strong>
                        🍜 ${country.food}
                    </strong>
                </div>

                <div class="detail-item">
                    <span>Landmark</span>
                    <strong>
                        📍 ${country.landmark}
                    </strong>
                </div>

                <div class="detail-item">
                    <span>Luas</span>
                    <strong>
                        📐 ${country.area}
                    </strong>
                </div>

                <div class="detail-item">
                    <span>Fakta</span>
                    <strong>
                        💡 ${country.fact}
                    </strong>
                </div>

            </div>

        </div>

    `;


    showPage("detail");
}


// ==========================================
// SEARCH
// ==========================================

function searchCountry() {

    const input =
        document
        .getElementById("search")
        .value
        .toLowerCase();


    const filtered =
        countries.filter(country =>
            country.name
            .toLowerCase()
            .includes(input)
        );


    renderCountries(filtered);

}


// ==========================================
// MAP
// ==========================================

let map = null;


function createMap() {

    if (map !== null) {

        map.invalidateSize();

        return;

    }


    const mapElement =
        document.getElementById(
            "mapContainer"
        );

    if (!mapElement) return;


    map =
        L.map("mapContainer")
        .setView([5, 110], 4);


    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "&copy; OpenStreetMap"
        }
    ).addTo(map);


    countries.forEach(country => {

        const marker =
            L.marker([
                country.lat,
                country.lng
            ]).addTo(map);


        marker.bindPopup(`

            <div style="text-align:center">

                <div style="font-size:35px">
                    ${country.flag}
                </div>

                <b>
                    ${country.name}
                </b>

                <br>

                ${country.capital}

            </div>

        `);

    });

}


// ==========================================
// START QUIZ
// ==========================================

function startQuiz(mode) {

    quizMode = mode;

    questionIndex = 0;

    quizCountries =
        shuffle([...countries])
        .slice(0, 10);


    const titles = {

        country: "🌏 Tebak Negara",

        flag: "🏳️ Tebak Bendera",

        capital: "🏛️ Tebak Ibu Kota",

        food: "🍜 Tebak Makanan"

    };


    document.getElementById(
        "quizTitle"
    ).textContent = titles[mode];


    document.getElementById(
        "quizBox"
    ).style.display = "block";


    renderQuestion();

    updateStats();

}


// ==========================================
// QUESTION
// ==========================================

function renderQuestion() {

    if (
        questionIndex >=
        quizCountries.length
    ) {

        finishQuiz();

        return;

    }


    const country =
        quizCountries[questionIndex];


    document.getElementById(
        "questionNumber"
    ).textContent =
        questionIndex + 1;


    const image =
        document.getElementById(
            "quizImage"
        );

    const question =
        document.getElementById(
            "question"
        );


    if (quizMode === "country") {

        image.textContent = "🏛️";

        question.innerHTML =
            `Negara manakah yang memiliki ibu kota <b>${country.capital}</b>?`;

    }


    else if (quizMode === "flag") {

        image.textContent =
            country.flag;

        question.textContent =
            "Bendera negara manakah ini?";

    }


    else if (quizMode === "capital") {

        image.textContent = "🏛️";

        question.innerHTML =
            `Apa ibu kota dari <b>${country.name}</b>?`;

    }


    else if (quizMode === "food") {

        image.textContent = "🍜";

        question.innerHTML =
            `Makanan <b>${country.food}</b> berasal dari negara mana?`;

    }


    createAnswers(country);

}


// ==========================================
// ANSWERS
// ==========================================

function createAnswers(correctCountry) {

    const container =
        document.getElementById(
            "answers"
        );


    container.innerHTML = "";


    let options =
        countries
        .filter(
            c =>
                c.name !==
                correctCountry.name
        );


    options =
        shuffle(options)
        .slice(0, 3);


    options.push(correctCountry);


    options =
        shuffle(options);


    options.forEach(country => {

        const button =
            document.createElement("button");


        button.className = "answer";


        if (quizMode === "country") {

            button.textContent =
                country.name;

        }

        else if (quizMode === "flag") {

            button.textContent =
                country.flag +
                " " +
                country.name;

        }

        else if (quizMode === "capital") {

            button.textContent =
                country.capital;

        }

        else if (quizMode === "food") {

            button.textContent =
                country.food;

        }


        button.onclick = function() {

            checkAnswer(
                country,
                correctCountry,
                button
            );

        };


        container.appendChild(button);

    });

}


// ==========================================
// CHECK
// ==========================================

function checkAnswer(
    selected,
    correctCountry,
    selectedButton
) {

    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    played++;


    if (
        selected.name ===
        correctCountry.name
    ) {

        selectedButton
            .classList
            .add("correct");


        correct++;

        streak++;

        score += 10;

        xp += 20;

    }

    else {

        selectedButton
            .classList
            .add("wrong");


        streak = 0;


        buttons.forEach(button => {

            const text =
                button.textContent;


            if (
                text.includes(
                    correctCountry.name
                ) ||
                text ===
                    correctCountry.capital ||
                text ===
                    correctCountry.food
            ) {

                button
                    .classList
                    .add("correct");

            }

        });

    }


    saveData();

    updateStats();


    document.getElementById(
        "nextButton"
    ).style.display = "inline-block";

}


// ==========================================
// NEXT
// ==========================================

function nextQuestion() {

    questionIndex++;

    document.getElementById(
        "nextButton"
    ).style.display = "none";

    renderQuestion();

}


// ==========================================
// FINISH
// ==========================================

function finishQuiz() {

    document.getElementById(
        "quizImage"
    ).textContent = "🏆";


    document.getElementById(
        "question"
    ).innerHTML =
        `Quiz selesai!<br><br>Skor kamu sekarang: <b>${score}</b>`;


    document.getElementById(
        "answers"
    ).innerHTML = `

        <button
            class="main-button"
            onclick="startQuiz('${quizMode}')">
            🔄 Main Lagi
        </button>

    `;

}


// ==========================================
// SHUFFLE
// ==========================================

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}


// ==========================================
// SAVE
// ==========================================

function saveData() {

    localStorage.setItem(
        "asean_score",
        score
    );

    localStorage.setItem(
        "asean_correct",
        correct
    );

    localStorage.setItem(
        "asean_played",
        played
    );

    localStorage.setItem(
        "asean_streak",
        streak
    );

    localStorage.setItem(
        "asean_xp",
        xp
    );

}


// ==========================================
// UPDATE STATS
// ==========================================

function updateStats() {

    document.getElementById(
        "homeScore"
    ).textContent = score;

    document.getElementById(
        "homeXP"
    ).textContent = xp;

    document.getElementById(
        "homeCorrect"
    ).textContent = correct;


    document.getElementById(
        "quizScore"
    ).textContent = score;


    document.getElementById(
        "statPlayed"
    ).textContent = played;

    document.getElementById(
        "statCorrect"
    ).textContent = correct;

    document.getElementById(
        "statScore"
    ).textContent = score;

    document.getElementById(
        "statStreak"
    ).textContent = streak;


    const level =
        Math.floor(xp / 100) + 1;


    document.getElementById(
        "level"
    ).textContent = level;


    document.getElementById(
        "xpText"
    ).textContent = xp;


    document.getElementById(
        "xpProgress"
    ).style.width =
        (xp % 100) + "%";

}


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // JUMLAH NEGARA
        document.getElementById(
            "totalCountries"
        ).textContent =
            countries.length;


        // TAMPILKAN NEGARA
        renderCountries(countries);

        renderHomeCountries();


        // UPDATE STATISTIK
        updateStats();


        console.log(
            "ASEAN Explorer berhasil dijalankan."
        );

        console.log(
            "Jumlah negara:",
            countries.length
        );

    }
);