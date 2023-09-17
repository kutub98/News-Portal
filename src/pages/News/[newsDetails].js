import { useRouter } from 'next/router';
import React from 'react';

const NewsDetails = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This news details: {router.query.NewsDetails}</h1>
        </div>
    );
};

export default NewsDetails;