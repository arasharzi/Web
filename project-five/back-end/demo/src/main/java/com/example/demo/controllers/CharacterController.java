package com.example.demo.controllers;

import com.example.demo.entities.Character;
import com.example.demo.services.ICharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("api/")
public class CharacterController
{
    @Autowired
    private ICharacterService service;

    @GetMapping("characters")
    private List<Character> getCharacters()
    {
        return this.service.getCharacters();
    }

    @GetMapping("characters/{id}")
    private Character getCharacter(@PathVariable String id)
    {
        return this.service.getCharacterById(Integer.parseInt(id));
    }

    @PostMapping("characters")
    private Character addCharacter(@RequestBody Character character)
    {
        return this.service.addCharacter(character);
    }

    @PutMapping("characters")
    private Character updateCharacter(@RequestBody Character character)
    {
        return this.service.updateCharacter(character);
    }

    @DeleteMapping("characters/{id}")
    private String deleteCharacter(@PathVariable String id)
    {
        return this.service.deleteCharacter(Integer.parseInt(id));
    }
}
