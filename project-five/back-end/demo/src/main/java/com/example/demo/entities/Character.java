package com.example.demo.entities;


import javax.persistence.*;

@Entity
@Table(name = "tbl_characters")
public class Character
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String player_class;
    private int level;


    public Character() {

    }

    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getPlayer_class() {
        return player_class;
    }
    public void setPlayer_class(String player_class) {
        this.player_class = player_class;
    }

    public int getLevel()
    {
        return level;
    }
    public void setLevel(int level)
    {
        this.level = level;
    }
}
