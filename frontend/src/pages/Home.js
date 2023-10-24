
export default function Home({ className, width, height, video, auto }) {
    return (
        <video className={className} width={width} height={height} autoPlay loop>
            <source src={video} type="video/mp4" />
        </video>
    )
}
