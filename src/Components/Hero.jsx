import {useState, useEffect} from 'react'

function Hero(){


    // now = the latest reading from the system clock; setNow updates it
    const [now, setNow] = useState(new Date())


    const hours= String(now.getHours()).padStart(2, '0')
    const minutes= String(now.getMinutes()).padStart(2, '0')

    const month = now.toLocaleString('en-US', {month: 'short'}) . toUpperCase();
    const day = String(now.getDate()) . padStart(2, '0')
   
    useEffect(() => {
    // Every 1000ms (1 second), check the system clock for the real time
  // and save it in state. React then redraws, so the numbers stay in sync.
    const id = setInterval(() => setNow(new Date()), 1000)
   

    // When this component leaves the screen, stop the repeating check
  // so it doesn't keep running for nothing.
  return () => clearInterval(id)
}, []) //[] = set this up once

return(
<section className="border border-line bg-surface rounded-3xl p-6 sm:p-10">

        <div className="flex justify-between font-display font-black text-6xl sm:text-9xl leading-none text-accent mb-12">
            <span>{hours}</span>
                <span>{minutes}</span>
        </div>


<div className="max-w-xl">
  <p className="text-sm uppercase tracking-widest text-muted">
    Front-End Developer · React · SilverStripe
  </p>
  <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold">
    Samuel Tsigbey
  </h1>
  <p className="mt-4 text-lg text-muted">
    I build React applications, turning rough wireframes into clean, working interfaces. I’m now growing into full-stack work with PHP and SilverStripe.
  </p>
</div>


             {/*
    Hollow text: solid text has two parts you can control separately,
     the fill (the colour inside the letters) and the stroke (an outline).
    For hollow text, make the fill invisible and add a red outline.

    text-transparent                                -> makes the fill invisible
    [-webkit-text-stroke:2px_var(--color-accent)]   -> draws a 2px outline in the accent red
            */}
        <div className="flex justify-between font-display font-black text-6xl sm:text-9xl leading-none text-transparent [-webkit-text-stroke:2px_var(--color-accent)] mt-12 ">
            <span>{month}</span>
                <span>{day}</span>
        </div>
</section>
);



}

export default Hero;