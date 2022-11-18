import heart from "../pics/heart.png";
import all from "../pics/allmusic.svg";
let playlists = [
    {
        id:1,
        name:"All Songs",
        picture:all,
    },
    {
        id:2,
        name:"Favorite",
        picture:heart,
        songs:[1,2,4,6,9,15],//масив з id пісень цього плейлиста 
    },
    {
        id:3,
        name:"Playlist#1",
        picture:"https://m.media-amazon.com/images/I/51MJTfOLIrL.jpg",
        songs:[1,4,5,9,14],
    },
    {
        id:4,
        name:"Funny Songs",
        picture:"https://images.genius.com/7b1d7039091fcb788554d74ff034e9a2.1000x1000x1.jpg",
        songs:[2,3],
    },
    {
        id:5,
        name:"Playlist#2",
        picture:"https://i.scdn.co/image/ab67616d0000b273ca8a6a0c8d44c1a48e070a4e",
        songs:[4,5,7,8,11,15],
    },
    {
        id:6,
        name:"Playlist#3",
        picture:"https://imgsvr.radiocut.site/get/crop/center/200/200/cuts_logos/77/f0/77f0dea5-948d-4efc-8de1-ffefb9e4de8e.jpg",
        songs:[5,7,9,14],
    }
];

export default playlists;
