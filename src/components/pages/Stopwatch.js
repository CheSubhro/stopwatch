import React,{useState,useEffect} from 'react'
import './stopwatch.css'

const Stopwatch = () => {

    const [time,setTime]= useState(0) // state to store time

    const [isRunning,setIsRunning] = useState(false) // state to check stopwatch running or not

    useEffect (()=>{

        let intervalId;

        if(isRunning){

            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            
            intervalId =setInterval(()=>setTime(time + 1),10)
        }

        return () => clearInterval(intervalId);
    }, [isRunning, time])


    const hours = Math.floor(time / 360000); // Hours Calculation

    const minutes = Math.floor((time % 360000) / 6000); // Minutes Calculation 

    const seconds = Math.floor((time % 6000) / 100); // Seconds Calculation

    const milliseconds = time % 100; // MiliSeconds Calculation

    const startAndStop = () =>{
        setIsRunning(!isRunning)  // Method to start and stop timer
    }

    const reset = () =>{
        setTime(0)         // Method to reset timer back to 0
    }

    return (
        <>
            <div className='stopwatch-container'>
                <p className='stopwatch-time'>
                    {hours} :{minutes.toString().padStart(2,"0")} :{seconds.toString().padStart(2,"0")} :{milliseconds.toString().padStart(2,"0")}
                </p>  
                <div className='stopwatch-buttons'>
                    <button className='stopwatch-button' onClick={startAndStop}>
                    {isRunning ? "Stop" : "Start"}
                    </button>
                    <button className='stopwatch-button' onClick={reset}>
                        Reset
                    </button>
                </div>  
            </div>
        </>
    )
}

export default Stopwatch