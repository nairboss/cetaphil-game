let skinTypeScore = {
    dry: 0,
    oily: 0,
    sensitive: 0,
    balanced: 0
};

function startGame() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
}

function submitQuiz() {
    const form = document.forms['quiz-form'];

    // Calculate scores based on the selected answers
    skinTypeScore.dry = countValues(form, ['dry']);
    skinTypeScore.oily = countValues(form, ['oily']);
    skinTypeScore.sensitive = countValues(form, ['sensitive']);
    skinTypeScore.balanced = countValues(form, ['balanced']);

    // Show results based on the highest score
    showResults();
}

function countValues(form, values) {
    let count = 0;
    for (let i = 1; i <= 6; i++) {
        if (values.includes(form[`q${i}`].value)) {
            count++;
        }
    }
    return count;
}

function showResults() {
    document.getElementById('game-screen').style.display = 'none';

    let skinType = 'Balanced Skin';
    let maxScore = Math.max(skinTypeScore.dry, skinTypeScore.oily, skinTypeScore.sensitive, skinTypeScore.balanced);

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
        recommendationText = 'We recommend Cetaphil Moisturizing Cream for deep hydration and protection against dryness.';
    } else if (skinType === 'Oily Skin') {
        recommendationText = 'We recommend Cetaphil Oil Control Moisturizer to balance your skin.';
    } else if (skinType === 'Sensitive Skin') {
        recommendationText = 'We recommend Cetaphil Moisturizing Lotion to soothe and protect your sensitive skin.';
    } else {
        recommendationText = 'We recommend Cetaphil Daily Hydrating Lotion for balanced moisture.';
    }
    document.getElementById('recommendation').innerText = recommendationText;
}

function claimTrialPack() {
    alert("Your trial pack is on its way!");
}
