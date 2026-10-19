const xhr = new XMLHttpRequest()
const api = "https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json"
xhr.open("GET", api, true)
const container = document.querySelector(".container")
xhr.onload = function () {
    document.querySelector(".loading").classList.add("hidden")
    const response = JSON.parse(xhr.response)
    console.log(response);
    


    response.map((item) => {

        const lang = []
        const currency = []

        for (const key in item?.languages) {
            lang.push(key)
        }
        for (const key of Object.values(item?.currencies)) {
            for (const key2 of Object.values(key)) {
                currency.push(key2)
            }

        }

        container.innerHTML += `
           <div class="country-card">
            <div class="card-header">
                <div class="flag">${item.flag}</div>
                <span class="country-title">
                    <h1>${item.name.common}</h1>
                    <span>Official Name: Aruba</span>
                </span>
            </div>

            <div class="card-body">
                <div class="info-row">
                    <span class="info-label">Capital:</span>
                    <span class="info-value">${item.capital}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Region:</span>
                    <span class="info-value">${item.region}</span>
                </div>

                <div class="info-row">
                    <span class="info-label">Languages:</span>
                    <span class="info-value">${lang.map(item => item)}</span>
                </div>

                <div class="info-row">
                    <span class="info-label">Currency:</span>
                    <span class="info-value">${currency[0]}</span>
                </div>

                <div class="info-row">
                    <span class="info-label">Area:</span>
                    <span class="info-value">${item.area} km²</span>
                </div>

                <div class="info-row">
                    <span class="info-label">Calling Code:</span>
                    <span class="info-value">+297</span>
                </div>
            </div>
        </div>
   `
    })

}


xhr.send()
