<?php
    $img = $_POST['base64image'];
    $email = $_POST['email'];
    $folderPath = "C:/xampp/htdocs/J-comp/face-recognition-login-system/students/";
    $image_parts = explode(";base64,", $img);

    $image_type_aux = explode("C:/xampp/htdocs/J-comp/face-recognition-login-system/students/", $image_parts[0]);

    $image_type = $image_type_aux[1];
    $image_base64 = base64_decode($image_parts[1]);
    $fileName = $email . ".jpg";
    $file = $folderPath . $fileName;

    file_put_contents($file, $image_base64);
    print_r($fileName);
?>