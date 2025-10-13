using Qiyuan.Api.Models;

namespace Qiyuan.Api.Services;

public class ProjectService : IProjectService
{
    private readonly List<ProjectDto> _projects = new()
    {
        new ProjectDto(1, "Personal Website", "This website built with Next.js and an ASP.NET backend (demo).", null, "https://github.com/mobyyyc/qiyuan-webpage"),
        new ProjectDto(2, "ML Experiments", "Small chatbot trained on various datasets.", null, null),
    };

    public IEnumerable<ProjectDto> GetAll() => _projects;
}
