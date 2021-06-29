// const num= Math.floor(Math.random()*4);

// document.getElementById('css_sheet').setAttribute('href',`${num}.css`);
const num = 0;

function GetCssSheet(num) {
    if (num === 0) {
        document.getElementById('css_sheet').setAttribute('href', `./style/${num}.css`);
        const name = "Dev Daftari";
        const container = document.getElementsByClassName("container")[0];
        const heading = document.getElementById("heading");

        // Person name set

        document.getElementById("logo").innerHTML = "DEV";

        // Setting title

        document.getElementsByTagName("title")[0].innerHTML = `${name} - Personal Website`;

        // Setting footer

        document.getElementById("footer").innerHTML = `&copy 2021 ${name} - All rights reserved.`;

        // Setting h1 tag text according to the person
        const text="Hello, I'm <span>Dev</span>";
        // heading.insertAdjacentHTML(text);
        document.getElementById("heading").innerHTML = "Hello, I'm Dev";

        // Creating a div containing the profile picture of the person 

        const division = document.createElement("div");
        const image = document.createElement("img");
        image.setAttribute("src", "./style/icon2.png");
        division.appendChild(image);
        container.appendChild(division);

        // Creating description para inside flex container

        const descdiv = document.createElement("div");
        descdiv.setAttribute("id", "description");
        container.insertBefore(descdiv, container.childNodes[0]);
        descdiv.appendChild(heading);
        const para = `<h2 id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla facilis veritatis, nobis libero perferendis, obcaecati, beatae ab ipsa sunt ex? Nesciunt veritatis, adipisci dicta, expedita, temporibus aut voluptas quaerat corrupti eveniet tenetur enim similique</h2>`;
        descdiv.insertAdjacentHTML("beforeend", para);

        // Delay appearing of img and para 

        // setTimeout(function(){
        //     document.getElementById('para').style.visibility = "visible";
        //     },3000);



        // About Page


        document.querySelector("#about h1").innerHTML ="A B O U T";

        // Creating animate on scroll 
        // document.getElementsByTagName("script")[0].insertAdjacentHTML("afterend",`<script src="https://unpkg.com/aos@next/dist/aos.js">AOS.init()</script>`);
        // document.querySelector("#about h1").setAttribute("data-aos","fade-left");
        const div_about=document.createElement("div");
        div_about.setAttribute("id","abt_main");
        document.querySelector("#about").appendChild(div_about);
        const divs=`<div class="abt_div" id="box1">`+
        `<img src="./style/home.png">`+
        `<div class="img_overlay">`+
        `<div class="img_title">From`+
        `</div>`+
        `<p class="img_para">Rajkot, Gujarat</p>`+
        `<p class="img_para">ICSE</p>`+
        `<p class="img_para">27-Nov</p>`+
        `</div>`+
        `</img>`+
        `</div>`+
        `<div class="abt_div" id="box2">`+
        `<img src="./style/study.png">`+
        `<div class="img_overlay">`+
        `<div class="img_title">B.Tech '24`+
        `</div>`+
        `<p class="img_para">Electrical Enginnering</p>`+
        `<p class="img_para">from</p>`+
        `<p class="img_para">IIT Indore</p>`+
        `</div>`+
        `</img>`+
        `</div>`+
        `<div class="abt_div" id="box3">`+
        `<img src="./style/interests.png">`+
        `<div class="img_overlay">`+
        `<div class="img_title">Interests`+
        `</div>`+
        `<p class="img_para">Web Developement</p>`+
        `<p class="img_para">Designing</p>`+
        `<p class="img_para">Competitive Programming</p>`+
        `</div>`+
        `</img>`+
        `</div>`;
        document.querySelector("#about div").insertAdjacentHTML("beforeend",divs);

        // Portfolio section  

        document.querySelector("#portfolio h1").innerHTML ="P O R T F O L I O";
        


        // Contact section 

        document.querySelector("#contact h1").innerHTML ="C O N T A C T";
        
    }
    else {
        document.getElementById('css_sheet').setAttribute('href', `${num}.css`);
    }

}
GetCssSheet(num);
