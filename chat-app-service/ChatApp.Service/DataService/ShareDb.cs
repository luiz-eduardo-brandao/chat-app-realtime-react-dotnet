using System.Collections.Concurrent;

using ChatApp.Service.Models;

namespace ChatApp.Service.DataService
{
    public class ShareDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connection = new ConcurrentDictionary<string, UserConnection>();
        public ConcurrentDictionary<string, UserConnection> connections => _connection;
    }
}