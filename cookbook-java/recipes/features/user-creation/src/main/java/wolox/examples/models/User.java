package wolox.examples.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.google.common.base.Preconditions;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Data;
import wolox.examples.services.PasswordEncoderService;

/**
 * Model for users
 *
 * @author M. G.
 */

@Entity
@Table(name = "users")
@Data
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @NotNull
    private String email;

    @NotNull
    private String name;

    @NotNull
    @JsonProperty(access = Access.WRITE_ONLY)
    private String password;

    @NotNull
    private LocalDate birthDate;

    private String address;

    private String city;

    private String state;

    private String country;

    private Boolean emailSubscription;

    private Integer numberOfLanguages;

    public void setEmail(String email) {
        Preconditions.checkArgument(email != null && !email.isEmpty());

        this.email = email;
    }

    public void setName(String name) {
        Preconditions.checkArgument(name != null && !name.isEmpty());

        this.name = name;
    }

    public void setPassword(String password) {
        Preconditions.checkArgument(password != null && !password.isEmpty());

        this.password = PasswordEncoderService.encode(password);
    }

    public void setBirthDate(LocalDate birthDate) {
        Preconditions.checkArgument(birthDate != null && birthDate.isBefore(LocalDate.now()));

        this.birthDate = birthDate;
    }
}
