
import './App.scss';
import Header from './components/Header';
import Info from './components/Info';
import Table from './components/Table';
import { useState , useEffect } from "react"
import ReactPaginate from "react-paginate"



function App() {

  const [order, setOrder] = useState([]);
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch ("./data.json");
      const data = await res.json();
      setOrder(data.slice(0,50));
    }
   fetchOrders();
  }, []);

  const orderPerPage = 5;
  const pagesVisited = pageNumber * orderPerPage;

  const displayOrders = order.slice(pagesVisited,pagesVisited + orderPerPage).map(element =>{
    return(
      <tr className='table-data'>
      <td className='status'>
      <div id='status' className={element.status}><p>{element.status}</p></div>
      </td>
      <td className='corner-down-right'>
      <td style={{color :"#0A8F73"}}>{element.ordernumber}</td>
      <img  src="./assets/corner-down-right.svg" alt="" />
      </td>
      <td>{element.created}</td>
      <td className='img-country'>
      <img  src={element.country} alt="cardtype" />
      <td>{element.store}</td>
      </td>
      <td>
      <td className='paymentmethod'>
      <img  className={element.cardtypesize} src={element.cardtype} alt="cardtype" />
      <td>  {element.paymentmethod}</td>
      </td>
      </td>
      <td>
      <td className='payment-status'><div className={element.paymentstatus}></div>{element.paymentstatus}</td></td>
      <td  className='amount'>{element.amount} kr</td>
    </tr>
    );
  });

const pageCount = Math.ceil(order.length / orderPerPage);

const changePage = ({selected}) => {
  setPageNumber(selected)
};

 return (
    <div className="App">
      
    <Header/>
    <Info/>
    <Table displayOrders={displayOrders} />
    <ReactPaginate
    previousLabel={"Back"}
    NextLabel={"Next"}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName="paginate"
    previousLinkClassName="back"
    nextLinkClassName="next"
    activeLinkClassName="paginateActive"
    />
    </div>
  );
}

export default App;
