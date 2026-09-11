// Ilagay mo dito ang mga rason mo (Pwede mong dagdagan o baguhin)
const reasons = [
    "The way your laughter is utterly contagious.",
    "How you still manage to understand me, even when you're exhausted.",
    "Your sweet, random little stories that brighten my every day.",
    "The way you fiercely support everything I do.",
    "How your warm hugs instantly melt all my stress away.",
    "How adorable you look when you pout (even when you pretend to be mad).",
    "The absolute peace of feeling completely safe in your arms.",
    "Because you will always be my favorite person to talk to.",
    "Your little out-of-nowhere gestures of affection.",
    "Knowing that no matter what happens, you'll always be on my side.",
    "How breathtaking your smile is, especially in real life.",
    "Because with you, I've finally found my home.",
    "The way you look at me like I'm your favorite view.",
    "How you remember the smallest, random details about me.",
    "The quiet comfort of just sitting in silence with you.",
    "How easily you can turn my worst days into the best ones.",
    "Your kindness and the way your heart is made of pure gold.",
    "The way my heart still skips a beat every time I see you.",
    "How you make ordinary moments feel so magical.",
    "Because loving you is best thing I've ever done."
];

const gridContainer = document.getElementById('cardGrid');

// Generate cards automatically
reasons.forEach((reason, index) => {
    const card = document.createElement('div');
    card.classList.add('flip-card');
    
    card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <span>🔒</span> Reason #${index + 1}
            </div>
            <div class="flip-card-back">
                <p>${reason}</p>
            </div>
        </div>
    `;

    // Toggle flip on click (mobile friendly)
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    gridContainer.appendChild(card);
});