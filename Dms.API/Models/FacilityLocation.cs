using System;
using System.Collections.Generic;

namespace Dms.API.Models
{
    public partial class FacilityLocation
    {
        public short FacilityID { get; set; }
        public short LocationID { get; set; }
        public string FacilityLocationName { get; set; }

        public FacilityLocation(short facilityId, short locationId, string facilitylocationName) {

            this.FacilityID = facilityId;
            this.LocationID = locationId;
            this.FacilityLocationName = facilitylocationName;
        }


    }
}
