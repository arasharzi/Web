package com.example.demo.services;

import com.example.demo.entities.Character;

import java.util.List;

public interface ICharacterService
{
    List<Character> getCharacters();
    Character addCharacter(Character character);
    Character getCharacterById(int id);
    Character updateCharacter(Character character);
    String deleteCharacter(int id);
}
