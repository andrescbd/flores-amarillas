const startButton = document.getElementById("startButton");
const intro = document.querySelector(".card");
const message = document.getElementById("message");
const flowersContainer = document.getElementById("flowers-container");

startButton.addEventListener("click", () => {

    startButton.disabled = true;

    intro.classList.add("hide-intro");

    setTimeout(() => {

        createBouquet();

        setTimeout(() => {
            createScatteredFlowers();
        }, 1800);

        setTimeout(() => {
            message.classList.remove("hidden");
        }, 5000);

        setTimeout(() => {
            createParticles();
        }, 3000);

    }, 700);
});


/* =========================================
   CREAR RAMO
========================================= */

function createBouquet() {

    const bouquet = document.createElement("div");

    bouquet.className = "bouquet";

    bouquet.innerHTML = `

        <!-- =================================
             TALLOS
        ================================== -->

        <svg
    class="bouquet-stems"
    viewBox="0 0 520 650"
    preserveAspectRatio="none"
>

    <!-- TALLO IZQUIERDO EXTERIOR -->

    <path
        class="bouquet-stem"
        style="animation-delay: 0.15s;"
        d="
            M260 505
            C238 430 175 300 125 120
        "
    />


    <!-- TALLO IZQUIERDO -->

    <path
        class="bouquet-stem"
        style="animation-delay: 0.25s;"
        d="
            M260 505
            C245 420 215 270 190 95
        "
    />


    <!-- TALLO CENTRAL IZQUIERDO -->

    <path
        class="bouquet-stem"
        style="animation-delay: 0.35s;"
        d="
            M260 505
            C255 410 245 270 245 75
        "
    />


    <!-- TALLO CENTRAL -->

    <path
        class="bouquet-stem"
        style="animation-delay: 0.45s;"
        d="
            M260 505
            C260 390 260 220 260 55
        "
    />


    <!-- TALLO CENTRAL DERECHO -->

    <path
        class="bouquet-stem"
        style="animation-delay: 0.55s;"
        d="
            M260 505
            C270 410 275 270 275 75
        "
    />


    <!-- TALLO DERECHO -->

    <path
        class="bouquet-stem"
        style="animation-delay: 0.65s;"
        d="
            M260 505
            C280 420 305 270 330 95
        "
    />


    <!-- TALLO DERECHO EXTERIOR -->

    <path
        class="bouquet-stem"
        style="animation-delay: 0.75s;"
        d="
            M260 505
            C285 430 345 300 395 120
        "
    />

</svg>


        <!-- =================================
             FLORES
        ================================== -->

        <div
            class="bouquet-flower"
            style="
                left: 125px;
                top: 120px;
                --rotation: -25deg;
                animation-delay: 0.9s;
            "
        >
            ${createFlowerSVG(0.95)}
        </div>


        <div
            class="bouquet-flower"
            style="
                left: 190px;
                top: 95px;
                --rotation: -12deg;
                animation-delay: 1.15s;
            "
        >
            ${createFlowerSVG(1)}
        </div>


        <div
            class="bouquet-flower"
            style="
                left: 245px;
                top: 75px;
                --rotation: -4deg;
                animation-delay: 1.4s;
            "
        >
            ${createFlowerSVG(0.95)}
        </div>


        <div
            class="bouquet-flower"
            style="
                left: 260px;
                top: 55px;
                --rotation: 0deg;
                animation-delay: 1.65s;
            "
        >
            ${createFlowerSVG(1.15)}
        </div>


        <div
            class="bouquet-flower"
            style="
                left: 275px;
                top: 75px;
                --rotation: 4deg;
                animation-delay: 1.9s;
            "
        >
            ${createFlowerSVG(0.95)}
        </div>


        <div
            class="bouquet-flower"
            style="
                left: 330px;
                top: 95px;
                --rotation: 12deg;
                animation-delay: 2.15s;
            "
        >
            ${createFlowerSVG(1)}
        </div>


        <div
            class="bouquet-flower"
            style="
                left: 395px;
                top: 120px;
                --rotation: 25deg;
                animation-delay: 2.4s;
            "
        >
            ${createFlowerSVG(0.95)}
        </div>


        <!-- =================================
             HOJAS
        ================================== -->

        ${createLeaves()}


        <!-- =================================
             LISTÓN
        ================================== -->

        <div class="bouquet-ribbon">

            <div class="ribbon-knot"></div>

            <div class="ribbon-left"></div>

            <div class="ribbon-right"></div>

        </div>

    `;

    flowersContainer.appendChild(bouquet);
}


/* =========================================
   CREAR SVG DE UNA FLOR
========================================= */

function createFlowerSVG(scale = 1) {

    const petalCount = 10;

    let backPetals = "";
    let frontPetals = "";

    for (let i = 0; i < petalCount; i++) {

        const rotation =
            i * (360 / petalCount);

        const delay =
            0.15 + i * 0.06;

        /*
         * Alternamos los pétalos para crear
         * una sensación de profundidad.
         */
        if (i % 2 === 0) {

            backPetals += createPetal(
                rotation,
                delay,
                "back"
            );

        } else {

            frontPetals += createPetal(
                rotation,
                delay + 0.12,
                "front"
            );

        }
    }


    return `

        <svg
            viewBox="0 0 150 150"
            style="
                transform: scale(${scale});
            "
        >

            <!-- =========================
                 PÉTALOS TRASEROS
            ========================== -->

            ${backPetals}


            <!-- =========================
                 CENTRO EXTERIOR
            ========================== -->

            <circle
                class="flower-center-outer"
                cx="75"
                cy="75"
                r="24"
                style="
                    animation-delay: 1.05s;
                "
            />


            <!-- =========================
                 PÉTALOS DELANTEROS
            ========================== -->

            ${frontPetals}


            <!-- =========================
                 CENTRO
            ========================== -->

            <circle
                class="flower-center"
                cx="75"
                cy="75"
                r="15"
                style="
                    animation-delay: 1.35s;
                "
            />


            <!-- =========================
                 POLEN
            ========================== -->

            <circle
                class="pollen"
                cx="68"
                cy="69"
                r="2.5"
                style="
                    animation-delay: 1.45s;
                "
            />

            <circle
                class="pollen"
                cx="82"
                cy="69"
                r="2.5"
                style="
                    animation-delay: 1.55s;
                "
            />

            <circle
                class="pollen"
                cx="66"
                cy="78"
                r="2.5"
                style="
                    animation-delay: 1.65s;
                "
            />

            <circle
                class="pollen"
                cx="84"
                cy="78"
                r="2.5"
                style="
                    animation-delay: 1.75s;
                "
            />

            <circle
                class="pollen"
                cx="75"
                cy="84"
                r="2.5"
                style="
                    animation-delay: 1.85s;
                "
            />

        </svg>

    `;
}


/* =========================================
   CREAR PÉTALO
========================================= */

function createPetal(rotation, delay, layer) {

    const scale =
        layer === "front"
            ? 0.94
            : 1;

    const opacity =
        layer === "front"
            ? 0.96
            : 1;


    return `

        <g
            class="petal-group"
            style="
                --rotation: ${rotation}deg;
                --petal-scale: ${scale};
                animation-delay: ${delay}s;
            "
        >

            <path
                class="flower-petal ${layer}-petal"
                d="
                    M75 75

                    C58 67 45 54 43 38

                    C41 24 47 10 58 5

                    C67 1 73 5 75 13

                    C77 5 83 1 92 5

                    C103 10 109 24 107 38

                    C105 54 92 67 75 75

                    Z
                "
                style="
                    opacity: ${opacity};
                    transform: scale(${scale});
                "
            />

        </g>

    `;
}


/* =========================================
   HOJAS DEL RAMO
========================================= */

function createLeaves() {

    return `

        <!-- HOJA IZQUIERDA -->

        <svg
            class="bouquet-leaf"
            style="
                position: absolute;
                left: 85px;
                top: 315px;
                width: 170px;
                height: 120px;
                transform: rotate(-28deg);
                animation-delay: 3s;
            "
            viewBox="0 0 170 120"
        >

            <path
                d="
                    M20 65
                    C45 15 110 5 155 45
                    C120 90 65 105 20 65
                    Z
                "
            />

            <path
                class="leaf-vein"
                d="
                    M28 63
                    C65 60 105 53 148 46
                "
            />

        </svg>


        <!-- HOJA IZQUIERDA BAJA -->

        <svg
            class="bouquet-leaf"
            style="
                position: absolute;
                left: 125px;
                top: 380px;
                width: 160px;
                height: 110px;
                transform: rotate(-12deg);
                animation-delay: 3.2s;
            "
            viewBox="0 0 170 120"
        >

            <path
                d="
                    M20 65
                    C45 15 110 5 155 45
                    C120 90 65 105 20 65
                    Z
                "
            />

            <path
                class="leaf-vein"
                d="
                    M28 63
                    C65 60 105 53 148 46
                "
            />

        </svg>


        <!-- HOJA DERECHA -->

        <svg
            class="bouquet-leaf"
            style="
                position: absolute;
                right: 85px;
                top: 315px;
                width: 170px;
                height: 120px;
                transform: scaleX(-1) rotate(-28deg);
                animation-delay: 3.4s;
            "
            viewBox="0 0 170 120"
        >

            <path
                d="
                    M20 65
                    C45 15 110 5 155 45
                    C120 90 65 105 20 65
                    Z
                "
            />

            <path
                class="leaf-vein"
                d="
                    M28 63
                    C65 60 105 53 148 46
                "
            />

        </svg>


        <!-- HOJA DERECHA BAJA -->

        <svg
            class="bouquet-leaf"
            style="
                position: absolute;
                right: 125px;
                top: 380px;
                width: 160px;
                height: 110px;
                transform: scaleX(-1) rotate(-12deg);
                animation-delay: 3.6s;
            "
            viewBox="0 0 170 120"
        >

            <path
                d="
                    M20 65
                    C45 15 110 5 155 45
                    C120 90 65 105 20 65
                    Z
                "
            />

            <path
                class="leaf-vein"
                d="
                    M28 63
                    C65 60 105 53 148 46
                "
            />

        </svg>

    `;
}


/* =========================================
   FLORES PEQUEÑAS ALREDEDOR
========================================= */

function createScatteredFlowers() {

    const positions = [

    {
        x: 12,
        y: 20,
        scale: 0.22,
        rotation: -20
    },

    {
        x: 87,
        y: 18,
        scale: 0.20,
        rotation: 15
    },

    {
        x: 8,
        y: 55,
        scale: 0.18,
        rotation: 25
    },

    {
        x: 92,
        y: 55,
        scale: 0.22,
        rotation: -15
    },

    {
        x: 20,
        y: 80,
        scale: 0.16,
        rotation: -10
    },

    {
        x: 80,
        y: 82,
        scale: 0.18,
        rotation: 18
    }

];


    positions.forEach((flower, index) => {

        setTimeout(() => {

            const element =
                document.createElement("div");

            element.className =
                "scattered-flower";


            element.style.left =
                `${flower.x}%`;

            element.style.top =
                `${flower.y}%`;

            element.style.setProperty(
                "--flower-scale",
                flower.scale
            );

            element.style.setProperty(
                "--flower-rotation",
                `${flower.rotation}deg`
            );


            element.innerHTML =
                createFlowerSVG(1);


            flowersContainer.appendChild(element);


        }, index * 350);

    });

}


/* =========================================
   PARTÍCULAS
========================================= */

function createParticles() {

    const container =
        document.getElementById("particles");


    for (let i = 0; i < 22; i++) {

        const particle =
            document.createElement("span");


        particle.innerHTML = "✦";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.top =
            `${Math.random() * 100}%`;


        particle.style.animationDelay =
            `${Math.random() * 4}s`;


        particle.style.animationDuration =
            `${3 + Math.random() * 3}s`;


        container.appendChild(particle);

    }

}


