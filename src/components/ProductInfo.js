const ProductInfo = ({name, price}) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	);
};

export default ProductInfo;
