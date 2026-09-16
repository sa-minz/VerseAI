document.addEventListener("DOMContentLoaded", function () {

    let selectedMood = "Happy";
    let selectedStyle = "Free Verse";


    /* =========================================
       ANIMATED HERO HEADLINE
    ========================================= */

    const headlineMain = document.getElementById("headlineMain");
    const headlineAccent = document.getElementById("headlineAccent");

    const headlinePhrases = [
        {
            main: "Turn your ideas into ",
            accent: "beautiful words."
        },
        {
            main: "Bring your imagination to ",
            accent: "life."
        },
        {
            main: "Create something ",
            accent: "worth remembering."
        },
        {
            main: "Let your thoughts become ",
            accent: "poetry."
        }
    ];

    let headlinePhraseIndex = 0;

    async function typeText(element, text, speed) {

        for (let i = 0; i < text.length; i++) {

            element.textContent = text.substring(0, i + 1);

            await new Promise(resolve =>
                setTimeout(resolve, speed)
            );

        }

    }


    async function deleteText(element, speed) {

        for (let i = element.textContent.length; i > 0; i--) {

            element.textContent =
                element.textContent.substring(0, i - 1);

            await new Promise(resolve =>
                setTimeout(resolve, speed)
            );

        }

    }


    async function animateHeadline() {

        while (true) {

            const phrase =
                headlinePhrases[headlinePhraseIndex];


            /* Clear previous text */

            headlineMain.textContent = "";
            headlineAccent.textContent = "";


            /* Type normal part */

            await typeText(
                headlineMain,
                phrase.main,
                65
            );


            /* Type accent part */

            await typeText(
                headlineAccent,
                phrase.accent,
                65
            );


            /* Wait */

            await new Promise(resolve =>
                setTimeout(resolve, 1800)
            );


            /* Delete accent */

            await deleteText(
                headlineAccent,
                40
            );


            /* Delete main */

            await deleteText(
                headlineMain,
                40
            );


            /* Next phrase */

            headlinePhraseIndex =
                (headlinePhraseIndex + 1) %
                headlinePhrases.length;

        }

    }


    animateHeadline();



    /* =========================================
       TOPIC INPUT
    ========================================= */

    const topicInput =
        document.getElementById("topic");


    const charCount =
        document.getElementById("charCount");


    const topicExamples = [

        "A rainy evening in Tokyo...",

        "The moon over a silent ocean...",

        "A friendship that lasted forever...",

        "A dream I never told anyone...",

        "Walking through a forest at midnight...",

        "The feeling of falling in love...",

        "A letter to my future self..."

    ];


    let exampleIndex = 0;
    let placeholderIndex = 0;
    let deletingPlaceholder = false;


    function animatePlaceholder() {

        if (topicInput.value !== "") {

            topicInput.placeholder = "";

            setTimeout(
                animatePlaceholder,
                500
            );

            return;

        }


        const text =
            topicExamples[exampleIndex];


        if (!deletingPlaceholder) {

            topicInput.placeholder =
                text.substring(
                    0,
                    placeholderIndex + 1
                );

            placeholderIndex++;


            if (placeholderIndex >= text.length) {

                deletingPlaceholder = true;

                setTimeout(
                    animatePlaceholder,
                    1800
                );

                return;

            }

        } else {

            topicInput.placeholder =
                text.substring(
                    0,
                    placeholderIndex - 1
                );

            placeholderIndex--;


            if (placeholderIndex <= 0) {

                placeholderIndex = 0;

                deletingPlaceholder = false;

                exampleIndex =
                    (exampleIndex + 1) %
                    topicExamples.length;

            }

        }


        setTimeout(
            animatePlaceholder,
            deletingPlaceholder ? 45 : 75
        );

    }


    animatePlaceholder();



    /* =========================================
       CHARACTER COUNTER
    ========================================= */

    topicInput.addEventListener(
        "input",
        function () {

            charCount.textContent =
                this.value.length;

        }
    );



    /* =========================================
       MOOD SELECTION
    ========================================= */

    document
        .querySelectorAll(".mood-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(".mood-option")
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );


                    this.classList.add("active");


                    selectedMood =
                        this.dataset.mood;

                }
            );

        });



    /* =========================================
       STYLE SELECTION
    ========================================= */

    document
        .querySelectorAll(".style-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(".style-option")
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );


                    this.classList.add("active");


                    selectedStyle =
                        this.dataset.style;

                }
            );

        });



    /* =========================================
       GENERATE POEM
    ========================================= */

    window.generatePoem = async function () {

        const topic =
            topicInput.value.trim();


        if (topic === "") {

            alert(
                "Please enter a topic for your poem."
            );

            topicInput.focus();

            return;

        }


        const emptyState =
            document.getElementById("emptyState");


        const loadingState =
            document.getElementById("loadingState");


        const poemContent =
            document.getElementById("poemContent");


        const generateButton =
            document.getElementById("generateButton");


        emptyState.style.display = "none";

        poemContent.style.display = "none";

        loadingState.style.display = "flex";

        generateButton.disabled = true;

        generateButton.style.opacity = "0.6";


        try {

            const response =
                await fetch(
                    "/generate",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            topic: topic,
                            mood: selectedMood,
                            style: selectedStyle
                        })
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.error ||
                    "Something went wrong."
                );

            }


            document.getElementById("poem").innerText =
                data.poem;


            loadingState.style.display =
                "none";


            poemContent.style.display =
                "block";


        } catch (error) {

            console.error(error);


            loadingState.style.display =
                "none";


            emptyState.style.display =
                "flex";


            alert(
                "Could not generate poem.\n\n" +
                error.message
            );

        }


        generateButton.disabled = false;

        generateButton.style.opacity = "1";

    };



    /* =========================================
       COPY POEM
    ========================================= */

    window.copyPoem = async function () {

        const poem =
            document.getElementById("poem").innerText;


        if (!poem) {
            return;
        }


        try {

            await navigator.clipboard.writeText(
                poem
            );


            const copyButton =
                document.querySelector(
                    ".action-button"
                );


            const originalText =
                copyButton.innerText;


            copyButton.innerText =
                "✓ Copied!";


            setTimeout(
                function () {

                    copyButton.innerText =
                        originalText;

                },
                1800
            );


        } catch (error) {

            console.error(error);

            alert(
                "Could not copy the poem."
            );

        }

    };



    /* =========================================
       DOWNLOAD POEM
    ========================================= */

    window.downloadPoem = function () {

        const poem =
            document.getElementById("poem").innerText;


        if (!poem) {
            return;
        }


        const blob =
            new Blob(
                [poem],
                {
                    type: "text/plain"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "verseai-poem.txt";


        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);


        URL.revokeObjectURL(url);

    };



    /* =========================================
       DARK MODE
    ========================================= */

    window.toggleTheme = function () {

        document.body.classList.toggle("dark");


        const button =
            document.getElementById("themeButton");


        if (
            document.body.classList.contains("dark")
        ) {

            button.innerText = "☀️";

        } else {

            button.innerText = "🌙";

        }

    };

});