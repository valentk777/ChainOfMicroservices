package controllers;

import static spark.Spark.get;

import spark.Request;
import spark.Response;
import spark.Route;

public class messageController {
    public void Get() {
        get(new Route("/users/:id") {
            @Override
            public Object handle(Request request, Response response) {
                return  "User: username=test, email=test@test.net";
            }
        });
    }
}
