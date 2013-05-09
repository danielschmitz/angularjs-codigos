<?php 

$app->get("/customers",function (){

	$sql = "SELECT CustomerID,ContactName,Phone FROM customers";
	$stmt = DB::prepare($sql);
	$stmt->execute();
	formatJson($stmt->fetchAll());
});



