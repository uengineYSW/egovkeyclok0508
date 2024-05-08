package egovkeyclok.infra;

import egovkeyclok.domain.*;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(
    collectionResourceRel = "내민원조회",
    path = "내민원조회"
)
public interface 내민원조회Repository
    extends PagingAndSortingRepository<내민원조회, Long> {}
