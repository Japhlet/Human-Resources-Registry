package com.example.masterregistry.service;

import com.example.masterregistry.entity.AppUser;
import com.example.masterregistry.entity.AppUserRole;
import com.example.masterregistry.entity.RegistrationRequest;
import com.example.masterregistry.repository.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RegistrationService {

    private  final AppUserService appUserService;
    private final EmailValidator emailValidator;
    private final AppUserRepository appUserRepository;
    private final static String USER_NOT_FOUND_MSG = "User with email %s not found";

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

    public AppUser getAppUserByEmail(String email) {
        return this.appUserRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));

    }

    public AppUser getAppUserByEmailAndPassword(String email, String password)
            throws Exception{

        AppUser appUser = new AppUser();
        if(email != null && password != null) {
            appUser = this.appUserRepository.findByEmailAndPassword(email, password);
        }

        if(appUser == null) {
            throw new Exception("Bad credentials provided");
        }

        return appUser;
    }

    public void updateAppUser(AppUser appUser) {

        boolean isValidEmail = emailValidator.test(appUser.getEmail());

        if(!isValidEmail) {
            throw new IllegalStateException("Email not valid");
        }

        this.appUserService.updateAppUser(appUser);
    }

    public void deleteAppUser(Long id) {
        this.appUserService.deleteAppUser(id);
    }
}
