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
            dialogue.innerText = "You wake up on a chilly winter morning, and your skin feels tight and dry. What's your first move?";
            sceneButton.innerText = "Apply Moisturizer";
            sceneButton.setAttribute('onclick', 'chooseOption("moisturize")');
            character.src = 'character-think.png';
            break;
        case 1:
            dialogue.innerText = "As you step outside, the cold wind hits your face. How do you protect your skin?";
            sceneButton.innerText = "Use Sunscreen with Moisturizer";
            sceneButton.setAttribute('onclick', 'chooseOption("sunscreen")');
            character.src = 'character-sun.jpeg';
            break;
        case 2:
            dialogue.innerText = "After a long day, you notice your skin has become red and irritated. What’s your plan of action?";
            sceneButton.innerText = "Soothe with Moisturizing Cream";
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
        recommendationText = 'We recommend Cetaphil Moisturizing Cream for deep hydration and protection against winter dryness.';
    } else if (skinType === 'Oily Skin') {
        recommendationText = 'We recommend Cetaphil Oil Control Moisturizer to balance your skin even in cold weather.';
    } else if (skinType === 'Sensitive Skin') {
        recommendationText = 'We recommend Cetaphil Moisturizing Lotion to soothe and protect your sensitive skin this winter.';
    } else {
        recommendationText = 'We recommend Cetaphil Daily Hydrating Lotion for balanced moisture throughout the winter season.';
    }
    document.getElementById('recommendation').innerText = recommendationText;
}

function claimTrialPack() {
    alert("Your trial pack is on its way! Stay hydrated this winter!");
}
