const messageHandler = (socket, io)=>{
    socket.on('messageGym', (data)=>{
        console.log(data);
        data.success = true;
        data.type = "Gym";
        socket.to("room-"+ data.room).emit("messageGym", data);
        socket.emit('messageGym', data);
    });
 
    socket.on('messagePrivate', (data)=>{
        console.log(data);
        data.success = true;
        data.type = "Private";
        socket.to("room-"+ data.room).emit("messagePrivate", data);
        socket.emit('messagePrivate', data);
    })
}

module.exports = messageHandler