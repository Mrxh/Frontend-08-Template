import {createElement} from './framework.js'
import Carousel from './carousel.js'
import {Button} from './Button'
import {List} from './List'

// let d = [
//     "./static/01.jpg",
//     "./static/02.jpg",
//     "./static/03.jpg",
//     "./static/04.jpg",
//     "./static/05.jpg",
//     "./static/06.jpg"
// ]

let d = [
    {
        img:"./static/01.jpg",
        url:'http://www.baidu.com',
        title:'01'
    },
    {
        img:"./static/02.jpg",
        url:'http://www.baidu.com',
        title:'02'
    },
    {
        img:"./static/03.jpg",
        url:'http://www.baidu.com',
        title:'03'
    },
    {
        img:"./static/04.jpg",
        url:'http://www.baidu.com',
        title:'04'
    },
    {
        img:"./static/05.jpg",
        url:'http://www.baidu.com',
        title:'05'
    },
    {
        img:"./static/06.jpg",
        url:'http://www.baidu.com',
        title:'06'
    }
]

// let dom = <Carousel src={d}
//     onChange={event => console.log(event.detail.position)}
//     onClick={event => window.location.href = event.detail.data.url}
//         />
// let dom = <Button>content</Button>

let dom = <List data={d}>
    {(record) =>
        <div>
        <img src={record.img} />
        <a href={record.url}>{record.title}</a>
        </div>
    }
</List>

dom.mountTo(document.body);