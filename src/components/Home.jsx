import React from 'react'
import Main from './main/Main'
import Products from './products/Products';
import ManzilMapPage from './map/MapPage';
import CertificatesGallery from './certificates/CertificatesGallery';
import SodiumNitrateInfo from './sodiumNitrateInfo/SodiumNitrateInfo';
import FuelStationCards from "../components/azs/FuelStationCards";
import VideoFromYouT from './main/VideoFromYouT';

const Home = ({ lang }) => {
    return (
        <>
            <Main lang={lang} />
            <FuelStationCards lang={lang} />
            <VideoFromYouT lang={lang} />
            <Products lang={lang} />
            <SodiumNitrateInfo lang={lang} />
            <CertificatesGallery lang={lang} />
            <ManzilMapPage lang={lang} />
        </>
    )
}

export default Home
