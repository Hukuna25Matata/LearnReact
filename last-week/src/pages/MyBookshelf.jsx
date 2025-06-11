function MyBookshelf() {
    const token = localStorage.getItem("token");
  
    if (!token) {
      return <p>You must log in to view this page.</p>;
    }
  
    return <h2>Your Personal Bookshelf</h2>;
  }
  
  export default MyBookshelf;
  