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
    const sceneButtonContainer = document.getElementById('scene-buttons');  // Corrected to match HTML

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
            character.src = 'character-thinking.webp';
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
            showResults();
            break;
    }
    currentScene++;
}

function chooseOption(option) {
    if (option === 'dry') {
        skinTypeScore.dry++;
    } else if (option === 'oily') {
        skinTypeScore.oily++;
    } else if (option === 'balanced') {
        skinTypeScore.normal++;
    } else if (option === 'sensitive') {
        skinTypeScore.sensitive++;
    } else if (option === 'rarely' || option === 'reactive') {
        skinTypeScore.normal++;
    } else if (option === 'often') {
        skinTypeScore.oily++;
    } else if (option === 'occasionally') {
        skinTypeScore.sensitive++;
    } else if (option === 'sunscreen') {
        skinTypeScore.sensitive++;
    } else if (option === 'soothe') {
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
    alert("Your trial pack is on its way!");
}
