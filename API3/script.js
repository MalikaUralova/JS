const container = document.querySelector(".container");
const URL = "https://jsonplaceholder.typicode.com/users";
const loading = document.querySelector(".big-loading");

fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    data.map(item => {
      const { name, email, phone, website, company } = item;

      container.innerHTML += `
        <div class="card">
          <h3>🙍🏻‍♀️ ${name}</h3>
          <p>📧 <b>Email:</b> ${email}</p>
          <p>📞 <b>Telefon:</b> ${phone}</p>
          <p>🌐 <b>Website:</b> ${website}</p>
          <p>🏙️ <b>Kompaniya:</b> ${company.name}</p>
        </div>
      `;
    });

    loading.classList.add("hidden");
  })
  .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
    loading.classList.add("hidden");
  });