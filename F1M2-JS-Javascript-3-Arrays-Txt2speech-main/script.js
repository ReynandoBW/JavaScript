    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index1 = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let index4 = randomizer(arrayLength);
        let index5 = randomizer(arrayLength);
        let woord1 = first[index1];
        let woord2 = second[index2];
        let woord3 = third[index3];
        let woord4 = fourth[index4];
        let woord5 = fifth[index5];
        let outputString = woord1 + " " + woord2 + " " + woord3 + " " + woord4 + " " + woord5;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(4);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const first = ["never", "yeet", "bring", "gotta", "two"];
    const second = ["gonna", "kobi", "me", "catch", "bro's"];
    const third = ["give", "ni-chan", "a", "them", "chilling"];
    const fourth = ["you", "nani", "dream", "all", "in a"];
    const fifth = ["up", "soka", " bombombombom ", "Pokemon", "hottub"];


    let plaatjes = ["https://cdn.pixabay.com/photo/2018/07/09/17/44/baby-elephant-3526681__340.png", "https://www.how-to-draw-funny-cartoons.com/images/cartoon-baby-007.jpg", "https://thumbs.dreamstime.com/b/smiling-heart-cartoon-open-arms-nice-image-all-projects-love-representing-version-its-suggest-idea-40930153.jpg", "https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-art-observer.jpg?quality=80"]
    let arrayLength = first.length;
