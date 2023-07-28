import { memo } from 'react';
import { FacebookSvg, InstagramSvg, YoutubeSvg } from '../Svg';
const Container = ({ width, height }) => {
    return (
        <div className="social-container">
            <a className="social--link" href="https://www.instagram.com/" style={{ display: 'inline-block' }}>
                <InstagramSvg width={width} height={height} />
            </a>
            <a className="social--link" href="https://www.facebook.com/" style={{ display: 'inline-block' }}>
                <FacebookSvg width={width} height={height} />
            </a>
            <a className="social--link" href="https://www.youtube.com/" style={{ display: 'inline-block' }}>
                <YoutubeSvg width={width} height={height} />
            </a>
        </div>
    );
};

export default memo(Container);
