import food from '../asset/home/banner/food.svg';
import animal from '../asset/home/banner/animal.svg';
import car from '../asset/home/banner/car.svg';
import sport from '../asset/home/banner/sport.svg';
import music from '../asset/home/banner/music.svg';
import technology from '../asset/home/banner/technology.svg';
import abstract from '../asset/home/banner/abstract.svg';
import others from '../asset/home/banner/others.svg';
import technologys from '../asset/home/banner/technology.png';
import backgroundImage1 from '../asset/home/banner/car.png'
import backgroundImage2 from '../asset/home/banner/music.png'

export const bannerFilter = [
    {
        "_id": "banner-1",
        "category": "Food",
        "image": food
    },
    {
        "_id": "banner-2",
        "category": "Animal",
        "image": animal
    },
    {
        "_id": "banner-3",
        "category": "Car",
        "image": car
    },
    {
        "_id": "banner-4",
        "category": "Sports",
        "image": sport
    },
    {
        "_id": "banner-5",
        "category": "Music",
        "image": music
    },
    {
        "_id": "banner-6",
        "category": "Technology",
        "image": technology
    },
    {
        "_id": "banner-7",
        "category": "Abstract",
        "image": abstract
    },
    {
        "_id": "banner-8",
        "category": "Others",
        "image": others
    }
];

// export default bannerFilter;

export const bannerRightSlide = [
    {
        _id: "rightSlide-1",
        title: "Why I Stopped Using Multiple Monitor",
        content: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
        image: technologys
    },
    // {
    //     _id: "rightSlide-2",
    //     title: "Why I Stopped Using Multiple Monitor",
    //     content: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
    //     image: abstract
    // },
    // {
    //     _id: "rightSlide-3",
    //     title: "Why I Stopped Using Multiple Monitor",
    //     content: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
    //     image: food
    // },
];

export const bannerLeft = [
    {
        _id: "leftSlide-1",
        title: "How to Drive a Car Safely",
        content: "Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may",
        image: backgroundImage1
    },
    {
        _id: "leftSlide-1",
        title: "How to Make Dance Music",
        content: "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking",
        image: backgroundImage2
    },
];