
const Info = () => {
  return <div className='container-info'>
      <div className='info'>
      <div>
          <div className='phone-email'>
          <img src="./assets/EmailPhone.svg" alt="" />
          <p className='info-header'>Contact Anna</p>
          </div>
          <p className='info-sub'>annaanne@qliro.com</p>
          <p className='info-sub'>+46721234567</p>
      </div>
      <div>
          <div className='shipping'>
          <img src="./assets/Shipping.svg" alt="" />
          <p className='info-header'>Shipping adress</p>
          </div>
          <p className='info-sub'>Qlirovägen 123</p>
          <p className='info-sub'>12345 Stockholm, Sweden</p>
      </div>
      <div>
         <div className='shipping'>
         <img src="./assets/Invoice.svg" alt="" />
          <p className='info-header'>Invoice Address</p>
          </div>
          <p className='info-sub'>Qlirovägen 123</p>
          <p className='info-sub'>12345 Stockholm, Sweden</p>
      </div>
      </div>
  </div>;
};

export default Info;
