using Microsoft.AspNetCore.Mvc;
using Qiyuan.Api.Models;
using Qiyuan.Api.Services;

namespace Qiyuan.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _projects;

    public ProjectsController(IProjectService projects)
    {
        _projects = projects;
    }

    [HttpGet]
    public ActionResult<IEnumerable<ProjectDto>> Get()
    {
        return Ok(_projects.GetAll());
    }
}
