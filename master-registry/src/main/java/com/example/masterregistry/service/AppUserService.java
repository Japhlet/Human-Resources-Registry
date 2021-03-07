package com.example.masterregistry.service;

import com.example.masterregistry.entity.AppUser;
import com.example.masterregistry.exceptions.AppUserNotFoundException;
import com.example.masterregistry.repository.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    private final AppUserRepository appUserRepository;
    private final static String USER_NOT_FOUND_MSG = "User with email %s not found";
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final EmailValidator emailValidator;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return appUserRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));
    }

    public void signUpAppUser(AppUser appUser) {
        //Check if user exists in the db
        boolean appUserExists = appUserRepository.findByEmail(appUser.getEmail()).isPresent();

        if (appUserExists) {
            throw new IllegalStateException("Email is taken");
        }

        //String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());
        //appUser.setPassword(encodedPassword);

        //Enable the user account
        appUser.setEnabled(true);

        //Save the user in the database
        appUserRepository.save(appUser);
    }

    public int enableAppUser(String email) {
        return appUserRepository.enableAppUser(email);
    }

    public void updateAppUser(AppUser appUser) {
        AppUser appUserToUpdate = appUserRepository.findById(appUser.getId())
                .orElseThrow(() -> new AppUserNotFoundException("App User with id "+appUser.getId()+" not found"));


        boolean isValidEmail = emailValidator.test(appUser.getEmail());

        if(!isValidEmail) {
            throw new IllegalStateException("Email not valid");
        }

        appUserToUpdate.setLastName(appUser.getLastName());
        appUserToUpdate.setFirstName(appUser.getFirstName());
        appUserToUpdate.setEmail(appUser.getEmail());
        appUserToUpdate.setPassword(appUser.getPassword());

        this.appUserRepository.save(appUserToUpdate);
    }

    public void deleteAppUser(Long id) {
        AppUser appUserToDelete = this.appUserRepository.findById(id)
                .orElseThrow(() -> new AppUserNotFoundException("App User with id "+id+" not found"));
        this.appUserRepository.delete(appUserToDelete);
    }
}
