export default function Image({src, alt, height, width}){

    const imageStyle = {
        height: height, 
        width: width
    }

    return (
        <div>
            <img src={src} alt={alt} style={imageStyle} />
        </div>
    )
}
