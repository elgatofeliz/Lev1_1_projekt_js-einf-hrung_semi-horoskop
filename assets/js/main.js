function show() {
    let input = document.getElementById("monat").value

    document.getElementById("noInput").classList.remove("show")
    document.getElementById("outputField").classList.remove("article")
    switch (input) {
        case "Jan":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_capricorn.png')"
            document.getElementById("signName").innerHTML = "Capricorn"
            document.getElementById("horoskopText").innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
            break;
        case "Feb":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_aquarius.png')"
            document.getElementById("signName").innerHTML = "Aquarius"
            document.getElementById("horoskopText").innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            break;
        case "Mar":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_pisces.png')"
            document.getElementById("signName").innerHTML = "Pisces"
            document.getElementById("horoskopText").innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
            break;
        case "Apr":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_aries.png')"
            document.getElementById("signName").innerHTML = "Aries"
            document.getElementById("horoskopText").innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone… "
            break;
        case "May":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_taurus.png')"
            document.getElementById("signName").innerHTML = "Taurus"
            document.getElementById("horoskopText").innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
            break;
        case "Jun":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_gemini.png')"
            document.getElementById("signName").innerHTML = "Gemini"
            document.getElementById("horoskopText").innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
            break;
        case "Jul":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_cancer.png')"
            document.getElementById("signName").innerHTML = "Cancer"
            document.getElementById("horoskopText").innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…"
            break;
        case "Aug":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_leo.png')"
            document.getElementById("signName").innerHTML = "Leo"
            document.getElementById("horoskopText").innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
            break;
        case "Sep":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_virgo.png')"
            document.getElementById("signName").innerHTML = "Virgo"
            document.getElementById("horoskopText").innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
            break;
        case "Oct":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_libra.png')"
            document.getElementById("signName").innerHTML = "Libra"
            document.getElementById("horoskopText").innerHTML = "Pick a cultural event that's coming up and get some tickets for it today."
            break;
        case "Nov":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_scorpio.png')"
            document.getElementById("signName").innerHTML = "Scorpio"
            document.getElementById("horoskopText").innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
            break;
        case "Dec":
            document.getElementById("outputField").classList.add("article")
            document.getElementById("picture").style.backgroundImage = "url('assets/img/icon_sagittarius.png')"
            document.getElementById("signName").innerHTML = "Sagittarius"
            document.getElementById("horoskopText").innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
            break;
        default:
            document.getElementById("noInput").innerHTML = "This aint no month. try again"
            document.getElementById("noInput").classList.add("show")
    }
}