import Product from "./Product";
function Props() {
    return (
        <div className="Hello">
        {/* <h1>Welcome to nesting components in react js</h1> */}
        <h1>PRODUCTS</h1>
            <div className="App">
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}
export default Props;