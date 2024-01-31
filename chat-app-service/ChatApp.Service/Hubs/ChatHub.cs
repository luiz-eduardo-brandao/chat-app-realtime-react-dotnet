using ChatApp.Service.DataService;
using ChatApp.Service.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Service.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ShareDb _shared;

        public ChatHub(ShareDb shared) => _shared = shared;


        public async Task JoinChat(UserConnection conn) 
        {
            await Clients.All
                .SendAsync("ReceiveMessage", "admin", $"{conn.Username} has joined");
        }

        public async Task JoinSpecificChatRoom(UserConnection conn) 
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom);

            _shared.connections[Context.ConnectionId] = conn;

            await Clients.Group(conn.ChatRoom)
                .SendAsync("ReceiveSpecificMessage", "admin", $"{conn.Username} has joined {conn.ChatRoom}");

            await SendUsersConnected(conn.ChatRoom);
        }

        public async Task SendMessage(string msg) 
        {
            if(_shared.connections.TryGetValue(Context.ConnectionId, out UserConnection conn)) 
            {
                await Clients.Group(conn.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage", conn.Username, msg);
            }
        }

        public Task SendUsersConnected(string room) 
        {
            var users = _shared.connections.Values
                .Where(c => c.ChatRoom == room)
                .Select(c => c.Username);

            return Clients.Group(room).SendAsync("UsersInRoom", users);
        }
    }

}