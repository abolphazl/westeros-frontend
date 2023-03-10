import { useState } from "react"
import Link from "next/link";

export default function Insert() {
    const [imdbId, setImdbId] = useState("");
    const [disable, setDisable] = useState(false);

    const sendData = () => {
        if (imdbId == "") alert("Please first enter imdb id");
        setDisable(true)
        fetch(`/api/insert-movie/${imdbId}`)
            .then(res => res.json())
            .then(data => {
                setDisable(false);
                alert(data.message);
                setImdbId("");
            })
    }

    return (<>
        <div className="grid place-content-center min-h-screen gap-y-2">
            <input value={imdbId} onChange={(data) => { setImdbId(data.target.value) }} type="text" placeholder="IMDB ID" className="input font-bold text-center w-full" />
            <div>
                {imdbId == ""
                    ?
                    <Link href="/" className={"btn btn-warning btn-block btn-lg"}>back</Link>
                    :
                    <button onClick={sendData} className={"btn no-animation btn-lg btn-block btn-warning " + (disable == true ? "btn-disabled loading" : "")}>Insert</button>
                }
            </div>
        </div>
    </>)
}