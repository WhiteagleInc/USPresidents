using System;

namespace USPresidentsWebAPI.Entities
{
    public class President
    {
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string BirthPlace { get; set; }
        public DateTime DeathDay { get; set; }
        public string DeathPlace { get; set; }
    }
}
