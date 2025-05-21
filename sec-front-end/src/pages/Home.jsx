function Home() {

    const handleClick = (e) => {
        console.log('hello,raj', e);
    }

    return (
      <div className="page">
        <h1>Welcome to the Cricket Info App</h1>
        <p>This app helps you learn about cricket and track match scores.</p>
        ,<button onClick={handleClick}>click me</button>
      </div>
    );
  }
  
  export default Home;
  