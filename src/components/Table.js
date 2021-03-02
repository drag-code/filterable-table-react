import HeaderProduct from "./HeaderProduct";
import ProductInfo from "./ProductInfo";

const Table = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<td>Name</td>
					<td>Price</td>
				</tr>
			</thead>
			<tbody>
				<HeaderProduct header="Sporting Articles" />
				<ProductInfo name="Football" price="$50.00" />
			</tbody>
		</table>
	);
};

export default Table;
