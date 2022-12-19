<?php

$con=new mysqli('localhost', 'root', '', 'rate_buy');


if($con) {
    // echo "Connection success";
} else {
    die(mysqpli_error($con));
}

?>