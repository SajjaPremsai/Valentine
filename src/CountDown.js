import { useEffect, useState } from 'react';

function CountDown() {
    const [countdown, setCountdown] = useState("");
    const current = new Date();

    useEffect(() => {
        const valentineWeekEnd = new Date(current.getFullYear(), 1, 7); 

        const interval = setInterval(() => {
            const diffTime = valentineWeekEnd - current;
            if (diffTime <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
                setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="ValentineContainer">
            <img src="https://media1.tenor.com/m/bOm0EPVdsJIAAAAC/chuchu-valentines.gif" width={220} height={200} alt="" />
            {countdown && <h1>{countdown}</h1>}
            <span style={{ marginBottom: "50px" }}></span>
        </div>
    );
}

export default CountDown;
