import "./index.css";

export default function App() {
	return <form className="new-item-form">
		<div className="form-row">
			<label>New Item</label>
			<input type="text" id="item" />
		</div>
	</form>;
}