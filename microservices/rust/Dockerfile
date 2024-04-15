FROM rust:1.67 AS build

COPY . /app
WORKDIR /app

RUN cargo build --release


FROM debian:buster-slim
WORKDIR /app

COPY --from=build ./app/target/release .

EXPOSE 5554

ENTRYPOINT rust
