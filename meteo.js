let meteo = {
    apiKey: 'b9aca27f359944767bc5c24e6b2f3039',

    // Fonction pour récupérer les données météo d'une ville
    recupMeteo: function (ville) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=grenoble&units=metric&appid=b9aca27f359944767bc5c24e6b2f3039" 
           )
        .then((reponse) => reponse.json())
        .then((donnee) => this.afficherMeteo(donnee))
        .catch((error) => console.error("Erreur de récupération des données :", error));
    },

    // Fonction pour afficher les données météo sur la page
    afficherMeteo: function (donnee) {
        const { name } = donnee;
        const { icon, description } = donnee.weather[0];
        const { temp, humidity } = donnee.main;

        document.querySelector(".ville").innerText = "Temps qu'il fait dans l' " + name;
        document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temps").innerText = temp + "°C";
        document.querySelector(".humidite").innerText = "Humidité: " + humidity + "%";
    }
};

// Appel de la méthode pour récupérer la météo de Grenoble au chargement de la page
meteo.recupMeteo("Grenoble");
