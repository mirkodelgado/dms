using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using AutoMapper;

using Dms.API.Data;

namespace Dms.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserfacilityController : ControllerBase
    {
        private readonly IUserfacilityRepository _repo;
        private readonly IMapper _mapper;
        public UserfacilityController(IUserfacilityRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/userfacility/wesv5
        [HttpGet("{user}")]
        public async Task<ActionResult> Get(string user)
        {
            var facilitylocation = await _repo.GetFacilityLocation(user);

            return Ok(facilitylocation);
        }

        // GET api/userfacility/getbilltos/wesv5/100/100
        [HttpGet("getbilltos/{user}/{vendor}/{depot}")]
        public async Task<ActionResult> GetBillTos(string user, short vendor, short depot)
        {
            var facilitybillTos = await _repo.GetFacilityLocationBillTos(user, vendor, depot);

            return Ok(facilitybillTos);
        }



        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
