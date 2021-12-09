import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection";
import Shop_Data from './Shop_Data.jsx'
import './shopstyle.css'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
           collections:Shop_Data,
        }
    }
        
        render(){
        const {collections}=this.state;
         
             return(
                <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                  <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
              </div>
             
               
             )
         }
    }

export default ShopPage