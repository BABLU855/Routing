
function About() {
    const aboutContainerStyle = {
      backgroundColor: '#e6f7ff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
  
    const headingStyle = {
      color: '#4CAF50',
      textAlign: 'center',
    };
  
    return (
      <>
        <div style={aboutContainerStyle}>
          <h1 style={headingStyle}>This is About Component</h1>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>Learn more about our awesome website!</p>
        </div>
      </>
    );
  }
  
  export default About;

// function About(){
//     return(
//         <h1>This is About Component</h1>
//     )
// }
// export default About