import './Menu.css'
import logo from './logo.jpg';

function Menu() {
  return (
        <> 
           <div className="container">
             <div className="logo">
             <img src={logo} alt="Logo" />;
             </div>
             <ul>
               <li>
                 <a href='Home'>Home</a>
                 <a href='Home'>Product</a>
                 <a href='Home'>SHoping</a>
                 <a href='Home'>Zoddal</a>
                 <a href='Home'>Money</a>


               </li>
             </ul>
               
              

           </div>
        </>
  );
}

export default Menu;