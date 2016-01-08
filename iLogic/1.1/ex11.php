<?php
$file = fopen("ex11.txt","a") or exit("Unable to open file!");
fwrite($file, $_POST["name_score_time"]);
fclose($file);
?>