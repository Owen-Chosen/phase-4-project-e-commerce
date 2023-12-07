import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

function App() {

  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState('Home')

  useEffect(() => {
    fetch('http://127.0.0.1:5555/')
    .then(res => res.json())
    .then(data => setProductsList(data))
  }, [productsList]);

  function handleClick(e){
    setCurrentPage(e.target.id)
  }

  return (
    <div>
      {currentPage === 'Home' ? <HomePage handleClick={handleClick}/>
       : currentPage === 'Admin' ? <AdminPage handleClick={handleClick} productsList={productsList}/>
        : <UserPage productsList={productsList}/>}
    </div>
  );
}

export default App;
