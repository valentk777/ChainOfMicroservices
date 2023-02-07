FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

COPY . /app
WORKDIR /app

RUN dotnet restore --use-current-runtime  
RUN dotnet publish -c Release -o /release --use-current-runtime --self-contained false --no-restore


FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

COPY --from=build /release .
EXPOSE 5553
ENV ASPNETCORE_URLS=http://+:5553
ENTRYPOINT dotnet CSharpApi.dll