// =================================
// 🌐 LANGUAGE SYSTEM
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // Create Language Button
    let languageButton = document.createElement("button");

    languageButton.innerHTML = "🌐 Language";

    languageButton.style.position = "fixed";
    languageButton.style.top = "20px";
    languageButton.style.right = "20px";

    languageButton.style.width = "auto";
    languageButton.style.margin = "0";

    languageButton.style.padding = "12px 18px";

    languageButton.style.background = "#35d07f";
    languageButton.style.color = "black";

    languageButton.style.border = "none";
    languageButton.style.borderRadius = "10px";

    languageButton.style.fontWeight = "bold";
    languageButton.style.fontSize = "15px";

    languageButton.style.cursor = "pointer";

    languageButton.style.zIndex = "9999";

    document.body.appendChild(languageButton);


    // Create Language Menu
    let languageMenu = document.createElement("div");

    languageMenu.style.position = "fixed";

    languageMenu.style.top = "70px";
    languageMenu.style.right = "20px";

    languageMenu.style.background = "#172952";

    languageMenu.style.padding = "10px";

    languageMenu.style.borderRadius = "12px";

    languageMenu.style.display = "none";

    languageMenu.style.zIndex = "9999";

    document.body.appendChild(languageMenu);


    // Languages
    let languages = [

        ["en", "🇬🇧 English"],

        ["ta", "🇮🇳 தமிழ்"],

        ["hi", "🇮🇳 हिन्दी"],

        ["mr", "🇮🇳 मराठी"],

        ["te", "🇮🇳 తెలుగు"],

        ["ml", "🇮🇳 മലയാളം"],

        ["kn", "🇮🇳 ಕನ್ನಡ"]

    ];


    languages.forEach(function (language) {

        let button = document.createElement("button");

        button.innerHTML = language[1];

        button.style.width = "180px";

        button.style.margin = "5px";

        button.style.padding = "10px";

        button.style.border = "none";

        button.style.borderRadius = "8px";

        button.style.cursor = "pointer";


        button.onclick = function () {

            selectLanguage(language[0]);

            languageMenu.style.display = "none";

        };


        languageMenu.appendChild(button);

    });


    // Open Language Menu
    languageButton.onclick = function () {

        if (languageMenu.style.display === "none") {

            languageMenu.style.display = "block";

        } else {

            languageMenu.style.display = "none";

        }

    };

});


// =================================
// CHANGE LANGUAGE
// =================================

function selectLanguage(language) {

    // Save language
    localStorage.setItem(
        "selectedLanguage",
        language
    );

    // Google Translate
    let googleSelect =
        document.querySelector(".goog-te-combo");

    if (googleSelect) {

        googleSelect.value = language;

        googleSelect.dispatchEvent(
            new Event("change")
        );

    }

}
