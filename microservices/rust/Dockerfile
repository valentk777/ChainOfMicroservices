FROM rust:1.67 AS build

COPY . /app
WORKDIR /app

RUN cargo install --path .
 

FROM debian:buster-slim
WORKDIR /app

RUN apt-get update && apt-get install -y extra-runtime-dependencies && rm -rf /var/lib/apt/lists/*

COPY --from=build /usr/local/cargo/bin/rust .
EXPOSE 5554
ENTRYPOINT rust