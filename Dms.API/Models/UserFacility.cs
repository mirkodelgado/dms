using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dms.API.Models
{
    [Table("CGI_UserFacility")]
    public partial class UserFacility
    {
        [Key]
        public string UfUserId { get; set; }
        [Key]
        public short UfFacility { get; set; }
        [Key]
        public short UfLocation { get; set; }
        [Key]
        public short UfBillToClientId { get; set; }
        [Key]
        public short UfBillToVendorId { get; set; }
        [Key]
        public short UfBillToDepotId { get; set; }
        [Key]
        public string UfSendToUserId { get; set; }
        public string UfSendToHoldUserId { get; set; }
        public string UfDefaultDmsSendTo { get; set; }
    }
}
