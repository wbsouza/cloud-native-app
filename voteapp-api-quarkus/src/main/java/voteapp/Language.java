package voteapp;

import io.quarkus.mongodb.panache.MongoEntity;
import io.quarkus.mongodb.panache.PanacheMongoEntity;

import lombok.*;

@Data
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@MongoEntity(collection="languages")
public class Language extends PanacheMongoEntity {

    @Data
    public static class CodeDetail {
        private String usecase;
        private int rank;
        private Boolean compiled;
        private String homepage;
        private String download;
        private int votes;
    }

    private String name;
    private CodeDetail codedetail = new CodeDetail();

    public void addVote() {
        this.codedetail.votes++;
    }
}

