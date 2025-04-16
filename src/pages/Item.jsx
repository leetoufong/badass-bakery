import { useEffect } from "react";
import { Link, useLocation } from "react-router";

const Item = () => {
    const location = useLocation();

    useEffect(() => {
        // Do something so we can deep link
    }, []);

    return (
        <div>Item</div>
    )
}

export default Item;
