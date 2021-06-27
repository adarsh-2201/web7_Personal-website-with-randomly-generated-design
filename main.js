const num= Math.floor(Math.random()*5);

// document.getElementById('css_sheet').setAttribute('href',`${num}.css`);
// const num=4

function GetCssSheet(num){
    if(num===4){
        const name="Dev Daftari";
        document.getElementById("logo").innerHTML="DEV";
        document.getElementsByTagName("title")[0].innerHTML=`${name} - Personal Website`;
        document.getElementById('css_sheet').setAttribute('href',`${num}.css`);
        document.getElementById("footer").innerHTML=`Copyright &copy ${name} - All rights reserved.`;
    }
    else{
        document.getElementById('css_sheet').setAttribute('href',`${num}.css`);
    }
    
}
GetCssSheet(num);