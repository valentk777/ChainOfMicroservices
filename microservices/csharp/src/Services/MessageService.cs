using Microsoft.Extensions.Logging;
using System.Text;
using System.Text.Json;

namespace CSharpApi.Services;

public class MessageService : IMessageService
{
    private readonly ILogger<MessageService> _logger;
    private readonly IConfiguration _configuration;

    public MessageService(ILogger<MessageService> logger, IConfiguration configuration)
    {
        _logger = logger;
        _configuration = configuration;
    }

    public async Task<bool> SendMessage(MessageRequest message)
    {
        if (message.Message == null)
        {
            return true;
        }

        var makeServiceCall = !message.Message.Contains("CSharp");

        if (!makeServiceCall)
        {
            _logger.LogInformation("Service already published a message");
            return true;
        }

        message.Message += "CSharp, ";

        _logger.LogInformation($"Send message {message.Message}");

        var url = _configuration.GetValue<string>("App:ExternalApiPath");
        var json = JsonSerializer.Serialize(message);
        var data = new StringContent(json, Encoding.UTF8, "application/json");

        _logger.LogInformation($"Send request to {url}");

        using var client = new HttpClient();

        try
        {
            using var response = await client.PostAsync(url, data);
            var result = await response.Content.ReadAsStringAsync();

            _logger.LogInformation(result);

            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message, ex.StackTrace);

            return false;
        }
    }
}

