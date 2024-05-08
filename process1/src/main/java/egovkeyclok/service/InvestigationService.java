package egovkeyclok.service;

import egovkeyclok.domain.*;
import java.util.List;
import java.util.Optional;

public interface InvestigationService {
    List<Investigation> getAllInvestigations() throws Exception;
    Optional<Investigation> getInvestigationById(String name) throws Exception;
    Investigation createInvestigation(Investigation investigation)
        throws Exception;
    Investigation updateInvestigation(Investigation investigation)
        throws Exception;
    void deleteInvestigation(String name) throws Exception;

    Investigation updateInvestigation(
        UpdateInvestigationCommand updateInvestigationCommand
    ) throws Exception;
}
