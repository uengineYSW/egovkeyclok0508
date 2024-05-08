package egovkeyclok.domain;

import egovkeyclok.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "analysis1s",
    path = "analysis1s"
)
public interface Analysis1Repository
    extends PagingAndSortingRepository<Analysis1, Long> {}
