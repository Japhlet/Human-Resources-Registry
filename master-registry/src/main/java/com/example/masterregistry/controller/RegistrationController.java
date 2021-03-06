package com.example.masterregistry.controller;

import com.example.masterregistry.entity.AppUser;
import com.example.masterregistry.entity.RegistrationRequest;
import com.example.masterregistry.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping(path = "/")
    public AppUser login(@RequestBody AppUser appUser)
            throws Exception {
        return this.registrationService.getAppUserByEmailAndPassword(appUser.getEmail(), appUser.getPassword());
    }

    @GetMapping(path = "users/all")
    public List<AppUser> getAllAppUsers() {
        return this.registrationService.getAllAppUsers();
    }

    @PostMapping(path = "users/register")
    public void register(@RequestBody RegistrationRequest request) {
        registrationService.register(request);
    }

    @GetMapping(path = "users/getAppUserByEmail/{email}")
    public AppUser getAppUserByEmail(@PathVariable(value = "email") String email) {
        return this.registrationService.getAppUserByEmail(email);
    }
}
