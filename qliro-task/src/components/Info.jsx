import React from 'react';



const Info = () => {
  return <div className='container-info'>
      <div className='info'>
      <div>
          <div className='phone-email'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.04 0C7.74692 0 8.32 0.573076 8.32 1.28V6.4H14.72C15.4269 6.4 16 6.97308 16 7.68V14.72C16 15.4269 15.4269 16 14.72 16H4.48C3.77308 16 3.2 15.4269 3.2 14.72V12.8H1.28C0.573078 12.8 0 12.2269 0 11.52V1.28C0 0.573076 0.573078 0 1.28 0H7.04ZM3.2 10.24H1.28V2.56H7.04V6.4H4.48C3.77308 6.4 3.2 6.97308 3.2 7.68V10.24ZM9.6 11.904L14.72 7.68H4.48L9.6 11.904Z" fill="#222222"/>
          </svg>
          <p className='info-header'>Contact Anna</p>
          </div>
          <p className='info-sub'>annaanne@qliro.com</p>
          <p className='info-sub'>+46721234567</p>
      </div>
      <div>
          <div className='shipping'>
          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 0H1.68C0.752165 0 0 0.764102 0 1.70667V11.0933H1.26C1.26 9.44384 2.57628 8.10667 4.2 8.10667C5.82372 8.10667 7.14 9.44384 7.14 11.0933H9.66C9.66 9.44384 10.9763 8.10667 12.6 8.10667C14.2237 8.10667 15.54 9.44384 15.54 11.0933H16.8V6.4L13.86 3.41333H11.76V0ZM4.2 9.38667C3.27216 9.38667 2.52 10.1508 2.52 11.0933C2.52 12.0359 3.27216 12.8 4.2 12.8C5.12783 12.8 5.88 12.0359 5.88 11.0933C5.88 10.1508 5.12783 9.38667 4.2 9.38667ZM10.92 11.0933C10.92 10.1508 11.6722 9.38667 12.6 9.38667C13.5278 9.38667 14.28 10.1508 14.28 11.0933C14.28 12.0359 13.5278 12.8 12.6 12.8C11.6722 12.8 10.92 12.0359 10.92 11.0933ZM11.76 4.52342V6.4H15.12L13.2732 4.52342H11.76Z" fill="#222222"/>
          </svg>
          <p className='info-header'>Shipping adress</p>
          </div>
          <p className='info-sub'>Qlirovägen 123</p>
          <p className='info-sub'>12345 Stockholm, Sweden</p>
      </div>
      <div>
         <div className='shipping'>
         <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M11.9259 0.00994501C11.9087 0.00994501 11.892 0.0104253 11.8747 0.0109057H1.12498C0.532105 -0.0169524 0.0287107 0.443186 0.000957024 1.03877C0.000478512 1.05606 0 1.07287 0 1.09017V16.6484L1.44989 15.2935C1.69393 15.0816 2.05569 15.0816 2.29973 15.2935L4.1999 17L6.07471 15.2935C6.32258 15.0917 6.67715 15.0917 6.92454 15.2935L8.79935 17L10.6995 15.2935C10.9436 15.0816 11.3053 15.0816 11.5494 15.2935L12.9993 16.6484V1.09017C13.0007 0.494099 12.5198 0.0104253 11.9259 0.00994501ZM3.39983 3.77511H6.59963C6.80683 3.77511 6.97479 3.94369 6.97479 4.15167C6.97479 4.35964 6.80683 4.52823 6.59963 4.52823H3.39983C3.19263 4.52823 3.02467 4.35964 3.02467 4.15167C3.02515 3.94369 3.19311 3.77511 3.39983 3.77511ZM9.5999 11.0523H3.39983C3.19263 11.0523 3.02467 10.8837 3.02467 10.6757C3.02467 10.4678 3.19263 10.2992 3.39983 10.2992H9.5999C9.8071 10.2992 9.97506 10.4678 9.97506 10.6757C9.97506 10.8837 9.8071 11.0523 9.5999 11.0523ZM9.5999 7.79003H3.39983C3.19263 7.79003 3.02467 7.62144 3.02467 7.41346C3.02467 7.20549 3.19263 7.0369 3.39983 7.0369H9.5999C9.8071 7.0369 9.97506 7.20549 9.97506 7.41346C9.97506 7.62144 9.8071 7.79003 9.5999 7.79003Z" fill="#222222"/>
          </svg>
          <p className='info-header'>Invoice Address</p>
          </div>
          <p className='info-sub'>Qlirovägen 123</p>
          <p className='info-sub'>12345 Stockholm, Sweden</p>
      </div>
      </div>
  </div>;
};

export default Info;