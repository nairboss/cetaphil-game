let skinTypeScore = {
    dry: 0,
    oily: 0,
    sensitive: 0,
    normal: 0
};

function startAdventure() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('adventure-screen').style.display = 'block';
}

function nextScene() {
    document.getElementById('adventure-screen').style.display = 'none';
    document.getElementById('scenario-1').style.display = 'block';
}

function chooseOption(option) {
    // Scoring logic based on user's choices
    if (option === 'moisturize') {
        skinTypeScore.dry++;
    } else if (option === 'ignore') {
        skinTypeScore.normal++;
    } else if (option === 'sunscreen') {
        skinTypeScore.sensitive++;
    } else if (option === 'nothing') {
        skinTypeScore.oily++;
    } else if (option === 'soothe') {
        skinTypeScore.sensitive++;
    } else if (option === 'ignore_redness') {
        skinTypeScore.normal++;
    }

    let currentScenario = document.querySelector('.scenario:not([style*="display: none"])');
    currentScenario.style.display = 'none';

    let nextScenario = currentScenario.nextElementSibling;
    if (nextScenario && nextScenario.classList.contains('scenario')) {
        nextScenario.style.display = 'block';
    } else {
        document.getElementById('results-screen').style.display = 'block';
        determineSkinType();
    }
}

function determineSkinType() {
    let skinType = 'Normal Skin';
    let maxScore = Math.max(skinTypeScore.dry, skinTypeScore.oily, skinTypeScore.sensitive, skinTypeScore.normal);

    if (skinTypeScore.dry === maxScore) {
        skinType = 'Dry Skin';
    } else if (skinTypeScore.oily === maxScore) {
        skinType = 'Oily Skin';
    } else if (skinTypeScore.sensitive === maxScore) {
        skinType = 'Sensitive Skin';
    }

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
    // This could redirect to a landing page or show a form for user details.
}
