package voteapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/languages")
public class LanguageController {

    @Autowired
    private LanguageRepositoryImpl languageRepository;

    @GetMapping(value = "/")
    public List<Language> getLanguages() {
        return this.languageRepository.findAll();
    }

    @GetMapping(value = "/{name}")
    public Language getLanguage(@PathVariable String name) {
        return this.languageRepository.findByName(name);
    }

    @GetMapping(value = "/{name}/vote")
    public Language voteOnLanguage(@PathVariable String name) {
        Language language = this.languageRepository.findByName(name);
        if (language != null) {
            language.addVote();
            this.languageRepository.save(language);
        }
        return language;
    }
}
