function stars(){
    const Container=document.querySelector("body");
    for(let i=0;i<1000;i++){
        const star=document.createElement("div");
        star.className = "star";
        star.style.width="2px"
        star.style.height="2px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";

        Container.appendChild(star);
    }
}
stars();