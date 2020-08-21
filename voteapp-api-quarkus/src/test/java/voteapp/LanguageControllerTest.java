package voteapp;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class LanguageControllerTest {

    @Test
    public void getGetLanguages() {
        given()
          .when().get("/languages")
          .then()
             .statusCode(200);
    }

}