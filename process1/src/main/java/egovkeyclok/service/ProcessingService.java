package egovkeyclok.service;

import egovkeyclok.domain.*;
import java.util.List;
import java.util.Optional;

public interface ProcessingService {
    List<Processing> getAllProcessings() throws Exception;
    Optional<Processing> getProcessingById(String name) throws Exception;
    Processing createProcessing(Processing processing) throws Exception;
    Processing updateProcessing(Processing processing) throws Exception;
    void deleteProcessing(String name) throws Exception;

    Processing updateProcessing(
        UpdateProcessingCommand updateProcessingCommand
    ) throws Exception;
}
