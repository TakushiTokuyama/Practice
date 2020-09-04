import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <div class="header"></div>
        );
    }
}

class Hero extends React.Component {
    render() {
        var images = [
            { image: `${process.env.PUBLIC_URL}/images/hero_tomato_big.png` },
            { image: `${process.env.PUBLIC_URL}/images/hero_tomato_small.png` }
        ];

        var count = 0;
        setInterval(function () {
            console.log("bS");
            count++;
            if (count < 5) {
                document.getElementById('image').src = `${process.env.PUBLIC_URL}/images/hero_tomato_big.png`;
            }
            else if (count > 5 && count < 9) {

                document.getElementById('image').src = `${process.env.PUBLIC_URL}/images/hero_tomato_green.png`;
                console.log(count);
            } else if (count > 10) {
                count = 0;
            }
        }, 1000);

        return (
            <div class="resizeimage">
                <img id="image" class="big_image" src={images[0].image} alt="hero_tomato_big" />
                <img class="small_image" src={images[1].image} alt="hero_tomato_small" />
            </div>
        );
    }
}

class Nav extends React.Component {
    render() {
        return (
            <div class="nav">
                <ul>
                    <li><a href="/">NOW</a></li>
                    <li><a href="/">HOT TO</a></li>
                    <li><a href="/">ABOUT TOMATO</a></li>
                    <li><a href="/">RECIPES</a></li>
                    <li><a href="/">RESTAURANTS</a></li>
                </ul>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />
                <Nav />
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);