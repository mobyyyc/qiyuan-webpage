using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Qiyuan.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// CORS
var frontendOrigin = builder.Configuration.GetValue<string>("Frontend:Origin") ?? "http://localhost:3000";
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(frontendOrigin)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Services
builder.Services.AddSingleton<IProjectService, ProjectService>();
builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowFrontend");

app.MapControllers();

app.Run();
