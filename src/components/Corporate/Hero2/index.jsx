import {SlideDown} from "react-slidedown";
import {useState} from "react";

const accordionsData = [
    {
        "id": 1,
        "title": "Lightning-Fast Decisions",
        "details": "Get credit approval in minutes, not weeks. Our AI analyzes your real-time revenue data, so you get a decision the same day.",
        "closed": false
    },
    {
        "id": 2,
        "title": "No Collateral Required",
        "details": "We believe in your business, not your assets. Secure the capital you need without tying up your personal or business collateral.",
        "closed": true
    },
    {
        "id": 3,
        "title": "Pay only when you get paid",
        "details": "Our revenue-based model means you pay a small percentage on every sale. When business is slow, your repayment adjusts. When business is booming, you pay off your loan faster.",
        "closed": true
    },
    {
        "id": 4,
        "title": "Seamless Integration",
        "details": "We work directly with your suppliers and payment gateways to create a self-contained, automated ecosystem. It's a system designed to make your life easier.",
        "closed": true
    }
];

const heroData = {
    "sub_title": "Revenue-Linked Finance",
    "text": "Revenue-linked financing provides businesses with capital in exchange for a fixed percentage of future sales. Payments flex with revenue—higher in strong months, lower when sales slow—ensuring cash flow remains manageable.",
    "features": [
        {
            "title": "Lightning-Fast Decisions",
            "details": "Get credit approval in minutes, not weeks. Our AI analyzes your real-time revenue data, so you get a decision the same day."
        },
        {
            "title": "No Collateral Required",
            "details": "We believe in your business, not your assets. Secure the capital you need without tying up your personal or business collateral."
        },
        {
            "title": "Pay only when you get paid",
            "details": "Our revenue-based model means you pay a small percentage on every sale. When business is slow, your repayment adjusts. When business is booming, you pay off your loan faster."
        },
        {
            "title": "Seamless Integration",
            "details": "We work directly with your suppliers and payment gateways to create a self-contained, automated ecosystem. It's a system designed to make your life easier."
        }
    ]
};

const process = [
    {
        "numb": "01",
        "icon": "pe-7s-mouse",
        "title": "Apply in Minutes",
        "details": "Take a selfie, our app does the rest."
    },
    {
        "numb": "02",
        "icon": "pe-7s-rocket",
        "title": "Get Approved & Funded",
        "details": "Receive a financing offer in hours, funds disbursed directly to your supplier."
    },
    {
        "numb": "03",
        "icon": "pe-7s-like2",
        "title": "Grow & Repay",
        "details": "Nano-installments automatically collected from your sales, no stress."
    }
]

const Hero = () => {
    const [accordions, setAccordions] = useState(accordionsData);

    const openAccordion = (e) => {
        document.querySelectorAll('.accordion.bord .item').forEach(accordion => accordion.classList.remove('active'))

        let item = e.target.closest('.item');
        item.classList.add('active');

        let newAccordions = accordions.map((accordion, idx) => {
            if (item.id.split('-')[1] == idx) accordion.closed = false;
            else accordion.closed = true;

            return accordion;
        });

        setAccordions(newAccordions);
    }

    return (
        <section className="hero section-padding bg-gradient position-re">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="main-text">
                            <h6 className="sub-title gr-sunrise-text">What We Do ?</h6>
                            <h3 className="fw-700 mb-15">{heroData.sub_title}</h3>
                            <p>{heroData.text}</p>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 valign">
                        <div className="accordion bord">
                            {
                                accordions.map((accordion, idx) => (
                                    <div className={`item wow fadeInUp ${idx == 0 ? 'active':''}`} id={`accordion-${idx}`} data-wow-delay={`${(idx * 0.2) + 0.1}s`} key={idx} onClick={openAccordion}>
                                        <div className="title" style={{borderBottom: 'none', background: 'none'}}>
                                            <h6 className="fz-16">{ accordion.title }</h6>
                                            <span className="ico"></span>
                                        </div>
                                        <SlideDown className="accordion-info active" closed={accordion.closed} style={{borderLeft: 'none', marginTop: 0, paddingBottom: !accordion.closed ? '10px' : 0}}>
                                            <p>{ accordion.details }</p>
                                        </SlideDown>
                                    </div>
                                ))
                            }
                        </div>
                        {/*<div className="hero-stu">*/}
                        {/*    {*/}
                        {/*        heroData.features.map((number, index) => (*/}
                        {/*            <div className={`flex ${index !== heroData.features.length - 1 ? 'mb-40' : ''}`} key={index}>*/}
                        {/*                <div className="numb mr-30 valign">*/}
                        {/*                    <h2 className="fz-40 fw-200">{index+1}</h2>*/}
                        {/*                </div>*/}
                        {/*                <div className="cont">*/}
                        {/*                    <h6 className="mb-5">{number.title}</h6>*/}
                        {/*                    <p>{number.details}</p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        ))*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <section className="process-simp section-padding pb-100">
                <div className="simple-head md-mb10 mb-80 text-center">
                    <div>
                        <h6 className="sub-head radius mb-20">
                            <span className="fz-12 ls2 text-u">Our Process</span>
                        </h6>
                    </div>
                    <h2 className="fz-40 fw-800 gr-purple-red-text inline">How It Works</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            process.map((item, idx) => (
                                <div className="col-lg-4" key={idx}>
                                    <div className={`item ${idx !== process.length - 1 ? 'md-mb50' : ''}`}>
                                        <div className="step mb-30">
                                            <div className="numb">{item.numb}</div>
                                            <span className={`icon ${item.icon} bg-gradient`}></span>
                                        </div>
                                        <h5 className="mb-10 fw-700">{item.title}</h5>
                                        <p>{item.details}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className="curve-cls top">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" viewBox="0 0 500 250" enableBackground="new 0 0 500 250" xmlSpace="preserve"
                     preserveAspectRatio="none">
                    <path fill="#292e4b"
                          d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"></path>
                </svg>
            </div>
        </section>
    )
}

export default Hero