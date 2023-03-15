---
layout: post
title:  "Electric vs Gas Cost Calculator"
author: dmcwo
categories: [ ev, gas, calculator ]
image: 
featured: true
hidden: true
---

<div class="container mt-5">
		<h1 class="text-center mb-4">Electric vs Gas Cost Calculator</h1>
		<form>
			<div class="form-group">
				<label for="electric-cost">Electricity Cost (per kWh):</label>
				<input type="number" class="form-control" id="electric-cost" step="0.01" required oninput="calculateCost()" value="0.40">
			</div>
			<div class="form-group">
				<label for="gas-cost">Gasoline Cost (per gallon):</label>
				<input type="number" class="form-control" id="gas-cost" step="0.01" required oninput="calculateCost()" value="4.20">
			</div>
			<div class="form-group">
				<label for="electric-efficiency">Electric Car Efficiency (miles per kWh):</label>
				<input type="number" class="form-control" id="electric-efficiency" step="0.01" required oninput="calculateCost()" value="4.0">
			</div>
			<div class="form-group">
				<label for="gas-efficiency">Gas Car Efficiency (miles per gallon):</label>
				<input type="number" class="form-control" id="gas-efficiency" step="0.01" required oninput="calculateCost()" value="30.0">
			</div>
			<div class="form-group">
				<label for="miles-driven">Estimated Miles Driven per Month:</label>
				<input type="number" class="form-control" id="miles-driven" step="0.01" required oninput="calculateCost()" value="1000">
			</div>
			<h2 class="text-center mb-4">Electric Car Costs</h2>
			<div class="form-group">
				<label for="electric-cost-per-mile">Electric Car Cost per Mile:</label>
				<input type="text" class="form-control" id="electric-cost-per-mile" readonly>
			</div>
			<div class="form-group">
				<label for="electric-cost-per-month">Electric Car Cost per Month:</label>
				<input type="text" class="form-control" id="electric-cost-per-month" readonly>
			</div>
			<h2 class="text-center mb-4">Gas Car Costs</h2>
			<div class="form-group">
				<label for="gas-cost-per-mile">Gas Car Cost per Mile:</label>
				<input type="text" class="form-control" id="gas-cost-per-mile" readonly>
			</div>
			<div class="form-group">
				<label for="gas-cost-per-month">Gas Car Cost per Month:</label>
				<input type="text" class="form-control" id="gas-cost-per-month" readonly>
			</div>
		</form>
	</div>
<script src="{{ site.baseurl }}/assets/js/ev-calcultator.js"></script>
<!-- add Bootstrap and jQuery scripts -->
<!--
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
-->
	<!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>-->
<!--	<script></script>-->


