
const Searchbar = () => {
    return(
        <form className="searchbar">
            <input type="text" placeholder="Search..."/>
            <input type="checkbox" value="" id="show-stock"/>
            <label htmlFor="show-stock">Only show products in stock</label>
        </form>
    );
}

export default Searchbar;