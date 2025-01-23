import React from 'react';
import { useRouteError } from 'react-router-dom'; // Use 'react-router-dom' instead of 'react-router'

export default function Error() {
    const error = useRouteError();

    return (
        <div>
            <h1>Error {error.status || "Unknown"}</h1>
            <p>{error.statusText || "Something went wrong!"}</p>
        </div>
    );
}
