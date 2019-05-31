
namespace CaveSerene.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System.ComponentModel;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
#if (DEBUG)
        [DefaultValue("admin")]
#else
        [Placeholder("default username is 'admin'"), DefaultValue("admin")]
#endif
        public string Username { get; set; }
#if (DEBUG)
        [DefaultValue("serenity")]
#else
        [PasswordEditor, Placeholder("default password for 'admin' is 'serenity'"), Required(true)]
#endif
        public string Password { get; set; }
    }
}