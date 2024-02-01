// import { Outlet } from "react-router-dom";

function User(){

    const homeContainerStyle = {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
    const backgroundColor = {
      backgroundColor: 'yellow'
  
  
    };
    const backgroundImageStyle = {
      backgroundImage: 'url("https://source.unsplash.com/EUJI8RyKSZI")', // Updated with the Unsplash image URL
      backgroundSize: 'cover', // Cover the entire background
      backgroundPosition: 'center',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      height: '100vh', // Ensure the image covers the entire viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return(
      <>
      <h1 style={backgroundImageStyle} >This is user Component</h1>
      <p style={backgroundColor}>Welcome to user site</p>
      <p style={homeContainerStyle}>This is user profile page</p>
      </>
    )
  }
  // export function Orders(){
  //   return(
  //     <>
  //     <h1>This is orders Component</h1>
  //     <Outlet/>
  //     </>
  //   )
  // }
  // export function Profile(){
  //   return(
  //     <>
  //     <h1>
  //       This is profile component 
  //     </h1>
  //     <Outlet/>
  //     </>
  //   )
  // }
  export default User