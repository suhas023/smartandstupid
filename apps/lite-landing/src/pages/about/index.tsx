import { useEffect, useState } from "preact/hooks";
import style from "./style.module.css";

const About = () => {
    const [s, ss] = useState(0);
    useEffect(() => {
        setInterval(() => { ss(s => s + 1)  }, 1000)
    }, []);
    return <div className={style.about}>about {s}</div>
}

export default About;
