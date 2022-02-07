
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


const pageCount = Math.ceil(order.length / orderPerPage);

const changePage = ({selected}) => {
  setPageNumber(selected)
};

 return (
    <div className="App">
      
    <Header/>
    <Info/>
    <Table 
    pagesVisited={pagesVisited}
    order={order}
    orderPerPage={orderPerPage}
     />
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
