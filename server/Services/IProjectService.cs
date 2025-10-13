using Qiyuan.Api.Models;
namespace Qiyuan.Api.Services;

public interface IProjectService
{
    IEnumerable<ProjectDto> GetAll();
}
