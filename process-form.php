<?php
ob_start();
if (isset($_POST['message'])) {
    // Mise en place des entêtes de l'email
    $boundary = md5(rand());
    $entete = 'MIME-Version: 1.0' . "\r\n";
    $entete .= 'From: "Nom" <contact@vick.fr>' . "\r\n";
    $entete .= 'Reply-To: ' . $_POST['email'] . "\r\n";
    $entete .= 'Content-Type: multipart/alternative; boundary=' . $boundary . "\r\n";

    // Construction du message en HTML et en texte brut
    $message_texte = strip_tags($_POST['message']);
    $message_html = '<html><body>';
    $message_html .= '<p>Message envoyé depuis la page Contact de vick.fr</p>';
    $message_html .= '<p><b>vick.fr : </b>' . htmlspecialchars($_POST['name']) . '<br>';
    $message_html .= '<b>Email : </b>' . $_POST['email'] . '<br><br>';
    $message_html .= '<b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';
    $message_html .= '</body></html>';

    // Mise en place du corps de l'email
    $corps = '--' . $boundary . "\r\n";
    $corps .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
    $corps .= 'Content-Transfer-Encoding: 8bit' . "\r\n\r\n";
    $corps .= $message_texte . "\r\n\r\n";
    $corps .= '--' . $boundary . "\r\n";
    $corps .= 'Content-Type: text/html; charset=utf-8' . "\r\n";
    $corps .= 'Content-Transfer-Encoding: 8bit' . "\r\n\r\n";
    $corps .= $message_html . "\r\n\r\n";
    $corps .= '--' . $boundary . '--';

    // Envoi de l'email
    $retour = mail('gajanraj.m@gmail.com', 'Envoi depuis mon site', $corps, $entete);

    echo '<script>alert("Message envoyé avec succès !");</script>';
}
?>
