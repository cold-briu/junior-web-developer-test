const url = "http://localhost:3000/api/employee";
export default {
	getAll: () => {
		let res = fetch(url);
		return res.json();
	},
	getOne: id => {},
	updateOne: id => {}
};
