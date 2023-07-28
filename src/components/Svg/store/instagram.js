const SVG = ({width= 100, height= width, onClickCallback})=>{
    const handleOnClick = (e)=>{
        return onClickCallback();
    }  
    return (
        <svg 
            width={width} 
            height={height}
            onClick={onClickCallback && handleOnClick}
            viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <style>
                    {`
                    .cls1{ fill : url(#radial-gradient);}
                    .cls2{ fill: #fff;}
                    `}
                </style>
                <radialGradient cx="-578.95" cy="-837.6" gradientTransform="translate(499.5 629.5) scale(0.75)" gradientUnits="userSpaceOnUse" id="radial-gradient" r="197.06"><stop offset="0" stopColor="#f9ed32"/><stop offset="0.36" stopColor="#ee2a7b"/><stop offset="0.44" stopColor="#d22a8a"/><stop offset="0.6" stopColor="#8b2ab2"/><stop offset="0.83" stopColor="#1b2af0"/><stop offset="0.88" stopColor="#002aff"/></radialGradient>
            </defs>
            <title/><g data-name="3-instagram" id="_3-instagram"><rect className="cls1" height="64" rx="11.2" ry="11.2" transform="translate(64 64) rotate(180)" width="64"/><path className="cls2" d="M44,56H20A12,12,0,0,1,8,44V20A12,12,0,0,1,20,8H44A12,12,0,0,1,56,20V44A12,12,0,0,1,44,56ZM20,12.8A7.21,7.21,0,0,0,12.8,20V44A7.21,7.21,0,0,0,20,51.2H44A7.21,7.21,0,0,0,51.2,44V20A7.21,7.21,0,0,0,44,12.8Z"/><path className="cls2" d="M32,45.6A13.6,13.6,0,1,1,45.6,32,13.61,13.61,0,0,1,32,45.6Zm0-22.4A8.8,8.8,0,1,0,40.8,32,8.81,8.81,0,0,0,32,23.2Z"/><circle className="cls2" cx="45.6" cy="19.2" r="2.4"/></g>
        </svg>
    );
}
export default SVG;