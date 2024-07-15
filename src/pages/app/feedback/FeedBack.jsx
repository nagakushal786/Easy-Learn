import React, { useState } from 'react';
import styles from './FeedBack.module.css';

function Feedback() {
    const [rating, setRating] = useState(0);
    const [opinion, setOpinion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted\nRating: ${rating}\nOpinion: ${opinion}`);
        setRating(0);
        setOpinion("");
    };

    return (
        <div className={styles.feedbackContainer}>
            <h2 className={styles.title}>Feedback for Easy Learn</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Rating:
                    <select value={rating} onChange={e => setRating(e.target.value)} className={styles.select}>
                        <option value="0">Select Rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </label>
                <label>
                    Your Opinion:
                    <textarea
                        value={opinion}
                        onChange={e => setOpinion(e.target.value)}
                        className={styles.textarea}
                        placeholder="Type your feedback here..."
                    />
                </label>
                <button type="submit" className={styles.submitButton}>Submit Feedback</button>
            </form>
        </div>
    );
}

export default Feedback;