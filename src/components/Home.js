import React from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ImageGrid from "./ImageGrid";

function Home(){
    return(
        <div className="body">
        <Header />
        <ImageGrid />
        <Footer />
        </div>
    )
}

export default Home;