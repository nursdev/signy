<?php
include 'connect_buy.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display</title>
</head>
<body>
    <div class="container">
        <button class="">
            <a href="buy.php">Add user</a>
        </button>

        <table class="table">
          <thead>
             <tr>
                <th >ID</th>
                <th >IIN</th>
                <th >Organization</th>
                <th >Email</th>
                <th >Phone number</th>
                <th>Tariff plan</th>
                <th>Date</th>
              </tr>
          </thead>

  <?php
    $sql = 'select * from `buy`';
    $res = mysqli_query($con, $sql);
    if($res) {
        
        while($row=mysqli_fetch_assoc($res)) {
            $id=$row['id'];
            $IIN=$row['IIN'];
            $organization=$row['org_name'];
            $email=$row['email'];
            $phone=$row['phone_number'];
            $paket=$row['tariff_plan'];
            $date=$row['date'];
        
            
            echo ' 
            <tr>
            <th scope="row">'.$id.'</th>
            <td>'.$IIN.'</td>
            <td>'.$organization.'</td>
            <td>'.$email.'</td>
            <td>'.$phone.'</td>
            <td>'.$paket.'</td>
            <td>'.$date.'</td>
            </tr> 
            ';
        }
    }
  ?>
  </tbody>
</table>

    </div>
</body>
</html>