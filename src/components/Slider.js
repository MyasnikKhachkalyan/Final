import React from 'react';
import SwiftSlider from 'react-swift-slider';


const data =  [
    {'id':'1','src':'home-page-slider/pic1.jpg'},
    {'id':'2','src':'home-page-slider/pic2.jpg'},
    {'id':'3','src':'home-page-slider/pic4.jpg'},
    {'id':'4','src':'home-page-slider/pic5.jpg'},
    {'id':'5','src':'home-page-slider/pic6.jpg'},
    {'id':'5','src':'home-page-slider/pic7.jpg'}
];

class mySlider extends React.Component {
    render() {
        return (
            <SwiftSlider data={data} activeDotColor={'#187193'} height={600}/>
        );
    }
}

export default mySlider;