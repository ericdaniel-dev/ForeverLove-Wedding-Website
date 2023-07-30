import React from 'react';

function PriceCard(props) {
  return (
    <div key={props.service} id={props.service} className="flex flex-col justify-around w-full h-[300px] border-2 border-black p-3">
      <h4 className="text-lg text-center">{props.service}</h4>
      <p className="text-justify">{props.description}</p>
      <span>Price: $ {props.price}</span>
    </div>
  );
}

const CardLists = ({ services }) => {
  return (
    <div id="pricinglist" className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      {services.map((service, index) => (
        <PriceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default React.memo(CardLists);
