namespace CSharpApi.Services;

public interface IMessageService
{
    Task<bool> SendMessage(MessageRequest message);
}
