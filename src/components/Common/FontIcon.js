import { memo } from 'react';
import clsx from 'clsx';
const Icon = ({ fill = 0, weight = 400, grad = 0, size = 48, fontSize = size, color, className = '', logoName }) => {
    const iconStyle = {
        fontVariationSettings: `'FILL' ${fill},
        'wght' ${weight},
        'GRAD' ${grad},
        'opsz' ${size}`,
    };
    if (color) iconStyle.color = color;
    if (size) iconStyle.fontSize = fontSize;
    return (
        <span style={iconStyle} className={clsx('material-symbols-outlined', className)}>
            {logoName}
        </span>
    );
};

export default memo(Icon);
