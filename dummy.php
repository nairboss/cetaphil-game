<div id="game-screen" style="display:none;">
    <div id="character-area">
        <img id="character" src="character.png" alt="Character">
    </div>
    <div id="scene">
        <p id="dialogue">Hello! Let's find out how to take care of your skin.</p>
        <button onclick="nextScene()">Next</button>
    </div>
</div>

<div id="results-screen" style="display:none;">
    <h2>Your Skin Type</h2>
    <p id="skin-type-result"></p>
    <p id="recommendation"></p>
    <button onclick="claimTrialPack()">Claim My Trial Pack</button>
</div>

<div id="rewards-screen" style="display:none;">
    <h2>Congratulations!</h2>
    <p id="reward-message">You've won a Cetaphil trial pack!</p>
</div>

<script src="script.js"></script>
