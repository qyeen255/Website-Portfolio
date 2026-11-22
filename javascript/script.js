const achievements={ //create object
    scout:{
        title:"King Scout Award",
        image:"images/king-scout.jpg",
        description:"I achieved the highest rank in scouting. I also getting an Extracurricular Achievement Award in my secondary school."
    },

    camp:{
        title:"Camp Organizer",
        image:"images/organiser.jpg",
        description:"I had an opportunity to organized and participated in school camping activities."
    },

    java:{
        title:"Oracle Java",
        image:"images/oracle.jpg",
        description:"I completed Oracle Academy courses which is about Object-Oriented Programming that using Java Language."
    }
};

function openAchievement(id){ 
    const achievement = achievements[id];

    if(!achievement){
        console.error("Achievement not found:",id);
        return;
    }

    document.getElementById("modal-title").textContent=
    achievement.title;

    document.getElementById("modal-image").src=
    achievement.image;

    document.getElementById("modal-description").textContent=
    achievement.description;

    const modal=document.getElementById("achievement-modal");//window

    modal.classList.add("active"); //active is class name
    modal.style.display="flex"; //display the window
}

function closeAchievement(){
    const modal=document.getElementById("achievement-modal");

    modal.classList.remove("active"); //remove active class
    modal.style.display="none"; //close the window
}

