<?php
include 'connect.php';

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
            <a href="registration.php">Add user</a>
        </button>

        <table class="table">
          <thead>
             <tr>
                <th >ID</th>
                <th >Name</th>
                <th >Email</th>
                <th >password1</th>
                <th >password2</th>
              </tr>
          </thead>

  <?php
    $sql = 'select * from `user`';
    $res = mysqli_query($con, $sql);
    if($res) {
        
        while($row=mysqli_fetch_assoc($res)) {
            $id=$row['id'];
            $name=$row['name'];
            $email=$row['email'];
            $password1=$row['password1'];
            $password2=$row['password2'];
            
            echo ' 
            <tr>
            <th scope="row">'.$id.'</th>
            <td>'.$name.'</td>
            <td>'.$email.'</td>
            <td>'.$password1.'</td>
            <td>'.$password2.'</td>
            
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