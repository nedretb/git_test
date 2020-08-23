let trail  = [];
let x = window.requestAnimationFrame(drawDots);
let currentDot = 0;



function drawDots(){
    for (let i = 0; i < 20; i++){
        let node = document.createElement('div');
        node.className = "trail";
        document.body.appendChild(node);
        trail.push(node);
    }

    window.addEventListener("mousemove", event =>{
        let dot = trail[currentDot];
        dot.style.left = (event.pageX - 3) + "px";
        dot.style.top = (event.pageY - 3) + "px";
        currentDot = (currentDot + 1) % trail.length;        
    });
    
    
}




