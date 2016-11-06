$(() => {
    var countMessage = 0;

    const sendMessage = () => {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        let idValue = counter();
        console.log('6STR')
        let messageValue = $('[class="messageVal"]').val();
        $('.messages').append(`<div class="message" id=${idValue}>${messageValue} <a class="time">${time}</a> <button id="${idValue + 1000000}" class="remove">x</button></div>`)

    };

    const counter = ()=> {
        countMessage += 1;
        console.log(countMessage);
        return countMessage
    };
    const removeMessage = ()=> {

        console.log('Done')
    };
    $('#send').click(sendMessage);
    $('.remove').click(removeMessage);


    $(".messages").on("click", ".remove", function () {
        console.log('Dobe', this.id)
        let IdMessage = this.id - 1000000
        $('#' + IdMessage).remove();
    });
    $(".messageVal").keyup(function (e) {
        console.log('9Str')
        var code = e.which;
        console.log(code)
        if (code == 13) {
            sendMessage();  //$('#send').click(sendMassage);
        }
        else {
            console.log('Do nothing')

        }
    });
})

