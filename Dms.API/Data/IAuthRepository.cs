using System.Threading.Tasks;
using Dms.API.Models;

namespace Dms.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);

         Task<bool> UserExists(string username);
    }
}