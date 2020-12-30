<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$location = $_POST['location'];
$details = $_POST['details'];
$message = $_POST['message'];
$testdata = $_POST['testdata'];
$formcontent=" From: $name \n Phone: $phone \n User is Located in: $location \n More Details: $details \n Message: $message \n Test Results: $testdata \n";
$recipient = "info@standpointenglish.com";
$subject = "Level Test";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>

<head>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Yuri Yarin</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Yuri Yarin</title>
        <link type = "text/css" href = "/style.css" rel="stylesheet">
      
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="Leveltest.html">Level Test</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.standpointenglish.com">Standpoint English</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://bootswatch.com/superhero/">Style Source</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Form</a>
            </li>
          </ul>
        </div>
      </nav>
</head>