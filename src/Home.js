
function Home() {
    const homeContainerStyle = {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
    const backgroundImageStyle = {
      backgroundImage: 'url("https://images.unsplash.com/photo-1682685797818-c9dc151d241e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      height: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const headingStyle = {
      color: '#007bff',
      textAlign: 'center',
    };
  
    return (
      <>
        <div style={homeContainerStyle}>
          <h1 style={headingStyle}>This is Home Component</h1>
          <p style={backgroundImageStyle}></p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>Welcome to our awesome website!</p>
        </div>
      </>
    );
  }
  
  export default Home;
// function Home(){
//     return(
//         <h1>This is Home Component</h1>
//     )
// }
// export default Home