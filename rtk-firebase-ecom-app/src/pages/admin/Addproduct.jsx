import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Addproduct = () => {
  const [proname, setProname] = useState("");
  const [desc, setDesc] = useState("");
  //   const [cat, setCat] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [stock, setStock] = useState(0);
  const [imgUrl, setImgUrl] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    function imageUpload() {
      if (img === null) return;
      const imageRef = ref(storage, `images/${img.name + "--" + v4()}`);
      uploadBytes(imageRef, img).then((res) => {
        alert("image uploaded successfully");
        console.log(res);
      });
    }
    imageUpload();
    // Add a new document in collection "cities"
    const addProduct = await addDoc(collection(db, "products"), {
      proname,
      desc,
      price,
      color,
      size,
      stock,
      timeStamp: serverTimestamp(),
    });
    toast.success("Product Added Successfully");
    console.log(addProduct);

    console.log(proname);
  };
  return (
    <div className="w-100 text-left text-white ">
      <form className="w-50 mx-auto my-5 p-4 bg-secondary rounded">
        <div className="mb-4">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            value={proname}
            onChange={(e) => setProname(e.target.value)}
          />
        </div>
        {/* <div className="mb-4">
          <label className="form-label">Category</label>
          <select
            className="form-select  mb-4"
            aria-label=".form-select-lg example"
          >
            <option selected disabled>
              Choose Category
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Kids">Kids</option>
          </select>
        </div> */}

        <div className="mb-4">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id=""
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="formFile" className="form-label">
            Image
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Color
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Enter Color Of Product"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Size
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Enter Size Of Product"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Availavle Stocks
          </label>
          <input
            type="number"
            className="form-control"
            id=""
            placeholder="Enter Availabel Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mt-3 fs-4 fw-bold "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addproduct;
