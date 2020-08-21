package voteapp;

import java.util.List;

public interface LanguageRepository {

    Language findByName(String name);
    List<Language> findAll();
    void save(Language language);


}
