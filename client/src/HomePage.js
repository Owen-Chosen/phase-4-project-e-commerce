
function HomePage({handleClick}) {
    return (
      <div>
        <center>
            <button id='Admin' onClick={handleClick}>Admininstrator</button>
            <button id='Customer' onClick={handleClick}>Customer</button>
        </center>
      </div>
    );
  }
  
  export default HomePage;