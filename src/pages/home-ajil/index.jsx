/* eslint-disable @next/next/no-css-tags */
import {useEffect} from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Header from '../../components/NFTs/Header';
import Features from '../../components/NFTs/Features';
import Explore from '../../components/NFTs/Explore';
import About from '../../components/NFTs/About';
import Items from '../../components/NFTs/Items';
import Collection from '../../components/NFTs/Collection';
import Creators from '../../components/NFTs/Creators';
import Footer from '../../components/Footers/NFTFooter';
import Clients from "../../components/Mobile-App/Clients";
import Block from "../../components/Mobile-App/Block";
import IntroOutBox from "../../components/Main/IntroOut";
import Services from "../../components/Main/Services2";
import Hero from "../../components/Corporate/Hero2";
import Header2 from '../../components/Corporate/Header2';
import Process from "../../components/Main/Process2";
import Portfolio from "../../components/Freelancer/Portfolio";

const HomeNFTMarketplace = () => {
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
                <Header/>
                {/*<Header2 />*/}
                {/*<Clients />*/}
                {/*<Services />*/}
                <Portfolio />
                <Hero />

                {/*<Block />*/}
                <Footer/>
            </AppLayout>
        </>
    )
}

export default HomeNFTMarketplace;