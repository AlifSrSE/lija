/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-img pb-0" style={{backgroundImage: "url('nft/img/space.jpg')"}} data-scroll-index="5">
            <div className="container cal-action">
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <div className="text md-mb50">
                                <h2>Future of SME finance <br/> is here.</h2>
                                <p>Sign up for early access to flexible financing designed to fuel your <br/> business growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 valign d-flex justify-content-end">
                        <div>
                            <Link href="/">
                                <a className="butn butn-md bg-light text-dark radius-30">
                                    <span className="text slide-up">Early Access</span>
                                    <span className="text slide-down">Join Now</span>
                                </a>
                            </Link>
                            <br className="md-hide"/>
                            <Link href="/">
                                <a className="butn butn-md radius-30 bord-white">
                                    <span className="text slide-up">Subscribe</span>
                                    <span className="text slide-down">our newsletter</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-footer pt-40 pb-40">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="horizontal-link fz-13">
                                <ul className="rest">
                                    <li className="mr-30">
                                        <a href="#0">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="#0">Terms of service</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyrights d-flex justify-content-end">
                                <p className="fz-13">© 2025 Ajil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer