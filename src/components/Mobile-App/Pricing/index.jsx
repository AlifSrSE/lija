const plans = [
    {
        "plan_name": "Basic Plan",
        "plan_price": "Revenue-Linked Finance",
        "plan_description": "I don't want no chim pot burke tosser cras nice one boot fanny.",
        "plan_features": [
            {
                "title": "Online and Retail Stores",
                "available": true
            },
            {
                "title": "Service-Based Businesses",
                "available": true
            },
            {
                "title": "Restaurants & Cafes",
                "available": true
            }
        ]
    },
    {
        "plan_name": "Enterprise",
        "plan_price": "Invoice Factoring",
        "plan_description": "I don't want no chim pot burke tosser cras nice one boot fanny.",
        "plan_features": [
            {
                "title": "B2B Service Providers",
                "available": true
            },
            {
                "title": "Wholesalers & Distributors",
                "available": true
            }
        ]
    }
];

const Pricing = () => {
    return (
        <section className="price section-padding" data-scroll-index="4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="section-head text-center mb-50">
                            <h2>{`Who it's for?`}</h2>
                        </div>
                    </div>
                </div>
                <div className="price-table">
                    <div className="row">
                        {
                            plans.map((plan, idx) => (
                                <div className={`col-md-6 item ${idx !== plans.length - 1 ? 'sm-mb50' : ''}`} key={idx}>
                                    <div>
                                        <div className="round-head type">
                                            <h6 className="ls2 text-u fz-12 mb-30">{plan.plan_name} <span></span></h6>
                                        </div>

                                        <div className="content">
                                            <div className="amount">
                                                <h4 className="full-width">{plan.plan_price}</h4>
                                            </div>

                                            <div className="offer">
                                                <ul className="rest">
                                                    {
                                                        plan.plan_features.map((feature, i) => (
                                                            <li className={feature.available ? '' : 'dis'} key={i}>
                                                                <span
                                                                    className="icon gr-orange-text fas fa-check fz-12"></span> {feature.title}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="circle-blur"></div>
        </section>
    )
}

export default Pricing