

const UpdateCoffee = () => {
    return (
        <div>
            <h1>update coffee</h1>
            <form>
                <div className="flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Available Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;