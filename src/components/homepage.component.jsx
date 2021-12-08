import React from "react";
import './homepagestyle.css'
import Directory from './directory/directory.component'
import MenuItem from "./menu-item/menu-item.component";

const HomePage = () => (
  <div className='homepage'>
  <Directory/>
  <MenuItem/>

  </div>
);
export default HomePage