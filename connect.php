<?php

$con=new mysqli('localhost', 'root', '', 'user');


if($con) {
    // echo "Connection success";
} else {
    die(mysqpli_error($con));
}

?>