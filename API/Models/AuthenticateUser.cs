namespace API.Models
{
    public class AuthenticateUser
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
    }
}