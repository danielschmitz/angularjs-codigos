<?php 

$app->get("/employees",function (){

	$sql = "SELECT EmployeeID,FirstName,LastName,HomePhone FROM employees";
	$stmt = DB::prepare($sql);
	$stmt->execute();
	formatJson($stmt->fetchAll());
});

$app->get("/employee/:id",function ($id){

	$sql = "SELECT EmployeeID,FirstName,LastName,HomePhone FROM employees WHERE EmployeeID=?";
	$stmt = DB::prepare($sql);
	$stmt->execute(array($id));
	formatJson($stmt->fetch());
});

$app->post("/employee/",function (){

	$data =json_decode(\Slim\Slim::getInstance()->request()->getBody());

	if ($data->EmployeeID!=0){
		$sql = "UPDATE employees SET FirstName=?,LastName=?,HomePhone=? WHERE EmployeeID=?";
		$stmt = DB::prepare($sql);
		$stmt->execute(array(
			$data->FirstName,
			$data->LastName,
			$data->HomePhone,
			$data->EmployeeID
			)
		);
	}
	else
	{
		$sql = "INSERT INTO employees (FirstName,LastName,HomePhone)  VALUES (?,?,?)";
		$stmt = DB::prepare($sql);
		$stmt->execute(array(
			$data->FirstName,
			$data->LastName,
			$data->HomePhone
			)
		);
		$data->EmployeeID = DB::lastInsertId();
	}

	formatJson($data);
});

$app->delete("/employee/:id",function ($id){
	$sql = "DELETE FROM customers WHERE CustomerID=?";
		$stmt = DB::prepare($sql);
		$stmt->execute(array($id));
	formatJson(true);
});





