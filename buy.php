<?php
include 'connect_buy.php';

if(isset($_POST['submit'])) {
  $iin=$_POST['iin'];
  $organization=$_POST['organization'];
  $email=$_POST['email'];
  $phone=$_POST['phone'];
  $paket=$_POST['paket'];
  $date =$_POST['date'];

  $sql="insert into `buy` (iin, org_name, email, phone_number, tariff_plan, date)
   value('$iin','$organization', '$email','$phone', '$paket', '$date')";
  
  $result=mysqli_query($con, $sql);
  
  if($result) {
    // echo "Data inserted successfully";
    header('location:rate.html');
  } else {
    die(mysqli_error($con));
  }
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Buy</title>
    <link rel="stylesheet" href="./rate.css" />
  </head>
  <body>
    <header class="header">
      <div class="header__wrapper">
        <div class="header__left">
          <img src="./images/logo.svg" alt="" />
          <a href="#">Signy</a>
        </div>
        <div class="header__right">
          <a class="classMe" href="#$">Перезвоните мне </a>

          <a href="tel:0800750643">
            <img class="header__icon" src="./images/landphone.svg" alt="" />
            0-800-750-643
          </a>
          <a href="./signIn.html" class="signIn">Вход</a>
        </div>
      </div>
    </header>

    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__left">
          <span>Signy © 2020</span>
        </div>

        <div class="footer__right">
          <a href="#">+38 (044) 337-86-43,</a>
          <a href="#">+38 (044) 334-56-43</a>
          <br />
          <a href="#">info@signy.online</a>
        </div>
      </div>
    </footer>

    <div style="background-color: #fff; min-height: 100vh" class="container">
      <div class="form__flex">
        <div class="form__wrapper">
          <form method="post">
            <label>ИНН</label>
            <input type="text" name="iin" placeholder="Введите иин" />

            <label>Полное наименование</label>
            <input
              type="text" name="organization"
              placeholder="Введите полное наименование организации"
            />

            <div class="form__inner">
              <div class="form__inner__left">
                <label>E-mail</label>
                <input type="email" name="email" placeholder="E-mail" />
              </div>

              <div class="form__inner__right">
                <label>Номер телефона</label>
                <input type="tel" name="phone" placeholder="+380" />
              </div>
            </div>

            <label>Тарифный пакет</label>
            <select name="paket">
              <option value="start">Start (Для небольших предприятий)</option>
              <option value="standard">Standard (Экономия 250)</option>
              <option value="business">Business (Экономия 3000)</option>
              <option value="business">Pro (Все включено)</option>
            </select>
            <label>Дата начала действия пакета</label>
            <input type="date" name="date" />

            <input class="submit" name='submit' type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
