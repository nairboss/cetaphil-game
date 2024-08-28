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
    const sceneButton = document.querySelector('#scene button');

    switch(currentScene) {
        case 0:
            dialogue.innerText = "You wake up with your skin feeling a bit dry. What's your first move?";
            sceneButton.innerText = "Apply Moisturizer";
            sceneButton.setAttribute('onclick', 'chooseOption("moisturize")');
            character.src = 'character-think.png';
            break;
        case 1:
            dialogue.innerText = "It's a bright sunny day! How do you shield your skin?";
            sceneButton.innerText = "Use Sunscreen";
            sceneButton.setAttribute('onclick', 'chooseOption("sunscreen")');
            character.src = 'character-sun.jpeg';
            break;
        case 2:
            dialogue.innerText = "You notice some redness. What's your plan of action?";
            sceneButton.innerText = "Soothe with Cream";
            sceneButton.setAttribute('onclick', 'chooseOption("soothe")');
            character.src = 'character-redness.png';
            break;
        case 3:
            showResults();
            break;
    }
    currentScene++;
}

function chooseOption(option) {
    if (option === 'moisturize') {
        skinTypeScore.dry++;
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
