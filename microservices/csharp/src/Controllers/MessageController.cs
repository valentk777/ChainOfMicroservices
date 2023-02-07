using CSharpApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CSharpApi.Controllers;

[ApiController]
public class MessageController : ControllerBase
{
    private readonly ILogger<MessageController> _logger;
    private readonly IMessageService _messageService;

    public MessageController(ILogger<MessageController> logger, IMessageService messageService)
    {
        _logger = logger;
        _messageService = messageService;
    }

    [HttpPost]
    [Route("api/message")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<MessageRequest>> PostMessage([FromBody] MessageRequest messageRequest)
    {
        if (messageRequest == null)
        {
            return BadRequest();
        }

        var result = await _messageService.SendMessage(messageRequest);

        if (result)
        {
            _logger.LogInformation("Message published");
            return Ok(result);
        }
        else
        {
            _logger.LogError("Message not published");
            return Ok(result);
        }
    }
}
