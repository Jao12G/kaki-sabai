<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $duvida = $_POST['duvida'];

    // Use a biblioteca de envio de emails para enviar o email
    // Aqui está um exemplo usando o PHPMailer:
    require 'caminho/para/PHPMailerAutoload.php';

    $mail = new PHPMailer;
    $mail->setFrom($email, $nome);
    $mail->addAddress('jao12gl@gmail.com'); // Insira o endereço de email para onde deseja enviar o formulário
    $mail->Subject = 'Contato através do formulário';
    $mail->Body = "Nome: $nome\nEmail: $email\nDúvida: $duvida";

    if ($mail->send()) {
        // Email enviado com sucesso
        echo 'Obrigado por entrar em contato! Responderemos em breve.';
    } else {
        // Ocorreu um erro no envio do email
        echo 'Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.';
    }
?>
