package com.example.masterregistry.service;

import com.example.masterregistry.entity.AppUser;
import com.example.masterregistry.entity.AppUserRole;
import com.example.masterregistry.entity.RegistrationRequest;
import com.example.masterregistry.repository.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RegistrationService {

    private  final AppUserService appUserService;
    private final EmailValidator emailValidator;
    private final AppUserRepository appUserRepository;

    public void register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());

        if(!isValidEmail) {
            throw new IllegalStateException("Email not valid");
        }

        this.appUserService.signUpAppUser(
                new AppUser(
                        request.getLastName(),
                        request.getFirstName(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRole.USER
                )
        );
    }

    public List<AppUser> getAllAppUsers() {
        return  this.appUserRepository.findAll();
    }
}
