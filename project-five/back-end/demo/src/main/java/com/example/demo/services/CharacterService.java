package com.example.demo.services;

import com.example.demo.entities.Character;
import com.example.demo.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterService implements ICharacterService
{
    @Autowired
    private CharacterRepository repository;

    @Override
    public List<Character> getCharacters()
    {
        return this.repository.findAll();
    }

    @Override
    public Character addCharacter(Character character)
    {
        return this.repository.save(character);
    }

    @Override
    public Character getCharacterById(int id)
    {
        Optional<Character> c = this.repository.findById(id);
        Character character = null;
        if (c.isPresent())
        {
            character = c.get();
        }
        return character;
    }

    @Override
    public Character updateCharacter(Character character)
    {
        return this.repository.save(character);
    }

    @Override
    public String deleteCharacter(int id)
    {
        Optional<Character> c = this.repository.findById(id);
        if (c.isPresent())
        {
            this.repository.deleteById(id);
            return "Character removed...";
        }
        return "Character not found...";
    }
}
