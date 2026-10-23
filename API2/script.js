const container = document.querySelector(".container");
const URL = "https://randomuser.me/api/?results=10";
const loading = document.querySelector(".big-loading");

container.innerHTML = "";

fetch(URL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        data.results.map(item => {
            const { name, picture, email, location } = item;

            container.innerHTML += `
                <div class="card">
                    <img class="image" src="${picture.large}" alt="Avatar" />
                    <h3>${name.first} ${name.last}</h3>
                    <p>📍 ${location.city}, ${location.country}</p>
                    <p>✉️ ${email}</p>
                </div>
      `;
        });
            loading.classList.add("hidden");
    })

    .catch((error) => {
        console.log(error);
        loading.classList.add("hidden");
        container.innerHTML = "<p>Server ishlamayapti yoki xatolik yuz berdii!</p>";
    });