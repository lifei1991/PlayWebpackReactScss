package controllers;

import play.mvc.*;

import views.html.*;

public class HomeController extends Controller {

    public Result index() {
        return ok(index.render("Web site"));
    }

    public Result login() {
        return ok(login.render("Web site"));
    }

    public Result homePage() {
        return ok(index.render("Web site"));
    }

    public Result users() {
        return ok(index.render("Web site"));
    }

    public Result rules() {
        return ok(index.render("Web site"));
    }

    public Result roles() {
        return ok(index.render("Web site"));
    }

    public Result wells() {
        return ok(index.render("Web site"));
    }
}
