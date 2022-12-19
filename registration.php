<?php
include 'connect.php';

if(isset($_POST['submit'])) {
  $name=$_POST['name'];
  $email=$_POST['email'];
  $password1=$_POST['password1'];
  $password2=$_POST['password2'];

  $sql="insert into `user` (name, email, password1, password2)
   value('$name', '$email', '$password1', '$password2')";
  
  $result=mysqli_query($con, $sql);
  
  if($result) {
    // echo "Data inserted successfully";
    header('location:index.html');
  } else {
    die(mysqli_error($con));
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="./registration.css">
</head>
<body>
    <div class="wrapper">
        <div class="wrap">
            <div class="container1">
                <h1 class="for-smart">Smart ID</h1>
            </div>
        </div>
        <section class="section1">
            <div class="container">
                <div class="forms">
                    <div class="form login">
                        <span class="title">Регистрация</span>
                        
                            <form method="post" action="#">
                                <div class="input-field">
                                    <input class="inp-email" type="text" name="name" placeholder="Введите ваше имя" required>
                                </div>
                                <div class="input-field">
                                    <input class="inp-email" type="email" name="email" placeholder="Введите вашу почту" required>
                                </div>
                                <div class="input-field">
                                    <input class="inp-email" type="password" name="password1" class="password" placeholder="Придумайте пароль" required>
                                </div>
                                <div class="input-field">
                                <input class="inp-email" type="password" name="password2" class="password" placeholder="Подтвердите пароль" required>
                                </div>
        
                                <div class="checkbox-text">
                                    <div class="checkbox-content">
                                        <input type="checkbox" id="termCon">
                                        <label for="termCon" class="text">Я согласен со всеми условиями</label>
                                    </div>
                                </div>
        
                                <div class="input-field button">
                                    <button class="for-button" type="submit" name="submit">Зарегестрироваться</button>
                                    <!-- <input type="submit" value="Зарегестрироваться"> -->
                                    <a href="./registation.css"></a>
                                </div>
                            </form>
        
                            <div class="login-signup">
                                <span class="text">Уже зарегестрированы?
                                    <a href="./usePassword.html" class="text login-link">Войдите сейчас</a>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>    
</body>
</html>