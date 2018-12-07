import React from "react";
import Slider from './Slider';

class Home extends React.Component{
    render(){

        return(
            <div className="home-main">
                <div className="home-content">
                    <Slider/>

                </div>


                <div className="contain">
                    <div className="about-gyumri">
                    <h1>
                       Gyumri
                    </h1>
                    <p>
                        <b>Gyumri</b> is the second largest city in Armenia and the capital of Shirak Province in Northern Armenia.
                        It lies on the Shirak plateau which crosses several mountain gorges.
                        The city itself is located in the close quarters from the Aragats northern mountain ranges.
                        Gyumri concentrates a lot of mineral deposits and the whole city’s southern part is located above an artesian basin.
                        If the city’s population in 1840 numbered merely 600 people, then today 146,000 people live there.
                    </p>
                    </div>
                    <div className="about-gyumri">
                        <p>
                            In Gyumri time is measured as "before" and "after" the earthquake.
                            On December 7, 1988, an earthquake measuring a magnitude of 7.0 on the Richter scale struck northern Armenia,
                            killing at least 25,000 people and injuring hundreds of thousands more.
                            A countless number of people were left homeless as high-rise apartment blocks collapsed like dominoes.
                        </p>
                    </div>

                    <div className="video">
                        <iframe width="760" height="515" src="https://www.youtube.com/embed/IqB3XJsuXvU?start=1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                    </div>





                </div>






            </div>
        )
    }
}

export default Home