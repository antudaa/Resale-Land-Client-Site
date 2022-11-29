import React, { useEffect } from 'react';

const DynamicRouteName = (title) => {
    useEffect( () => {
        document.title = `${title}-Resale Land`;
    }, [title]);
};

export default DynamicRouteName;