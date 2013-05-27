<?php 

$app->get("/customers",function (){

	$sql = "SELECT CustomerID,ContactName,Phone FROM customers";
	$stmt = DB::prepare($sql);
	$stmt->execute();
	formatJson($stmt->fetchAll());
});

$app->get("/customer/:id",function ($id){

	$sql = "SELECT CustomerID,ContactName,Phone FROM customers WHERE CustomerID='$id'";
	$stmt = DB::prepare($sql);
	$stmt->execute();
	formatJson($stmt->fetch());
});

$app->post("/customer/:id",function ($id){

	$data =json_decode(\Slim\Slim::getInstance()->request()->getBody());

	if ($data->CustomerID)
	{
		$sql = "UPDATE customers SET ContactName=?,Phone=? WHERE CustomerID=?";
		$stmt = DB::prepare($sql);
		$stmt->execute(array(
			$data->ContactName,
			$data->Phone,
			$data->CustomerID
			)
		);
	}
	else
	{

	}

	formatJson($data);

});



