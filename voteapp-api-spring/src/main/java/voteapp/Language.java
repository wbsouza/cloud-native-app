package voteapp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "languages")
public class Language {
    
    @Data
    public static class CodeDetail {
        private String usecase;
        private int rank;
        private Boolean compiled;
        private String homepage;
        private String download;
        private int votes;
    }

    @Id
    private String id;
    private String name;
    private CodeDetail codedetail = new CodeDetail();

	public void addVote() {
        this.codedetail.votes++;
	}
}
