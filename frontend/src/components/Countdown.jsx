import { useState, useEffect } from 'react';

export default function Countdown() {

    const [secs, setSecs] = useState(120);

    useEffect(() => {

        const timerInterval = setInterval(() => {
            if (secs > 0) {
                setSecs(secs - 1)
            }
        }, 1000);

        return () => clearInterval(timerInterval);

    }, [secs]);

    const formattedTime = () => {
        const minutes = Math.floor(secs / 60);
        const remaSecs = secs % 60;

        const formattedMins = String(minutes).padStart(2, '0');
        const formattedSec = String(remaSecs).padStart(2, '0');

        return `${formattedMins}:${formattedSec}`
    };

    return (
        <>
            <div className="countdown">
                <p>
                    <h1>Please wait for {formattedTime()} seconds until the loading complete 😊✌</h1>
                    {/* {secs === 0 && <p>Opening...</p>} */}
                </p>
            </div>
        </>
    )
}