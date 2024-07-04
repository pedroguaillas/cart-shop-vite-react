import { useId } from "react";
import { CartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from "../hooks/useCart.js";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>iWatch</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty:{quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(item => (
                        <CartItem {...item} addToCart={() => addToCart(item)} key={item.id} />
                    ))}
                </ul>
            </aside>
        </>
    )
}