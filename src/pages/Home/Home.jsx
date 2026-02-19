import React, { useEffect, useState } from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Search from './Search';
import Events from './Events';
import Footer from './Footer';
import Loader from '../../components/Loader'

const Home = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="-mb-8">
            <Search/>
        </div>
        <Events/>
        <Footer/>
      
    </div>
  )
}

export default Home
