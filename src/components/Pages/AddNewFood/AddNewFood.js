import React, { useState } from 'react';
import './AddNewFood.css';

const AddNewFood = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [img, setImg] = useState();
    const [rating, setRating] = useState();
    const [price, setPrice] = useState();
    const [submitMessage, setSubmitMessage] = useState('');

    // Handling form submit and send the new food info to the server
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const foodInfo = { name, description, img, rating, price };

        // Post request to the server
        fetch('https://foddy-server.herokuapp.com/addfood', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(foodInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                // Set the successfull message
                if (data.insertedId) {
                    setSubmitMessage('Food added successfully.');
                    document.getElementById('add-food-form').reset();
                }
            });
    };

    return (
        <div className="add-new-food">
            {/* Page banner */}
            <div className="page-banner">
                <h1 className="section-title">Add New Food</h1>
            </div>

            {/* Food info collecting form */}
            <form id="add-food-form" onSubmit={handleFormSubmit}>
                {/* Input group consisting label and input field */}
                <p className="input-group">
                    <label htmlFor="name">Food Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </p>

                <p className="input-group">
                    <label htmlFor="food-details">Food Description</label>
                    <textarea
                        name="food-details"
                        id="food-details"
                        cols="30"
                        rows="3"
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </p>

                <p className="input-group">
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        id="rating"
                        placeholder="Rating (Out of 5)"
                        max={5}
                        step="0.01"
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </p>

                <p className="input-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        step="0.01"
                        placeholder="Price ($)"
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </p>

                <p className="input-group">
                    <label htmlFor="url">Image URL</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Type the URL here"
                        onChange={(e) => setImg(e.target.value)}
                        required
                    />
                </p>

                {/* Success message */}
                <p className="submit-message">{submitMessage}</p>

                {/* Submit button */}
                <p className="input-group-submit">
                    <button type="submit" className="place-order-btn">
                        Submit
                    </button>
                </p>
            </form>
        </div>
    );
};

export default AddNewFood;
