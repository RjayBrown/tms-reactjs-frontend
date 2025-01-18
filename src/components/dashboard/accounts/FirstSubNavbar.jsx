import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SubNavbar = () => {
	return (
		<div className="flex__row nav__secondary">
			<Link to="" className="pressed">
				Accounts Home
			</Link>
			<Link to="">Account Search List</Link>
			<Link to="">Account Info</Link>
			<Link to="">Financials</Link>
			<Link to="">Service Request</Link>
			<Link to="">Retail Tag Search</Link>
			<Link to="">Invoices</Link>
			<Link to="">Violation</Link>
			<Link to="">History</Link>
		</div>
	);
};

export default SubNavbar;
