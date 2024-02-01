import React from 'react';

function Login() {
  const loginContainerStyle = {
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };
  const backgroundImageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1682685797769-481b48222adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8")', 
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
    color: '#333',
    textAlign: 'center',
  };

  return (
    <React.Fragment>
      <div style={loginContainerStyle}>
        <h1 style={headingStyle}>This is Login Page</h1>
        <p style={backgroundImageStyle}></p>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>Welcome to our website!</p>
      </div>
    </React.Fragment>
  );
}

export default Login;

// function login(){
//     return(
//         <React.Fragment>
//         <h1>This is Login Page</h1>
//         </React.Fragment>
        
//     )
// }
// export default login