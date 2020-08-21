package voteapp;

import io.quarkus.mongodb.panache.PanacheMongoRepository;
import io.quarkus.panache.common.Sort;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LanguageRepositoryImpl implements LanguageRepository {

    @Override
    public Language findByName(String name) {
        return Language.find("name", name).firstResult();
    }

    @Override
    public List<Language> findAll() {
        return Language.findAll().list();
    }

    @Override
    public void save(Language language) {
        language.persist();
    }
}