import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()


  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer filter={filters} />
    </CartProvider>
  )
}

export default App
