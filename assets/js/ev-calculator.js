$(document).ready(function() {
			// call calculateCost function on page load
			calculateCost();
		});
		
		function calculateCost() {
			const electricCost = parseFloat(document.getElementById("electric-cost").value);
			const gasCost = parseFloat(document.getElementById("gas-cost").value);
			const electricEfficiency = parseFloat(document.getElementById("electric-efficiency").value);
			const gasEfficiency = parseFloat(document.getElementById("gas-efficiency").value);
			const milesDriven = parseFloat(document.getElementById("miles-driven").value);
			
			const electricCostPerMile = electricCost / electricEfficiency;
			const electricCostPerMonth = electricCostPerMile * milesDriven;
			const gasCostPerMile = gasCost / gasEfficiency;
			const gasCostPerMonth = gasCostPerMile * milesDriven;
			
			document.getElementById("electric-cost-per-mile").value = "$" + electricCostPerMile.toFixed(2);
			document.getElementById("electric-cost-per-month").value = "$" + electricCostPerMonth.toFixed(2);
			document.getElementById("gas-cost-per-mile").value = "$" + gasCostPerMile.toFixed(2);
			document.getElementById("gas-cost-per-month").value = "$" + gasCostPerMonth.toFixed(2);
		}
		
window.onload = calculateCost;