# Qiyuan.Api (minimal)

This is a minimal ASP.NET Core Web API used as a lightweight backend for the Next.js frontend in the repository root.

Run locally (requires .NET SDK 8+):

```bash
cd server
dotnet build
dotnet run
```

The API listens on http://localhost:5041 by default and exposes:

- GET /api/status
- GET /api/projects

Configure the frontend origin in `appsettings.json` under `Frontend:Origin` if your Next.js dev server runs elsewhere.
