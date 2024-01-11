import { useState } from "preact/hooks";
import style from "./style.module.css";


export default function Button() {
    const [s, ss] = useState(0);
    return <button className={style.button} onClick={() => ss(s+1)}>button here {s}</button>
}