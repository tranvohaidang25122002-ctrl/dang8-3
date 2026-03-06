/* ================= GLOBAL ================= */

let nameValue = "";
let uploadedImage = "images/hoa.jpg";

const $ = (id) => document.getElementById(id);

/* ================= MUSIC ================= */

const music = $("music");

function startMusic() {

    music.play().catch(()=>{});

    let volume = 0;

    const fade = setInterval(()=>{

        if(volume < 1){
            volume += 0.03;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }

    },200);
}


/* ================= SAVE NAME ================= */

function saveName(){

    const name = $("userName").value.trim();
    const file = $("imageUpload").files[0];

    if(!name){
        $("userName").placeholder = "Nhập tên trước nha ❤️";
        $("userName").focus();
        return;
    }

    if(!file){
        alert("Bạn chưa chọn ảnh kìa 📷");
        return;
    }

    nameValue = name;

    const reader = new FileReader();

    reader.onload = (e)=>{
        uploadedImage = e.target.result;

        $("screen0").classList.add("hidden");
        $("screen2").classList.remove("hidden");
    };

    reader.readAsDataURL(file);

}


/* ================= FLOWER CHOICE ================= */

function selectFlower(num){

    $("flowerSection").classList.add("hidden");
    $("result").classList.remove("hidden");

    const wishes = [
        "",
        (n)=>`✨ chúc <span class="highlight-name">${n}</span> luôn vui vẻ 🌷`,
        (n)=>`🌈 mong <span class="highlight-name">${n}</span> mỗi ngày đều dịu dàng 🌼`,
        (n)=>`🌹 hy vọng <span class="highlight-name">${n}</span> luôn rạng rỡ 💝`
    ];

    typeWriter(
        wishes[num](nameValue),
        "wishText",
        ()=> $("btn-next").style.display="inline-flex"
    );
}


/* ================= NEXT SCREEN ================= */

function nextScreen(){

    $("screen2").classList.add("hidden");
    $("screen3").classList.remove("hidden");

    const msg = `🍀 Mong mọi điều tốt đẹp sẽ đến với <span class="highlight-name">${nameValue}</span> 💖`;

    setTimeout(()=>{

        typeWriter(msg,"final-message",()=>{

            $("btn-reveal").style.opacity = 1;
            $("btn-reveal").style.pointerEvents = "auto";

        });

    },500);

}


/* ================= SECRET SCREEN ================= */

function showMystery(){

    $("screen3").classList.add("hidden");
    $("flower-bouquet-screen").classList.remove("hidden");

    placeImageOnTulips(uploadedImage);

}


/* ================= PLACE IMAGE ================= */

function placeImageOnTulips(imgSrc){

    const overlay = $("names-overlay");

    overlay.innerHTML = "";

    const positions = [
 {top:30,left:50}
];

    positions.forEach((pos,i)=>{

        const img = document.createElement("img");

        img.src = imgSrc;
        img.className = "flower-image";

        img.style.top = pos.top + "%";
        img.style.left = pos.left + "%";

        overlay.appendChild(img);

        setTimeout(()=>{
            img.style.opacity = 1;
            img.style.transform = "translate(-50%,-50%) scale(1)";
        },200*i);

    });

}


/* ================= TYPEWRITER ================= */

function typeWriter(text,id,callback,speed=50){

    const el = $(id);

    let i = 0;

    el.innerHTML = "";

    function typing(){

        if(i < text.length){

            if(text[i] === "<"){

                const end = text.indexOf(">",i);

                el.innerHTML += text.substring(i,end+1);

                i = end + 1;

            }else{

                el.innerHTML += text[i];
                i++;

            }

            setTimeout(typing,speed);

        } else if(callback){

            callback();

        }

    }

    typing();

}


/* ================= FLOAT HEART ================= */

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "heartFloat 5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),5000);

}

setInterval(createHeart,1500);
const intro = document.getElementById("intro")
const hero = document.getElementById("hero")
const sad = document.getElementById("sad")

intro.addEventListener("click", ()=>{

    startMusic() // chạy nhạc ngay khi click bắt đầu

    hero.style.animation = "heroFly 2s forwards"
    sad.style.animation = "sadnessFly 2s forwards"

    setTimeout(()=>{
        intro.style.display="none"
    },2000)

})
const input = document.getElementById("imageUpload");
const preview = document.getElementById("previewImage");

input.addEventListener("change", function(){
const file = this.files[0];

if(file){
const reader = new FileReader();

reader.onload = function(e){
preview.src = e.target.result;
preview.style.display = "block";
}

reader.readAsDataURL(file);
}
});
setInterval(()=>{
    const flower = document.createElement("div");
    flower.innerHTML="🌷";
    flower.className="fall";

    flower.style.left=Math.random()*100+"vw";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },5000)

},800);