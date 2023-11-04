import CardAudio from "../components/CardAudio";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
export default function ListAudioMeme() {

    return (
        <div className="container">
            <div className="row d-flex justify-content-between">
                {arr.map(ele => (
                    <CardAudio />
                ))}
            </div>
        </div>
    )
}
