import Echo from "laravel-echo";
import Pusher from "pusher-js";


// @ts-ignore
window.Pusher = Pusher;


const myLearnSocket = new Echo({
    broadcaster: 'pusher',
    key: '3a99ba8c2c92400135b3',
    cluster: 'ap1',
    forceTLS: true
});

export default myLearnSocket;