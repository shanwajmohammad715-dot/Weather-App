async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "94ead636390246ab95a143019260809";

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").innerText =
            data.location.name;

        document.getElementById("temperature").innerText =
            data.current.temp_c + " °C";

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.current.humidity + "%";

        document.getElementById("wind").innerText =
            "Wind: " + data.current.wind_kph + " km/h";

    } catch (error) {

        alert("Unable to find weather for this city.");

        console.log(error);
    }
}