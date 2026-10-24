import { useEffect, useState } from "react";
import Footer from "../src/Components/Footer";
const wishlist = JSON.parse(localStorage.getItem("wish")) || [];

console.log(wishlist);


export const Wish = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("wish")) || [];
        setWishlist(data);
        console.log(data);
    }, []);
    const removewish = (id) => {
        const update = wishlist.filter((item) => item.id != id)
        setWishlist(update)
        localStorage.setItem("wish", JSON.stringify(update))
    }
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">My Wishlist ❤️</h2>

                {wishlist.length === 0 ? (
                    <h4 className="text-center">No destinations added to wishlist.</h4>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "25px",
                        }}
                    >
                        {wishlist.map((item) => (
                            <div key={item.id}
                                style={{
                                    width: "320px",
                                    border: "1px solid #ddd",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                    background: "#fff",
                                }}>
                                <img src={item.image} style={{ height: "220px", width: "100%", borderRadius: "20px" }} />

                                <div style={{ padding: "15px" }}>
                                    <h4>{item.name}</h4>

                                    <button
                                        onClick={() => removewish(item.id)}
                                        style={{
                                            background: "#dc3545",
                                            color: "#fff",
                                            border: "none",
                                            padding: "8px 18px",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            marginTop: "10px",
                                        }}
                                    >Remove</button>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};