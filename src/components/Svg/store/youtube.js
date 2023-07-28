const SVG = ({width= 100, height= width, onClickCallback})=>{
    const handleOnClick = (e)=>{
        return onClickCallback();
    }
    return (
        <svg
            width={width} 
            height={height}
            onClick={onClickCallback && handleOnClick}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 512 512"
          >
            <g fillRule="nonzero">
              <path
                fill="#ed1f24"
                d="M501.299 132.766c-5.888-22.03-23.234-39.377-45.264-45.264-39.932-10.701-200.037-10.701-200.037-10.701s-160.105 0-200.038 10.701c-22.025 5.887-39.376 23.234-45.264 45.264C0 172.694 0 256.002 0 256.002s0 83.308 10.696 123.232c5.888 22.03 23.239 39.381 45.264 45.268 39.933 10.697 200.038 10.697 200.038 10.697s160.105 0 200.037-10.697c22.03-5.887 39.376-23.238 45.264-45.268C512 339.31 512 256.002 512 256.002s0-83.308-10.701-123.236z"
              ></path>
              <path
                fill="#fff"
                d="M204.796 332.803l133.018-76.801-133.018-76.801v153.602z"
              ></path>
            </g>
          </svg>
    );
}
export default SVG;