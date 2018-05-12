<html>
<body>

  <?php
// define variables and set to empty values
// $in = $out = "";
$diff = 0;
//mysql_query("SET NAMES 'utf8'") ;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
//  $in = test_input($_POST["IN"]);
  //$out = test_input($_POST["OUT"]);
  $in = $_POST["IN"];
  $out = $_POST["OUT"];

$diff = (strtotime($out) - strtotime($in))/86400;

//$date=date_create($in);
//echo $diff;


   ?>

  Atvykimas: <?php echo $_POST["IN"]; ?>
  <br>
  Isvykimas: <?php echo $_POST["OUT"]; ?>

  <?php
  }

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
<!--  -->
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "alldates";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//SET NAMES utf8;
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
// Create database
             //$sql = "CREATE DATABASE alldates";
             // if ($conn->query($sql) === TRUE) {
             //  echo "Database created successfully";
             //  } else {
             //  echo "Error creating database: " . $conn->error;
             //  }

// sql to create table
//$sql = "CREATE TABLE  dates (
//id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//DT date,
//FREE INT(1)
//)";

//if ($conn->query($sql) === TRUE) {
//    echo "Table dates created successfully";
//} else {
//    echo "Error creating table: " . $conn->error;
//}

//$query_auto = "INSERT INTO tablename (col_name, col_date) VALUE ('DATE: Auto CURDATE()', CURDATE() )";
/*
$sql = "INSERT INTO dates (DT,FREE) VALUES ('$in',1)";
if(mysqli_query($conn, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
*/
//if ($conn->query($sql) === TRUE) {
//    echo "New record created successfully";
//} else {
//    echo "Error: " . $sql . "<br>" . $conn->error;
//}
$conn->close();
?>

</body>
</html>
