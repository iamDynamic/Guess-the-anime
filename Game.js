var q = document.getElementById("q")
var img = document.getElementById("img")
var img2 = document.getElementById("img")
var img3 = document.getElementById("img")
var img4 = document.getElementById("img")
var text = document.getElementById("text")
var Submit = document.getElementById("Submit")
// ----------------------------------------- \\
function getParameter(x) {
    params = window.location.href.split("?")[1].split("&");
    for (i = 0; i < params.length; i++) {
        // ["id","example"]
        e = params[i].split("=");
        if (e[0] == x) {
            return e[1];
        }
    }
}
var id = getParameter("id")

const AllData = {
    "all-levels": {
        "q": "id$ffggffryb.PNG",
        "q2": "id$6737.PNG",
        "q3": "id$567647463.PNG",
        "q4": "id$99746736467.PNG",
        "q5": "id$56578768.PNG",
        "q6": "id$666454890904.PNG",
        "q7": "id$67653fbfhd7t7.PNG",
        "q8": "id$87485hjfdd.PNG",
        "q9": "id$ohoujhgohdfojugd.PNG",
        "q10": "id$58475kkfglgfg8595.PNG",
        "q11": {
            "q1":"id$m74774747747474.PNG",
            "q2":"id$joojfdgoidf.jpeg",
            "q3":"id$98570894575.jpeg",
            "q4":"id$uiohfroihfs.PNG",
        },
        "q12":`id$vhouidhvouivhpouivfdh.PNG`,
    },
}

// l1
if (id === "B6916252-4ca7-4d75-9444-00ad1ebad46a") {
    img.src = AllData["all-levels"].q
    img.style.width = `600px`
    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") { console.log(`hints: demonslayer or hunter x hunter`); q.innerHTML = "Demon Slayer or Hunter X Hunter" }
        if (text.value == "demon slayer" || text.value == "demonslayer") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=Cfcfd852-Ae41-487c-Bf2c-64a360b6c2a7"
            }, 3000)
        }
    })
}
// l2
if (id === "Cfcfd852-Ae41-487c-Bf2c-64a360b6c2a7") {
    img.src = AllData["all-levels"].q2
    img.style.width = `600px`
    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") {
            console.log("Hunter X Hunter or detective conan or dragon ball")
            q.innerHTML = "Hunter X Hunter or detective conan or dragon ball"
        }
        if (text.value == "hunterxhunter" || text.value == "hunter x hunter") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=539677e9-085c-42a4-B5ed-2f8327199575"
            }, 6000)
        }
    })
}
// l3
if (id === "539677e9-085c-42a4-B5ed-2f8327199575") {
    img.src = AllData["all-levels"].q3
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") {
            console.log("attack on titan || naruto || dragon ball")
            q.innerHTML = "attack on titan || naruto || dragon ball"
        }
        if (text.value == "attack on titan" || text.value == "attackontitan") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=Ec03415e-E31a-4cd8-Aca8-667898d4a993"
            }, 6000)
        }
    })
}
// l4
if (id === "Ec03415e-E31a-4cd8-Aca8-667898d4a993") {
    img.src = AllData["all-levels"].q4
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") {
            console.log("my hero academy || superhero academy")
            q.innerHTML = "my hero academy || superhero academy"
        }
        if (text.value == "my hero academy" || text.value == "myheroacademy") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=9a0d38f3-42ff-4c96-9748-442d3f33354a"
            }, 6000)
        }
    })
}
// l5
if (id === `9a0d38f3-42ff-4c96-9748-442d3f33354a`) {
    img.src = AllData["all-levels"].q5
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") {
            console.log("one piece or القراصن or my hero academy")
            q.innerHTML = "one piece or القراصن or my hero academy"
        }
        if (text.value == "one piece" || text.value == "onepiece") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=D936a2c0-Cc10-49f1-8c7b-01d7220d89c3"
            }, 6000)
        }
    })
}
// l6
if (id === `D936a2c0-Cc10-49f1-8c7b-01d7220d89c3`) {
    img.src = AllData["all-levels"].q6
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") {
            console.log("Naruto }} demon slayer }} one piece")
            q.innerHTML = "Naruto or demon slayer or one piece"
        }
        if (text.value == "Naruto" || text.value == "Naruto") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=799a9ac8-8124-4455-Bc30-Be47baac5e15"
            }, 6000)
        }
    })
}
// l7
if (id === `799a9ac8-8124-4455-Bc30-Be47baac5e15`) {
    img.src = AllData["all-levels"].q7
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") {
            console.log("my hero academy || one punch man")
            q.innerHTML = "my hero academy || one punch man"
        }
        if (text.value == "one punch man" || text.value == "onepunchman") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=Cebd5b55-47fa-4b34-85be-E1e2c437fd36"
            }, 6000)
        }
    })
}
//  l8
if (id === `Cebd5b55-47fa-4b34-85be-E1e2c437fd36`) {
    img.src = AllData["all-levels"].q8
    img.style.width = `500px`

    console.log("your id is : " + id)
    Submit.addEventListener("click", () => {
        if (text.value == "Hint") {
            console.log("attack on titan || حزيمة رعد || demon slayer")
            q.innerHTML = "attack on titan || حزيمة رعد || demon slayer"
        }
        if (text.value == "demon slayer" || text.value == "demonslayer") {
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(() => {
                location.href = "/Game.html?id=0de4a808-E581-48e9-90d8-7526107b0df5"
            }, 6000)
        }
    })
}
// l9
if(id === `0de4a808-E581-48e9-90d8-7526107b0df5`){
    img.src = AllData["all-levels"].q9
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click",()=>{
        if(text.value == "Hint"){
            console.log("hunter x hunter or attack on titan or death note")
            q.innerHTML = "hunter x hunter or attack on titan or death note"
        }
        if(text.value == "hunter x hunter" || text.value =="hunterxhunter"){
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(()=>{
                location.href = "/Game.html?id=F7ecaca0-62a1-4fa7-83ca-83d2e8bd4dd2"
            },6000)
        }
    })
}
//  l10
if(id === `F7ecaca0-62a1-4fa7-83ca-83d2e8bd4dd2`){
    img.src = AllData["all-levels"].q10
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click",()=>{
        if(text.value == "Hint"){
            console.log("naruto || attack on titan ")
            q.innerHTML = "naruto || attack on titan "
        }
        if(text.value == "naruto" || text.value =="Naruto"){
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(()=>{
                location.href = "/Game.html?id=224a63ab-E760-4057-Aca3-160c8c51bb26"
            },6000)
        }
    })
}
// l11
if(id === `224a63ab-E760-4057-Aca3-160c8c51bb26`){
    img.src = AllData["all-levels"].q11.q1
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click",()=>{
        
            if(text.value == "Hint"){
                console.log("mikasa or lina or eren")
                q.innerHTML = "mikasa or lina or eren"
            }
        if(text.value == "mikasa" || text.value == "mikasa"){
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(()=>{
                location.href = `/Game.html?id=A3e1bd09-0667-4249-857f-D99f17c8dc93`
            },6000)
        }
    })
}
// l12
if(id === `A3e1bd09-0667-4249-857f-D99f17c8dc93`){

    img.src = AllData["all-levels"].q12
    img.style.width = `500px`
    console.log("your id is : " + id)
    Submit.addEventListener("click",()=>{
        if(text.value == "Hint"){
            console.log("in hunter x hunter ")
            q.innerHTML = "in bhunter x hunter"
        }
        if(text.value == "hisoka" || text.value == "joker"){
            img.remove()
            q.innerHTML = `Winer`
            setTimeout(()=>{
                location.href = "index.html"
            },6000)
        }
    })
}