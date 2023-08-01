import { useCallback, useEffect, useState } from "react";

type WindowSizeType = {
    width: number,
    height: number,
};

const useWindowSize = () => {
    const [ windowSize, setWindowSize ] = useState<WindowSizeType>({ width : 0, height : 0 });

    const handleReSizer = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleReSizer);
        handleReSizer();
        return () => window.removeEventListener('resize', handleReSizer);
    }, []);

    return windowSize;
};

export default useWindowSize;