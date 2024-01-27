import { useEffect, useRef, useState } from "preact/hooks";
import style from "./style.module.css";

const Home = () => {
    const [M, setm] = useState(false);
    const ref = useRef<any>();
    useEffect(() => {
        import("../../components/button").then(m => {setm(true); ref.current = m.default});
    }, []);
    const C = ref.current;
    return <div className={style.home}>homex <div> { M ? <C /> : null }  </div> </div>
}

export default Home;
