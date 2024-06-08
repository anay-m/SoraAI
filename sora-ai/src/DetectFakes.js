import React, { useState } from 'react';
import './DetectFakes.css';

const DetectFakes = () => {
    const [confidence, setConfidence] = useState(50);
    const [selection, setSelection] = useState('fake');
    const [explanation, setExplanation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ selection, confidence, explanation });
    };

    return (
        <div className="container">
            <header>
                <h1>DETECT FAKES</h1>
                <nav>
                    <a href="#about">ABOUT</a>
                    <a href="#consent">CONSENT</a>
                    <a href="#instructions">INSTRUCTIONS</a>
                </nav>
            </header>
            <main>
                <h2>AI-generated or Real?</h2>
                <p>
                    Take a look at this image and share whether you think it is generated by AI or not,
                    and how confident you are in this judgment. You have unlimited time to look at the image.
                </p>
                <div className="image-container">
                    <img src="https://detectfakes.kellogg.northwestern.edu/static/image_stimuli/7dc41886230bc3b01569d633d6519a5b.jpeg" alt="To be judged" />
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="checkbox" />
                        I have seen this before.
                    </label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="selection"
                                value="real"
                                checked={selection === 'real'}
                                onChange={() => setSelection('real')}
                            />
                            Real: This is a real image.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="selection"
                                value="fake"
                                checked={selection === 'fake'}
                                onChange={() => setSelection('fake')}
                            />
                            Fake: This is a synthetic image generated by AI.
                        </label>
                    </div>
                    <div>
                        <label>
                            Confidence: {confidence}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={confidence}
                                onChange={(e) => setConfidence(e.target.value)}
                            />
                        </label>
                    </div>
                    <p>
                        {selection === 'fake' ? (
                            <span className="highlight">Fake: This is a synthetic image produced by AI.</span>
                        ) : (
                            <span className="highlight">Real: This is a real image.</span>
                        )}
                    </p>
                    <label>
                        Optional: If you think this is AI-generated, please explain why.
                        <textarea
                            value={explanation}
                            onChange={(e) => setExplanation(e.target.value)}
                        />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                        <button type="button">Next</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default DetectFakes;
