using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dms.API.Models
{
    [Table("Dms_Webusers")]
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string Username { get; set; }

        public byte[] PasswordHash { get; set; }
        
        public byte[] PasswordSalt { get; set; }
    }
}