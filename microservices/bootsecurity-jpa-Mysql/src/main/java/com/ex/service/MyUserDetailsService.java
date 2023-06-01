package com.ex.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ex.model.MyUserDetails;
import com.ex.repo.UserRepository;
import com.ex.model.User;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Optional<User> user = repo.findByUserName(username);
		user.orElseThrow(() -> (new UsernameNotFoundException("Not Found: " + username)));

		return user.map(MyUserDetails::new).get();
	}

}