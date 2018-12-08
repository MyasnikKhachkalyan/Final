import React from "react";

class About extends React.Component{
    render(){
        return(
            <div>



                <div className="team">
                    <h1>Our Team</h1>


                    <div className="row1">

                    <div className="member">
                        <img src="team/lil.jpg" width={200} height={200}/>
                        <div className="memberdesc"> <p>Lilit Khachatryan</p>
                            <p><a href="https://www.facebook.com/lilitkhachatryan11" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="mailto:lilit_khachatryan2@edu.aua.am" target="_top"><i className="far fa-envelope"></i></a>
                                <a href="tel:+37494336317" target="_top"><i className="fas fa-phone"></i></a>
                            </p>
                        </div>
                        </div>


                        <div className="member">
                            <img src="team/myas.jpg" width={200} height={200}/>
                            <div className="memberdesc"> <p>Myasnik Khachkalyan</p>
                                <p><a href="https://www.facebook.com/myasnik.khachkalyan" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="mailto:myasnik_khachkalyan@edu.aua.am" target="_top"><i className="far fa-envelope"></i></a>
                                    <a href="tel:+37494070540" target="_top"><i className="fas fa-phone"></i></a>
                                </p>
                            </div>
                        </div>

                        <div className="member">
                            <img src="team/ani.jpg" width={200} height={200}/>
                    <div className="memberdesc">
                        <p>Ani Ivanyan</p>
                    <p><a href="https://www.facebook.com/ani.ivanyan.77" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="mailto:ani_ivanyan@edu.aua.am" target="_top"><i className="far fa-envelope"></i></a>
                        <a href="tel:+98274455" target="_top"><i className="fas fa-phone"></i></a>
                    </p>
                    </div>
                        </div>


                        </div>


                    <div className="row2">
                        <div className="member">
                            <img src="team/susie.jpg" width={200} height={200}/>
                            <div className="memberdesc"> <p>Susie Avagyan</p>
                                <p><a href="https://www.facebook.com/susi.avagyan" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="mailto:susanna_avagyan@edu.aua.am" target="_top"><i className="far fa-envelope"></i></a>
                                    <a href="tel:+77311416" target="_top"><i className="fas fa-phone"></i></a>
                                </p>
                            </div>
                        </div>

                        <div className="member">
                            <img src="team/petros.jpg" width={200} height={200}/>
                            <div className="memberdesc"> <p>Petros Mkheyan</p>
                                <p><a href="https://www.facebook.com/mkheyan" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="mailto:petros_mkheyan@edu.aua.am" target="_top"><i className="far fa-envelope"></i></a>
                                    <a href="tel:+55844743" target="_top"><i className="fas fa-phone"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>



                        {/*<div className="member">*/}
                            {/*<img src="team/narek.jpg" width={200} height={200}/>*/}
                            {/*<div className="memberdesc"> Lilit Khachatryan </div>*/}
                        {/*</div>*/}



                    </div>
                    </div>





        )
    }
}

export default About