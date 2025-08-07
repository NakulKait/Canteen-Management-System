using FeedbackService.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;

namespace FeedbackService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // ✅ Use connection string from appsettings.json
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

            // ✅ Add services
            builder.Services.AddControllers();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });

            // ✅ Setup EF Core with MySQL
            builder.Services.AddDbContext<FeedbackDbContext>(options =>
                options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

            // ✅ Swagger
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Feedback API", Version = "v1" });
                c.AddServer(new OpenApiServer { Url = $"http://localhost:5000" });
            });

            var app = builder.Build();

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseCors("AllowAll");
           // app.UseHttpsRedirection(); // Optional — can comment out if not using HTTPS
            app.UseAuthorization();
            app.MapControllers();

            // ✅ Apply migrations automatically and test connection
            using (var scope = app.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<FeedbackDbContext>();
                try
                {
                    db.Database.Migrate();
                    Console.WriteLine("✅ Database connected and migrated successfully.");
                }
                catch (Exception ex)
                {
                    Console.WriteLine("❌ Error connecting to database: " + ex.Message);
                }
            }

            // ✅ Fixed port for local
            app.Urls.Add("http://localhost:5000");
            app.Run();
        }
    }
}
