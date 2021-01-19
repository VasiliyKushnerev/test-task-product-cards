<?php

if (!empty($_POST)){

        if ($_POST['name'] == '')
        {
            echo 'Не заполнено поле: Имя';
            return;
        }
        if ($_POST['phone'] == '')
        {
            echo 'Не заполнено поле: Телефон';
            return;
        }
        if ($_POST['mail'] == '')
        {
            echo 'Не заполнено поле: E-mail';
            return;
        }





        $name = htmlspecialchars(stripslashes($_POST['name']));
        $phone = htmlspecialchars(stripslashes($_POST['phone']));
        $email = htmlspecialchars(stripslashes($_POST['mail']));
        $title = ($_POST['title']);
        mail("zzz@yandex.ru", "Заявка ", "\r\n Имя:".$name."\r\n Телефон : ".$phone."\r\n E-mail: ".$email."\r\n Покупатель заказал :".$title."");
        echo 'Ваша заявка отправлена!';
        return;

}
