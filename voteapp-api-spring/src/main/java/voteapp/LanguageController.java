package voteapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LanguageController {

    @Autowired
    private LanguageRepository languageRepository;

    @GetMapping(value = "/languages")
    public List<Language> getLanguages() {
        Language.builder()
            .name("name")
            .codedetail(new Language.CodeDetail())
            .build();

        return languageRepository.findAll();
    }
    
    @GetMapping(value = "/languages/{name}")
    public Language getLanguage(@PathVariable String name) {
        return languageRepository.findByName(name);
    }

    @GetMapping(value = "/languages/{name}/vote")
    public Language voteOnLanguage(@PathVariable String name) {
        Language language = languageRepository.findByName(name);
        if (language != null) {
            language.addVote();
            languageRepository.save(language);
        }
        return language;
    }
}

