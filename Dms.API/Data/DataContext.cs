using Dms.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Dms.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
            
        }

        public  DbSet<BillToClient> BillToClient { get; set; }
        public  DbSet<Location> Depot { get; set; }
        public  DbSet<TaskSchedule> TaskSchedule { get; set; }
        public  DbSet<Locations> Locations { get; set; }
        public  DbSet<User> Users { get; set; }
        public  DbSet<Facility> Facility { get; set; }
        public  DbSet<UserFacility> UserFacility { get; set; }
        public  DbSet<Value> Values { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Location>()
                .HasKey(dpt => new { dpt.DptClientId, dpt.DptVendorId, dpt.DptDepotId, dpt.DptBillToClientId });

           modelBuilder.Entity<Locations>()
                .HasKey(lg => new { lg.LgClientId, lg.LgBillToCid, lg.LgGroupId, lg.LgRepairCategory, lg.LgLocationNmbr });

           modelBuilder.Entity<UserFacility>()
                .HasKey(uf => new { uf.UfUserId, uf.UfFacility, uf.UfLocation, uf.UfBillToClientId, uf.UfBillToVendorId, uf.UfBillToDepotId, uf.UfSendToUserId });

           modelBuilder.Entity<Facility>()
                .HasKey(f => new { f.VClientId, f.VVendorId });

        }


    }
}