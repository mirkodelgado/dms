using System;
using System.Collections.Generic;

namespace Dms.API.Models
{
    public partial class FacilityLocationBillTo
    {
        public short BillToClientID { get; set; }
        public string BillToClientName { get; set; }

        public short TariffID { get; set; }
        public bool IsChassis { get; set; }
        public bool IsDryBox { get; set; }
        public bool IsReefer { get; set; }
        public bool IsGenset { get; set; }

        public bool OhChassis { get; set; }
        public bool OhDryBox { get; set; }
        public bool OhReefer { get; set; }
        public bool OhGenset { get; set; }

        public FacilityLocationBillTo(short billToClientId,
                                      string billToClientName,
                                      short tariffId,
                                      string isChassis,
                                      string isDryBox,
                                      string isReefer,
                                      string isGenset,
                                      string ohChassis,
                                      string ohDryBox,
                                      string ohReefer,
                                      string ohGenset) {

            this.BillToClientID = billToClientId;
            this.BillToClientName = billToClientName;

            this.TariffID = tariffId;

            if (!String.IsNullOrEmpty(isChassis) && isChassis.Equals("Y"))
                this.IsChassis = true;
            else
               this.IsChassis = false;

            if (!String.IsNullOrEmpty(isDryBox) && isDryBox.Equals("Y"))
                this.IsDryBox = true;
            else
               this.IsDryBox = false;

            if (!String.IsNullOrEmpty(isReefer) && isReefer.Equals("Y"))
                this.IsReefer = true;
            else
               this.IsReefer = false;

            if (!String.IsNullOrEmpty(isGenset) && isGenset.Equals("Y"))
                this.IsGenset = true;
            else
               this.IsGenset = false;


            if (!String.IsNullOrEmpty(ohChassis) && ohChassis.Equals("Y"))
                this.OhChassis = true;
            else
               this.OhChassis = false;

            if (!String.IsNullOrEmpty(ohDryBox) && ohDryBox.Equals("Y"))
                this.OhDryBox = true;
            else
               this.OhDryBox = false;

            if (!String.IsNullOrEmpty(ohReefer) && ohReefer.Equals("Y"))
                this.OhReefer = true;
            else
               this.OhReefer = false;

            if (!String.IsNullOrEmpty(ohGenset) && ohGenset.Equals("Y"))
                this.OhGenset = true;
            else
               this.OhGenset = false;
        }


    }
}
