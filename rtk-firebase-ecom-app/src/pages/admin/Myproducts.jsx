import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../firebase";

const Myproducts = () => {
  const [imgurl, setImgUrl] = useState([]);
  const [start, setStart] = useState(true);
  useEffect(() => {
    displayData();
  }, [start]);

  const displayData = () => {
    listAll(ref(storage, "images")).then((image) => {
      console.log(image);
      image.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl([...imgurl, url]);
          console.log(imgurl);
        });
      });
    });
  };
  return (
    <div>
      <div className="card">
        <div className="card-img">
          {imgurl.map((data, index) => (
            <div key={index}>
              <img src={data} />
            </div>
          ))}
          {
            
          }
        </div>
      </div>
    </div>
  );
};

export default Myproducts;
