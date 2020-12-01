var t = 0;
var c = document.querySelector("canvas");     
var $ = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
$.fillStyle = 'hsla(0,0%,0%,1)'; //hsla(hue, saturation, lightness, alpha)

window.addEventListener('resize', function() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}, false);


function draw() 
{
    $.globalCompositeOperation = 'source-over';
    $.fillStyle = 'hsla(0,0%,0%,0.1)'; //Canvas Lightness, Alpha des trainées des fusées
    $.fillRect(0, 0, c.width, c.height); //Fill canvas

    var speed, i, r;
    speed = Math.sin(t) * 1.5 * Math.PI; //Modifie la vitesse
    for (i=0; i<400; ++i) //NB de fusées, + y'a de fusées, + les premières vont vite
    {
    r = 450 * Math.sin(i * speed); //Rayon
    $.globalCompositeOperation = '';
    $.fillStyle = 'hsla(' + 50 + i + 50 +',2000%, 50%,1)'; //Colore les fusées et leurs trainées, lightness et alpha du dessin
    $.beginPath();
    $.arc(Math.sin(i) * r + (c.width / 2),  // Pour centrer
            Math.cos(i) * r + (c.height / 2), // au milieu de la page
            5, 0, Math.PI * 2); //Modifie le diamètre des fusées (ici 5) (peut faire crash des pc si diamètre=taille écran(c'est du vécu))
                                //0: début angle / 2Pi: Fin angle
    $.fill();

    }
    t += 0.000005;
    return t %= 2 * Math.PI;

};

function run() {
    window.requestAnimationFrame(run);
    draw();
}

run();