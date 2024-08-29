let currentScene = 0;
let skinTypeScore = {
    dry: 0,
    oily: 0,
    sensitive: 0,
    normal: 0
};

function startGame() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    nextScene();
}

function nextScene() {
    const dialogue = document.getElementById('dialogue');
    const character = document.getElementById('character');
    const sceneButtonContainer = document.getElementById('scene-buttons');

    switch(currentScene) {
        case 0:
            dialogue.innerText = "How does your skin feel most of the time?";
            sceneButtonContainer.innerHTML = `
                <button onclick="chooseOption('dry')">A) Dry and tight</button>
                <button onclick="chooseOption('oily')">B) Oily and shiny</button>
                <button onclick="chooseOption('balanced')">C) Balanced and comfortable</button>
                <button onclick="chooseOption('sensitive')">D) Sensitive and easily irritated</button>
            `;
            character.src = 'character-thinking.webp';
            break;
        case 1:
            dialogue.innerText = "How often do you experience breakouts?";
            sceneButtonContainer.innerHTML = `
                <button onclick="chooseOption('rarely')">A) Rarely, if ever</button>
                <button onclick="chooseOption('often')">B) Often, especially on my T-zone</button>
                <button onclick="chooseOption('occasionally')">C) Occasionally, here and there</button>
                <button onclick="chooseOption('reactive')">D) Almost never, but my skin reacts to new products</button>
            `;
            character.src = 'character-breakout.webp';
            break;
        case 2:
            dialogue.innerText = "How does your skin react to the weather?";
            sceneButtonContainer.innerHTML = `
                <button onclick="chooseOption('dry')">A) It gets drier in cold weather</button>
                <button onclick="chooseOption('oily')">B) It becomes oilier in warm weather</button>
                <button onclick="chooseOption('balanced')">C) It stays the same most of the time</button>
                <button onclick="chooseOption('sensitive')">D) It gets irritated with extreme changes</button>
            `;
            character.src = 'character-weather.webp';
            break;
        case 3:
            dialogue.innerText = "How do you describe your pores?";
            sceneButtonContainer.innerHTML = `
                <button onclick="chooseOption('small')">A) Small and almost invisible</button>
                <button onclick="chooseOption('large')">B) Large and noticeable, especially on my T-zone</button>
                <button onclick="chooseOption('balanced')">C) Visible but not too large</button>
                <button onclick="chooseOption('clogged')">D) Small but tend to get clogged easily</button>
            `;
            character.src = 'character-pores.webp';
            break;
        case 4:
            dialogue.innerText = "What’s your biggest skincare concern?";
            sceneButtonContainer.innerHTML = `
                <button onclick="chooseOption('dryness')">A) Dryness and flakiness</button>
                <button onclick="chooseOption('oiliness')">B) Excess oil and shine</button>
                <button onclick="chooseOption('balance')">C) Keeping my skin balanced</button>
                <button onclick="chooseOption('redness')">D) Redness and sensitivity</button>
            `;
            character.src = 'character-concern.webp';
            break;
        case 5:
            dialogue.innerText = "How does your skin feel after cleansing?";
            sceneButtonContainer.innerHTML = `
                <button onclick="chooseOption('tight')">A) Tight and dry</button>
                <button onclick="chooseOption('fresh')">B) Fresh but oily soon after</button>
                <button onclick="chooseOption('clean')">C) Clean and normal</button>
                <button onclick="chooseOption('irritated')">D) Slightly irritated or red</button>
            `;
            character.src = 'character-cleansing.webp';
            break;
        case 6:
            showResults();
            break;
    }
    currentScene++;
}

function chooseOption(option) {
    if (option === 'dry' || option === 'tight' || option === 'dryness') {
        skinTypeScore.dry++;
    } else if (option === 'oily' || option === 'oiliness' || option === 'fresh') {
        skinTypeScore.oily++;
    } else if (option === 'balanced' || option === 'clean' || option === 'balance') {
        skinTypeScore.normal++;
    } else if (option === 'sensitive' || option === 'reactive' || option === 'redness' || option === 'irritated' || option === 'clogged') {
        skinTypeScore.sensitive++;
    } else if (option === 'rarely') {
        skinTypeScore.normal++;
    } else if (option === 'often') {
        skinTypeScore.oily++;
    } else if (option === 'occasionally') {
        skinTypeScore.sensitive++;
    }

    nextScene();
}

function showResults() {
    document.getElementById('game-screen').style.display = 'none';

    let skinType = 'Normal Skin';
    let maxScore = Math.max(skinTypeScore.dry, skinTypeScore.oily, skinTypeScore.sensitive, skinTypeScore.normal);

    if (skinTypeScore.dry === maxScore) {
        skinType = 'Dry Skin';
    } else if (skinTypeScore.oily === maxScore) {
        skinType = 'Oily Skin';
    } else if (skinTypeScore.sensitive === maxScore) {
        skinType = 'Sensitive Skin';
    }

    document.getElementById('results-screen').style.display = 'block';
    document.getElementById('skin-type-result').innerText = skinType;

    let recommendationText = '';
    if (skinType === 'Dry Skin') {
        recommendationText = 'We recommend Cetaphil Moisturizing Cream for deep hydration.';
    } else if (skinType === 'Oily Skin') {
        recommendationText = 'We recommend Cetaphil Oil Control Moisturizer to balance your skin.';
    } else if (skinType === 'Sensitive Skin') {
        recommendationText = 'We recommend Cetaphil Moisturizing Lotion to soothe and protect your skin.';
    } else {
        recommendationText = 'We recommend Cetaphil Daily Hydrating Lotion for balanced moisture.';
    }
    document.getElementById('recommendation').innerText = recommendationText;
}

function claimTrialPack() {
    alert("Congratulations! Your trial pack has been added to your cart.");
}
