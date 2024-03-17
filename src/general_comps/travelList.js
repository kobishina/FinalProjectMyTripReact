import React, { useState, useEffect } from 'react';

const TravelList = () => {
    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [newProductAmount, setNewProductAmount] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const storedProducts = localStorage.getItem('travelList');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
        else {

            setProducts([
                { name: 'test', amount: 10, id: 1 },
                { name: 'test', amount: 20, id: 2 }
            ]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('travelList', JSON.stringify(products));
    }, [products]);

    const handleAddProduct = () => {
        if (!newProductName || !newProductAmount) return;

        const newProduct = {
            name: newProductName,
            amount: parseInt(newProductAmount),
            id: Date.now()
        };

        setProducts([newProduct, ...products]);
        setNewProductName('');
        setNewProductAmount('');
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (

        <div className='d-flex flex-column align-items-center gap-4'>
            <h3 className="text-center mt-5 ">Travel List</h3>

            <div className="col-lg-5 col-md-4 col-sm-6 border border-1 p-3 rounded text-white">
                <label>Search:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by product name"
                    value={searchQuery}
                    onChange={handleSearch}
                />


                <label>Product name:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Product name"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />


                <label>Enter Amount:</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    value={newProductAmount}
                    onChange={(e) => setNewProductAmount(e.target.value)}
                />
                <div className="text-center mt-3">
                    <button className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
                </div>
            </div>

            <div className="col-12 d-flex flex-column gap-2 align-items-center">
                {filteredProducts.map(product => (
                    <div className='col-md-4 col-6' key={product.id}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{product.amount} - {product.name}</h5>
                                <button className="btn btn-danger float-end" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelList;
