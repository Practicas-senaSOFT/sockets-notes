
let socket = io('localhost:3000/chat');

socket.on('connect', () => {
    console.log('ID:: ',socket.id);
});

socket.on('notes:load',(data)=>{
    console.log(data);
});