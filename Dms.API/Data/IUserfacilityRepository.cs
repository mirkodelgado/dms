using System.Collections.Generic;
using System.Threading.Tasks;
using Dms.API.Models;

namespace Dms.API.Data
{
    public interface IUserfacilityRepository
    {
         Task<IEnumerable<FacilityLocation>> GetFacilityLocation(string username);

         Task<IEnumerable<FacilityLocationBillTo>> GetFacilityLocationBillTos(string username, short vendor, short depot);

         // Task<bool> UserExists(string username);
    }
}