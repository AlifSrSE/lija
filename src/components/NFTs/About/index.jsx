/* eslint-disable @next/next/no-img-element */
import aboutData from '../../../data/nfts/about.json';

const About = () => {
    return (
        <header className="full-height valign blck-nft" data-scroll-index="0">
            <div className="background bg-img" style={{backgroundImage: "url('nft/img/pattern-bg.png')"}}></div>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="content md-mb80">
                            <h3 className="fw-700 mb-15">The Capital to Scale Your Ambition.</h3>
                            <p>Say goodbye to endless paperwork and fixed loans. Get the flexible financing you and your business deserves.</p>

                            <div className="d-flex justify-content-between stauts mt-50">
                                {
                                    aboutData.status.map((item, i) => (
                                        <div className="item" key={i}>
                                            <h5 className="fw-700">{item.number} <span
                                                className="fz-18">{item.operator}</span></h5>
                                            <span className="fz-14 fw-300 mt-10">{item.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="imgs flex">
                            <div className="img1">
                                <img src="nft/img/01.jpg" alt=""/>
                                <span className="bord"></span>
                            </div>
                            <div className="img2">
                                <img src="nft/img/02.jpg" alt=""/>
                                <span className="bord"></span>
                            </div>
                            <div className="box-text">
                                <div className="users-imgs flex valign">
                                    <div>
                                        {
                                            aboutData.users.images.map((image, i) => (
                                                <div className={`simg${i + 1}`} key={i}>
                                                    <img src={image} alt=""/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="ml-15 fz-12">
                                        <span>More Than <br/> <span
                                            className="fz-14 fw-700">{aboutData.users.number}</span></span>
                                    </div>
                                </div>
                                <p className="fz-14 text-light mt-10">{aboutData.users.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default About