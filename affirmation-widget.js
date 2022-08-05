async function affirmationImage() {
    let affirmations = await fetch("./affirmationSheetUK.json");
    affirmations = await affirmations.json();
    let matchDate = new Date().toISOString().slice(0, 10);
    let affirmationDate;
    let dailyAffirmation;
    let dailyAffirmationSource;
    let affirmationAlt;
    let affirmationTitle;
    let affirmationSource;
    
    for (let affirmation of affirmations) {
        if (affirmation.affirmationDayDate !== undefined) {
            affirmationDate = (JSON.stringify(affirmation.affirmationDayDate)).substring(1, 11);
        };
        if ( affirmationDate === matchDate) {
            dailyAffirmation = affirmation.id
            dailyAffirmationSource = `./affirmation-images/${dailyAffirmation}.png`;
            affirmationAlt = affirmation.affirmation;
            affirmationTitle = affirmation.graphicsTitle;
            break;
        };
    }
    if (dailyAffirmationSource) {
        affirmationSource = dailyAffirmationSource;
    } else {
        affirmationSource = `./affirmation-images/generic_tip_image.jpg`;
        affirmationAlt = "No affirmation image available.";
        affirmationTitle = "Create your own Kindspace.";
    }
    document.getElementById('affirmation_image').src = affirmationSource;
    document.getElementById('affirmation_image').alt = affirmationAlt;
    document.getElementById('affirmation_image').title = affirmationTitle;
};