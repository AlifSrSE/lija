const process = [
    {
        "numb": "01",
        "icon": "pe-7s-mouse",
        "title": "Apply in Minutes",
        "details": "Connect your payment gateway and provide basic business information via our app. Our AI instantly gets to work."
    },
    {
        "numb": "02",
        "icon": "pe-7s-rocket",
        "title": "Get Approved & Funded",
        "details": "Receive a financing offer in hours. Once approved, the funds are disbursed directly to your supplier, keeping your cash flowing."
    },
    {
        "numb": "03",
        "icon": "pe-7s-like2",
        "title": "Grow & Repay",
        "details": "As you make sales, we collect nano-installments automatically. No late fees, no stress, just a seamless repayment process that aligns with your success."
    }
]

const Process = () => {
    return (
        <section className="process-simp pb-100">
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
                                    <h6 className="mb-10 fw-700">{item.title}</h6>
                                    <p>{item.details}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Process