<?php require_once "src/assets/php/PHPMailer/sendmail.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('src/components/head.php'); ?>
    <link rel="canonical" href="" />
    <meta name="description" content="Get in touch with us. Find our contact information and reach out for inquiries, support, or any questions you may have. We're here to assist you." />
    <title>Contact Us</title>
</head>

<body>
    <?php include('src/components/nav.php'); ?>
    <form action="contact.php" autocomplete="" method="post">
        <header>
            <h1>Contact Us</h1>
            <p>Have something to tell us? Hit us up!</p>
        </header>
        <ul>
            <!-- First Name -->
            <li>
                <label for="name">Name</label>
                <input name="name" type="text" placeholder="Enter your name"/>
            </li>
            <!-- E-mail -->
            <li>
                <label for="email">Email</label>
                <input name="email" type="email" placeholder="Enter your email" />
            </li>
            <!-- Subject -->
            <li>
                <label for="subject">Subject</label>
                <input name="subject" type="text" placeholder="List the subject" />
            </li>
            <!-- Message -->
            <li>
                <label for="message">Message</label>
                <textarea name="message" type="text" placeholder="Enter your message"></textarea>
            </li>
        </ul>
        <button class="primary-button" name="contact" type="submit">Send</button>
    </form>
    <?php include('src/components/footer.php'); ?>
</body>

</html>