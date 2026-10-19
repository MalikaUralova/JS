const xhr = new XMLHttpRequest()
const api = "https://jsonplaceholder.typicode.com/users"
xhr.open("GET", api, true)
const container = document.querySelector(".container")

xhr.onload = function () {
    const loading = document.querySelector(".loading")
    if (loading) loading.classList.add("hidden")

    const response = JSON.parse(xhr.response)
    console.log(response)

    container.innerHTML = ""

    response.forEach((item) => {
        container.innerHTML += `
            <div class="country-card">
                <div class="card-header">
                    <div class="flag">🙍🏻‍♀️</div>
                    <span class="country-title">
                        <h1>${item.name}</h1>
                        <span>@${item.username}</span>
                    </span>
                </div>

                <div class="card-body">
                    <div class="info-row">
                        <span class="info-label">Email:</span>
                        <span class="info-value">${item.email}</span>
                    </div>
                    
                    <div class="info-row">
                        <span class="info-label">City:</span>
                        <span class="info-value">${item.address.city}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Phone:</span>
                        <span class="info-value">${item.phone}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Website:</span>
                        <span class="info-value">${item.website}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Company:</span>
                        <span class="info-value">${item.company.name}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Zipcode:</span>
                        <span class="info-value">${item.address.zipcode}</span>
                    </div>
                </div>
            </div>
        `
    })
}

xhr.send()