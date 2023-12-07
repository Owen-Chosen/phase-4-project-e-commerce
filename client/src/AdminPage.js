
function AdminPage() {
    return (
      <div className="admin-container">
        <center>
          <h1 className="admin-title-page">ADMIN PAGE</h1>
          <form>
            <h3>ADD PRODUCT</h3>
            <input type='text' placeholder="Item Name"/>
            <input type='text' placeholder="Item Price"/>
            <input list="category" placeholder="Item Name"/>
            <datalist id='category'>
              <option value='Phones and Tablets'></option>
              <option value="Electronics"></option>
              <option value="Computing"></option>
              <option value="Gaming"></option>
              <option value="Wears"></option>
            </datalist>
            <input type="text" placeholder="Image URL"/>
            <input type="submit"/>
          </form>
        </center>
      </div>
    );
  }
  
  export default AdminPage;