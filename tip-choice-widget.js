async function tipImage(category) {
    let tips = await fetch("./googleSheetUK.json");
    tips = await tips.json();
    let tipsCategoryMap = {};
    let tipMap = {};
    let getTipIndex;
    let dailyTip;
    let dailyTipText;
    let dailyTipSource = `./tip-images/generic_tip_image.jpg`;
    let tipSource;
    console.log(category);

if (category){
    try{
        if (tips.length > 1){

            for(let index=1;index<tips.length;index++) {
                if(tipsCategoryMap[tips[index].subCategory.toLowerCase()]==undefined) {
                    tipsCategoryMap[tips[index].subCategory.toLowerCase()]=[];
                }
                await tipsCategoryMap[tips[index].subCategory.toLowerCase()].push(index);

                if(index>=tips.length-1) {
                    break;
                }
            }
            console.log(tipsCategoryMap);
        } else {
            console.log("No Tips Found");
        }
    }
    catch(err)
    {
        console.log("Error at get data"+JSON.stringify(err));
    }
    console.log(tipsCategoryMap);
    getTipIndex = await tipsCategoryMap[category][Math.floor(Math.random() * tipsCategoryMap[category].length)];

    try{  
        console.log("TipID Saved: ", tips[getTipIndex].id);
  
        tipMap={
            "id": tips[getTipIndex].id,
            "subCategory": tips[getTipIndex].subCategory,
            "tipText": tips[getTipIndex].tip,
            "graphicTitle": tips[getTipIndex].graphicsTitle,
            "graphicImage":tips[getTipIndex].linkToGraphics
        }
          console.log("tipMap: ", tipMap); 
    }
    catch(err){
        console.log("ERRR:"+err);
    }
    
    dailyTipSource = tipMap.graphicImage
    if (dailyTipSource) {
        tipSource = `./tip-images/${tipMap.id}.png`;
        dailyTipText = tipMap.tipText;
    } else {
        tipSource = `./tip-images/generic_tip_image.jpg`;
        dailyTipText = tipMap.tipText;
        tipMap.graphicTitle = tipMap.subCategory;
    }

    // if ('speechSynthesis' in window) {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = dailyTipText;
    //     window.speechSynthesis.speak(msg);
    // } else {
    //     console.log("Speech Synthesis Unavailable");
    // }
} else {
    tipSource = `./tip-images/generic_tip_image.jpg`;
    tipMap.tipText = "Select a category from the below options to see a tip.";
    tipMap.graphicTitle = "Create your own Kindspace.";
}
    document.getElementById('tip_image').src = tipSource;  
    document.getElementById('tip_image').alt = tipMap.tipText;
    document.getElementById('tip_image').title = tipMap.graphicTitle; 
};
