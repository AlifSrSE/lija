/* eslint-disable @next/next/no-img-element */
import {useState} from "react";
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const blockdata = [
    {
        "tab": 1,
        "icon": "pe-7s-graph3",
        "title": "Revenue-Linked Finance",
        "details": "Unlock Your Business's Potential. Pay as You Grow.",
        "image": "mobile-app/img/0.png",
        "closed": false
    },
    {
        "tab": 2,
        "icon": "pe-7s-mouse",
        "title": "Invoice Factoring",
        "details": "Don't Wait for Payments. Get Paid Today.",
        "image": "mobile-app/img/1.png",
        "closed": true
    }
];

const Block = () => {
    const [blockData, setBlockData] = useState(blockdata);

    const openTab = (e, tab) => {
        let element = e.target;
        if (e.target.tagName !== 'LI') element = e.target.closest('li');

        document.querySelectorAll('.item-link').forEach(item => item.classList.remove('current'));
        element.classList.add('current');

        let newBlockData = blockdata.map(item => {
            if (item.tab === tab) item.closed = false;
            else item.closed = true;

            return item;
        })

        setBlockData(newBlockData);
    }

    return (
        <section className="section-padding blck tabs sub-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 valign">
                        <div className="content md-mb50">
                            <h2>What we offer ?</h2>

                            <div className="tab-links mt-40">
                                <ul className="rest">
                                    {
                                        blockData.map((item, idx) => (
                                            <li
                                                className={`item-link ${idx !== blockData.length - 1 ? 'mb-20' : ''} ${idx == 0 ? 'current' : ''}`}
                                                data-tab={`tab-${item.tab}`}
                                                onClick={(e) => openTab(e, item.tab)}
                                                key={idx}
                                            >
                                                <div className="item flex">
                                                    <div>
                            <span className="icon fz-25">
                              <i className={`${item.icon} gr-orange-text`}></i>
                            </span>
                                                    </div>
                                                    <div className="cont">
                                                        <h6 className="mb-5 fz-16">{item.title}</h6>
                                                        <p className="fz-14">{item.details}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-2 valign">
                        <div className="full-width">
                            {
                                blockData.map((item, idx) => (
                                    <SlideDown key={idx} closed={item.closed}>
                                        <div className="tab-content current" id={`tab-${item.tab}`}>
                                            <div className="img circle">
                                                <img src={item.image} alt=""/>
                                            </div>
                                        </div>
                                    </SlideDown>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Block