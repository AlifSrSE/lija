/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const portfolios = [
    {
        "class": "bx-one",
        "number": "01.",
        "title": "No paperwork",
        "details": ["Applying for a loan is as easy as taking a selfie."],
        "image": "freelancer/img/works/4.png"
    },
    {
        "class": "bx-two",
        "number": "02.",
        "title": "Flexible repayment",
        "details": ["Grow without stress, sales decide payments."],
        "image": "freelancer/img/works/5.png"
    },
    {
        "class": "bx-three",
        "number": "03.",
        "title": "Shariah compliant",
        "details": ["Halal funding for healthy businesses."],
        "image": "freelancer/img/works/2.png"
    }
];

const Portfolio = () => {
    return (
        <section className="portfolio-prsonl" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="main-text">
                            <h6 className="sub-title gr-sunrise-text">Why Ajil ?</h6>
                            <h4 className="fw-700">{`Traditional Finance Isn't Built for Today's SME Business.`}</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 valign">
                        <div className="hero-cont">
                            <p className="fw-500 fz-18 mb-10"><span className="fz-30">A</span>{`jil acts as a smart matchmaker, linking businesses to healthy financial products from trusted banks, delivering instant capital, making credit access 10X faster.`}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-50 mb-100">
                    {
                        portfolios.map((portfolio, idx) => (
                            idx * 2 % 3 === 0 ?
                                <div className="col-12" key={idx}>
                                    <div className="bg-img" style={{backgroundImage: "url('freelancer/img/lines.svg')"}}>
                                        <div className={`item ${portfolio.class} mb-30`}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="cont pb-50">
                                                        <span className="fz-60 mb-30">{portfolio.number}</span>
                                                        <h5 className="fw-600 mb-10">{portfolio.title}</h5>
                                                        <p>
                                                            {portfolio.details[0]} <br/> {portfolio.details[1]}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-flex align-items-end">
                                                    <div className="img full-width">
                                                        <img src={portfolio.image} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="col-lg-6" key={idx}>
                                    <div className="bg-img" style={{backgroundImage: "url('freelancer/img/lines.svg')"}}>
                                        <div className={`item ${portfolio.class} mb-30`}>
                                            <div className="cont flex mb-50">
                                                <div className="mr-30">
                                                    <span className="fz-40 mb-30">{portfolio.number}</span>
                                                </div>
                                                <div>
                                                    <h5 className="fw-600 mb-5"><a href="#0">{portfolio.title}</a></h5>
                                                    <p>
                                                        {portfolio.details}
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="img">
                                                <img src={portfolio.image} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio