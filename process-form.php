<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $to = 'gajanraj.m@gmail.com';  // Adresse e-mail de destination
    $subject = 'Nouveau message depuis le formulaire de contact';  // Objet du message

    // Mise en place de l'entête de l'e-mail
    $headers = "From: " . $_POST['name'] . " <" . $_POST['email'] . ">\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Construction du corps de l'e-mail
    $message = '<html><body>';
    $message .= '<h2>Nouveau message depuis le formulaire de contact</h2>';
    $message .= '<p><b>Nom :</b> ' . $_POST['name'] . '</p>';
    $message .= '<p><b>Email :</b> ' . $_POST['email'] . '</p>';
    $message .= '<p><b>Message :</b> ' . $_POST['message'] . '</p>';
    $message .= '</body></html>';

    // Envoi de l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo '<script>alert("Message envoyé avec succès !");</script>';
    } else {
        echo '<script>alert("Une erreur s\'est produite lors de l\'envoi du message.");</script>';
    }
}
?>
