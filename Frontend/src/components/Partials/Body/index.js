import React, { useState, useEffect } from 'react'

import OfferCard from '../../Shared/OfferCard'
import Loader from '../../Shared/Loader';

import { getOffers } from '../../../logic/graphql/offer';

const Body = () => {

  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(async () => {
    const offers = await getOffers();
    setOffers(offers);
    setIsLoading(false);
  }, [])

  return (
    <div className="Body">
      {isLoading
      ? <Loader text="Pobieram oferty" />
      :  offers.map( offer => {
          return <OfferCard offer={offer} key={offer._id} /> })
        
      }
    </div>
  );
}

export default Body;
