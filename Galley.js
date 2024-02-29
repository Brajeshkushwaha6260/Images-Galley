import React, { useState } from 'react';
import { useStyles } from "../components/admin/GalleyCss";

const Gallery = () => {
  var classes=useStyles()
  const [filter, setFilter] = useState('all');

  const images = [
    {p:'logo.png',category:'whats'},
    {p:'list.png',category:'camera'},
    {p:'logo.png',category:'whats'},
    {p:'list.png',category:'camera'},
    {p:'logo.png',category:'whats'},
    {p:'list.png',category:'camera'},
    {p:'logo.png',category:'whats'},
   

  ];

  const filteredImages = filter ==='all'? images : images.filter(image => image.category === filter);
  return (
    <div >
        <div className={classes.gbox}>
        {filteredImages.map((image, index) => (
          <img src={image.p} style={{width:50,height:50,display:'flex',padding:5,flexWrap:'wrap'}}/>
        ))}
        </div>
        <div className={classes.bbox}>
        <button style={{width:"33%",background:'green'}} onClick={() => setFilter('all')}>All</button>
        <button style={{width:"33%",background:'green'}} onClick={() => setFilter('camera')}>Category</button>
        <button style={{width:"33%",background:'green'}} onClick={() => setFilter('whats')}>Whats</button>
        </div>
    </div>
   
  );
};

export default Gallery
