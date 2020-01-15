import React, { useState } from 'react';

const ResultsCount = () => {
    // @ts-ignore
    const [count, setCount] = useState(0);

    return <div>{count}</div>;
};

export default ResultsCount;
