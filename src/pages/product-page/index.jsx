/* eslint-disable @next/next/no-css-tags */
import {useEffect} from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Header from '../../components/Mobile-App/Header';
import Clients from '../../components/Mobile-App/Clients';
import Block from '../../components/Mobile-App/Block';
import Services from "../../components/Main/Services2";
import Block2 from '../../components/Mobile-App/Block2';
import Testimonials from '../../components/Mobile-App/Testimonials';
import Pricing from '../../components/Mobile-App/Pricing';
import Footer from '../../components/Footers/NFTFooter';
import About from "../../components/NFTs/About";

const HomeMobileApp = () => {
    useEffect(() => {
        document.body.classList.add('nft-market');

        const removeClasses = [
            'index-bus1', 'index-corporate',
            'index-restaurant', 'index-freelancer',
            'cr-agency', 'mobile-app', 'gr-orange-bg',
            'land-demo2', 'index-main', 'index-arch'
        ];

        document.body.classList.remove(...removeClasses);
    }, []);

    const nav_links = [
        {
            name: "Product",
            href: "/product-page",
        },
        {
            name: "Segment",
            href: "#0",
            sub: [
                {name: "Restaurant", href: "#"},
                {name: "Retail", href: "#"},
                {name: "Clinic", href: "#"},
                {name: "Beauty Salon", href: "#"},
                {name: "Ecommerce", href: "#"},
            ]
        },
        {
            name: "Company",
            href: "#0",
            sub: [
                {name: "About Us", href: "#"},
                {name: "Contact", href: "#"}
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Ajil - Unlock Your Business Capital. Faster.</title>
            </Head>

            <AppLayout type="nft-market" links={nav_links}>
                <About />
                <Services />
                {/*<Block/>*/}
                <Block2/>
                <Pricing/>
                <Footer />
            </AppLayout>
        </>
    )
}

export default HomeMobileApp;