using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using Dms.API.Models;

namespace Dms.API.Data
{
    public class UserfacilityRepository : IUserfacilityRepository
    {
        private readonly DataContext _context;
        public UserfacilityRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<FacilityLocation>> GetFacilityLocation(string username)
        {
            var query = from uf in _context.UserFacility

                        join f in _context.Facility
                        on uf.UfFacility equals f.VVendorId 

                        join dpt in _context.Depot
                        on  new  { a1 = f.VClientId, a2 = f.VVendorId, a3 = uf.UfLocation, a4 = uf.UfBillToClientId } equals new { a1 = dpt.DptClientId, a2 = dpt.DptVendorId, a3 = dpt.DptDepotId, a4 = dpt.DptBillToClientId }

                        where uf.UfUserId.Equals(username)

                        orderby f.VName, dpt.DptSystemName

                        select new FacilityLocation(dpt.DptVendorId, dpt.DptDepotId, f.VName + "/" + dpt.DptSystemName );

            // sQuery = "SELECT DISTINCT dptClientID, dptVendorID, dptDepotID, vName, dptSystemName,  vName + '/' + dptSystemName as vSystemName, CONVERT(varchar(3), dptVendorID) + '-' + CONVERT(varchar(3), dptDepotID) as VendorDepot FROM " + UserFacilityTableName +
            //         " LEFT JOIN " + FacilityTableName + " ON (vClientID = '" + dmsClientID + "') AND (vVendorID = ufFacility)" +
            //         " LEFT JOIN " + LocationTableName + " ON (dptClientId = vClientID) AND (dptVendorID = vVendorID) AND" +
            //         " (dptDepotID = ufLocation) AND (ufBillToClientID = dptBillToClientID) WHERE (ufUserID = '" + userID + "') ORDER BY vName,dptSystemName";


            // if (facilitylocation == null)
            //    return null;

            var list = await query.ToListAsync();

            //IEnumerable<FacilityLocation> distinctlist = list.Select(s => (s.FacilityID, s.LocationID, s.FacilityLocationName)).Distinct(); 
            //IEnumerable<FacilityLocation> distinctlist = list.Distinct(); 
            return list.Distinct(new FacilityLocationNameComparer());            
        }
        public async Task<IEnumerable<FacilityLocationBillTo>> GetFacilityLocationBillTos(string username, short vendor, short depot)
        {
            var query = from uf in _context.UserFacility

                        join f in _context.Facility
                        on uf.UfFacility equals f.VVendorId 

                        join dpt in _context.Depot
                        on  new  { a1 = f.VClientId, a2 = f.VVendorId, a3 = uf.UfLocation, a4 = uf.UfBillToClientId } equals new { a1 = dpt.DptClientId, a2 = dpt.DptVendorId, a3 = dpt.DptDepotId, a4 = dpt.DptBillToClientId }

                        join btc in _context.BillToClient
                        on dpt.DptBillToClientId equals btc.BtcBilltoClientId 

                        where uf.UfUserId.Equals(username) && (dpt.DptVendorId == vendor) && (dpt.DptDepotId == depot)

                        orderby btc.BtcBillToClientName

                        select new FacilityLocationBillTo(btc.BtcBilltoClientId, btc.BtcBillToClientName, dpt.DptTariffId,
                            btc.BtcAllowIschassis, btc.BtcAllowIsdryBox, btc.BtcAllowIsreefer, btc.BtcAllowIsgenset,
                            btc.BtcAllowOhchassis, btc.BtcAllowOhdryBox, btc.BtcAllowOhreefer, btc.BtcAllowOhgenset);

            // sQuery = "SELECT DISTINCT dptClientID,dptVendorID,dptBillToClientID,btcBillToClientName FROM " + UserFacilityTableName +
            //          " LEFT JOIN " + FacilityTableName + " ON (vClientID = '" + dmsClientID + "') AND (vVendorID = ufFacility) " +
            //          " LEFT JOIN " + LocationTableName + " ON (dptClientId = vClientID) AND (dptVendorID = vVendorID) AND (dptDepotID = ufLocation) AND (ufBillToClientID = dptBillToClientID) " +
            //          " LEFT JOIN " + BillToClientTableName + " ON (dptBillToClientID = btcBilltoClientID) " +
            //          " WHERE (ufUserID = '" + UserID + "') AND (dptVendorID = '" + VendorID + "') " + DepotSql + " ORDER BY dptClientID,dptVendorID,btcBillToClientName";


            // if (facilitylocation == null)
            //    return null;

            var list = await query.ToListAsync();

            return list;

            //IEnumerable<FacilityLocation> distinctlist = list.Select(s => (s.FacilityID, s.LocationID, s.FacilityLocationName)).Distinct(); 
            //IEnumerable<FacilityLocation> distinctlist = list.Distinct(); 
            //return list.Distinct(new FacilityLocationNameComparer());            
        }


    }


    internal class FacilityLocationNameComparer : IEqualityComparer<FacilityLocation>
    {
        public bool Equals(FacilityLocation x, FacilityLocation y)
        {
            if (string.Equals(x.FacilityLocationName, y.FacilityLocationName, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
            return false;
        }
    
        public int GetHashCode(FacilityLocation obj)
        {
            return obj.FacilityLocationName.GetHashCode();
        }
    }

}