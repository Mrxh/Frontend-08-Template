import {createElement} from './framework.js'
import Carousel from './carousel.js'
import {TimeLine,Animation} from './animation.js'

let d = [
    "./static/01.jpg",
    "./static/02.jpg",
    "./static/03.jpg",
    "./static/04.jpg",
    "./static/05.jpg",
    "./static/06.jpg"
]

let dom = <Carousel src={d}/>

dom.mountTo(document.body);

let tl = new TimeLine();
window.tl = tl;
window.animation = new Animation({set a(v){console.log(v);}},'a',0,100,1000,null);
// tl.add(new Animation({set a(v){console.log(v);}},'a',0,100,1000,null));
tl.start();