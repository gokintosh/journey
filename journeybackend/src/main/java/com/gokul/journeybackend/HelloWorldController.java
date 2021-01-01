package com.gokul.journeybackend;


import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
//    method to return hello world

    @GetMapping(path = "/helloworld")
    public String helloWorld(){
        return "Hello World";
    }

    @GetMapping(path = "/helloworld-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("this is gokul");
    }

    @GetMapping(path = "/helloworld/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("this is ,%s",name));
    }


}
