package wolox.examples.repositories;

import org.springframework.data.repository.CrudRepository;
import wolox.examples.models.User;

/**
 * Interface that serves as a Repository for {@link User}.
 *
 * @author M. G.
 */

public interface UserRepository extends CrudRepository<User, Long> {

}
