
import SellerSlidebar from "./sellerslidebar";

function AddProduct() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSlidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div className="row">
            <div className="card">
            <h4 className="card-header text-center"> Add Product</h4>
            <div className="card-body">
              <form>
              <div className="mb-3">
                  <label for="Category" className="form-label">
                    Category
                  </label>
                 <select className="form-control">
                    <option>Django</option>
                    <option>Python</option>
                    <option>React</option>
                 </select>
                </div>
                <div className="mb-3">
                  <label for="Title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    
                  />
                </div>
                <div className="mb-3">
                  <label for="Price" className="form-label">
                   Price
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    id="Price"
                    
                  />
                </div>
                <div className="mb-3">
                  <label for="Description" className="form-label">
                    Description
                  </label>
                  <textarea
                    
                    className="form-control"
                    row="6"
                    id="Description"
                    
                  ></textarea>
                </div>
               
                <div className="mb-3">
                <label for="ProductImg" className="form-label">Product Images</label>
                <input className="form-control" type="file" id="ProductImg" accept="image/*" onchange="previewImage(event)"/>
              </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
