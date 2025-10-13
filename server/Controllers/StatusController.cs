using Microsoft.AspNetCore.Mvc;

namespace Qiyuan.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StatusController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { status = "ok", time = DateTime.UtcNow });
}
